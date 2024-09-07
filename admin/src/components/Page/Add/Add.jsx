import React from 'react'
import { assets } from '../../../assets/assets';

const Add = ()=>{
    return(<>
        <div className="flex p-12 ">
            <div>

                <form className="text-lg text-[#787777]">

                    {/* --------- Upload Image ---------- */}
                    <div className="flex flex-col gap-2 ">
                        <p>Upload image</p>
                        <label htmlFor="image">
                            <img src={assets.upload_area} alt="upload_file" />
                        </label>
                        
                        <input type="file" id= "image" hidden required/>
                    </div>

                    {/* --------- Product name ---------- */}
                    <div className="my-6">
                        <p className="my-2">Product name</p>
                        <input type="text" className="border-2 border-solid w-[30vw] p-1 text-sm focus:outline-none" placeholder="Type here"/>
                    </div>

                    {/* --------- Product description ---------- */}
                    <div>
                        <p className="my-2">Product description</p>
                        <textarea name="description" rows='5' placeholder="write some content here" className="border-2 pl-1 w-[30vw] text-sm focus:outline-none"></textarea>
                    </div>

                    {/* --------- Product category & price ---------- */}
                    <div className="flex items-center gap-6 mt-2">
                            {/* ----- category ------ */}
                        <div>
                            <p>Product Category</p>
                            <select name="category" className="text-sm text-[#000]">
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
                            <input type="number" name="price" placeholder="$12"/>
                        </div>
                    </div>

                    {/* -------------- Add button ------------ */}
                    <div className="pt-5">
                        <button className="bg-[#000] py-2 px-10 text-[#fff] text-sm active:bg-[#fff] active:border-2 active:border-slate-900 active:text-[#000] shadow-[1px_2px_5px_1px_rgba(0,0,0,0.5)] rounded-sm active:scale-105">ADD</button>
                    </div>
                </form>


            </div>
        </div>
    </>)
}

export default Add;

