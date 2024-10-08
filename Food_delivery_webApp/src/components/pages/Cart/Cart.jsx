import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import {
  countItemsAtom,
  foodItemsAPIAtom,
  foodItemsAtom,
  tokenAtom,
  totalCartPriceAtom,
} from "../../atom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Cart() {
  // const foodItem = useRecoilValue(foodItemsAtom());
  const foodItem = useRecoilValue(foodItemsAPIAtom());
  // const countItems = useRecoilValue(countItemsAtom);
  const [countItems, setCountItems] = useRecoilState(countItemsAtom);
  const [totalCartPrice, setTotalCartPrice] =
    useRecoilState(totalCartPriceAtom);
    const [token, setToken] = useRecoilState(tokenAtom);

  const navigateTo = useNavigate();

  // ------- ITEMS ADDED/REMOVED ---------
  // console.log("items in the cart with count as value: ", countItems);

  const clickHandleAdd = async(itemId) => {
    
    setCountItems((prevCount) => {
      const currentCount = { ...prevCount, [itemId]: (prevCount[itemId] || 0) + 1 };
      
      return currentCount;
    });
    // once signedIn, add the itemId count to DB
    if(token){
      await axios.post('http://localhost:3000/api/cart/add', {itemId}, {headers:{token}})
    }
  };
  
  const clickHandleSub = async(itemId) => {
    setCountItems((prevCount) => {
      const newCount = { ...prevCount, [itemId]: Math.max(prevCount[itemId] - 1, 0) };
      // delete newCount[itemId];
      return newCount;
    });
    // once signedIn, decrement the itemId count to DB
    if(token){
      await axios.post('http://localhost:3000/api/cart/remove', {itemId}, {headers:{token}})
    }
  };
      // --------- PRICE -----------
  // all price getting accumulated in Array, pushed inside it got the consolidated price with exact count
  let priceArray = [];
  useEffect(() => {
    setTotalCartPrice(priceArray.reduce((accum, elem) => accum + elem, 0));
  }, [priceArray]);

  console.log("Cart Items TotalPrice: ", priceArray, "totalCartAtom: ", totalCartPrice);

  return (
    <>
      <div className="py-20 ">
        <div className="">
          <div className="grid grid-cols-6 items-center justify-between font-semibold">
            <p>Items</p>
            <p>Name</p>
            <p>Cost</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <div className="pt-6 ">
            {foodItem.data.map((elem, index) => {
              {
                /* check if elem._id is the id in object countItems */
              }
              if (countItems[elem._id] > 0) {
                return (
                  <div
                    key={index}
                    className="grid grid-cols-6 items-center text-sm gap-5 lg:gap-0 "
                  >
                    <img
                      src={`http://localhost:3000/images/${elem.image}`}
                      alt=""
                      className="size-20 object-contain "
                    />
                    <p>{elem.name}</p>
                    <p>{elem.price}</p>
                    <p>{countItems[elem._id]}</p>
                    <p>${elem.price * countItems[elem._id]}</p>

                    {/* ------------- add/remove items ------------ */}
                    <p className=" border-2 w-fit flex">
                      <span
                        className="p-2 cursor-pointer text-green-500 font-bold text-xl"
                        onClick={() => clickHandleAdd(elem._id)}
                      >
                        +
                      </span>
                      <span
                        className="p-2 cursor-pointer text-red-500 font-bold text-xl"
                        onClick={() => clickHandleSub(elem._id)}
                      >
                        {" "}
                        -
                      </span>
                    </p>
                    {/* ---------get all items price pushed in array ---------*/}
                    <div className=" bg-red-500 hidden">
                      {priceArray.push(elem.price * countItems[elem._id])}
                    </div>
                    <hr className="w-[76vw]" />
                  </div>
                );
              }
            })}
          </div>

          <br />

          {/* -------------- Total | Promocode -------------- */}
          <div className="grid grid-cols-2 gap-10 mt-10">
            {/* --------------  total | checkout button --------- */}
            <div>
              <h1 className="font-bold py-2">Cart Total</h1>
              <div className="grid grid-cols-2 text-sm w-[50vw]">
                <p>
                  Subtotal <hr />
                </p>
                <p>${totalCartPrice}</p>
                <p>
                  Delivery Fee <hr />
                </p>
                <p>$2</p>
                <p className="font-bold">Total</p>
                <p className="font-bold">
                  ${totalCartPrice ? totalCartPrice + 2 : 0}
                </p>
              </div>
              <button
                className="bg-orange-600 text-[#fff] px-2 py-1 lg:px-4 lg:py-1 rounded-sm text-xs lg:text-sm active:scale-105 mt-2 duration-300 ease-in-out"
                onClick={() => navigateTo("/placeorder")}
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
            {/* -------- PROMOCODE ----------- */}
            <div className="">
              <p className="text-sm font-semibold">Have a Promocode?</p>
              <div className="grid grid-cols-1 lg:grid-cols-2 sm:gap-2 lg:gap-0">
                <input
                  type="text"
                  placeholder="Enter Promocode"
                  className="bg-slate-200 text-sm pl-2 pr-10 py-1 rounded-l-sm focus:outline-none"
                />
                <button className="bg-[#000] text-[#fff] text-sm w-fit px-5 rounded-sm active:scale-105 duration-300 ease-in-out">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
