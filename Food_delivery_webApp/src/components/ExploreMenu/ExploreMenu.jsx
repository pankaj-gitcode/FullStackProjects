import React from 'react'
import { menu_list } from '../../assets/assets'
import { useRecoilState, useRecoilValue } from 'recoil'
import {  categoryAtom, foodItemsAtom, menuItemsAtom } from '../atom'

export default function ExploreMenu(){
    const menuItems = useRecoilValue(menuItemsAtom);
    const [category, setCategory] = useRecoilState(categoryAtom);
  
// set the category to category Atom
const menuListCategory = (type)=>setCategory(type)
console.log("TYPE: ", category)
    
    return(<>
    
    
        <div className="py-10" id="menu"> 
            <h1 className="text-6xl sm:text-6xl md:text-5xl xl:text-6xl font-semibold ">Explore our menu</h1>
            <div className="w-[60%] pt-5 pb-7">
                <p className="font-semibold text-xl lg:text-lg xl:text-sm ">Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your
                cravings and elevate your dining experience, one delicious meal at a time. </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg-grid-cols-5 xl:grid-cols-8 gap-2 justify-center items-center">
            {/* <div className="flex text-center  my-[20px]"> */}
                {
                    menuItems.map((elem,index)=>{
                        return(
                            <div key={index} className=" ">

                        <img src={elem.menuImage} alt="Image-Salad" className="w-28 hover:cursor-pointer hover:border-slate-800 hover:border-4 hover:rounded-full active:scale-125 duration-[.5s]" onClick = {()=>menuListCategory(elem.menuImageName)}/>
                        <h5 className="text-center text-slate-500 font-medium">{elem.menuImageName}</h5>
                            </div>
                        
                        )
                        
                    })
                }
            </div>
        </div>
    </>)
}

