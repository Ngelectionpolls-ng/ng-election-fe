import Axios from "../Axios";
import { GET_ELECTIONS } from 'services/endpoints';
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
