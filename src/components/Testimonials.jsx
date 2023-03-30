import React from 'react'
import leonard from "../assets/leonard.png"
import claretta from "../assets/claretta.png"
import jessica from "../assets/jessica.png"
import samuel from "../assets/samuel.png"
// import "./imageslider.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

const coursesArray = [
    {
        img: leonard,
        name: "leonard victor",
        post: "product designer"
    },
    {
        img: claretta,
        name: "leonard victor",
        post: "product designer"
    },
    {
        img: jessica,
        name: "leonard victor",
        post: "product designer"
    },
    {
        img: samuel,
        name: "leonard victor",
        post: "product designer"
    },

]
const Testimonials = () => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }
    return (
        <div className='w-full xl:pt-[80px] pt-[32px] flex flex-col items-center pb-[90px]'>
            <div className='flex flex-col items-center w-[355px] '>
                <div className='w-[381.5px] xl:text-left text-center h-[72px] xl:h-[max-content] xl:w-[827px]'>
                    <h2 className='font-[700] lg:text-[36px] xl:text-[56px] text-[#000F24] xl:leading-[69px] leading-[36px] text-[24px] capitalize xl:text-center'>what our clients are saying</h2>
                </div>
                <div className='w-[332px] xl:w-[743px] xl:h-[max-content] text-center h-[48px] mt-[4px] xl:mt-[8px]'>
                    <p className='capitalize font-[500] text-[8px] xl:text-[16px] xl:leading-[28px] text-[#A2A2A2] leading-[15px]'>high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
                </div>
            </div>
            <Slider {...settings} className='xl:mt-[24px] mt-[32px] w-full flex gap-[8px] xl:gap-[24px] justify-center '>
                {
                    coursesArray.map((course, i) => (
                        <div className='w-[332px!important] xl:w-[603px!important] xl:h-[296px] h-[201px]  bg-white xl:px-[24px] xl:pt-[40px] px-[16px] flex flex-col pt-[24px] rounded-2xl xl:rounded-3xl' key={i}>
                            <p className='font-[500] text-[10px] leading-[14px] xl:text-[14px] xl:leading-[26px] text-[#A2A2A2] capitalize'>high-defination video is video of higher resolution and quality than standard definition.high-defination video is video of higher resolution and quality than standard definition.high-defination video is video of higher resolution and quality than standard definition.high-defination video is video of higher resolution and quality than standard definition. </p>
                            <div className='mt-[16px] xl:mt-[20px] flex w-full items-center xl:h-[48px] xl:gap-[8px] gap-[2px] h-[24px]'>
                                <span className='flex items-center h-full'>
                                    <img src={course.img} alt={course.name} className="xl:w-[48px] w-[24px]" />

                                </span>
                                <span className='h-full '>
                                    <p className='text-black text-[10px] xl:text-[14px] capitalize font-[700]'>{course.name}</p>
                                    <p className='text-[#A1A1A1] text-[8px] xl:text-[12px] capitalize font-[400]'>{course.post}</p>
                                </span>
                            </div>
                        </div>

                    ))
                }
            </Slider>
        </div>
    )
}

export default Testimonials