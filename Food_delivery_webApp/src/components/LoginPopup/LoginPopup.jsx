import React, { useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { allIconsAtom, loginAtom } from '../atom'

export default function LoginPopup(){
    const crossIcon = useRecoilValue(allIconsAtom);
    const [exit,setExit] = useRecoilState(loginAtom);
    const [accountLogin, setAccountLogin] = useState('Login here')
    const [signIn, setSignIn] = useState('SignUp');

    const accountAuth = ()=>{
        setSignIn('Login')
        setAccountLogin('Click here')

    }

    return(<>
        <form>
            <div>
                <h1>{signIn}</h1>
                 {/* ---------- Cross Icon ---------- */}
                <div>
                    <img src={crossIcon.cross_icon} alt="cross_icon" onClick={()=>setExit(false)}/>
                    
                </div>
                <div>
                    {
                        signIn==='SignUp'?(
                            <div>
                                <input type="text"  placeholder="Your name" required/>
                                <input type="email"  placeholder="Your email" required/>
                                <input type="password"  placeholder="Password" required/>
                                <div>
                                    <input type="checkbox" />
                                    <p>By continuing, I agree to the terms of use & privacy policy</p>
                                </div>

                                <div>
                                    <button className="border-2 bg-slate-500 active:scale-105">Create account</button>
                                </div>
                                    <p>Already have an account?</p>
                                    <p className="text-orange-600 cursor-pointer active:scale-105" onClick={accountAuth}>{accountLogin}</p>
                        </div>

                        ):(
                            <div>
                                <input type="email" placeholder="enter email" required/>
                                <input type="password" placeholder="enter password" required/>
                                <div>
                                    <button className="border-2 bg-slate-500 active:scale-105">Login</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <div>
                
                
                {
                    signIn==='Login'?<div>
                        <p>Create a new account?</p>
                        <p className="text-orange-600 cursor-pointer" onClick={()=>setSignIn('SignUp')}>SignUp</p>
                        </div>:
                        <></>
                    }
            </div>
        </form>
    </>)
}