export const CartReducer = (state,action)=>{

    const {type,payload} = action;

    switch(type){
        case "ADD_TO_CART":
            return {...state,cartLists:payload.cartLists,total:payload.total}
        case "REMOVE_FROM_CART":
            return {...state,cartLists:payload.cartLists,total:payload.total}
       case "CLEAR_CART":
        return {...state,cartLists:payload.cartLists,total:payload.total};
        case "UPDATE_PRICE":
            return;
            default:
                throw new Error("No Case Found")
    }

}