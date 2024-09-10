import React, { useState } from 'react'
import { assets } from '../../../assets/assets';
import { useRecoilState, useRecoilValue } from 'recoil';
import { dataAtom } from '../../Atom';
import axios from 'axios';

const Add = ()=>{
    const [upload, setUpload] = useState(false);
    const [data, setData] = useRecoilState(dataAtom);
    // create handler 
    const clickHandler = (e)=>{
        const name= e.target.name;
        const value = e.target.value;
        setData(data=>({
            ...data,[name]:value
        }))
    }

const submitHandler = async (e)=>{
    const URL = 'http://localhost:3000'
    e.preventDefault();
    const formData = new FormData();
    formData.append("name",data.name);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("price", Number(data.price));
    formData.append("image", upload);

    const response = await axios.post(`${URL}/api/food/add`, formData);

    if(response.data.success){
        setData({
            name: '',
            description:'',
            category: '',
            price:''
        })
        setUpload(false);
    }
}

    console.log("DATA: ", data);
    return(<>
        <div className="flex p-12 ">
            <div>

                <form className="text-lg text-[#787777]" onSubmit={submitHandler}>

                    {/* --------- Upload Image ---------- */}
                    <div className="flex flex-col gap-2 ">
                        <p>Upload image</p>
                        <label htmlFor="image">
                            <img src={upload?URL.createObjectURL(upload):assets.upload_area} alt="upload_file" className="cursor-pointer w-32 h-32 object-cover bg-center "/>
                        </label>
                        
                        <input type="file" id= "image" onChange={(e)=>setUpload(e.target.files[0])}   hidden required/>
                    </div>

                    {/* --------- Product name ---------- */}
                    <div className="my-6">
                        <p className="my-2">Product name</p>
                        <input type="text" className="border-2 border-solid w-[30vw] p-1 text-sm focus:outline-none" placeholder="Type here" name="name"value={data.name} onChange={clickHandler}/>
                    </div>

                    {/* --------- Product description ---------- */}
                    <div>
                        <p className="my-2">Product description</p>
                        <textarea name="description" value={data.description} rows='5' placeholder="write some content here" className="border-2 pl-1 w-[30vw] text-sm focus:outline-none" onChange={clickHandler} required></textarea>
                    </div>

                    {/* --------- Product category & price ---------- */}
                    <div className="flex items-center gap-6 mt-2">
                            {/* ----- category ------ */}
                        <div>
                            <p>Product Category</p>
                            <select name="category" value={data.category} className="text-sm text-[#000]" onChange={clickHandler}>
                                <option value="Salad">Salad</option>
                                <option value="Rolls">Rolls</option>
                                <option value="Sandwhich">Sandwhich</option>
                                <option value="Icecream">Icecream</option>
                                <option value="Cake">Cake</option>
                                <option value="Pure Veg">Pure Veg</option>
                                <option value="Pasta">Pasta</option>
                                <option value="Noodles">Noodles</option>
                            </select>
                        </div>
                            {/* ------- Price -------- */}
                        <div>
                            <p>Product Price</p>
                            <input type="number" name="price" value={data.price} onChange={clickHandler} placeholder="$12" className="focus:outline-none border-2 w-[5vw]" />
                        </div>
                    </div>

                    {/* -------------- Add button ------------ */}
                    <div className="pt-5">
                        <button className="bg-[#000] py-2 px-10 text-[#fff] text-sm active:bg-[#fff] active:border-2 active:border-slate-900 active:text-[#000] shadow-[1px_2px_5px_1px_rgba(0,0,0,0.5)] rounded-sm active:scale-90 duration-300 " id='image'>ADD</button>
                    </div>
                </form>


            </div>
        </div>
    </>)
}

export default Add;

