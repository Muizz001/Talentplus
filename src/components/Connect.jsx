import React from 'react'
import connect from "../assets/connect.png"

const Connect = () => {
    return (
        <div className="w-full flex items-center flex-col bg-[#004DB3]">
            <div className='flex flex-col items-center w-full '>
                <div className='w-[80%] text-center mt-[40px] xl:mt-[86px]'>
                    <p className='uppercase font-[500] text-[8px] xl:text-[16px] xl:leading-[28px] text-white leading-[15px]'>join our community</p>
                </div>
                <div className='w-[80%] xl:text-left text-center'>
                    <h2 className='font-[700] lg:text-[36px] xl:text-[56px] text-white xl:leading-[69px] leading-[36px] text-[24px] capitalize xl:text-center'>are you ready to connect with the future talent of the tech world</h2>
                </div>
                <div className='w-[332px] xl:w-[743px] xl:h-[max-content] text-center h-[48px] mt-[4px] xl:mt-[8px]'>
                    <p className='uppercase font-[500] text-[8px] xl:text-[16px] xl:leading-[28px] text-white leading-[15px]'>meet up with other techstars and grow together</p>
                </div>

            </div>
            <img src={connect} alt="" className='w-4/5 max-w-[983px]' />
            <button className='xl:py-[16px] xl:px-[32px] py-[8px] px-[16px] bg-white xl:text-[16px] text-[8px] text-[#004DB3] capitalize xl:rounded rounded-sm mb-[43px] xl:mb-[98px] xl:mt-[46px] mt-[26px] font-[700]'>join our community</button>
        </div>
    )
}

export default Connect