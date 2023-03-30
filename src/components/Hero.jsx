import React from 'react'
import hero from "../assets/hero-image.png"
import previews from "../assets/previews.png"
import arrow from "../assets/arrow.png"
import zig from "../assets/zig.svg"
import greendot from "../assets/greendot.svg"
import yellowdot from "../assets/yellowdot.svg"

const Hero = () => {
  return (
    <div className="w-full bg-[#004DB3] lg:px-[120px] px-[16px] flex justify-center xl:flex-row flex-col lg:gap-[17px] gap-[47px] relative items-center">
      <div className='xl:w-[45%] w-full flex flex-col xl:h-[488px] lg:h-[350px] h-[271px] xl:max-w-[none] max-w-[396px] lg:max-w-[600px] items-center xl:items-start'>
        <div className='flex flex-col xl:items-start items-center xl:text-left text-center'>
          <h1 className='xl:text-[64px] lg:text-[54px] text-[32px] xl:leading-[82px] lg:leading-[55px] leading-[46px] text-white mb-[16px] font-[700]'>Grow your skills to advance your career path</h1>
          <p className='lg:text-[16px] text-[8px] leading-[26px] text-[#E7E7E7] lg:mb-[32px] mb-[25px] font-[500]'>build your future with our quality education. the best and largest all-in-one online tutoring platform in the world</p>
          <div className='lg:h-[54px] h-[28px] lg:w-[385px] w-[196px] flex lg:gap-[24px] gap-[13.5px] lg:mb-[24px] mb-[16px]'>
            <button className='h-full lg:w-[216px] w-[110px] flex justify-center items-center lg:gap-[8px] gap-[4px] border-white lg:border-[1px] border-[0.5px] rounded-[2px] lg:rounded-[4px] py-[8px] px-[16px]'>
              <span className='text-white text-[8px] leading-[11px] lg:text-[16px] lg:leading-[22px] font-[700]'>Get Started Now</span>
              <span></span>
            </button>
            <button className='h-full lg:w-[145px] w-[73px] flex justify-center items-center bg-white rounded-[2px] lg:rounded-[4px] text-[8px] leading-[11px] lg:text-[16px] lg:leading-[22px] font-[700]'> Enroll Now</button>
          </div>
        </div>
        <img src={previews} alt="Previews" className='lg:w-[311px] w-[177px]' />
      </div>
      <div className='lg:w-[55%] w-full lg:max-w-[769px] max-w-[396px] lg:mt-[43px]'>
        <img src={hero} alt="Hero Image" className="w-full" />
      </div>
      <div className='absolute xl:top-[533px] top-[240px] xl:left-[45%] left-[80%] xl:w-[111px] w-[54px] xl:h-[222px] h-[109px]'>
        <img src={arrow} alt="" className='w-full xl:rotate-0 rotate-[60deg]' />
      </div>
      <img src={zig} alt="" className='absolute xl:left-0 xl:top-[49%] left-[-3.74%] top-[39.2%]' />
      <img src={greendot} alt="" className='absolute xl:block top-[8.5%] left-[8.8%] hidden' />
      <img src={yellowdot} alt="" className='absolute xl:block top-[12.2%] left-[38.7%] hidden' />
    </div>
  )
}

export default Hero