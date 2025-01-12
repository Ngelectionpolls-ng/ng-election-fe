import Axios from "../Axios";
import { GET_STATES, GET_STATE_LGAS, GET_LGA_WARDS, 
        GET_WARD_POLLING_UNITS, GET_POLITICAL_PARTIES,
        GET_PROFILE, UPDATE_PROFILE } from 'services/endpoints';
import { getToken } from "helpers";

export const GetStates = async () => {

    let result = null;

    await Axios.get(GET_STATES + "?limit=37")
    .then(response => {result = response})
    .catch(error => {result = error});

    return result;
} 

export const GetStateLGAs = async (state_id) => {

    let result = null;

    await Axios.get(GET_STATE_LGAS.replace(':state_id', state_id) + "?limit=100")
    .then(response => {result = response})
    .catch(error => {result = error});

    return result;
} 

export const GetLGAWards = async (lga_id) => {

    let result = null;

    await Axios.get(GET_LGA_WARDS.replace(':lga_id', lga_id) + "?limit=100")
    .then(response => {result = response})
    .catch(error => {result = error});

    return result;
} 

export const GetWardPollingUnits = async (ward_id) => {

    let result = null;

    await Axios.get(GET_WARD_POLLING_UNITS.replace(':ward_id', ward_id) + "?limit=1000")
    .then(response => {result = response})
    .catch(error => {result = error});

    return result;
} 


export const GetPoliticalParties = async () => {

    let result = null;

    await Axios.get(GET_POLITICAL_PARTIES + "?limit=1000")
    .then(response => {result = response})
    .catch(error => {result = error});

    return result;
} 

export const GetProfile = async (user_id) => {

    let result = null;

    await Axios.get(GET_PROFILE.replace(":user_id", user_id), {
        headers: {
            Authorization: 'Bearer ' + getToken()
        }
    })
    .then(response => {result = response})
    .catch(error => {result = error});
    
    return result;
} 

export const UpdateProfile = async (user_id, data) => {

    let result = null;

    await Axios.patch(UPDATE_PROFILE.replace(":user_id", user_id), {...data}, {
        headers: {
            Authorization: 'Bearer ' + getToken()
        }
    })
    .then(response => {result = response})
    .catch(error => {result = error});

    return result;
} 