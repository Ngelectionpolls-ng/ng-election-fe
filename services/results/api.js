import Axios from "../Axios";
import { SAVE_ELECTION_RESULT, GET_ELECTION_RESULT } from 'services/endpoints';
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

export const GetElectionResult = async (election_id, level) => {

    let result = null;

    await Axios.get(GET_ELECTION_RESULT.replace(':election_id', election_id)
                                        .replace(':level', level), {
        headers: {
            Authorization: 'Bearer ' + getToken()
        }
    })
    .then(response => {result = response})
    .catch(error => {result = error});
    
    return result;
} 
