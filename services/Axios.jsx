
import axios from 'axios';

export default axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASEURL,
    timeout: 30000,
    // headers: {'X-Custom-Header': 'foobar'}
});