
import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { addRemoveIconsAtom,  categoryAtom,  foodItemsAtom , ratingsAtom } from '../atom';

export default function FoodItem(){
    const foodItem = useRecoilValue(foodItemsAtom());
    const ratings = useRecoilValue(ratingsAtom);
    const [count, setCount] = useState({});
    const addRemoveIcons = useRecoilValue(addRemoveIconsAtom);
    const category = useRecoilValue(categoryAtom);
    const [categorisedFood, setCategorisedFood] = useState([])
    
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

    console.log("NEW-TYPE: ",category);

    useEffect(()=>{
        if(category === 'All'){setCategorisedFood(foodItem)}
        else{
            setCategorisedFood(foodItem.filter(elem=>elem.category === category))
        }
    }, [category])
   
    return(<>
        
            {
                categorisedFood.map((elem,index)=>{
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
                            <div className="flex items-center justify-between pb-10">
                                <h1 className="text-[#E85F22] text-lg font-semibold">₹{elem.price*84/2}</h1>
                                <div className="h-fit w-11">
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



