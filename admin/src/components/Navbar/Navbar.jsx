import React from 'react'
import { assets } from '../../assets/assets'

export default function Navbar(){
    return(<>
        <div className="flex items-center justify-between px-10 py-5">
        {/* ------------ Logo Admin -------- */}
        <div>
            <img src={assets.foodflixlogo} alt="FoodFlix_logo" 
                className="w-[max(10%,80%)] "
            />
            <h3 className="font-bold text-lg text-[#a9a9a9]">Admin Panel</h3>
        </div>
        {/* -------------- Profile image -------- */}
        <div>
            <img src={assets.profile_image} alt="Profile_image" 
                className="w-[40px]"
            />
        </div>
        
        </div>
    </>)
}