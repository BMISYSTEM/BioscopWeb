import axios from "axios";

const clienteAxios = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    headers:{
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'multipart/form-data'
    },
    withCredentials:true
});

export default clienteAxios;