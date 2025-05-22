import Axios from "../Axios";
import { GET_ELECTIONS, GET_CANDIDATES } from 'services/endpoints';
import { getToken } from "helpers";



export const GetElections = async (limit=1000) => {

    let result = null;

    await Axios.get(GET_ELECTIONS /* + '?limit=' + limit */, {
        headers: {
            Authorization: 'Bearer ' + getToken()
        }
    })
    .then(response => {result = response})
    .catch(error => {result = error});
    
    return result;
} 

export const GetCandidates = async (election_id) => {

    // let result = null;

    return await Axios.get(GET_CANDIDATES.replace(':election_id', election_id), {
        headers: {
            Authorization: 'Bearer ' + getToken()
        }
    })
    .then(response => response)
    .catch(error => error);

} 
