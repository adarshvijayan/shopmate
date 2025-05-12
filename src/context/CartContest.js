import { createContext, useContext, useReducer } from "react"
import { cartReducer } from "../reducer/cartReducer";
//create initial state
const initialState = {
    cartList: [],
    total: 0
}
//create context
const CartContext = createContext(initialState); // create context related to cart.


//Create a provider. note: wrap <App /> with this provider in index.js
export const CartProvider = ({children}) =>{     //we created our own provider. and we took the value ie;children.

    const [state, dispatch] = useReducer(cartReducer, initialState); //we are utilizing useReducer and we are passing cartReducer and initialstate
    // so this retrn multiple things
    //dispatch is a methrod that we can apply on the state.

    const addToCart = (product) =>{
        const updatedCartList = state.cartList.concat(product); // store the updated information. not state.
        updateTotal(updatedCartList);
        dispatch({ //when i say dispatch, its get into my cart reducer and check the type which is available
            type: "ADD_TO_CART",
            payload: {
                products: updatedCartList
            }
        })
    }

    const removeFromCart = (product) =>{
        const updatedCartList = state.cartList.filter(current => current.id !== product.id)
        updateTotal(updatedCartList);
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                products: updatedCartList
            }
        })
    }
    const updateTotal = (products) =>{
        let total = 0;
        products.forEach(product => total = total + product.price)
        dispatch({
            type: "UPDATE_TOTAL",
            payload: {
                total
            }
        })
    }

    const value ={
        total:state.total, //total value pass to children
        cartList: state.cartList,
        addToCart,
        removeFromCart
    };

    return (                           //we utilize cart provider we returning actual values to child. so basically App, which is the child here will have access to all the values.
        <CartContext.Provider value={value}>  
            {children}
        </CartContext.Provider> // so values will have entire state and all the methords that we are going to define.
    )
}

export const useCart = () =>{ //useCart give us power to call and access all the values.
    const context = useContext(CartContext); // to get values inside components
    return context;
}