import React, { useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { allIconsAtom, dataAtom, loginAtom } from '../atom';
import axios from 'axios';

export default function LoginPopup(){
    const exit = useRecoilValue(allIconsAtom);
    const [login,setLogin] = useRecoilState(loginAtom);
    const [currentState, setCurrentState] = useState("SignUp");
    const [data, setData] = useRecoilState(dataAtom);


    return(<>
        <div className="h-fit p-5 bg-[#fff] rounded-lg shadow-[2px_2px_8px_2px_rgba(0,0,0,0.6)]">
            <form >
                <div className='w-[50vw] lg:w-[20vw]'>

                    {/* ----------- heading + close icon ---------- */}
                    <div className='flex items-center justify-between font-bold mb-3'>
                        <h1 className="text-xl lg:text-lg">{currentState}</h1>
                        <img src={exit.cross_icon} alt="close_button" onClick={()=>setLogin(false)} className="cursor-pointer size-3 font-extrabold text-[#000]"/>
                    </div>

                    {/* ------------- inputs: name,email, password ------------- */}
                    <div className='flex flex-col gap-4 mb-5'>
                        { currentState==='SignUp'?
                        <input type='text' placeholder='Your name' className="text-lg lg:text-sm  pl-2 py-1 border-2 rounded-md focus:outline-none" required/>:<></> }
                        <input type="email" placeholder='Your email' className="text-lg lg:text-sm  pl-2 py-1 border-2 rounded-md focus:outline-none" required/>
                        <input type="password" placeholder='Your password' className="text-lg lg:text-sm  pl-2 py-1 border-2 rounded-md focus:outline-none" required/>
                    </div>

                    {/* ---------------- buttons:Signup/Login ----------------- */}
                    <div>
                        <button className="bg-orange-600 w-full rounded-sm p-1 mb-5 text-lg lg:text-sm text-[#fff] active:scale-95 duration-300 ease-in-out">
                            {
                                currentState === 'SignUp'?<span>Create account</span>:<span>Login</span>
                            }
                        </button>
                    </div>


                    {/* --------------- check box -------------- */}
                    <div className="mb-2">
                        {
                            currentState==='SignUp'? 
                            <div>
                                <input type="checkbox" className="size-4" required/>
                                <p className="text-sm lg:text-xs">By continuing, I agree the terms of use & privacy policy.</p>
                            </div>
                            : 
                            <></>
                        }
                    </div>

                    {/* ---------------- flip Login-Signup ------------ */}
                    <div className="text-lg lg:text-sm">
                        {
                            currentState==='SignUp'?
                            <p>Already have an account? <span className='text-orange-600 cursor-pointer' onClick={()=>setCurrentState('Login')}>Login here</span> </p>
                            :
                            <p>Create a new account? <span className='text-orange-600 cursor-pointer' onClick={()=>setCurrentState('SignUp')}>SignUp</span></p>
                        }
                    </div>
                </div>

            </form>
        </div>
    </>)
}