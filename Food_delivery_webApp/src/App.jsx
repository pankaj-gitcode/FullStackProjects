import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {RecoilRoot} from 'recoil'
import './index.css'

const Navbar = lazy(()=>import('./components/Navbar'));
const Home = lazy(()=>import('./components/pages/Home/Home.jsx'))
const Cart = lazy(()=>import('./components/pages/Cart/Cart.jsx'));
const PlaceOrder = lazy(()=>import('./components/pages/PlaceOrder/PlaceOrder.jsx'));
const Footer = lazy(()=>import('./components/Footer/Footer.jsx'));

export default function App(){
  return(<>
    <RecoilRoot>
      <Suspense lading={<h5>Loading...</h5>}>
        <div className="m-auto xl:m-auto w-[80vw] lg:w-[80vw]">
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
        <div className="w-[80%] sm:w-full lg:w-[100%]"><Footer/></div>
      </Suspense>
    </RecoilRoot>
    

  </>
  )
}