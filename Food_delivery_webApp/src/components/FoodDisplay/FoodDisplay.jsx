import React from 'react'
import FoodItem from '../FoodItem/FoodItem'

export default function FoodDisplay(){
    return(<>
        <div>
            <h2 className="text-3xl sm:text-xl md:text-3xl xl:text-5xl pb-6 pt-2 font-semibold">Top dishes near you</h2>
           
            <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-3 gap-5  fadeIn">
                <FoodItem/>
            </div>
        </div>
    </>)
}