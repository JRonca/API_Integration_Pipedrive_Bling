import axios from 'axios';

export async function listWonDeals(){
    const api = axios.create({baseURL: process.env.PIPEDRIVE_BASE_URL_API})

    const result = await api.get(`/deals?status=won&api_token=${process.env.PIPEDRIVE_KEY_API}&sort=won_time`)

    return result.data
}
export async function getWonDealsProducts(id){
    const api = axios.create({baseURL: process.env.PIPEDRIVE_BASE_URL_API})

    const result = await api.get(`/deals/${id}/products?api_token=${process.env.PIPEDRIVE_KEY_API}`)

    return result.data.data
}