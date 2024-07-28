import { createContext, useContext, useReducer } from "react";
import { CartReducer } from "../reducer/CartReducer";

const cartInitialState = {
    cartLists: [],
    total: 0
}

export const cartContext = createContext(cartInitialState);

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, cartInitialState);

    function addToCart(product) {
        const updatedList = state.cartLists.concat(product);
        const updatedTotal = state.total + product.price;

        dispatch({
            type: "ADD_TO_CART",
            payload: {
                cartLists: updatedList,
                total: updatedTotal
            }
        });
    }

    const removeCart = (product) => {
        const updatedList = state.cartLists.filter((item) => item.id !== product.id);
        const updatedTotal = state.total - product.price;

        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                cartLists: updatedList,
                total: updatedTotal
            }
        });
    }

    const clearCart = () => {
        dispatch({
            type: "CLEAR_CART",
            payload: {
                cartLists: [],
                total: 0
            }
        });
    }

    const value = {
        cartLists: state.cartLists,
        total: state.total,
        addToCart,
        removeCart,
        clearCart
    }

    return (
        <cartContext.Provider value={value}>
            {children}
        </cartContext.Provider>
    );
}

export const useCart = () => {
    const context = useContext(cartContext);
    return context;
}
