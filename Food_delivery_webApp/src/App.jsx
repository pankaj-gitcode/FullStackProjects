import React, { lazy, Suspense, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {RecoilRoot, useRecoilValue} from 'recoil'
import './index.css'
import { loginAtom } from './components/atom.jsx';

const Navbar = lazy(()=>import('./components/Navbar'));
const Home = lazy(()=>import('./components/pages/Home/Home.jsx'))
const Cart = lazy(()=>import('./components/pages/Cart/Cart.jsx'));
const PlaceOrder = lazy(()=>import('./components/pages/PlaceOrder/PlaceOrder.jsx'));
const Footer = lazy(()=>import('./components/Footer/Footer.jsx'));
const LoginPopup = lazy(()=>import('./components/LoginPopup/LoginPopup.jsx'));


export default function App(){
  const [login, setLogin] = useState(false)
  const signIn = useRecoilValue(loginAtom);
  // console.log(signIn)
  return(<>
    <RecoilRoot>
      <Suspense lading={<h5>Loading...</h5>}>
      {/* once login=true display signUp/Login page */}
      {
        signIn?<LoginPopup/>:<></>
      }
     
      {console.log("sgn: ", signIn)}
      {console.log("login: ", signIn)}
        
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
        <Footer />
        <div className="fixed rounded-full bottom-6 right-2">
          <a href="#nav">⬆️</a>
        </div>
      </Suspense>
    </RecoilRoot>
    

  </>
  )
}