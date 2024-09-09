import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom';

const Navbar = lazy(()=>import('./components/Navbar/Navbar.jsx'));
const Sidebar = lazy(()=>import('./components/Sidebar/Sidebar.jsx'));
const Add = lazy(()=>import('./components/Page/Add/Add.jsx'));
const List = lazy(()=>import('./components/Page/List/List.jsx'));
const Orders = lazy(()=>import('./components/Page/Order/Order.jsx'));

export default function App(){

  return(<div>
        <Suspense fallback={<h1>Loading...</h1>}>
          
          <Navbar/>
          <hr className="border-2 border-solid border-slate-300" />

            <div className="flex ">
            <Sidebar/>
              <Routes>
                <Route path={'/add'} element={<Add />} />
                <Route path={'/list'} element={<List />} />
                <Route path={'/orders'} element={<Orders />} />
              </Routes>

            </div>
          {/* ------------------- Add | List | Orders ----------- */}
          


        </Suspense>
  </div>)
}