
import React, { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { addRemoveIconsAtom,  categoryAtom,  countItemsAtom,  foodItemsAPIAtom,  foodItemsAtom , ratingsAtom, tokenAtom } from '../atom';
import axios from 'axios';

export default function FoodItem(){
    const foodItem = useRecoilValue(foodItemsAtom());
    const foodItemAPI = useRecoilValue(foodItemsAPIAtom());
    const ratings = useRecoilValue(ratingsAtom);
    const [count, setCount] = useRecoilState(countItemsAtom);
    const addRemoveIcons = useRecoilValue(addRemoveIconsAtom);
    const category = useRecoilValue(categoryAtom);
    const [categorisedFood, setCategorisedFood] = useState([])
    const [token,setToken] = useRecoilState(tokenAtom);
        
    // console.log("API-FOODITEM: ",foodItemAPI)
    // foodItemAPI.data.forEach(elem=>console.log("WORKING: ",elem))

    // ------------- when +icon clicked ---------------
    const clickHandleAdd = async(itemId)=>{
        console.log("TOKEN+: ", token)
        setCount({
            ...count,[itemId]:(count[itemId] || 0 )+ 1
        })

        // if loggedIn/token is availabe then increment the itemId count via POST
        if(token){
            console.log("TOKEN+: ", token)
            await axios.post('http://localhost:3000/api/cart/add', {itemId}, {headers:{token}})
             
        }
       
    }
    // ------------- when -icon clicked ---------------
    const clickHandleSub = async(itemId)=>{
        console.log("remove-ve: ", token)
        setCount(
            {
                //spread the previous count Object
                ...count,[itemId]:Math.max((count[itemId] || 0 )-1,0)
            }
        )

        // if loggedIn/token is availabe then decrement the itemId count via POST
        if(token){
            console.log("remove-: ", token)
            await axios.post('http://localhost:3000/api/cart/remove', {itemId}, {headers:{token}})
            
        }
    }

    // console.log("NEW-TYPE: ",category);
    // console.log(count)

    // display the food list
    useEffect(()=>{
        if(category === 'All'){setCategorisedFood(foodItemAPI.data)}
        else{
            setCategorisedFood(foodItemAPI.data.filter(elem=>elem.category === category))
        }
    }, [category])

    //  ------------ fetch cart data ----------
    const loadCartData = async(token)=>{
        try{
            // with token avl. fetch the cart Item
            const response = await axios.get('http://localhost:3000/api/cart/get',{headers:{token}})
            // set the updated itemId count, if cartData is empty then set it to empty->{}                            
            setCount(response.data.data || {})
            // console.log("COUNT====>: ", response.data.data)
        }
        catch(err){console.error(`ERROR---> ${err.response?err.response.data:err.message}`)}
    }
    // itemId count should remain same even after page reloads/render
    useEffect(()=>{
        // fetch cart data, invoke loadCartData() with updated token
        const fetchCartData = async()=>{
            if(localStorage.getItem('token')){
                setToken(localStorage.getItem('token'))
                 await loadCartData(localStorage.getItem('token'))
            }
        }
        fetchCartData();
    }, [])
       
    return(<>
            
            {
                categorisedFood.map((elem,index)=>{
                    return(

                    <div key={elem._id} className=" rounded-xl shadow-lg">
                      <p></p>
                                    {/* ----------- Image div ----------- */}
                        <div className="relative rounded-xl">
                            <img src={`http://localhost:3000/images/${elem.image}`} alt={elem._id} className=" rounded-t-xl hover:scale-105 duration-500  hover:border-[#E85F22] "/>

                                    {/* --------------- Add/Remove icons ---------- */}
                            <div className="h-fit w-11 absolute bottom-0 right-28 sm:right-20 md:right-6 xl:right-10 ">
                                    {
                                        (count[elem._id] === 0 || count[elem._id] === undefined)? 
                                        <img 
                                            src={addRemoveIcons.add_icon_white} 
                                            alt={addRemoveIcons.add_icon_white}
                                            className="p-1 opacity-75"
                                            onClick={()=>clickHandleAdd(elem._id)}
                                         />:
                                        <div className="flex items-center justify-center p-1">
                                            <img 
                                            src={addRemoveIcons.add_icon_green} 
                                            alt={addRemoveIcons.add_icon_green}
                                            className="p-1 opacity-75"
                                            onClick={()=>clickHandleAdd(elem._id)} />

                                            <p className="font-bold text-orange-600 text-lg">{count[elem._id]}</p>

                                            <img src={addRemoveIcons.remove_icon_red} 
                                                alt={addRemoveIcons.remove_icon_red} 
                                                className="p-1 opacity-75"
                                                onClick={()=>clickHandleSub(elem._id)} />

                                            {/* {console.log("count:", count, "index: ",index)} */}
                                        </div>
                                    }
                                </div>
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
                            <div className="flex items-center justify-between pb-2">
                                <h1 className="text-[#E85F22] text-lg font-semibold">${elem.price}</h1>
                               
                            </div>
                        </div>

                    </div>
                    )
                })
                
            }
            
    </>)
}



