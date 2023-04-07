import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
const cartProducts = await fetch('products.json');
const items = await cartProducts.json();

// If (cart) data is in database, we've to use async - await
// console.log(items);

// The following codes are copied from Shop.jsx Ln 23 to 41
const storedBasket = getShoppingCart();
        const savedBasket = [];
        // console.log(storedBasket);
        // Step 1: Get id/key
        for(const key in storedBasket) {
            // console.log(key);
            // Step 2: Get the product by using id/key
            const savedProduct = items.find(item => item.id === key);
            console.log(savedProduct);

            // Step 3: Get the quantity of the product
            if(savedProduct){
                const quantity = storedBasket[key]
                savedProduct.quantity = quantity
                // Step 4: Add the added product to the saved basket
                savedBasket.push(savedProduct)
            }
            // console.log('Added product', savedProduct);
        }

// return products;

// Now we'll return savedBasket(Ln 10) instead of products
return savedBasket;
};

export default cartProductsLoader;