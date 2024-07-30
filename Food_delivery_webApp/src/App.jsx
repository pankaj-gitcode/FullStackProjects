import React from 'react'
import Navbar from './components/Navbar'
import {RecoilRoot} from 'recoil'

export default function App(){
  return(<>
    <RecoilRoot>

      <div className="m-auto w-[80%]">
        <Navbar/>
      </div>
    </RecoilRoot>

  </>
  )
}