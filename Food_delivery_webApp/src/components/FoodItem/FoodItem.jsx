
import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { addRemoveIconsAtom, foodItemsAtom, ratingsAtom } from '../atom';

export default function FoodItem(){
    const foodItem = useRecoilValue(foodItemsAtom());
    const ratings = useRecoilValue(ratingsAtom);
    const [count, setCount] = useState({});
    const addRemoveIcons = useRecoilValue(addRemoveIconsAtom);

    // ------------- when +icon clicked ---------------
  
    const clickHandleAdd = (id)=>{
        setCount({
            ...count,[id]:(count[id] || 0 )+ 1
        })
        console.log("count[id]: ", count[id], id, count);
    }
    // ------------- when -icon clicked ---------------
    const clickHandleSub = (id)=>{
        setCount(
            {
                //spread the previous count Object
                ...count,[id]:Math.max((count[id] || 0 )-1,0)
            }
        )
    }
   
    return(<>
        
            {
                foodItem.map((elem,index)=>{
                    return(

                    <div key={elem._id} className=" rounded-xl shadow-lg">
                                    {/* ----------- Image div ----------- */}
                        <div className="rounded-xl">
                            <img src={elem.image} alt={elem._id} className="rounded-t-xl hover:scale-105 duration-500  hover:border-[#E85F22]"/>
                        </div>

                        <div className="p-2">
                                    {/* ----------- food name ----------- */}
                            <div className="flex gap-10 items-center justify-start ">
                                <h1 className="font-bold text-lg hover:cursor-pointer">{elem.name}</h1>
                                            {/* ---- ratings ----- */}
                                <img src={ratings} alt={elem.name} className=" bg-center object-contain w-20"/>
                            </div>
                                        {/* ----------- food descrp. ----------- */}
                            <div>
                                <p className="text-[12px] font-semibold text-[#676767]">{elem.description}</p>
                            </div>
                                            {/* ----------- food_price ---------- */}
                            <div>
                                <h1 className="text-[#E85F22] text-lg font-semibold">₹{elem.price*84/2}</h1>
                                <div>
                                    {
                                        (count[elem._id] === 0 || count[elem._id] === undefined)? 
                                        <img 
                                        src={addRemoveIcons.add_icon_white} 
                                        alt={addRemoveIcons.add_icon_white}
                                        onClick={()=>clickHandleAdd(elem._id)}
                                         />:
                                        <div>
                                            <img 
                                            src={addRemoveIcons.add_icon_green} 
                                            alt={addRemoveIcons.add_icon_green}
                                             
                                            onClick={()=>clickHandleAdd(elem._id)} />

                                            <p>{count[elem._id]}</p>

                                            <img src={addRemoveIcons.remove_icon_red} 
                                            alt={addRemoveIcons.remove_icon_red} 
                                            
                                            onClick={()=>clickHandleSub(elem._id)} />

                                            {console.log("count:", count, "index: ",index)}
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                    )
                })
            }
    </>)
}












//*************************************************************** */
// import React from 'react'

// import { useRecoilValue } from "recoil"
// import { cartUpdateIconsAtom, foodListAtom, ratingsAtom } from "../atom"
// import { useState } from "react";

// export default function FoodItem(){
//     const foodList = useRecoilValue(foodListAtom());
//     const ratings = useRecoilValue(ratingsAtom);
//     const cartUpdateIcons = useRecoilValue(cartUpdateIconsAtom);
//     const [count, setCount] = useState({});

//     const clickHandleAdd = (id)=>{
//         setCount({
//             ...count,[id]:(count[id] || 0) +1
//         })
//     }
//     const clickHandleSub = (id)=>{
//         setCount({
//             ...count, [id]:Math.max((count[id] || 0)-1,0)
//         })
//     }
    
//     return(<>
//     <div className="grid sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5">
//             {
//                 foodList.map((elem,index)=>{
//                     return(
//                         <div key={index} className="rounded-t-xl shadow-lg mb-2">
//                             {/* ----------- Image ----------- */}
//                             <div className="flex flex-col ">
//                                 <img src={elem.image} alt={elem.image} className="rounded-t-xl hover:scale-105 hover:cursor-pointer"/>

//                                 <div className="pl-5">

//                                     {/* -------------- Food Name --------- */}
//                                     <div className="flex  gap-11">
//                                         <h2 className="font-semibold text-lg">{elem.name}</h2>
//                                         <img src={ratings} alt={ratings} className="bg-cover bg-center object-contain"/>
//                                     </div>
                                
//                                     {/* ---------------- Food Descrp. --------- */}
                                
//                                     <p className="font-semibold text-sm">{elem.description}</p>
                                
//                                     {/* ----------------- Food Price ----------- */}
//                                     <p className="text-orange-500 font-semibold">₹{elem.price*51}</p>
//                                     <div>
//                                         {
//                                             (count[elem._id] === 0 || count[elem._id] === undefined)? 
//                                             <img 
//                                             src={cartUpdateIcons.add_icon_white} 
//                                             alt="White" 
//                                             onClick = {()=>clickHandleAdd(elem._id)}
//                                             />:

//                                             <div>
//                                                 <img 
//                                                 src={cartUpdateIcons.add_icon_green} 
//                                                 alt="green" 
//                                                 onClick={()=>clickHandleAdd(elem._id)}
//                                                 />

//                                                 <p>{count[elem._id]}</p>

//                                                 <img 
//                                                 src={cartUpdateIcons.remove_icon_red} 
//                                                 alt="red" 
//                                                 onClick={()=>clickHandleSub(elem._id)}
//                                                 />
//                                             </div>
//                                         }
//                                     </div>
//                                 </div>                            
//                             </div>
//                         </div>    
//                     )                
//                 })
//             }
           


        
//     </div>
//     </>)
// }