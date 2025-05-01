import Axios from "../Axios";
import { SAVE_IMAGE } from 'services/endpoints';
import { getToken } from "helpers";



export const SaveImage = async (file) => {

    let result = null;

    let formData = new FormData();
    formData.append('file', file);

    await Axios.post(SAVE_IMAGE, formData, {
        headers: {
            'Authorization': 'Bearer ' + getToken(),
            'Content-Type': 'multipart/form-data',
            'encrypt': 'multipart/form-data'
        }
    })
    .then(response => {result = response})
    .catch(error => {result = error});
    
    return result;
} 
