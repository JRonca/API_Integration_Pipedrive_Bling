import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
    codigo: Number,
    descricao: String,
    qtde: Number,
    vlr_unit: Number
})

const orderSchema = new mongoose.Schema({
    cliente:{
        nome: String
    },
    itens:{
        type: Array,
        of: itemSchema
    }
})

const dayOrderSchema = new mongoose.Schema(
    {
        data: Date,
        valor_total: Number,
        pedidos:{
            type: Array,
            of: orderSchema
        }
    }
)

const Order = mongoose.model('Order', dayOrderSchema);

export default Order;