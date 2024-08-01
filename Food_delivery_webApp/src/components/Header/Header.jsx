import React from 'react'

export default function Header(){
  return(<>
      <div className="relative h-[80vh] mt-10 bg-[url('header_img.png')] bg-cover bg-center rounded-xl ">
    

        <div className="absolute flex flex-col items-start justify-center gap-6 bottom-40 right-[36vw] left-[5vw] flex-wrap">

          <h1 className="text-5xl lg:text-6xl font-semibold text-slate-50">Order your favourite food here</h1>
          <p className="text-slate-50 text-lg sm:text-lg lg:text-[2vw] xl:text-[1vw]">Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients & culinary expertise. Our mission is to satisfy your cravings & elevate your dining experience, one delicious meal at a time</p>

          <button className="text-[#000] text-2xl lg:text-lg sm:text-3xl border-2 bg-slate-50 px-6 py-2 rounded-full hover:scale-105 active:scale-90 transition-[0.1s]">View More</button>

        </div>
      </div> 
  </>)
}









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

