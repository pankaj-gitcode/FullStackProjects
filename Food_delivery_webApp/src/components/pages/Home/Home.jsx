import React from 'react'
import Header from '../../Header/Header'
import ExploreMenu from '../../ExploreMenu/ExploreMenu'
import FoodDisplay from '../../FoodDisplay/FoodDisplay'

export default function Home(){
    return(<>
        <Header />
        <ExploreMenu/>
        <FoodDisplay/>
    </>)
}