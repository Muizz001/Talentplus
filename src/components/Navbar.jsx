import React, { useState } from "react";
import techtime from "../assets/techtime.png"
import menu from "../assets/menu.svg"
import { AiOutlineClose } from "react-icons/ai"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <div className="md:h-[150px] h-[87px] w-full bg-[#004DB3] md:px-[120px] px-[16px] md:pt-[48px] pt-[43px]">
        <div className="md:h-[54px] h-[24px] flex justify-between w-full">
          <div className="h-full md:w-[130px] w-[53px]">
            <img src={techtime} alt="TechTime" className="h-full md:w-[130px] w-[53px]" />
          </div>
          <div className="h-full lg:w-[627px] w-[24px] flex items-center">
            <a href="#" className="text-[16px] leading-[22px] font-[700] text-white pr-[24px] lg:block hidden">Home</a>
            <a href="#" className="text-[16px] leading-[22px] font-[700] text-[#AAC4E6] pr-[18px] w-[100px] lg:block hidden">About Us</a>
            <a href="#" className="text-[16px] leading-[22px] font-[700] text-[#AAC4E6] pr-[24px] lg:block hidden">Courses</a>
            <a href="#" className="text-[16px] leading-[22px] font-[700] text-[#AAC4E6] pr-[24px] lg:block hidden">Testiomonials</a>
            <a href="#" className="text-[16px] leading-[22px] font-[700] text-[#AAC4E6] pr-[40px] lg:block hidden">Community</a>
            <button className="h-full w-[145px] bg-white rounded-[4px] py-[16px] lg:flex justify-center items-center hidden">
              <p className="text-[16px] leading-[22px] font-[700] text-[#004DB3]">Enroll Now</p>
            </button>
            <img src={menu} alt="" className="h-full cursor-pointer lg:hidden" onClick={() => setMenuOpen(true)} />
          </div>
        </div>
      </div>
      {/* <div className=" bg-white bg-opacity-50 h-screen z-50 lg:hidden"> */}
      <div className={`w-4/5 fixed z-50 top-0 ${menuOpen ? "right-0" : "right-[-100%]"} h-screen bg-[#004DB3] ml-[20%] py-[5%] flex flex-col items-end px-[5%] gap-[30px] lg:hidden border-l-[2px] border-white transition-[1000ms]`}>
        <AiOutlineClose color="white" className=" cursor-pointer z-10 text-[24px]" onClick={() => setMenuOpen(false)} />
        <div className="h-full w-full flex-col flex items-center gap-[30px]">
          <a href="#" className="text-[16px] leading-[22px] font-[700] text-white">Home</a>
          <a href="#" className="text-[16px] leading-[22px] font-[700] text-[#AAC4E6] ">About Us</a>
          <a href="#" className="text-[16px] leading-[22px] font-[700] text-[#AAC4E6]  ">Courses</a>
          <a href="#" className="text-[16px] leading-[22px] font-[700] text-[#AAC4E6]  ">Testiomonials</a>
          <a href="#" className="text-[16px] leading-[22px] font-[700] text-[#AAC4E6] ">Community</a>
          <button className=" w-[145px] bg-white rounded-[4px] py-[16px] flex justify-center items-center">
            <p className="text-[16px] leading-[22px] font-[700] text-[#004DB3]">Enroll Now</p>
          </button>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};



export default Navbar;
