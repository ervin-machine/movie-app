import axios from 'axios';
import { REACT_APP_API_URL } from '../config/index'

const axiosClient = () =>{
    return axios.create({
        baseURL: REACT_APP_API_URL
    })
}

export default axiosClient