import React from 'react'
import logo from "../assets/techtime.png"
import facebook from "../assets/facebook.svg"
import twitter from "../assets/twitter.svg"
import youtube from "../assets/youtube.svg"
import instagram from "../assets/instagram.svg"
import discord from "../assets/discord.svg"

const socials = [
    {
        svg: facebook
    },
    {
        svg: twitter
    },
    {
        svg: youtube
    },
    {
        svg: instagram
    },
    {
        svg: discord
    }
]

const usefulLinks = [
    {
        link: "home"
    },
    {
        link: "about us"
    },
    {
        link: "our courses"
    },
    {
        link: "testimonials"
    },
    {
        link: "our community"
    },
]

const community = [
    {
        link: "help centers"
    },
    {
        link: "connections"
    },
    {
        link: "suggestion"
    },
    {
        link: "blog"
    },
    {
        link: "newsletter"
    },
]

const Footer = () => {
    return (
        <div className="w-full bg-[#000F24] px-[16px] flex justify-center pt-[40px] xl:px-[120px]">
            <div className='xl:flex max-w-[1488px] w-full xl:justify-start xl:flex-wrap xl:gap-[86px]'>
                <div className='flex flex-col gap-[24px] xl:gap-[26px]'>
                    <img src={logo} alt="TechTime" className='w-[101px] xl:w-[130px]' />
                    <p className='text-white w-[261px] xl:w-[281px] font-[400] text-[16px]  leading-[22px] capitalize'>reach out to us on any of our social media networks</p>
                    <div className='flex gap-[52px] h-[32px]'>
                        {socials.map((social, i) => (
                            <img src={social.svg} className="h-full" key={i} />
                        ))}
                    </div>
                </div>
                <div className='flex flex-col gap-[16px] mt-[81px] xl:mt-0'>
                    <h5 className='text-white font-[600] text-[24px] xl:text-[32px] leading-[30px] xl:leading-[32px] capitalize mb-[8px] xl:mb-[16px]'>useful links</h5>
                    {usefulLinks.map((link, i) => (
                        <a href="#" key={i} className='text-white font-[400] text-[16px] xl:text-[24px] leading-[22px] xl:leading-[32px] capitalize'>{link.link}</a>
                    ))}
                </div>
                <div className='flex flex-col gap-[16px] xl:mt-0 mt-[32px]'>
                    <h5 className='text-white font-[600] text-[24px] xl:text-[32px] leading-[30px] xl:leading-[32px] capitalize mb-[8px] xl:mb-[16px]'>community</h5>
                    {community.map((link, i) => (
                        <a href="#" key={i} className='text-white font-[400] text-[16px] xl:text-[24px] leading-[22px] xl:leading-[32px] capitalize'>{link.link}</a>
                    ))}
                </div>
                <div className='flex flex-col gap-[24px] mb-[164px] mt-[32px]'>
                    <h5 className='text-white font-[600] text-[24px] xl:text-[32px] leading-[30px] xl:leading-[32px] capitalize'>subscribe us</h5>
                    <div className='w-full max-w-[386px] xl:w-[486px] h-[46px] flex bg-[#054FB3] p-[1px]'>
                        <input className='w-[70%] h-full bg-[#2A2A2A] indent-4 text-white active:border-none active:outline-[0] focus:border-none focus:outline-[0]' placeholder='Nft123@gmail.com' />
                        <button className='w-[30%] h-full bg-[#054FB3] flex justify-center items-center text-[14px] font-[500] capitalize text-white'>send message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer