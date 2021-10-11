import axios from 'axios';
export async function createOrderOnBling(jsonVar){
    const api = axios.create({baseURL: process.env.BLING_BASE_URL_API})
    let itensString=""
    jsonVar.itens.forEach(item=>{
        itensString=itensString + 
        `<item>
        <codigo>${item.codigo}</codigo>
        <descricao>${item.descricao}</descricao>
        <qtde>${item.qtde}</qtde>
        <vlr_unit>${item.vlr_unit}</vlr_unit>
        </item>`
    })
    const txml= encodeURIComponent(
        '<?xml version="1.0" encoding="UTF-8"?>'+
        '<pedido>'+
        '<cliente>'+
        `<nome>${jsonVar.cliente.nome}</nome>`+
        '</cliente>'+
        '<itens>'+
        `${itensString}`+
        '</itens>'+
        '</pedido>'
        )

    const result = await api.post(`/pedido/json?apikey=${process.env.BLING_KEY_API}&xml=${txml}`)
    return result.data
}