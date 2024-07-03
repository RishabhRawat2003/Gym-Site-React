import React, { useEffect, useState } from 'react'
import MainSmall from './Images/MainSmall.jpg'
import MainBig from './Images/MainBig.jpg'
import MainBig2 from './Images/MainBig2.jpg'
import Classes4 from './Images/Classes/Classes4.jpg'
import Classes6 from './Images/Classes/Classes6.jpg'
import Marquee from 'react-fast-marquee';
import { FaStar } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import Amenities1 from './Images/Amenities/Amenities1.jpg'
import Amenities2 from './Images/Amenities/Amenities2.jpg'
import Amenities3 from './Images/Amenities/Amenities3.jpg'
import Amenities4 from './Images/Amenities/Amenities4.jpg'
import Amenities6 from './Images/Amenities/Amenities6.jpg'
import { FaHeart } from "react-icons/fa6";
import { IoDiamondSharp } from "react-icons/io5";
import Trainers from './TrainersComponent'
import ClassesComponent from './ClassesComponent'
import { NavLink } from 'react-router-dom'

export default function HomePage() {
    function autoSlider() {
        const slides = document.querySelector('#slider');
        setInterval(() => {
            slides.scrollLeft += slides.clientWidth
            if (slides.scrollLeft === slides.scrollLeftMax) {
                slides.scrollLeft = 0
            }
        }, 6000);
    }
    useEffect(() => {
        autoSlider()
    }, [])
    return (
        <div className='h-auto w-full mx-auto mt-5'>
            <div className='h-auto w-[90%] mx-auto mt-5'>
                <div className='w-full h-auto relative flex justify-center'>
                    <img src={MainSmall} alt="Image" className='opacity-95 sm:hidden' />
                    <img src={MainBig} alt="Image" className='hidden sm:opacity-95 sm:block lg:hidden' />
                    <img src={MainBig2} alt="Image" className='hidden lg:opacity-95 lg:block' />
                    <div className='absolute bottom-[25%] flex flex-col items-center sm:gap-2 sm:bottom-[20%] xl:bottom-[25%]'>
                        <p className='text-4xl text-white font-bold font-textFont xl:text-5xl'>Keep Your Body</p>
                        <p className='text-4xl text-white font-bold font-textFont xl:text-5xl'>Fit & Strong</p>
                        <div className='flex h-auto w-auto gap-4 sm:gap-7 mt-4'>
                            <span className='p-2.5 px-4 font-textFont bg-[#A1F65E] active:scale-105 active:duration-100 md:hover:scale-105 md:hover:duration-100 cursor-pointer xl:text-lg xl:px-5'>Start Today</span>
                            <NavLink to='/about' className='p-2.5 px-4 font-textFont border-2 border-white text-white active:scale-105 active:duration-100 md:hover:scale-105 md:hover:duration-100 cursor-pointer xl:text-lg xl:px-5'>About Me</NavLink>
                        </div>
                    </div>
                </div>
                <div className='w-full h-auto flex flex-col my-16'>
                    <div className='h-auto w-full flex justify-between items-center'>
                        <div className='w-auto h-auto flex flex-col gap-2'>
                            <p className='tracking-widest text-blue-700 md:text-xl xl:text-2xl'>OUR FITNESS TRAINING</p>
                            <p className='font-bold text-lg font-mono md:text-xl xl:text-2xl'>Upcoming Classes</p>
                        </div>
                        <NavLink to='classes' className='p-2 px-5 bg-black text-white hidden sm:block lg:p-3 md:hover:text-black md:hover:bg-white md:hover:border-2 md:hover:border-black lg:px-6 cursor-pointer'>More Class</NavLink>
                    </div>
                    <ClassesComponent />
                </div>
            </div>
            <div className='w-full h-auto mb-5 bg-black py-1.5'><Marquee direction='left' speed={70} className='text-sm text-white font-textFont font-bold sm:text-2xl md:text-3xl lg:text-4xl xl:tracking-widest'> FOCUS ON YOUR <span className='text-[#A1F65E] mx-1 md:mx-1.5 lg:mx-2 xl:mx-2.5'> FITNESS </span> NOT YOUR LOSS.</Marquee></div>
            <div className='h-auto w-[90%] mx-auto mt-5'>
                <div className='w-full h-auto my-16 flex flex-col'>
                    <p className='text-blue-700 tracking-wider sm:text-lg lg:text-2xl'>About</p>
                    <p className='text-xl font-textFont font-semibold sm:text-2xl lg:text-4xl lg:my-2'>Respect Your Body,</p>
                    <p className='text-xl font-textFont font-semibold sm:text-2xl lg:text-4xl'>It's the Only One You Get</p>
                    <p className='my-5 text-sm text-gray-700 sm:text-base lg:text-xl'>Welcome to PowerPlayGYM, your number one source for Excercise. We're dedicated to providing you the very best of Excercise/Workout. We now serve customers all over India, and are thrilled to be a part of the Excercise/GYM industry.</p>
                    <div className='w-full h-auto flex flex-col xl:flex-row xl:items-center xl:gap-4'>
                        <div className='w-full h-auto flex flex-col bg-gray-200 px-3 py-5 sm:flex-row sm:gap-2 xl:h-[30vh]'>
                            <div className='w-auto h-auto flex flex-col sm:justify-center md:gap-2'>
                                <p className='text-lg font-bold font-textFont sm:text-xl md:text-2xl xl:text-xl'>Motivation</p>
                                <p className='text-sm text-gray-700 md:text-lg xl:text-sm'>What motivates us is the belief that small changes can lead to a big impact. Every step towards sustainability is a step towards a healthier planet for future generations.</p>
                            </div>
                            <img src={Classes4} alt="image" className='mt-4 sm:w-[70%] xl:w-[100%]' />
                        </div>
                        <div className='w-full h-auto flex flex-col bg-gray-200 px-3 py-5 my-3 sm:flex-row sm:gap-2 xl:h-[30vh]'>
                            <div className='w-auto h-auto flex flex-col sm:justify-center md:gap-2'>
                                <p className='text-lg font-bold font-textFont sm:text-xl md:text-2xl xl:text-xl'>Inspire</p>
                                <p className='text-sm text-gray-700 md:text-lg xl:text-sm'>At PowerPlayGYM, we are driven by a deep passion for health, wellness, and the transformative power of fitness. Our inspiration comes from the remarkable stories of individuals who push beyond their limits, break barriers, and redefine what is possible.</p>
                            </div>
                            <img src={Classes6} alt="image" className='mt-4 sm:w-[100%] xl:w-[14vw]' />
                        </div>
                    </div>
                </div>
                <div className='w-full h-[1px] bg-gray-700'></div>
                <div className='w-full h-auto flex flex-col my-8 gap-2 justify-center sm:flex-row sm:flex-wrap md:justify-around'>
                    <div className='p-2 px-2.5 bg-gray-200 flex items-center gap-2 lg:p-3 lg:w-60 lg:text-lg lg:gap-3 2xl:text-xl'>
                        <span className='p-1 px-2 bg-black text-white font-bold'>01</span>
                        Fitness Training
                    </div>
                    <div className='p-2 px-2.5 bg-gray-200 flex items-center gap-2 lg:p-3 lg:w-60 lg:text-lg lg:gap-3 2xl:text-xl'>
                        <span className='p-1 px-2 bg-black text-white font-bold'>02</span>
                        Regular Routine
                    </div>
                    <div className='p-2 px-2.5 bg-gray-200 flex items-center gap-2 lg:p-3 lg:w-60 lg:text-lg lg:gap-3 2xl:text-xl'>
                        <span className='p-1 px-2 bg-black text-white font-bold'>03</span>
                        Diet Maintenance
                    </div>
                </div>
                <div className='w-full h-[1px] bg-gray-700'></div>
                <div className='w-full h-auto my-16 flex flex-col'>
                    <Trainers />
                </div>
            </div>
            <div className='w-full h-auto flex flex-col my-5 bg-[#524FF5]'>
                <p className='w-full h-auto text-center tracking-widest text-white font-semibold font-textFont my-5 sm:text-lg md:text-2xl lg:my-10 2xl:text-3xl'>GYM AMENITIES</p>
                <div className='w-full h-auto flex '>
                    <div className='h-auto w-[100%] hidden lg:flex lg:items-center lg:justify-center'>
                        <div id='slider' className='h-auto w-[90%] flex overflow-x-hidden scroll-smooth xl:w-[70%] 2xl:w-[80%]'>
                            <img src={Amenities1} alt="image" className='slides object-cover' />
                            <img src={Amenities2} alt="image" className='slides object-cover' />
                            <img src={Amenities3} alt="image" className='slides object-cover' />
                            <img src={Amenities4} alt="image" className='slides object-cover' />
                            <img src={Amenities6} alt="image" className='slides object-cover' />
                        </div>
                    </div>
                    <div className='w-full h-auto lg:mr-2'>
                        <hr className='text-gray-400 w-[90%] mx-auto' />
                        <span className='flex items-center w-32 h-10 ml-5 mt-7 text-white gap-2 bg-black px-3 font-textFont'><FaCheckCircle className='text-[#A1F65E]' size={20} />LOCKERS</span>
                        <p className='ml-5 text-white mt-4 mb-6 text-sm lg:text-lg'>Secure your belongings with ease in our modern, spacious lockers. Enjoy peace of mind knowing your valuables are safe while you focus on your workout.</p>
                        <hr className='text-gray-400 w-[90%] mx-auto' />
                        <hr className='text-gray-400 w-[90%] mx-auto' />
                        <span className='flex items-center w-52 h-10 ml-5 mt-7 text-white gap-2 bg-black px-3 font-textFont'><FaCheckCircle className='text-[#A1F65E]' size={20} />CHANGING ROOMS</span>
                        <p className='ml-5 text-white mt-4 mb-6 text-sm lg:text-lg'>Our clean and comfortable changing rooms offer ample space and privacy, making it easy for you to transition from your workout to your day.</p>
                        <hr className='text-gray-400 w-[90%] mx-auto' />
                        <hr className='text-gray-400 w-[90%] mx-auto' />
                        <span className='flex items-center w-36 h-10 ml-5 mt-7 text-white gap-2 bg-black px-3 font-textFont'><FaCheckCircle className='text-[#A1F65E]' size={20} />FUEL BAR</span>
                        <p className='ml-5 text-white mt-4 mb-6 text-sm lg:text-lg'>Recharge and refuel at our Fuel Bar, offering a variety of nutritious snacks and beverages to keep you energized before, during, and after your workout.</p>
                        <hr className='text-gray-400 w-[90%] mx-auto' />
                        <hr className='text-gray-400 w-[90%] mx-auto' />
                        <span className='flex items-center w-72 h-10 ml-5 mt-7 text-white gap-2 bg-black px-3 font-textFont'><FaCheckCircle className='text-[#A1F65E]' size={20} />COMPLIMENTARY TOWELS</span>
                        <p className='ml-5 text-white mt-4 mb-6 text-sm lg:text-lg'>Stay fresh and dry with our complimentary towels, available for your convenience during every visit.</p>
                        <hr className='text-gray-400 w-[90%] mx-auto' />
                        <hr className='text-gray-400 w-[90%] mx-auto' />
                        <span className='flex items-center w-52 h-10 ml-5 mt-7 text-white gap-2 bg-black px-3 font-textFont'><FaCheckCircle className='text-[#A1F65E]' size={20} />WIFI & RESTROOMS</span>
                        <p className='ml-5 text-white mt-4 mb-6 text-sm lg:text-lg'>Stay connected with our high-speed Wi-Fi, available throughout the gym. Stream your favorite music, track your workouts, or catch up on emails seamlessly.Freshen up in our well-maintained restrooms, complete with hot showers. Perfect for a relaxing rinse after an intense workout session.</p>
                        <hr className='text-gray-400 w-[90%] mx-auto' />
                        <hr className='text-gray-400 w-[90%] mx-auto' />
                        <span className='flex items-center w-72 h-10 ml-5 mt-7 text-white gap-2 bg-black px-3 font-textFont'><FaCheckCircle className='text-[#A1F65E]' size={20} />HOT SHOWERS & HAIR CARE</span>
                        <p className='ml-5 text-white mt-4 mb-6 text-sm lg:text-lg'>Freshen up in our well-maintained restrooms, complete with hot showers. Perfect for a relaxing rinse after an intense workout session. Look your best post-workout with our hair care amenities, including hair dryers and styling products, available in our changing rooms.</p>
                        <hr className='text-gray-400 w-[90%] mx-auto mb-10' />
                    </div>
                </div>
            </div>
            <div className='w-full h-auto flex flex-col my-16'>
                <p className='text-[#524FF5] tracking-widest text-md text-center font-semibold font-textFont sm:text-lg lg:text-xl'>OUR PLANS</p>
                <p className='text-xl text-center font-bold font-textFont sm:text-2xl lg:text-3xl'>Choose The Program</p>
                <div className='w-[80%] h-auto flex flex-wrap my-5 mx-auto gap-4 sm:w-full sm:justify-center xl:gap-8'>
                    <div className='w-full h-auto flex flex-col bg-gray-200 sm:w-[30%] sm:h-[40%] xl:w-[22%]'>
                        <p className='flex font-bold text-2xl items-center gap-2 px-4 my-4'><FaHeart size={20} className='text-red-500' />Basic</p>
                        <p className='w-[85%] mx-auto h-[1px] bg-gray-400'></p>
                        <p className='font-semibold w-full text-center text-xl mt-7 font-textFont lg:text-2xl'>$25 / month</p>
                        <p className='font-semibold w-full text-center text-sm mt-2 mb-7 font-textFont lg:text-base'>30% Off for Begineers</p>
                        <p className='w-[85%] mx-auto h-[1px] bg-gray-400'></p>
                        <p className='text-[#524FF5] text-xs w-full text-center font-semibold font-textFont mt-6 lg:text-base'>1 Day Free Trail </p>
                        <p className='text-gray-800 text-xs w-full text-center font-textFont mt-2 lg:text-base'>20 Minutes of <span className='font-bold text-black'>Heart-Pumping Spin</span></p>
                        <p className='text-gray-800 text-xs w-full text-center font-textFont mt-2 lg:text-base'>20 Minutes of Strength Training</p>
                        <p className='text-gray-800 text-xs w-full text-center font-textFont mt-2 lg:text-base'><span className='font-bold text-black'>50 Class</span> Times Available</p>
                        <p className='text-gray-800 text-xs w-full text-center font-textFont mt-2 lg:text-base'>20 Minutes of Invigorating Yoga</p>
                        <div className='w-full h-auto flex justify-center items-center mt-10 mb-5'>
                            <span className='p-3 px-6 bg-black text-white active:bg-gray-200  active:text-black md:hover:bg-gray-200  md:hover:text-black border-black border-2 cursor-pointer'>Get Started</span>
                        </div>
                    </div>
                    <div className='w-full h-auto flex flex-col bg-gray-200 sm:w-[30%] xl:w-[22%]'>
                        <p className='flex font-bold text-2xl items-center gap-2 px-4 my-4'><FaStar size={25} className='text-[#524FF5]' />Standard</p>
                        <p className='w-[85%] mx-auto h-[1px] bg-gray-400'></p>
                        <p className='font-semibold w-full text-center text-xl mt-7 font-textFont lg:text-2xl'>$35 / month</p>
                        <div className='w-full h-auto flex justify-center mt-2 mb-7'><span className='p-2 px-4 bg-[#A1F65E] font-semibold text-black cursor-pointer'>Most Popular</span></div>
                        <p className='w-[85%] mx-auto h-[1px] bg-gray-400'></p>
                        <p className='text-[#524FF5] text-xs w-full text-center font-semibold font-textFont mt-6 lg:text-base'>2 Weeks Free Trail </p>
                        <p className='text-gray-800 text-xs w-full text-center font-textFont mt-2 lg:text-base'>30 Minutes of <span className='font-bold text-black'>Heart-Pumping Spin</span></p>
                        <p className='text-gray-800 text-xs w-full text-center font-textFont mt-2 lg:text-base'>30 Minutes of Strength Training</p>
                        <p className='text-gray-800 text-xs w-full text-center font-textFont mt-2 lg:text-base'><span className='font-bold text-black'>50 Class</span> Times Available</p>
                        <p className='text-gray-800 text-xs w-full text-center font-textFont mt-2 lg:text-base'>20 Minutes of Invigorating Yoga</p>
                        <p className='text-gray-800 text-xs w-full text-center font-textFont mt-2 lg:text-base'>Unlimited <span className='font-bold'>CrossFit</span> Classes</p>
                        <p className='text-gray-800 text-xs w-full text-center font-textFont mt-2 lg:text-base'>One Full Month Free</p>
                        <p className='text-gray-800 text-xs w-full text-center font-textFont mt-2 lg:text-base'>First 25 Members Only</p>
                        <div className='w-full h-auto flex justify-center items-center mt-10 mb-5'>
                            <span className='p-3 px-6 border-2 active:bg-black active:text-white active:border-white md:hover:bg-black md:hover:text-white md:hover:border-white border-black cursor-pointer'>Get Started</span>
                        </div>
                    </div>
                    <div className='w-full h-auto flex flex-col bg-gray-200 sm:w-[30%] sm:h-[40%] xl:w-[22%]'>
                        <p className='flex font-bold text-2xl items-center gap-2 px-4 my-4'><IoDiamondSharp size={20} className='text-orange-600' />Premium</p>
                        <p className='w-[85%] mx-auto h-[1px] bg-gray-400'></p>
                        <p className='font-semibold w-full text-center text-xl mt-7 font-textFont lg:text-2xl'>$50 / month</p>
                        <p className='font-semibold w-full text-center text-sm mt-2 mb-7 font-textFont lg:text-base'>10% Off for Yoga Class</p>
                        <p className='w-[85%] mx-auto h-[1px] bg-gray-400'></p>
                        <p className='text-[#524FF5] text-xs w-full text-center font-semibold font-textFont mt-6 lg:text-base'>2 Weeks Free Trail </p>
                        <p className='text-gray-800 text-xs w-full text-center font-textFont mt-2 lg:text-base'>50 Minutes of <span className='font-bold text-black'>Heart-Pumping Spin</span></p>
                        <p className='text-gray-800 text-xs w-full text-center font-textFont mt-2 lg:text-base'>50 Minutes of Strength Training</p>
                        <p className='text-gray-800 text-xs w-full text-center font-textFont mt-2 lg:text-base'><span className='font-bold text-black'>60 Class</span> Times Available</p>
                        <p className='text-gray-800 text-xs w-full text-center font-textFont mt-2 lg:text-base'>50 Minutes of Invigorating Yoga</p>
                        <div className='w-full h-auto flex justify-center items-center mt-10 mb-5'>
                            <span className='p-3 px-6 bg-black text-white active:bg-gray-200  active:text-black md:hover:bg-gray-200  md:hover:text-black border-black border-2  cursor-pointer'>Get Started</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
