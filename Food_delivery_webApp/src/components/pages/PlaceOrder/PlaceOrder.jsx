import React from "react";
import { useRecoilValue } from "recoil";
import { totalCartPriceAtom } from "../../atom";

export default function PlaceOrder() {
    const subtotal = useRecoilValue(totalCartPriceAtom);
  return (
    <>
      <div className="grid grid-rows-1 lg:grid-cols-2 gap-20 lg:gap-32 my-20">
        {/* ---------- LEFT: Delivery Info ------------ */}
        <div className="">
          <h1 className="font-bold py-6 text-xl">Delivery Information</h1>
          <form className="grid grid-rows-1-1 lg:grid-cols-2 gap-2">
            <input
              type="text"
              placeholder="First Name"
              className="border-[1px] border-slate-300 rounded-sm pl-2 py-2 text-sm focus:outline-none border-double"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border-[1px] border-slate-300 rounded-sm pl-2 py-2 text-sm focus:outline-none border-double "
            />

            <input
              type="email"
              placeholder="Email address"
              className="border-[1px] border-slate-300 rounded-sm pl-2 py-2 text-sm focus:outline-none border-double col-span-2"
            />

            <input
              type="text"
              placeholder="street"
              className="border-[1px] border-slate-300 rounded-sm pl-2 py-2 text-sm focus:outline-none border-double col-span-2"
            />

            <input
              type="text"
              placeholder="city"
              className="border-[1px] border-slate-300 rounded-sm pl-2 py-2 text-sm focus:outline-none border-double "
            />
            <input
              type="text"
              placeholder="State"
              className="border-[1px] border-slate-300 rounded-sm pl-2 py-2 text-sm focus:outline-none border-double "
            />

            <input
              type="number"
              placeholder="zip code"
              className="border-[1px] border-slate-300 rounded-sm pl-2 py-2 text-sm focus:outline-none border-double "
            />
            <input
              type="text"
              placeholder="Country"
              className="border-[1px] border-slate-300 rounded-sm pl-2 py-2 text-sm focus:outline-none border-double "
            />

            <input
              type="number"
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
            <button className="bg-orange-600 text-[#fff] rounded-sm py-1 mt-6 active:scale-105 duration-300 ease-in-out">
              PROCEED TO PAYMENT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
