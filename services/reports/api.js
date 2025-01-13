import Axios from "../Axios";
import { GET_REPORTS, CREATE_REPORT } from 'services/endpoints';
import { getToken } from "helpers";



export const GetReports = async (stateId, iWitnessId) => {

    let result = null;

    await Axios.get(GET_REPORTS + "?limit=6&page=1", {
        headers: {
            Authorization: 'Bearer ' + getToken()
        }
    })
    .then(response => {result = response})
    .catch(error => {result = error});
    
    return result;
} 

export const CreateReport = async (data) => {

    let result = null;

    await Axios.patch(CREATE_REPORT, {...data}, {
        headers: {
            Authorization: 'Bearer ' + getToken()
        }
    })
    .then(response => {result = response})
    .catch(error => {result = error});

    return result;
} 