import React from 'react'
import { FaBus } from "react-icons/fa6";
import {FaHotel} from "react-icons/fa";
const Box = () => {
  return (
  <>
  <div className="box w-[60rem] h-[12rem] bg-white text-black rounded-3xl ">
<div className="topPart flex flex-row justify-between my-[1rem] mx-[1rem] h-[3rem] p-[1.2rem] items-center">
  <div className="city">
    <input type="text" placeholder='Search Your Desired City' className='w-[25rem] h-[2.5rem] border-[1px] outline-none border-zinc-400 flex justify-center items-center p-4 rounded' />
  </div>
  <div className="search">
    <input type="search" name="search" className='w-[25rem] h-[2.5rem]  outline-none'  placeholder='|'/>
    <label htmlFor="search" className='text-white bg-blue-600 font-bold rounded p-2 px-4 cursor-pointer'>Search</label>
  </div>
</div>

<div className="bottomPart flex flex-row justify-center my-[1rem] mx-[1rem] h-[5rem] p-[1.2rem] items-center gap-12 font-semibold">
<div className="from flex flex-col gap-1">
  <label htmlFor="from">From</label>
  <input type="text" placeholder='Departure Station'     className='outline-none'/>
</div>
<div className="to flex  gap-2 items-center">
  <FaBus />
 <div className="too flex flex-col gap-1">
   <label htmlFor="to">To</label>
   <input type="text" placeholder='Arrival Station'    className='outline-none'/>
 </div>
</div>
<div className="time flex flex-col ">
  <label htmlFor="time">Time</label>
  <input type="date" defaultValue="2025-01-01"  name="date" id="date"  className='outline-none' />
</div>
<div className="return flex flex-col gap-1">
  <label htmlFor="return">Return Time</label>
  <input type="text" placeholder='Add Return Trip'  className='outline-none'/>
</div>
</div>

<div className="lastPart flex justify-between px-15 relative bottom-4">
<div className='flex gap-1'>
    <input type="checkbox" id='speed' name="speed" className='outline-none'/>
    <label htmlFor='speed'>High Speed Only</label>
</div>
 <div className='flex justify-center items-center gap-1'>
<FaHotel/>
 <label htmlFor="hotels"> Explore Hotels</label> 
 <input type="checkbox" id='hotels' name="hotels" className='outline-none'/>
 </div>
</div>
  </div>
  </>
  )
}

export default Box