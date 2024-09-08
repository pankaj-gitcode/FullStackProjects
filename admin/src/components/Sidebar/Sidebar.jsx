import react from 'react'
import { assets } from '../../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

export default function Sidebar(){
    const navigateTo = useNavigate();
    return(<>
        {/* ---------------------- SIDEBAR -------------------- */}
        <div className="w-[100vw] sm:w-[30vw] lg:w-[18%] h-[min(100vh)] border-[3px] border-gray-300 border-solid border-t-0">

            {/* ---------------------- sidebar-Container: divs --------------------- */}
            <div className="flex flex-col items-end gap-6 pt-12 ">

                    {/* -------------------- sidebar: items ------------------------ */}
                <div className="flex items-center gap-2 border-[3px] border-gray-300 w-[70%] py-2 pl-2 border-r-0 cursor-pointer rounded-l-lg active:bg-orange-300" onClick={()=>navigateTo('/add')}>
                    <img src={assets.add_icon} alt="Add_Items"/>
                    <p className="hidden sm:block lg:block">Add Items</p>
                </div>

                <NavLink to={'/list'} className="flex items-center gap-2 border-[3px] border-gray-300 w-[70%] py-2 pl-2 border-r-0 cursor-pointer rounded-l-lg active:bg-orange-300    ">
                    <img src={assets.order_icon} alt="List_Items" />
                    <p className="hidden sm:block">List Orders</p>
                </NavLink>

                <div className="flex items-center gap-2 border-[3px] border-gray-300 w-[70%] py-2 pl-2 border-r-0 cursor-pointer   rounded-l-lg active:bg-orange-300" onClick={()=>navigateTo('/orders')}>
                    <img src={assets.order_icon} alt="Order" />
                    <p className="hidden sm:block lg:block">Orders</p>
                </div>

            </div>
        </div>
    </>)
}

// px-2 py-2 mb-6 border-r-0 | pt-10 pl-12 