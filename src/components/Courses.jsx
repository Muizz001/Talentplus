import React from 'react'
import uxintro from "../assets/uxintro.png"
import audience from "../assets/audience.png"
import htmlintro from "../assets/htmlintro.png"
import jsintro from "../assets/jsintro.png"
import outroomintro from "../assets/outroomintro.png"
import introlivemarket from "../assets/introlivemarket.png"
import leonard from "../assets/leonard.png"
import jeffrey from "../assets/jeffrey.png"
import claretta from "../assets/claretta.png"
import jessica from "../assets/jessica.png"
import samuel from "../assets/samuel.png"
import adam from "../assets/adam.png"
import star from "../assets/star.svg"
import clock from "../assets/clock.svg"
import book from "../assets/book.svg"
import blueplus from "../assets/blueplus.svg"

const coursesArray = [
    {
        img: uxintro,
        category: "design",
        stars: "4.7k",
        views: "(32.7k)",
        title: "introduction to user research in ux design",
        length: "23hrs 50mins",
        lessons: "15 lessons",
        tutorImg: leonard,
        tutorName: "leonard victor",
        price: "$15.00"
    },
    {
        img: audience,
        category: "marketing",
        stars: "4.7k",
        views: "(32.7k)",
        title: "introduction to new marketing audience",
        length: "22hrs 30mins",
        lessons: "22 lessons",
        tutorImg: jeffrey,
        tutorName: "jeffrey williams",
        price: "$32.00"
    },
    {
        img: htmlintro,
        category: "development",
        stars: "4.7k",
        views: "(32.7k)",
        title: "introduction to HTML, CSS and bootsrap",
        length: "45hrs 50mins",
        lessons: "55 lessons",
        tutorImg: claretta,
        tutorName: "claretta mason",
        price: "$55.00"
    },
    {
        img: jsintro,
        category: "development",
        stars: "4.7k",
        views: "(32.7k)",
        title: "introduction to javascript, Git and Github",
        length: "30hrs 50mins",
        lessons: "22 lessons",
        tutorImg: jessica,
        tutorName: "jessica duke",
        price: "$45.00"
    },
    {
        img: outroomintro,
        category: "marketing",
        stars: "4.7k",
        views: "(32.7k)",
        title: "introduction to outroom marketing analysis",
        length: "33hrs 50mins",
        lessons: "26 lessons",
        tutorImg: samuel,
        tutorName: "samuel jacobs",
        price: "$25.00"
    },
    {
        img: introlivemarket,
        category: "marketing",
        stars: "4.7k",
        views: "(32.7k)",
        title: "introduction to live marketing analysis",
        length: "10hrs 50mins",
        lessons: "32 lessons",
        tutorImg: adam,
        tutorName: "adam smith",
        price: "$25.00"
    },
]

