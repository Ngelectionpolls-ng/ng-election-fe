import Axios from "../Axios";
import { GET_WALLET_INFO, PROCESS_WITHDRAWAL, 
            TRANSACTION_HISTORY, WALLET_CONVERSIONS } from 'services/endpoints';
import { getToken } from "helpers";



export const GetWalletInfo = async (user_id) => {

    let result = null;

    await Axios.get(GET_WALLET_INFO.replace(':user_id', user_id), {
        headers: {
            Authorization: 'Bearer ' + getToken()
        }
    })
    .then(response => {result = response})
    .catch(error => {result = error});
    
    return result;
} 

export const ProcessWithdrawal = async (data) => {

    let result = null;

    return await Axios.post(PROCESS_WITHDRAWAL, {...data}, {
        headers: {
            Authorization: 'Bearer ' + getToken()
        }
    })
    .then(response => response)
    .catch(error => error);

    // return result;
} 

export const GetTransactionHistory = async () => {

    let result = null;

    await Axios.get(TRANSACTION_HISTORY, {
        headers: {
            Authorization: 'Bearer ' + getToken()
        }
    })
    .then(response => {result = response})
    .catch(error => {result = error});

    return result;
} 

export const WalletConversions = async () => {

    let result = null;

    await Axios.get(WALLET_CONVERSIONS, {
        headers: {
            Authorization: 'Bearer ' + getToken()
        }
    })
    .then(response => {result = response})
    .catch(error => {result = error});

    return result;
} 