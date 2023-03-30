import React from 'react'
import classes from "../assets/classes.png"
import students from "../assets/students.png"
import audio from "../assets/Audio-classes.svg"
import live from "../assets/Live-classes.svg"
import recorded from "../assets/Recorded-classes.svg"
import notes from "../assets/Notes.svg"
import crown from "../assets/features-crown.svg"
import dots from "../assets/dots.svg"
import donut from "../assets/donut.svg"
import greenzig from "../assets/greenzig.svg"
import purpledot from "../assets/purpledot.svg"

const Features = () => {
    return (
        <div className='w-full '>
            <div className='w-full flex flex-col lg:flex-row xl:px-[9%] lg:px-[40px] px-[20px] items-center xl:items-start xl:justify-center relative isolate'>
                <div className='xl:w-[50%] w-full xl:max-w-[694px] mt-[40px] flex flex-col xl:items-start items-center xl:mt-[149px]'>
                    <div className='w-[381.5px] xl:text-left text-center h-[72px] xl:h-[max-content] xl:w-full relative'>
                        <h2 className='font-[700] lg:text-[36px] xl:text-[56px] text-[#000F24] xl:leading-[70px] leading-[36px] text-[24px] capitalize'>High quality video, audio & live classes</h2>
                        <img src={crown} alt="" className='absolute left-[-19px] top-[-11px]' />
                    </div>
                    <div className='w-[332px] xl:w-[90%] xl:h-[max-content] xl:text-left text-center h-[47px] mt-[8px] xl:mt-[16px]'>
                        <p className='capitalize font-[500] text-[8px] xl:text-[16px] xl:leading-[28px] text-[#A2A2A2] leading-[15px]'>high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
                    </div>
                    <button className="py-[8px] px-[16px] xl:py-[16px] xl:px-[32px] flex justify-center items-center rounded-[2px] bg-[#004DB3] mt-[16px] xl:mt-[32px] text-white">View Courses</button>
                    <div className='mt-[24px] w-[277px] xl:w-[492px] xl:h-[168px] h-[80px] flex flex-wrap gap-[13px] xl:gap-[24px]'>
                        <div className='flex items-center justify-center xl:gap-[16px] gap-[8px] w-[125px] xl:w-[218px] xl:h-[72px] h-[33px] bg-white rounded'>
                            <img src={audio} alt="" className="xl:w-[32px] xl:h-[32px]" />
                            <p className='font-[700] text-[8px] xl:text-[16px] xl:leading-[22px] leading-[11px] text-[#000F24]'>Audio Classes</p>
                        </div>
                        <div className='flex items-center justify-center xl:gap-[16px] gap-[8px] w-[123px] xl:w-[232px] xl:h-[72px] h-[33px] bg-white rounded'>
                            <img src={live} alt="" className="xl:w-[32px] xl:h-[32px]" />
                            <p className='font-[700] text-[8px] xl:text-[16px] xl:leading-[22px] leading-[11px] text-[#000F24]'>Live Classes</p>
                        </div>
                        <div className='flex items-center justify-center xl:gap-[16px] gap-[8px] w-[146px] xl:w-[218px] xl:h-[72px] h-[33px] bg-white rounded'>
                            <img src={recorded} alt="" className="xl:w-[32px] xl:h-[32px]" />
                            <p className='font-[700] text-[8px] xl:text-[16px] xl:leading-[22px] leading-[11px] text-[#000F24]'>Recorded Classes</p>
                        </div>
                        <div className='flex items-center justify-center xl:gap-[16px] gap-[8px] w-[117px] xl:w-[207px] xl:h-[72px] h-[33px] bg-white rounded'>
                            <img src={notes} alt="" className="xl:w-[32px] xl:h-[32px]" />
                            <p className='font-[700] text-[8px] xl:text-[16px] xl:leading-[22px] leading-[11px] text-[#000F24]'>50+ Notes</p>
                        </div>
                    </div>
                </div>
                <div className='xl:min-w-[50%] w-[352px] h-[272px] xl:max-w-[694px] lg:mt-[96px] mt-[40px] xl:h-auto relative mr-[35px] isolate'>
                    <img src={students} alt="" className='absolute left-[26px] top-[53px] w-[90px] h-[36px] xl:w-[30%] xl:h-auto xl:top-[30%]' />
                    <img src={classes} className="w-full" alt="" />
                </div>
                <img src={donut} alt="" className='absolute top-[55.11%] right-[0] w-[45px] xl:w-[100px] xl:right-[0] xl:top-[74.6%]' />
                <img src={greenzig} alt="" className='absolute top-[30%] right-[0] w-[44px] xl:w-[60px] xl:right-[0] xl:top-[5%]' />
                <img src={purpledot} alt="" className='absolute top-[99%] right-[30%] w-[8px] xl:w-[12px] xl:right-[20%] xl:top-[95%]' />
                <img src={dots} className="absolute bottom-[4%] xl:bottom-[16.45%] xl:right-[6.95%] right-[8.16%] -z-10 xl:w-[198px] w-[91px]" alt="" />
            </div>
        </div>
    )
}

export default Features