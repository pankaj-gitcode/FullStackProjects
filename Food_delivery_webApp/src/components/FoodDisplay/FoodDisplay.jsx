import React from 'react'
import FoodItem from '../FoodItem/FoodItem'

export default function FoodDisplay(){
    return(<>
        <div>
            <h1>Top dishes near you</h1>
            <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-3 gap-5 justify-center items-center">
                <FoodItem/>
            </div>
        </div>
    </>)
}