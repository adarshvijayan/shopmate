import "./ProductCard.css";
import { useCart } from "../context/CartContest";
import { useEffect, useState } from "react";

export const ProductCart = ({product}) => {
    const [isInCart, setIsInCart] = useState(false);
    const {cartList, addToCart, removeFromCart} = useCart();
    const {id, name, price, image} = product;
     useEffect(() =>{
      const productIsInCart = cartList.find(cartItem => cartItem.id === id);
      if(productIsInCart){
        setIsInCart(true);
      }
      else{
        setIsInCart(false)
      }
     },[cartList, id])
  return (
    <div className="productCard">
        <img src={image} alt={name} />
        <p className="name">{name}</p>
        <div className="action">
            <p>${price}</p>
            {isInCart ? (<button className="remove" onClick={() => removeFromCart(product)}>Remove</button>) : (<button onClick={() => addToCart(product)}>Add To Cart</button>)}
           
        </div>
    </div>
  )
}
