import Axios from "../Axios";
import { SAVE_ELECTION_RESULT } from 'services/endpoints';
import { getToken } from "helpers";



export const SaveElectionResult = async (data) => {

    let result = null;

    await Axios.post(SAVE_ELECTION_RESULT, {...data}, {
        headers: {
            Authorization: 'Bearer ' + getToken()
        }
    })
    .then(response => {result = response})
    .catch(error => {result = error});
    
    return result;
} 
