const cartProductsLoader = async () => {
const cartProducts = await fetch('products.json');
const products = await cartProducts.json();
console.log(products);
};

export default cartProductsLoader;