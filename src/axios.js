import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:9000",
    // headers: {
    //     'x-powered-by': 'Express',
    //     'access-control-allow-origin': '*',
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    // },
    // timeout: 100000,
});

export default instance;