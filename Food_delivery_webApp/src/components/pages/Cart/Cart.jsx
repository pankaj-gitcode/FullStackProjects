import React from 'react'
import {  useRecoilState, useRecoilValue } from 'recoil'
import { countItemsAtom, foodItemsAtom } from '../../atom'

export default function Cart(){
    const foodItem = useRecoilValue(foodItemsAtom());
    // const countItems = useRecoilValue(countItemsAtom);
    const [countItems, setCountItems] = useRecoilState(countItemsAtom);
   
    console.log("cont: ", countItems)
    const clickHandle = (id)=>{
        setCountItems((prevCount)=>{
            const newCount = {...prevCount,[id]:Math.max(prevCount[id]-1, 0)};
            // delete newCount[id];
            return newCount;
        })
    }
    
    return(<>

        <div className="py-20">
            <div className="">
                    <div className="grid grid-cols-6 items-center justify-between">
                        <p>Items</p>
                        <p>Name</p>
                        <p>Cost</p>
                        <p>Quantity</p>
                        <p>Total</p>
                        <p>Remove</p>
                </div>
                    <div className="">
                    {
                        foodItem.map((elem,index)=>{
                            {/* check if elem._id is the id in object countItems */}
                            if(countItems[elem._id] > 0){return(
                                <div key={index} className="grid grid-cols-6 items-center justify-between">
                                <img src={elem.image} alt="" className="size-20 object-contain "/>
                                <p>{elem.name}</p>
                                <p>{elem.price}</p>
                                <p>{countItems[elem._id]}</p>
                                <p>{elem.price * countItems[elem._id] }</p>
                                <p onClick={()=>clickHandle(elem._id)}>x</p>
                                <hr className="w-[76vw]"/>
                                </div>)
                            }
                        })
                    }
                    </div>
                
                <br />
            </div>
        </div>



    </>)
}