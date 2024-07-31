import React from 'react'

// export default function Header(){
//     return(<>
//         <div className="h-[80vh]  bg-[url('/header_img.png')] sm:bg- bg-cover">
//             <div className="flex flex-col  ">
//                 <h1>Order your</h1>
//                 <h1>favourite food here</h1>
//                 <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients & culinary expertise. Our mission is to satisfy your cravings & elevate your dining experience, one delicious meal at a time</p>
//                 <button>View Menu</button>

//             </div>
//         </div>
//     </>)
// }



export default function Header() {
    return (
      <div className='relative mt-9 bg-[url("/header_img.png")] bg-cover bg-center h-[80vh] rounded-2xl flex items-center justify-center'>
        <div className="bg-white bg-opacity-50 p-8 rounded-lg max-w-lg text-center">
          <h1 className="text-4xl font-bold mb-4">Order your</h1>
          <h1 className="text-4xl font-bold mb-4">favourite food here</h1>
          <p className="text-lg mb-6">Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients & culinary expertise. Our mission is to satisfy your cravings & elevate your dining experience, one delicious meal at a time.</p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition duration-300">View Menu</button>
        </div>
      </div>
    );
  }