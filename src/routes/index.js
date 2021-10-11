import { Router } from 'express';
import { createOrder, listAllOrders } from '../controllers/ordersController'

const routes = Router();

routes.post('/order',createOrder);
routes.get('/order',listAllOrders);
export default routes