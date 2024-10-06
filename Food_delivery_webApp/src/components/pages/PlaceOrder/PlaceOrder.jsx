import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { cartItemsAtom, foodItemsAPIAtom, foodItemsAtom, tokenAtom, totalCartPriceAtom } from "../../atom";
import axios from "axios";

export default function PlaceOrder() {
    const subtotal = useRecoilValue(totalCartPriceAtom);
    const token = useRecoilValue(tokenAtom);
    const cartItems = useRecoilValue(cartItemsAtom);
    const foodItems = useRecoilValue(foodItemsAPIAtom);
    const [data, setData] = useState({
      firstName:'', lastName:'', email:'', street:'', city:'',
      state:'', zipCode:'', country:'', phone:''
    })
   
    //input handler
    const inputHandler = (e)=>{
      const name = e.target.name;
      const value = e.target.value;
      //update the data object
      setData(data=>({
        ...data,[name]:value
      }))
    }

    // fetch the API 
    const placeOrder = async(e)=>{
      // prevent from reload
      e.preventDefault();

      // for all non-empty cart, grab the foodItems
      foodItems.map(item=>{
        if(cartItems[item._id]>0){
          // TODO : impliment itemInfi and quantity
          return;
        }
      })


      const orderData = {
          address:data,
          items:'',
          amount: totalCartPriceAtom+2
      }

      const response = await axios.post('http:localhost:3000/api/place/order', orderData, {headers:{token}})

    }

  return (
    <>
      <div className="grid grid-rows-1 lg:grid-cols-2 gap-20 lg:gap-32 my-20">
        {/* ---------- LEFT: Delivery Info ------------ */}
        <div className="">
          <h1 className="font-bold py-6 text-xl">Delivery Information</h1>
          <form onSubmit={placeOrder} className="grid grid-rows-1-1 lg:grid-cols-2 gap-2">
            <input
              type="text"
              name='firstName'
              value={data.firstName}
              onChange={inputHandler}
              placeholder="First Name"
              className="border-[1px] border-slate-300 rounded-sm pl-2 py-2 text-sm focus:outline-none border-double"
            />
            <input
              type="text"
              name='lastName'
              value={data.lastName}
              onChange={inputHandler}
              placeholder="Last Name"
              className="border-[1px] border-slate-300 rounded-sm pl-2 py-2 text-sm focus:outline-none border-double "
            />

            <input
              type="email"
              name='email'
              value={data.email}
              onChange={inputHandler}
              placeholder="Email address"
              className="border-[1px] border-slate-300 rounded-sm pl-2 py-2 text-sm focus:outline-none border-double col-span-2"
            />

            <input
              type="text"
              name='street'
              value={data.street}
              onChange={inputHandler}
              placeholder="street"
              className="border-[1px] border-slate-300 rounded-sm pl-2 py-2 text-sm focus:outline-none border-double col-span-2"
            />

            <input
              type="text"
              name='city'
              value={data.city}
              onChange={inputHandler}
              placeholder="city"
              className="border-[1px] border-slate-300 rounded-sm pl-2 py-2 text-sm focus:outline-none border-double "
            />
            <input
              type="text"
              name='state'
              value={data.state}
              onChange={inputHandler}
              placeholder="State"
              className="border-[1px] border-slate-300 rounded-sm pl-2 py-2 text-sm focus:outline-none border-double "
            />

            <input
              type="number"
              name='zipCode'
              value={data.zipCode}
              onChange={inputHandler}
              placeholder="zip code"
              className="border-[1px] border-slate-300 rounded-sm pl-2 py-2 text-sm focus:outline-none border-double "
            />
            <input
              type="text"
              name='country'
              value={data.country}
              onChange={inputHandler}
              placeholder="Country"
              className="border-[1px] border-slate-300 rounded-sm pl-2 py-2 text-sm focus:outline-none border-double "
            />

            <input
              type="number"
              name='phone'
              value={data.phone}
              onChange={inputHandler}
              placeholder="Phone"
              className="border-[1px] border-slate-300 rounded-sm pl-2 py-2 text-sm focus:outline-none border-double col-span-2"
            />
          </form>
        </div>

        {/* ------------ RIGHT: Cart Totals ----------- */}
        <div className="">
          <h1 className="font-bold text-xl py-6">Cart Totals</h1>

          <div className="grid grid-cols-2 items-center justify-between text-sm">
            <div>
              <p className="text-slate-500">Subtotal </p>
              <hr className="border-solid border-slate-300 w-[20vw]" />
            </div>

            <p className="text-slate-500">${subtotal}</p>

            <div>
              <p className="text-slate-500">Delivery Fee</p>
              <hr className="border-solid border-slate-300 w-[20vw]" />
            </div>
            <p className="text-slate-500">$2</p>
            <p className="font-bold">Total</p>
            <p className="font-bold">${subtotal ? subtotal + 2 : 0}</p>
            {/* ---------------- button to payment ------------- */}
            <button type='submit' className="bg-orange-600 text-[#fff] rounded-sm py-1 mt-6 active:scale-105 duration-300 ease-in-out">
              PROCEED TO PAYMENT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
