import React from "react";
import { Link } from "react-router";
import {
  FaHotel,
  FaPlane,
  FaSuitcase,
  FaTrain,
  FaShuttleVan,
  FaCogs,
} from "react-icons/fa";
const Navigate = () => {
  return (
    <div
      className="w-[60rem] flex justify-center items-center  text-white font-bold bg-black/40 backdrop-blur-md border border-white/10 shadow-lg rounded-xl p-4 mt-8"
    >
      <ul className="flex gap-20 justify-center items-center">
        <Link className="h-[3.5rem] w-[5rem] flex flex-col justify-center items-center active:bg-white active:text-black active:rounded-2xl active:px-5 focus:bg-white focus:text-black focus:rounded-2xl focus:px-5 ">
          <FaHotel className="active:text-black focus:text-black " />
          Hotels
        </Link>
        <Link className="h-[3.5rem] w-[7rem] flex flex-col justify-center items-center active:bg-white active:text-black active:rounded-2xl active:px-5 focus:bg-white focus:text-black focus:rounded-2xl focus:px-5">
                   <FaPlane className="active:text-black focus:text-black " />

          Flights
        </Link>
        <Link className="h-[3.5rem] w-[9rem] flex flex-col justify-center items-center active:bg-white active:text-black active:rounded-2xl active:px-5 focus:bg-white focus:text-black focus:rounded-2xl focus:px-5">
          <FaSuitcase className=" active:text-black focus:text-black" />
          Trip Tours
        </Link>
        <Link className="h-[3.5rem] w-[6rem] flex flex-col justify-center items-center active:bg-white active:text-black active:rounded-2xl active:px-5 focus:bg-white focus:text-black focus:rounded-2xl focus:px-5">
          <FaTrain className=" active:text-black focus:text-black " />
          Trains
        </Link>
        <Link className="h-[3.5rem] w-[9rem] flex flex-col justify-center items-center active:bg-white active:text-black active:rounded-2xl active:px-5 focus:bg-white focus:text-black focus:rounded-2xl focus:px-5">
          <FaShuttleVan className=" active:text-black focus:text-black " />
          Transportation
        </Link>
      </ul>
    </div>
  );
};

export default Navigate;
