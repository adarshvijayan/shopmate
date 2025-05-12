export const cartReducer = (state, action) =>{ //state: current value that state is holding. action: information that we are passing.
const {type, payload} = action;

    switch(type){
        case "ADD_TO_CART":
            return {...state, cartList: payload.products} // previous values(state) + updated values(payload.products)
        case "REMOVE_FROM_CART":
            return {...state, cartList: payload.products}
        case "UPDATE_TOTAL":
            return {...state, total: payload.total}
        default:
            throw new Error("No Case Found In cartReducer");
    }
}