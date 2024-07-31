import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {RecoilRoot} from 'recoil'

const Navbar = lazy(()=>import('./components/Navbar'));
const Home = lazy(()=>import('./components/pages/Home/Home.jsx'))
const Cart = lazy(()=>import('./components/pages/Cart/Cart.jsx'));
const PlaceOrder = lazy(()=>import('./components/pages/PlaceOrder/PlaceOrder.jsx'));

export default function App(){
  return(<>
    <RecoilRoot>
      <Suspense lading={<h5>Loading...</h5>}>
        <div className="m-auto w-[80%]">
          <Navbar/>

          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/home' element={<Home/>} />
              <Route path='/cart' element={<Cart/>} />
              <Route path='/placeorder' element={<PlaceOrder/>} />
            </Routes>
          </BrowserRouter>

        </div>
      </Suspense>
    </RecoilRoot>

  </>
  )
}