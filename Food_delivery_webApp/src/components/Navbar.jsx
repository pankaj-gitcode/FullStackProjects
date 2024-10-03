import React, { useEffect, useState } from 'react'
// import { assets } from '../assets/assets'
import { useRecoilState, useRecoilValue } from 'recoil'
import { allIconsAtom, loginAtom, menuAtom,  tokenAtom, totalCartPriceAtom } from './atom';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css'


export default function Navbar(){
    const menuItems = useRecoilValue(menuAtom);
    const [login, setLogin] = useRecoilState(loginAtom);   
    const navigateTo = useNavigate();
    const cartBlinking = useRecoilValue(totalCartPriceAtom);
    const [assets, setAssets] = useRecoilState(allIconsAtom);
    const [token,setToken] = useRecoilState(tokenAtom);
    const navigateToRoot = useNavigate();

    
    const logoutHandler = ()=>{
        localStorage.removeItem('token');
        setToken('');
        navigateToRoot('/');
    }

    useEffect(()=>{
        // check if Token still 
        if(localStorage.getItem('token')){
            setToken(localStorage.getItem('token'));
        }
        
        setTimeout(()=>{console.log("TOKKEEN: ", token)}, 3000);
    }, [])

    return(<>
        <nav>
            <div className="flex justify-between pt-6 " id="nav" >
                    {/* ----------- brand Logo -------------- */}
              <img src={assets.foodflixlogo} alt="food" className="w-36 h-12 sm:text-lg lg:text-xl cursor-pointer" onClick={()=>navigateTo('/')}/>
                
                {/* --------- all menu/services navbar --------*/}
                <ul className="hidden lg:flex gap-4 items-center justify-between font-normal text-[#49557e] text-[18px]">
                    {
                        menuItems.map((elem, index)=>
                            <a href={elem.link} key={index} className="active:border-b-2 active:border-b-slate-700">{elem.item}</a>
                        )
                    }
                    {/* <li key={index} className=" active:border-b-red-950 active:border-b-2  cursor-pointer">{elem.item}</li> */}
                </ul>

                            {/* --------------- Search ------------- */}
                <div className='flex items-center justify-between gap-6'>
                    <img src={assets.search_icon} alt="search" />

                        {/* ----------------- Cart ----------------- */}
                    <div className='relative'>
                        <img src={assets.basket_icon} alt="cart" className="cursor-pointer"  onClick={()=>navigateTo('/cart')}/>
                        {/* <div className='absolute w-2 h-2 bg-red-600 -top-1 -right-1 rounded-full hover:bg-slate-50'></div> */}
                        
                        {
                            cartBlinking? <div className="absolute w-2 h-2 bg-red-600 -top-1 -right-1 rounded-full"></div>:<></>
                        }
                    </div>
                            {/* ------------------- SIgnIn BUtton -------------- */}
                    <div>

                        {/* setLogin prop set to 'true' if clicked on SignIn button & LoginPage display, value passed to App.jsx useState */}
                        {
                            !token?
                            <button 
                        className="border-2 rounded-[300px] border-orange-600 px-6 py-1 text-[#49557e] text-[16px] bg-transparent active:scale-105" 
                        onClick={()=>setLogin(true)}
                        >SignIn</button>
                        :
                        <div id='assetImage'>
                                        {/* ---------- PROFILE ICON -------- */}
                            <img src={assets.profile_icon} alt="profileIcon"  className='cursor-pointer' />
                            <ul id='logout' className='w-fit lg:w-[8vw] rounded-sm shadow-[2px_2px_5px_2px_rgba(0,0,0,0.5)] bg-[#fff]' >
                                        {/* ---------- ORDER ICON -------- */}
                                <li className='w-fit lg:w-[8vw] px-2 py-1 flex flex-col lg:flex-row gap-2 cursor-pointer hover:bg-slate-300'><img src={assets.bag_icon} alt="order" className='w-6' />Order</li>
                                <hr className='w-10  border-slate-300 border-solid'/>
                                        {/* --------- LOGOUT ICON ------- */}
                                <li onClick={logoutHandler} className='w-fit lg:w-[8vw] px-2 py-1 flex flex-col lg:flex-row gap-2 cursor-pointer hover:bg-slate-300'><img src={assets.logout_icon} alt="logout" className='w-6' />Logout</li>
                            </ul>
                        </div>
                        }
                    </div> 

                </div>
            </div>

        </nav>
    </>)
}