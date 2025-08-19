import React from 'react'
import { TiTick } from "react-icons/ti";
import { motion } from "motion/react"

import Navigate from './Navigate'
import Box from './Box';
const Home = () => {
  return (
   <>
   
<div className="main">
     <div className="h-[92vh] w-full bg-[url(../../public/bg-img1.jpg)] bg-cover flex justify-center items-center flex-col"  >
   <h1 className='text-7xl my-5 text-white text-shadow-xl font-bold mt-30'>Your Trip Starts Here!</h1>
   <p className=' my-5 w-[60rem] text-[1rem] capitalize  text-white text-center px-[3rem] '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, excepturi eveniet laboriosam ratione dolores et saepe iste fugiat sit blanditiis ab molestias sequi ad quaerat odio exercitationem quisquam illum tempora a nostrum!</p>
 <div className="links flex gap-[1.5rem]">
    <span className='flex items-center font-semibold underline '>
<TiTick className='text-4xl text-red-700 fontbold'/>
      Secure payments
    </span>
   <span className='flex items-center font-semibold underline'>
<TiTick className='text-4xl text-red-700 fontbold'/>
    Full Customer Support
   </span>
 </div>

   <motion.button
     whileTap={{ scale: 0.7 }}
   className='  my-5 p-3 px-5 bg-green-700 text-white font-semibold rounded hover:bg-green-800 cursor-pointer hover:transition-all' >Plan Now</motion.button>
   <Navigate />
   <Box/>


   </div>

</div>

  

   
   </>
  )
}

export default Home