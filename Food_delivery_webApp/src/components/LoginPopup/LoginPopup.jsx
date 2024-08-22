import React, { useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { allIconsAtom, loginAtom } from '../atom';

export default function LoginPopup(){
    const exit = useRecoilValue(allIconsAtom);
    const [login,setLogin] = useRecoilState(loginAtom);
    const [currentState, setCurrentState] = useState("SignUp");


    return(<>
        <div className="">

         <form className="bg-[#fff] flex flex-col place-items-between px-10 py-2 w-fit rounded-lg overflow-hidden">

                {/* ---------- page title + Exit ----------- */}
                <div className="flex justify-between items-center pb-5 cursor-pointer active">
                    <h1 className="font-bold text-2xl md:text-3xl lg:text-2xl">{currentState}</h1>
                    <img src={exit.cross_icon} alt="exit" className="w-3 h-3 " onClick={()=>setLogin(false)}/>
                </div>
            {
                currentState==="SignUp"?<div >

            <div className="grid gap-3 pt-2">
                {/* --------- form: name,email.pass-------- */}
                <input type="text" placeholder="Enter name" className="border-[2px] border-slate-200 text-2xl lg:text-sm rounded-md focus:outline-none pl-2" required/>
                <input type="email" placeholder="Enter mail" className="border-[2px] border-slate-200 text-2xl lg:text-sm rounded-md focus:outline-none pl-2" required/>
                <input type="password" placeholder="Enter password" className="border-[2px] border-slate-200 text-2xl lg:text-sm rounded-md focus:outline-none pl-2" required/>

                {/* ----------- create accnt. button ----------- */}
                <div>
                    <p className="text-2xl lg:text-sm bg-orange-600 rounded-sm text-center cursor-pointer active:scale-105 transition-[300] ease-in-out py-1">Create account</p>
                </div>
            </div>
                    {/* ---------- checkbox ---------- */}
            <div className="flex flex-col place-items-start py-6 gap-2 text-xl lg:text-sm">
                <input type="checkbox" name="" id=""/>
                            {/* ------- T&C ------- */}
                <p className="">By Continuing, I agree to the terms of use & privacy policy</p>
                            {/* ------- change to 'Login'--------- */}
                <p>Already have an account? <span onClick={()=>setCurrentState("Login")} className="cursor-pointer text-orange-600 font-semibold">Login here</span></p>
            </div>

                </div>:<div>
                    {/* ------------- login credentials ---------- */}
                    <div className="flex flex-col gap-2 pb-6 pt-2">
                        <input type="email" placeholder="Enter Email" className="border-[2px] border-slate-200 text-2xl lg:text-sm rounded-md focus:outline-none pl-2" required/>
                        <input type="password" placeholder="Enter password" className="border-[2px] border-slate-200 text-2xl lg:text-sm rounded-md focus:outline-none pl-2" required/>
                        <div className="pt-2">
                            <p className="text-2xl lg:text-sm bg-orange-600 rounded-sm text-center cursor-pointer active:scale-105 transition-[300] ease-in-out py-1">Submit</p>
                        </div>
                    </div>

                     {/* ------------- already have account ---------------- */}
                     <p className="pb-5">Click here to <span onClick={()=>setCurrentState("SignUp")} className="cursor-pointer text-orange-600 font-semibold ">SignUp</span></p>
                </div>
            }

         </form>

         </div>
    </>)
}