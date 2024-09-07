import React, { lazy, Suspense } from 'react'


const Navbar = lazy(()=>import('./components/Navbar/Navbar.jsx'));
const Sidebar = lazy(()=>import('./components/Sidebar/Sidebar.jsx'));

export default function App(){

  return(<div>
        <Suspense fallback={<h1>Loading...</h1>}>

          <Navbar/>
          <hr className="border-2 border-solid border-slate-300" />

          <div>
            <Sidebar/>
          </div>

        </Suspense>
  </div>)
}