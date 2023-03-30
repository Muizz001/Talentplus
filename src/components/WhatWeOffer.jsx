import React from 'react'
import offers from "../assets/offers.png"
import mentors from "../assets/mentors.svg"
import people from "../assets/people.svg"
import affordable from "../assets/affordable.svg"
import flexible from "../assets/flexible.svg"
import purpledot from "../assets/purpledot.svg"
import triangle from "../assets/greentriangle.svg"
import yellowzig from "../assets/yellowzig.svg"
import yellowdot from "../assets/yellowdot.svg"


const ourOffers = [
    {
        text: "experienced mentors",
        img: mentors
    },
    {
        text: "Affordable Prices",
        img: people
    },
    {
        text: "Affordable Prices",
        img: affordable
    },
    {
        text: "flexible learning",
        img: flexible
    },
]

const WhatWeOffer = () => {
    return (
        <div className='w-full flex justify-center pt-[40px] relative'>
            <div className='w-full flex flex-col lg:flex-row xl:px-[9%] lg:px-[40px] px-[20px] items-center xl:gap-[4%] xl:justify-center'>
                <div className='xl:min-w-[50%] w-full xl:max-w-[694px] mt-[40px] flex flex-col xl:items-start items-center'>
                    <div className='w-[381.5px] xl:text-left text-center h-[72px] xl:h-[max-content] xl:w-full'>
                        <h2 className='font-[700] lg:text-[36px] xl:text-[56px] text-[#000F24] lg:leading-[70px] leading-[36px] text-[24px] capitalize'>this is why we are best from others</h2>
                    </div>
                    <div className='w-[332px] xl:w-[90%] xl:h-[max-content] xl:text-left text-center h-[47px] mt-[8px] mb-[24px] xl:mt-[16px]'>
                        <p className='capitalize font-[500] text-[8px] xl:text-[16px] xl:leading-[28px] text-[#A2A2A2] leading-[15px]'>high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
                    </div>
                    <img src={offers} alt="" className='w-[390px] h-[260px] xl:w-full xl:h-auto' />
                </div>
                <div className='mt-[32px] xl:mt-[139px] xl:min-w-[50%] max-w-[396px] xl:max-w-[638px] w-full flex flex-wrap gap-[8px] xl:gap-[24px] justify-center'>
                    {ourOffers.map((offer, i) => (
                        <div key={i} className='flex w-[194px] h-[189px] xl:gap-[4px] xl:w-[45%] xl:h-auto bg-white rounded px-[16px] py-[24px] xl:py-[32px] xl:px-[24px] flex-col '>
                            <img src={offer.img} alt="" className='w-[32px] xl:w-[48px]' />
                            <h5 className='mt-[8px] xl:mt-[32px] mb-[4px] text-[12px] leading-[16px] xl:text-[16px] xl:leading-[22px] capitalize font-[700]'>{offer.text}</h5>
                            <p className='font-[500] text-[8px] leading-[11px] xl:text-[12px] xl:leading-[28px] text-[#A2A2A2] capitalize'>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. </p>
                        </div>
                    ))
                    }

                </div>
            </div>
            <img src={triangle} alt="" className='xl:w-[30px] absolute w-[10px] xl:left-[1.74%] left-[0%] xl:bottom-[19.6%] bottom-[7.43%]' />
            <img src={purpledot} alt="" className='xl:w-[26px] absolute w-[8px] xl:right-[1.74%] right-[0.93%] xl:bottom-[4.6%] bottom-[26.7%]' />
            <img src={yellowzig} alt="" className='absolute xl:block hidden top-[4.6%] w-[75px] right-[25.17%]' />
            <img src={yellowdot} alt="" className='absolute xl:block hidden top-[6.39%] w-[8px] left-[20.14%]' />
        </div>
    )
}

export default WhatWeOffer