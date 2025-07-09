import axios from 'axios';

export const apiCliente = axios.create({
    baseURL: "https://limeiraweb.com.br/pixsenac/client"
})