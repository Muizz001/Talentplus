import React from 'react'
import plus from "../assets/plus.svg"
import yellowdot from "../assets/yellowdot.svg"
import bluedot from "../assets/bluedot.svg"
import leftblob from "../assets/leftblob.svg"
import rightblob from "../assets/rightblob.svg"
import yellowzig from "../assets/yellowzig.svg"


const FAQ = [
    {
        question: "can i change my plan later?"
    },
    {
        question: "are the courses lifetime?"
    },
    {
        question: "do i get certified after taking courses?"
    },
    {
        question: "how do i reach out to mentors?"
    },
    {
        question: "do we get job ready after taking courses?"
    }
]

const FAQs = () => {
    return (
        <div className='w-full pt-[72px] pb-[32px] xl:pb-[83px] flex flex-col items-center relative'>
            <div className='flex flex-col items-center w-[355px] '>
                <div className='w-[381.5px] xl:text-left text-center xl:w-[827px]'>
                    <h2 className='font-[700] xl:text-[56px] text-[#000F24] xl:leading-[69px] leading-[36px] text-[24px] capitalize xl:text-center'>frequently asked questions</h2>
                </div>
                <div className='w-[332px] xl:w-[743px]  text-center mt-[4px] xl:mt-[8px]'>
                    <p className='capitalize font-[500] text-[8px] xl:text-[16px] xl:leading-[28px] text-[#A2A2A2] leading-[15px]'>high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
                </div>
            </div>
            <div className='w-[95%] max-w-[398px] xl:max-w-[1037px] mt-[24px] xl:mt-[82px]'>
                <div className="w-full">
                    <div className='w-full flex justify-between'>
                        <h5 className='xl:text-[24px] text-[14px] font-[900] text-[#004DB3]'>is there a free trial available?</h5>
                        <div className="xl:w-[14px] xl:h-[2px] w-[5.3px] h-[0.76px] bg-[#004Db3]" />
                    </div>
                    <div className='w-full mt-[6px] xl:mt-[]'>
                        <p className='capitalize font-[500] text-[8px] xl:text-[16px] xl:leading-[28px] text-[#A2A2A2] leading-[16px] pb-[12px] xl:pb-[] border-[#EAEAEA] border-b-[0.4px] xl:border-b-[1px]'>high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
                    </div>
                </div>
                {FAQ.map((q, i) => (
                    <div key={i} className='w-full mt-[24px] xl:mt-[32px] flex justify-between items-start h-[31px] xl:h-[64px] border-[#EAEAEA] border-b-[0.4px] xl:border-b-[1px]'>
                        <h5 className='font-[900] xl:text-[24px] text-[#000F24] xl:leading-[32px] leading-[19px] text-[14px] capitalize'>
                            {q.question}
                        </h5>
                        <img className='xl:w-[14px] w-[5px]' alt="" src={plus} />
                    </div>
                )

                )}
            </div>
            <img src={yellowdot} alt="" className='xl:w-2 absolute xl:right-[9.8%] xl:bottom-[10%] hidden xl:block' />
            <img src={leftblob} alt="" className=' absolute left-0 bottom-0 hidden xl:block' />
            <img src={rightblob} alt="" className=' absolute right-0 top-0 hidden xl:block' />
            <img src={yellowzig} alt="" className='absolute xl:left-0 top-[30%] w-[24px] xl:w-[75px] left-[-13px]' />
            <img src={bluedot} alt="" className='absolute xl:right-[14.5%] xl:top-[10%] top-[5%] w-[10px] xl:w-[26px] right-[2.83%]' />
        </div>
    )
}

export default FAQs