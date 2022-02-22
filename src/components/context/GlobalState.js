import React, { useReducer } from "react";

import ShopContext from "../context/shop-context";
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from "./reducers";

const GlobalState = props => {
    const products = [
        { id: "p1", title: "Size 1", price: 200 },
        { id: "p2", title: "Size 2", price: 400 },
        { id: "p3", title: "Size 3", price: 600 },
        { id: "p4", title: "Size 4", price: 1000 }
    ];

    const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });
  // add
    const addProductToCart = product => {
    setTimeout(() => {
        dispatch({ type: ADD_PRODUCT, product: product });
    }, 700);
    };
  // remove
    const removeProductFromCart = productId => {
    setTimeout(() => {
        // setCart(updatedCart);
        dispatch({ type: REMOVE_PRODUCT, productId: productId });
    }, 700);
    };

    return (
    <ShopContext.Provider
        value={{
        products: products,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart
        }}
    >
        {props.children}
    </ShopContext.Provider>
    );
};

export default GlobalState;
