import Order from "../models/Order"

export async function createOrder( orderInfo ){
    const order = new Order(orderInfo);
    await order.save();
}
export async function listOrders(){
    const response = await Order.find({});
    return response;
}