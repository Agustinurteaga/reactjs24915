import React from "react";

export default React.createContext({
products: [
    { id: "p1", title: "Size 1", price: 200 },
    { id: "p2", title: "Size 2", price: 400 },
    { id: "p3", title: "Size 3", price: 600 },
    { id: "p4", title: "Size 4", price: 1000 }
],
cart: [],
addProductToCart: product => {},
removeProductFromCart: productId => {}
});
