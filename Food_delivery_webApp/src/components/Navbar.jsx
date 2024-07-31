import React from 'react'
import { assets } from '../assets/assets'
import { useRecoilValue } from 'recoil'
import { menuAtom } from './atom'

export default function Navbar(){
    const menuItems = useRecoilValue(menuAtom);
    return(<>
        <nav>
            <div className="flex justify-between align- pt-6">

                <img src={assets.foodflixlogo} alt="food" className="w-36 h-12 sm:text-lg lg:text-xl"/>
                
                {/* all menu/services navbar */}
                <ul className="flex gap-4 items-center justify-between font-[ubuntu] text-[#49557e] text-[18px]">
                    {
                        menuItems.map((elem)=>
                        <li key='menuNav' className=" active:border-b-red-950 active:border-b-2  cursor-pointer">{elem.item}</li>
                        )
                    }
                </ul>

                <div className='flex items-center justify-between gap-6'>
                    <img src={assets.search_icon} alt="search" />
                        {/* ----- Cart ----- */}
                    <div className='relative'>
                        <img src={assets.basket_icon} alt="cart" />
                        <div className='absolute w-2 h-2 bg-red-600 -top-1 -right-1 rounded-full hover:bg-slate-50'></div>
                    </div>
                    <button className="border-2 rounded-[300px] border-orange-600 px-6 py-1 text-[#49557e] text-[16px] bg-transparent">SignIn</button>
                </div>
            </div>

        </nav>
    </>)
}