import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
    codigo: Number,
    descricao: String,
    qtde: Number,
    vlr_unit: Number
})

const orderSchema = new mongoose.Schema({
    pedido:{
        cliente:{
            nome: String
        },
        itens:{
            types: Map,
            of: itemSchema
        }
    }
})

const Order = mongoose.model('Order', orderSchema);

export default Order;