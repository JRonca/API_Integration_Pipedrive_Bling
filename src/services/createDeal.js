import { getWonDealsProducts } from '../utils/pipedriveUtils';
import { createOrder } from '../database/repositories/orderRepository'
import { createOrderOnBling } from '../utils/blingUtils'

export const createDeal = async (dealList, date)=>{
    const mongoObject = {
        data: date,
        valor_total: 0,
        pedidos: []
    }
    for(let i = 0; i < dealList.length; i++){
        const orderObject = {
            cliente:{
                nome: dealList[i].person_id.name,
            },
            itens: []
        }
        mongoObject.valor_total+=dealList[i].value
        const products = await getWonDealsProducts(dealList[i].id)
        if(products!= null){
            products.forEach(product=>{
                orderObject.itens.push({
                    codigo: product.id,
                    descricao: product.name,
                    qtde: product.quantity,
                    vlr_unit: product.item_price
                })
            })
        }
        mongoObject.pedidos.push(orderObject)
        await createOrderOnBling(orderObject)
    }
    await createOrder(mongoObject)
}