import axios from "axios";

const api = axios.create({
    // baseURL:'http://localhost:5000/',
    baseURL:'https://bloggy-pro.vercel.app/',
    withCredentials:true,
})

export default api;