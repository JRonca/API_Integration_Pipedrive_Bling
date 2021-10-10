import axios from 'axios';
import jsontoxml from 'jsontoxml'
export async function createOrderOnBling(jsonVar){
    const api = axios.create({baseURL: process.env.BLING_BASE_URL_API})

    const txml= encodeURIComponent('<?xml version="1.0" encoding="UTF-8"?>'+jsontoxml(jsonVar,false))

    const result = await api.post(`/pedido/json?apikey=${process.env.BLING_KEY_API}&xml=${txml}`)
    return result.data
}