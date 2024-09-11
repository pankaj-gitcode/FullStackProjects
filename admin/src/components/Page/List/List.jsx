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


    return(<>
    <div className="flex p-10 ">
            <div className=" w-[80vw]  bg-[#d5e4f3] rounded-xl shadow-[5px_5px_8px_2px_rgba(0,0,0,0.3)] ">
                {/* ----- items tite ------- */}
                <div className="w-[80vw] px-10 pt-10 grid grid-cols-6">
                    <b className=" w-fit">Image</b>
                    <b className=" w-fit">Name</b>
                    <b className=" w-fit">Dscription</b>
                    <b className=" w-fit">Category</b>
                    <b className="w-fit ">Price</b>
                    <b className="w-fit">Action</b>
                </div>
                    <hr className="border-2 w-[80vw] border-slate-300"/>
                {/* ---------- list items ---------- */}
               
                {
                    list.map((elem,index)=>
                    <div key={index} className="w-[80vw] p-10  grid grid-cols-6">
                        <img src={`${URL}/images/${elem.image}`} alt="img" className="w-16"/>
                        <p>{elem.name}</p>
                        <p>{elem.description}</p>
                        <p>{elem.category}</p>
                        <p>{elem.price}</p>
                        <p>x</p>
                </div>
                    )
                }

               



            </div>
        
    </div>
    </>)
}

export default List;