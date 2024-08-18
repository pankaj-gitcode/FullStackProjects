import React from 'react'
import Header from '../../Header/Header'
import ExploreMenu from '../../ExploreMenu/ExploreMenu'
import FoodDisplay from '../../FoodDisplay/FoodDisplay'
import AppDownload from '../../AppDownload/AppDownload'

export default function Home(){
    return(<>
        <Header />
        <ExploreMenu/>
        <FoodDisplay/>
        <AppDownload/>
    </>)
}