const Courses = () => {
    return (
        <div className='w-full pt-[72px] pb-[32px] xl:pb-[40px] flex flex-col items-center relative'>
            <div className='flex flex-col items-center '>
                <div className='max-w-[381.5px] xl:text-left text-center xl:h-[max-content] w-full xl:max-w-[827px]'>
                    <h2 className='font-[700] lg:text-[36px] xl:text-[56px] text-[#000F24] xl:leading-[69px] leading-[36px] text-[24px] capitalize xl:text-center'>browse our popular courses</h2>
                </div>
                <div className='max-w-[332px] w-full xl:max-w-[743px] xl:h-[max-content] text-center h-[48px] mt-[4px] xl:mt-[8px]'>
                    <p className='capitalize font-[500] text-[8px] xl:text-[16px] xl:leading-[28px] text-[#A2A2A2] leading-[15px]'>high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
                </div>
                <div className='flex gap-[16px] w-[279px] xl:w-[639px] xl:gap-[77px] xl:h-[46px] h-[19px] mt-[16px] xl:mt-[56px]'>
                    <div className='w-[69px] xl:w-[137px] xl:rounded h-full rounded-sm flex justify-center items-center cursor-pointer bg-white capitalize xl:text-[16px] text-[8px] leading-[11px] text-[#004DB3]'>all categories</div>
                    <div className='w-[42px] xl:w-[84px] xl:rounded h-full rounded-sm flex justify-center items-center cursor-pointer capitalize xl:text-[16px] text-[8px] leading-[11px] text-[#A1A1A1]'>design</div>
                    <div className='w-[66px] xl:w-[131px] xl:rounded h-full rounded-sm flex justify-center items-center cursor-pointer capitalize text-[8px] xl:text-[16px] leading-[11px] text-[#A1A1A1]'>development</div>
                    <div className='w-[54px] xl:w-[107px] xl:rounded h-full rounded-sm flex justify-center items-center cursor-pointer capitalize text-[8px] xl:text-[16px] leading-[11px] text-[#A1A1A1]'>marketing</div>
                </div>
            </div>
            <div className='mt-[24px] max-w-[396px] w-full flex flex-wrap gap-[8px] xl:gap-[24px] justify-center xl:w-[80%] xl:max-w-[1488px]'>
                {
                    coursesArray.map((course, i) => (
                        <div className='w-[194px] xl:w-[480px] xl:h-[576px] h-[234px] rounded bg-white xl:px-[20px] xl:py-[16px] px-[8px] flex flex-col py-[16px]' key={i}>
                            <img src={course.img} alt={course.title} className="w-[177px] h-[117px] xl:w-[439px] xl:h-[292px]  rounded-sm xl:rounded" />
                            <div className='mt-[3px] xl:mt-[16px] w-[176px] xl:w-[439px] xl:h-[24px] h-[9px] flex justify-between items-center'>
                                <div className='h-full flex justify-center items-center px-[8px] xl:px-[20px] xl:rounded-2xl rounded-md bg-[#1E5DCE] bg-opacity-[20%] text-[#1E5DCE] xl:text-[12px] text-[4px] capitalize'>{course.category}</div>
                                <div className='w-[31px] xl:w-[92px] xl:h-[16px] h-[5px] flex gap-[3px] xl:gap-[8px]'>
                                    <span className='h-full text-[4px] xl:text-[12px] text-[#A1A1A1] flex'>
                                        {course.stars}
                                        <img alt="" src={star} />
                                    </span>
                                    <span className='h-full text-[4px] xl:text-[12px] text-[#A1A1A1]'>
                                        {course.views}
                                    </span>
                                </div>
                            </div>
                            <div className='w-[155px] text-left xl:w-[386px] xl:mt-[24px] mt-[8px]'>
                                <h5 className='font-[700] xl:text-[24px] text-[#000F24] xl:leading-[30px] leading-[10px] text-[8px] capitalize'>{course.title}</h5>
                            </div>
                            <div className='mt-[4px] xl:mt-[16px] xl:w-[439px] xl:h-[24px] w-[176px] h-[9px] flex justify-between items-center'>
                                <span className='h-full text-[4px] xl:gap-[8px] xl:text-[16px] text-[#A1A1A1] flex gap-[4px] items-center'>
                                    <img alt="" src={clock} className="xl:w-[20px] xl:h-[20px]" />
                                    {course.length}
                                </span>
                                <span className='h-full text-[4px] text-[#A1A1A1] xl:text-[16px] xl:gap-[8px] gap-[4px] items-center flex'>
                                    <img alt="" src={book} className="xl:w-[20px] xl:h-[20px]" />
                                    {course.lessons}
                                </span>
                            </div>

                            <div className='mt-[16px] xl:mt-[24px] flex justify-between w-full items-center xl:h-[40px] h-[16px]'>
                                <span className='gap-[3px] xl:gap-[8px] flex items-center h-full'>
                                    <img src={course.tutorImg} alt={course.tutorName} className="xl:w-[40px] w-[16px]" />
                                    <p className='text-black text-[6px] xl:text-[16px] capitalize'>{course.tutorName}</p>
                                </span>
                                <span className='h-[10px] xl:h-[25px] xl:text-[20px] text-[#004DB3] text-[8px]'>
                                    {course.price}
                                </span>
                            </div>
                        </div>

                    ))
                }
            </div>
            <button className='py-[8px] px-[16px] xl:px-[32px] xl:py-[16px] mt-[24px] xl:mt-[40px] xl:text-[16px] bg-[#004DB3] text-white capitalize text-[8px] rounded-sm'>view courses</button>
            <img src={blueplus} alt="" className='w-[16.45px] xl:w-[50px] absolute xl:top-[12.2%] xl:left-[9.49%] left-[1.87%] top-[0.77%]' />
        </div>
    )
}

export default Courses