import React from "react";
import { CartEmpty } from "./component/CartEmpty";
import { CartList } from "./component/CartList";
import { useCart } from "../../context/CartContext";


const CartPage = () => {
const {cartLists} = useCart();
console.log(cartLists);
  return (
  
  <div>
  
    
    {cartLists.length > 0 ? <CartList /> :  <CartEmpty/> }
    </div>
  )
};

export default CartPage;
