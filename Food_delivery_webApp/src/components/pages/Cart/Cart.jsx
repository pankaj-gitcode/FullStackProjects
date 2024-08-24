import React from 'react'
import { useRecoilValue } from 'recoil'
import { allIconsAtom, cartItemsAtom, countItemsAtom, foodItemsAtom } from '../../atom'

export default function Cart(){
   const foodItems = useRecoilValue(foodItemsAtom());
    const cartItems = useRecoilValue(countItemsAtom);
    console.log("CART-ITEMS: ", cartItems);
   const cartItemsKeys = Object.keys(cartItems);
   console.log("CARTKEYS: ",cartItemsKeys)
   const exit = useRecoilValue(allIconsAtom);

    return(<>

    <div className="w-full h-[100vh] my-20 bg-slate-200">
        <div className="flex items-center justify-between">

            <p>Items</p>
            <p>Description</p>
            <p>Quantity</p>
            <p>Cost</p>
            <p>Total</p>
            <p>remove</p>
            
        </div>
        <div>

        {
          cartItemsKeys.map(elem=>foodItems.map(items=>items._id === elem?
          <div key={items._id} className="flex items-cenrer justify-between p-2">
            <img key={items._id} src={items.image} className="w-10 h-10"/>
            <p>{items.name}</p>
            <p>{cartItems[items._id]}</p>
            <p>{items.price}</p>
            <p>{items.price * cartItems[items._id]}</p>
            <img key={items._id} src={exit.cross_icon} />
        </div>
          :<></>))
        }
        </div>
    </div>
        
    </>)
}