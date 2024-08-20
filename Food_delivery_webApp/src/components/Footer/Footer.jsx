import React from 'react'
import { useRecoilValue } from 'recoil'
import { allIconsAtom } from '../atom'

export default function Footer(){
    const icons = useRecoilValue(allIconsAtom);
    return(<>
        <div className="bg-[#323232] text-[#d9d9d9] w-full" id="footer">

            <div className="grid lg:grid-cols-3 gap-6 w-[80vw] m-auto py-10 sm:grid-cols-1">
                <div className="">
                        {/* ------ LOGO --------- */}
                    <img src={icons.foodFlix_logo} alt="foodFlix_Logo"  className="pb-6"/>

                    {/* --------- Detiails -------- */}
                    <p className="text-sm font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque porro corrupti maiores exercitationem? Sint dolorum assumenda nam consequatur quae saepe consectetur maiores corporis eius deleniti ullam, animi possimus nostrum vel optio?</p>

                    {/* --------- Social Media -------- */}
                    <div className="flex items-center justify-start gap-5 py-6 ">
                        <a href="https://facebook.com" className="">
                            <img src={icons.facebook_icon} alt="facebook" className=""/>
                        </a>
                        <a href="https://twitter.com">
                            <img src={icons.twitter_icon} alt="twitter" className=""/>
                        </a>
                        <a href="https://linkedin.com">
                            <img src={icons.linkedin_icon} alt="linkedIn" className=""/>
                        </a>
                    </div>
                </div>
                        {/* ---------- services/policy --------- */}
                <div className="lg:ml-20 sm:ml-0">
                    <h1 className="font-bold text-2xl pt-5">COMPANY</h1>
                    <ul className="pt-7">
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                    {/* ----------- Contacts ------------ */}
                <div>
                    <h1 className="font-bold text-2xl pt-5">GET IN TOUCH</h1>
                    <ul className="pt-7">
                        <li>+91-727-254-861</li>
                        <li>contact@foodflix.com</li>
                    </ul>
                </div>
            </div>
             {/* --------------- Hr ---------- */}
             <hr className="w-[80vw] m-auto "/>

             {/* ----------- copyright -------- */}
             <div className="flex items-center justify-center py-6">
                <p className="text-sm">Copyright 2024 &copy; foodflix.com - All Right Reserved</p>
             </div>

        </div>
    </>)
}