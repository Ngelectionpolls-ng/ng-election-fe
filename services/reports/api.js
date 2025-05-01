import Axios from "../Axios";
import { GET_REPORTS, CREATE_REPORT } from 'services/endpoints';
import { getToken } from "helpers";



export const GetReports = async (stateId=null, iWitnessId=null) => {

    // let result = null;

    return await Axios.get(GET_REPORTS + "?limit=6&page=1", {
        headers: {
            Authorization: 'Bearer ' + getToken()
        }
    })
    .then(response => response)
    .catch(error => error);
    
    // return result;
} 

export const CreateReport = async (role, data) => {

    let result = null;

    await Axios.post(CREATE_REPORT.replace(':role', role), {...data}, {
        headers: {
            Authorization: 'Bearer ' + getToken()
        }
    })
    .then(response => {result = response})
    .catch(error => {result = error});

    return result;
} 