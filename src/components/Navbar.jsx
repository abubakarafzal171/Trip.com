import React from "react";
import { motion } from "motion/react";
import logo from "../../public/logo1.png";
import { CiMobile4 } from "react-icons/ci";
import pak_icon from "../../public/pak_icon.webp";
import { Link } from "react-router";
function Navbar() {
  return (
    <>
      <div className="navbar w-full h-[8vh] flex justify-between p-[0.4rem] font-['Lato'] pl-[3rem] font-[600] bg-[url(../../public/bg-img1.jpg)] bg-cover ">
        <div className="logo cursor-pointer">
          <Link to={"/"}>
            <motion.img
              whileTap={{ scale: 0.9 }}
              src={logo}
              alt="Trip.com"
              className="h-[4rem] w-[4rem]  "
            />
          </Link>
        </div>

        <div className="nav_links pr-[1.5rem] flex items-center text-zinc-800">
          <ul className="flex justify-center items-center gap-[1.7rem] text-white">
            <Link
              className="flex justify-center gap-1 items-center cursor-pointer"
              to={"/application"}
            >
              <CiMobile4 />
              <motion.span  whileTap={{ scale: 0.9 }}>App</motion.span>
            </Link>

            <Link
              className="flex justify-center gap-1 items-center cursor-pointer"
              to={"/property"}
            >
                 <motion.span  whileTap={{ scale: 0.9 }}>Property</motion.span>
            </Link>

            <Link
              to={"/"}
              className="flex justify-center gap-1 items-center cursor-pointer"
            >
              <img
                src={pak_icon}
                alt="pak icon"
                className="h-[1.2rem] w-[1.2rem] rounded-full"
              />
               <motion.span  whileTap={{ scale: 0.9 }}>Pak</motion.span>
            </Link>

            <Link
              to={"/support"}
              className="flex justify-center gap-1 items-center cursor-pointer"
            >
                <motion.span  whileTap={{ scale: 0.9 }}>Customer Support</motion.span>
            </Link>

            <Link
              to={"/bookings"}
              className="flex justify-center gap-1 items-center cursor-pointer"
            >
                <motion.span  whileTap={{ scale: 0.9 }}>Find Booking</motion.span>
            </Link>

            <Link
              to={"/form"}
              className="flex justify-center gap-1 items-center cursor-pointer"
            >
              <motion.button className="cursor-pointer rounded p-1.5 bg-blue-600 text-white"    whileTap={{ scale: 0.9 }}>
                Sign in / Register
              </motion.button>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
