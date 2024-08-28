import React from 'react'
import { assets } from '../assets/assets'
import { useRecoilState, useRecoilValue } from 'recoil'
import { loginAtom, menuAtom, totalCartPriceAtom } from './atom';
import { Link, useNavigate } from 'react-router-dom';


export default function Navbar(){
    const menuItems = useRecoilValue(menuAtom);
    const [login, setLogin] = useRecoilState(loginAtom);   
    const navigateTo = useNavigate();
    const cartBlinking = useRecoilValue(totalCartPriceAtom);


    return(<>
        <nav>
            <div className="flex justify-between pt-6 " id="nav">
                    {/* ----------- brand Logo -------------- */}
              <img src={assets.foodflixlogo} alt="food" className="w-36 h-12 sm:text-lg lg:text-xl" onClick={()=>navigateTo('/')}/>
                
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
                        <img src={assets.basket_icon} alt="cart"  onClick={()=>navigateTo('/cart')}/>
                        {/* <div className='absolute w-2 h-2 bg-red-600 -top-1 -right-1 rounded-full hover:bg-slate-50'></div> */}
                        
                        {
                            cartBlinking? <div className="absolute w-2 h-2 bg-red-600 -top-1 -right-1 rounded-full"></div>:<></>
                        }
                    </div>
                            {/* ------------------- SIgnIn BUtton -------------- */}
                     {/* setLogin prop set to 'true' if clicked on SignIn button & LoginPage display, value passed to App.jsx useState */}
                    <button 
                    className="border-2 rounded-[300px] border-orange-600 px-6 py-1 text-[#49557e] text-[16px] bg-transparent active:scale-105" 
                    onClick={()=>setLogin(true)}
                    >SignIn</button>
                </div>
            </div>

        </nav>
    </>)
}