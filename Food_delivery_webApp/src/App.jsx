import React, { lazy, Suspense} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'
import { useRecoilValue } from 'recoil';
import { loginAtom } from './components/atom.jsx';


const Navbar = lazy(()=>import('./components/Navbar'));
const Home = lazy(()=>import('./components/pages/Home/Home.jsx'))
const Cart = lazy(()=>import('./components/pages/Cart/Cart.jsx'));
const PlaceOrder = lazy(()=>import('./components/pages/PlaceOrder/PlaceOrder.jsx'));
const Footer = lazy(()=>import('./components/Footer/Footer.jsx'));
const LoginPopup = lazy(()=>import('./components/LoginPopup/LoginPopup.jsx'));

export default function App(){
  
  const login = useRecoilValue(loginAtom);
  return(<>
    
      <Suspense loading={<h5>Loading...</h5>}>
          {/* ---------- SignIn button clicked,triggers setLogin in <Navbar/> as true results login=true renders login page-------- */}
          {
            login?<LoginPopup />:<></>
          }
        
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
      

  </>
  )
}