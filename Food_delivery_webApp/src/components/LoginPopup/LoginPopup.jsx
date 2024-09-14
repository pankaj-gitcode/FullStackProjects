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
        <div>
            <form >
                <div className='w-fit bg-slate-200'>

                    {/* ----------- close icon ---------- */}
                    <div>
                        <h1>{currentState}</h1>
                        <img src={exit.cross_icon} alt="close_button" onClick={()=>setLogin(false)} className="cursor-pointer  "/>
                    </div>

                    {/* ------------- inputs: name,email, password ------------- */}
                    <div>
                        { currentState==='SignUp'?<input type='text' placeholder='Enter name' required/>:<></> }
                        <input type="email" placeholder='Enter email' required/>
                        <input type="password" placeholder='Enter password' required/>
                    </div>

                    {/* ---------------- buttons:Signup/Login ----------------- */}
                    <div>
                        <button>
                            {
                                currentState === 'SignUp'?<span>Submit</span>:<span>Login</span>
                            }
                        </button>
                    </div>


                    {/* --------------- check box -------------- */}
                    <div>
                        <input type="checkbox" required/>
                        <p>By continuing, I agree the terms of use & privacy policy.</p>
                    </div>

                    {/* ---------------- flip Login-Signup ------------ */}
                    <div>
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