import React from 'react'
import { motion } from "motion/react"
const Property = () => {
  return (
    <>
    <div className="line h-[0.5rem] w-[10rem] bg-zinc-800 rounded-2xl m-30 relative">
      <motion.div
      drag
      whileDrag={{
        x: 60
      }}
      dragConstraints={{
      left:0 ,
      top:0,
      right:60,
    bottom:0
      }}
      dragDirectionLock = "true"
      className="dot rounded-full bg-red-500 h-5 w-5 cursor-pointer absolute -top-1"
      ></motion.div>
    </div>
    
    </>
  )
}

export default Property;