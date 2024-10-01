import React, { useEffect, useState } from 'react'
import { assets } from '../../../assets/assets';
import { useRecoilState, useRecoilValue } from 'recoil';
import { dataAtom, listAtom } from '../../Atom';
import axios from 'axios';
import { toast } from 'react-toastify';

const List = ()=>{
    const URL = "http://localhost:3000";
    const data = useRecoilValue(dataAtom);
    const [list, setList] =useRecoilState(listAtom);

    const fetchData = async()=>{
        //API- fetch the data
        const response = await axios.get(`${URL}/api/food/list`);
        // console.log("RESPONSE: ", response.data.success, response.data.data)

        response.data.success?setList(response.data.data):toast.error("Can't find the list...!")
    }
    // ------- useeffct to call fetchData() ----------
    useEffect(()=>{
        fetchData();
    }, [data]);

    // ------------ remove the Items ---------
    const removeItem = async(foodId)=>{
        // console.log("Food._id: ",foodId);

        const response = await axios.post(`${URL}/api/food/deleteFoodItems`, {id:foodId})
        // console.log("RESPONSE: ", response.data.success, response.data.data, response.data.message)

        //display the updated list of data
        await fetchData();
        //display the notification 
        response.data.success?toast.success("Item removed"):toast.error("ERROR!!")

    }

    return(<>
    <div className="flex p-10 ">
            <div className="  border-2 rounded-xl shadow-[5px_5px_8px_2px_rgba(0,0,0,0.3)]">
                {/* ----- items heading ------- */}
                <div className="sm:w-[80vw] lg:w-[80vw] px-12 lg:px-10  pt-10 grid grid-cols-7 gap-20 md:gap-12 lg:gap-1 ">
                    <b className=" w-fit">Sr.No.</b>
                    <b className=" w-fit">Image</b>
                    <b className=" w-fit">Name</b>
                    <b className=" w-fit">Dscription</b>
                    <b className=" w-fit">Category</b>
                    <b className="w-fit ">Price</b>
                    <b className="w-fit">Action</b>
                </div>
                    <hr className="border-2 w-[80vw] "/>
                    
                {/* ---------- list items ---------- */}
                {
                    list.map((elem,index)=>
                    <div key={index} className=" relative w-[80vw] px-10 py-10 lg:p-10 grid grid-cols-7 gap-20 lg:gap-1">
                        <p className="w-fit">{index+1}.</p>
                        <img src={`${URL}/images/${elem.image}`} alt="img" className=" size-10 h-10 lg:w-16"/>
                        <p>{elem.name}</p>
                        <p>{elem.description}</p>
                        <p>{elem.category}</p>
                        <p>{elem.price}</p>
                        <p className="w-[1vw] h-[1px] rounded-full text-center pb-10 font-smibold text-2xl hover:cursor-pointer active:skew-x-12  shadow-[1px_1px_6px_2px_rgba(0,0,0,0.5)]" 
                        onClick={()=>removeItem(elem._id)}>x</p>

                        <hr className="absolute border-2 w-[80vw] border-slate-200 "/>
                </div>
                    )
                }

            </div>
        
    </div>
    </>)
}

export default List;