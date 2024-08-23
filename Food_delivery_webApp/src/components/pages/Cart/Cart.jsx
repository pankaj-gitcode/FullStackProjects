import React from 'react'
import { useRecoilValue } from 'recoil'
import { cartItemsAtom, countItemsAtom, foodItemsAtom } from '../../atom'

export default function Cart(){
   const foodItems = useRecoilValue(foodItemsAtom());
    const cartItems = useRecoilValue(countItemsAtom);
    console.log("CART-ITEMS: ", cartItems);
   const cartItemsKeys = Object.keys(cartItems);
   console.log("CARTKEYS: ",cartItemsKeys)

    return(<>
        <p>Items {cartItems[2]   }</p>
        <p>Description</p>
        <p>Quantity</p>
        <p>Cost</p>
        <p>Total</p>
        <p>remove</p>
        {
          cartItemsKeys.map(elem=>foodItems.map(items=>items._id === elem?<img key={items._id} src={items.image} />:<></>))
        }
        
    </>)
}