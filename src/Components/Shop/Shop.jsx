import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [items, setItems] = useState([]);

    // For added new items to cart
    const [basket, setBasket] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => setItems(data))
    }, [])

    // Get Cart data from local storage
    useEffect( () => {
        // console.log(items);
        const storedBasket = getShoppingCart();
        const savedBasket = [];
        // console.log(storedBasket);
        // Step 1: Get id/key
        for(const key in storedBasket) {
            // console.log(key);
            // Step 2: Get the product by using id/key
            const savedProduct = items.find(item => item.id === key);
            // console.log(savedProduct);

            // Step 3: Get the quantity of the product
            if(savedProduct){
                const quantity = storedBasket[key]
                savedProduct.quantity = quantity
                // Step 4: Add the added product to the saved basket
                savedBasket.push(savedProduct)
            }
            // console.log('Added product', savedProduct);
        }
        // Step 5: Set the cart quantity
        setBasket(savedBasket);
    }, [items])

    // From Product.jsx
    const cartBtnHandler = (item) => {
        // console.log(item);
        // basket.push(item); // Plain JavaScript method
        const newBasket = [...basket, item];
        setBasket(newBasket);
        addToDb(item.id)
    };
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {/* <h3>Products goes here: {items.length}</h3> */}
                {/* Get product from array by using map */}
                {
                    items.map(item => <Product
                    key={item.id}
                    item = {item}
                    cartBtnHandler = {cartBtnHandler}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
               
                <Cart basket = {basket}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;