import React from 'react'
import { assets } from '../../assets/assets'
import { useRecoilValue } from 'recoil'
import { allIconsAtom } from '../atom'

export default function AppDownload(){
    const appStore = useRecoilValue(allIconsAtom);
    return(<>
        <div className="flex flex-col items-center justify-center my-20 " id="mobile-app">
                {/* -------- Title ------- */}
            <div className="my-6 text-center leading-6">
                <h1 className="text-[#000] font-semibold text-4xl">For Better Experience Download <br/>FoodFlix App</h1>
            </div>
                {/* -------- AppStore Icon ------- */}
            <div className="flex items-center justify-center gap-2 w-32" >
                <img src={appStore.play_store} alt="Google Play" className="hover:scale-105 duration-300 ease-in-out cursor-pointer active:scale-95 hover:shadow-2xl"/>
                <img src={appStore.app_store} alt="App Store" className="hover:scale-105 duration-300 ease-in-out cursor-pointer active:scale-95 hover:shadow-2xl"/>
            </div>
        </div>
    </>)
}


