import React from 'react'
import '../../App.css'

export default function Header(){
  return(<>

      <div className="h-[80vh] bg-[url('/header_img.png')] bg-cover bg-center flex flex-col items-center justify-center mt-9 rounded-xl bg-opacity-25 bg-[#fff]">

          {/* <div className="absolute ml-12 text-[#fff] overflow-hidden  sm:right-10 md:right-20 lg:right-96 "> */}
          <div className="ml-12 text-[#fff] overflow-hidden lg:pr-[42vw] sm:pr-[10vw] md:pr-[20vw] transition-[0.5s] fade-in">
            <h1 className=" text-6xl font-semibold pl-2">Order your favourite food here</h1>

            <p className="py-9 pl-2">Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients & culinary expertise. Our mission is to satisfy your cravings & elevate your dining experience, one delicious meal at a time</p>

            <button className="border-2 text-[#000] bg-[#fff] rounded-full px-3 py-1 mb-6 active:scale-105 transition-[.3s] ml-2 active:bg-[#E85F22] active:border-slate-50 active:text-slate-100">View More</button>
          </div>

      </div>

    
  </>)
}










{/* <div className="relative h-[80vh] mt-10 bg-[url('header_img.png')] bg-cover bg-center rounded-xl  flex flex-col items-center justify-center gap-6 ">
    

    <div className="   ">

      <h1 className="text-5xl lg:text-6xl font-semibold text-slate-50">Order your favourite food here</h1>
      <p className="text-slate-50 text-lg sm:text-lg lg:text-[2vw] xl:text-[1vw]">Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients & culinary expertise. Our mission is to satisfy your cravings & elevate your dining experience, one delicious meal at a time</p>

      <button className="text-[#000] text-2xl lg:text-[90%] sm:text-3xl border-2 bg-slate-50 px-5 py-1 rounded-full active:scale-90 transition-[0.1s]">View More</button>

    </div>
  </div>  */}

//  xl:bottom-8 right-[36vw] left-[5vw] overflow-hidden






// export default function Header() {
//     return (
//       <div className='relative mt-9 bg-[url("/header_img.png")] bg-cover bg-center h-[80vh] rounded-2xl flex items-center justify-center'>
//         <div className="bg-white bg-opacity-50 p-8 rounded-lg max-w-lg text-center">
//           <h1 className="text-4xl font-bold mb-4">Order your</h1>
//           <h1 className="text-4xl font-bold mb-4">favourite food here</h1>
//           <p className="text-lg mb-6">Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients & culinary expertise. Our mission is to satisfy your cravings & elevate your dining experience, one delicious meal at a time.</p>
//           <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition duration-300">View Menu</button>
//         </div>
//       </div>
//     );
//   }

