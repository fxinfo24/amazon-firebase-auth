import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const orders = useLoaderData();
    console.log(orders);
    return (
        <div className='shop-container'>
            <div className='product-container'>
            <h2>This is route orders page: {orders.length}</h2>
            </div>
            <div className='cart-container'>
                <Cart basket = {[]}></Cart>
            </div>
        </div>
    );
};

export default Orders;