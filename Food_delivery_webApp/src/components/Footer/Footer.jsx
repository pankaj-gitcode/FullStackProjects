import React from 'react'
import { assets } from '../../assets/assets'

export default function Footer(){
    return(<>
        <div className="mt-6 max-w-[1520] w-[125%] sm:w-[100vw] md:w-[100vw]  ">

        <div className="bg-[#323232] text-[#d9d9d9]">
        <div>

        </div>
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-10 py-10 pl-32">
                {/* ------ Logo, rest. info, social media div ------ */}

            <div className=" w-[35vw] ">
            <img src={assets.foodFlix_logo} alt={assets.foodflixlogo} className="w-[10vw]"/>

                <p className=" text-xs pt-5 text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi in architecto, harum quam recusandae voluptate praesentium, unde provident exercitationem nobis veniam quisquam odio sint, iusto ipsum quasi facere! Sunt aperiam illum eum.</p>

                <div className="flex items-center gap-2 pt-6 w-6 cursor-pointer">
                    <img src={assets.facebook_icon} alt='facebook' />
                    <img src={assets.twitter_icon} alt="twitter" />
                    <img src={assets.linkedin_icon} alt="linkedIn" />
                </div>
            </div>


            {/* -------- Services ------------- */}
            <div className=" ml-20">
                <h1 className=" text-xl font-bold">SERVICES</h1>
                <ul className="pt-6 text-sm xl:text-xs">
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>


                {/* ------ Contact -------- */}
                <div className="sm:text-lg xl:text-xs">
                    <h1 className="text-xl font-bold">GET IN TOUCH</h1>
                    <p className="pt-6 ">+91-727-254-861</p>
                    <p className="mr-2">contact@foodflix.com</p>
                </div>


            </div>

                <hr className="w-[80vw] m-auto border-none bg-gray-500 h-[2px]"/>

            <div>
                <p className="p-6 text-center text-sm xl:text-xs ">Copyright 2024 &#169; foodflix.com. All Right Reserved</p>
            </div>

        </div>


        </div>
    </>)
}