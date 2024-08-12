import React from 'react'
import { useRecoilValue } from 'recoil'
import { foodItemsAtom, ratingsAtom } from '../atom';

export default function FoodItem(){
    const foodItem = useRecoilValue(foodItemsAtom());
    const ratings = useRecoilValue(ratingsAtom);
   
    return(<>
        
            {
                foodItem.map((elem,index)=>{
                    return(

                    <div key={elem._id} className=" rounded-xl shadow-lg">
                                    {/* ----------- Image div ----------- */}
                        <div className="rounded-xl">
                            <img src={elem.image} alt={elem._id} className="rounded-t-xl "/>
                        </div>

                        <div className="p-2">
                                    {/* ----------- food name ----------- */}
                            <div className="flex gap-20">
                                <h1 className="font-bold text-lg">{elem.name}</h1>
                                            {/* ---- ratings ----- */}
                                <img src={ratings} alt={elem.name} className=" bg-center object-contain flex-shrink"/>
                            </div>
                                        {/* ----------- food descrp. ----------- */}
                            <div>
                                <h1>{elem.description}</h1>
                            </div>
                                            {/* ----------- food_price ---------- */}
                            <div>
                                <h1 className="text-[#E85F22] text-lg">₹{elem.price}</h1>
                            </div>
                        </div>

                    </div>
                    )
                })
            }
        
    </>)
}