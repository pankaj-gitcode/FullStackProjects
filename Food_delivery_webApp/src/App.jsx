import React, { lazy, Suspense} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'
import { useRecoilValue } from 'recoil';
import { loginAtom } from './components/atom.jsx';
import LoginPopup from './components/LoginPopup/LoginPopup.jsx';


const Navbar = lazy(()=>import('./components/Navbar'));
const Home = lazy(()=>import('./components/pages/Home/Home.jsx'))
const Cart = lazy(()=>import('./components/pages/Cart/Cart.jsx'));
const PlaceOrder = lazy(()=>import('./components/pages/PlaceOrder/PlaceOrder.jsx'));
const Footer = lazy(()=>import('./components/Footer/Footer.jsx'));


export default function App(){
  const login = useRecoilValue(loginAtom);
  
  return(<div className="relative">
    
      <Suspense fallback={<h5>Loading...</h5>}>
          {/* ---------- SignIn button clicked,triggers setLogin in <Navbar/> as true results login=true renders login page-------- */}
          {
            login?<div className="fixed bg-black/50 h-[100vh] w-[100vw] grid place-items-center z-50">
              <LoginPopup/>
            </div>:<></>
          }
                  
        <div className="m-auto xl:m-auto w-[80vw] lg:w-[80vw]">
          <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/navbar' element={<Navbar/>}/>
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
      

  </div>
  )
}