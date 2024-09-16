import React, { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { allIconsAtom, dataAtom, loginAtom, tokenAtom, URLAtom } from '../atom';
import axios from 'axios';

export default function LoginPopup(){
    const exit = useRecoilValue(allIconsAtom);
    const [login,setLogin] = useRecoilState(loginAtom);
    const [currentState, setCurrentState] = useState("SignUp");
    const [data, setData] = useRecoilState(dataAtom);
    const URL = useRecoilValue(URLAtom);
    const [token, setToken] = useRecoilState(tokenAtom);

    // handle input values
    const dataHandler = (event)=>{
        // grab the input data from the user
        const name = event.target.name;
        const value = event.target.value;
        // update the data
        setData(data=>({...data,[name]:value}))
    }

    //handle on Submit function
    const submitHandler = async(event)=>{
        //prevent from reload login/SignUp card
        event.preventDefault();
    
        try{
            let newURL = URL;
            currentState === 'SignUp'? newURL += '/register' : newURL += '/login';
            
            // fetch the API and store user's data to DB
            const response = await axios.post(newURL, data);
    
            // set Token in localStorage if response is true
            if(response.data.success) {
                    // update the TOKEN
                setToken(response.data.message)

                // set item to LocalStorage
                localStorage.setItem("Token", token)
                console.log("[TOKEN,DATA]: ", [token, data, response.data.message]);

                // SignIn card should be closed
                setLogin(false)
            }

        }
        catch(err){ console.error("ERR: ", err.message)}
    }



    return(<>
        <div className="h-fit p-5 bg-[#fff] rounded-lg shadow-[2px_2px_8px_2px_rgba(0,0,0,0.6)]">
            <form onSubmit={submitHandler}>
                <div className='w-[50vw] lg:w-[20vw]'>

                    {/* ----------- heading + close icon ---------- */}
                    <div className='flex items-center justify-between font-bold mb-3'>
                        <h1 className="text-xl lg:text-lg">{currentState}</h1>
                        <img src={exit.cross_icon} alt="close_button" onClick={()=>setLogin(false)} className="cursor-pointer size-3 font-extrabold text-[#000]"/>
                    </div>

                    {/* ------------- inputs: name,email, password ------------- */}
                    <div className='flex flex-col gap-4 mb-5'>
                        { currentState==='SignUp'?
                        <input type='text' placeholder='Your name' name='name' value={data.name} onChange={dataHandler} className="text-lg lg:text-sm pl-2 py-1 border-2 rounded-md focus:outline-none" required/>:<></> }
                        <input type="email" placeholder='Your email' name='email' value={data.email} onChange={dataHandler} className="text-lg lg:text-sm pl-2 py-1 border-2 rounded-md focus:outline-none" required/>
                        <input type="password" placeholder='Your password' name='password' value={data.password} onChange={dataHandler} className="text-lg lg:text-sm pl-2 py-1 border-2 rounded-md focus:outline-none" required/>
                    </div>

                    {/* ---------------- buttons:Signup/Login ----------------- */}
                    <div>
                        <button type='submit' className="bg-orange-600 w-full rounded-sm p-1 mb-5 text-lg lg:text-sm text-[#fff] active:scale-95 duration-300 ease-in-out">
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