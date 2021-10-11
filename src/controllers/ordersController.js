import { listOrders } from '../database/repositories/orderRepository'
import { getOrderByDate } from '../services/getOrderByDate'
import {createDeal} from '../services/createDeal'
export const listAllOrders = async (req,res)=>{
    const orders =  await listOrders()
    res.send(orders);
}
export const createOrder = async (req,res)=>{
    const date = new Date(req.body.date)
    const DealList = await getOrderByDate(date)
    await createDeal(DealList,date)
    res.send('Finalizado!')
}
