
import axios from 'axios';
import { logout } from 'helpers';
 
const Axios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASEURL,
    timeout: 30000,
    // headers: {'X-Custom-Header': 'foobar'}
});

Axios.interceptors.response.use(null, (error) => {
    // console.log("error don show", error.status);
    if(error.status == 401){
        logout();
    }
});

export default Axios;