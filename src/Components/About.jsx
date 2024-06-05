import React from 'react'
import Cover1 from './Images/Cover1.jpg'
import Cover from './Images/Cover.jpg'
import About1 from './Images/About/About.jpg'
import Image2 from './Images/Classes/Classes6.jpg'
import { GrCertificate } from "react-icons/gr";
import { IoNutrition } from "react-icons/io5";
import { IoIosMan } from "react-icons/io";
import Trainers from './Trainers'

function About() {
    return (
        <div className='h-auto w-full mx-auto mt-5' >
            <div className='w-[90%] h-auto relative mx-auto flex flex-col justify-center items-center'>
                <img src={Cover1} alt="image" className='opacity-90 md:hidden' />
                <img src={Cover} alt="image" className='opacity-90 hidden md:block' />
                <p className='font-textFont absolute text-white bottom-14 text-xl font-bold sm:text-3xl md:bottom-32 md:text-5xl xl:bottom-56 xl:text-6xl'>Start with us the body and</p>
                <p className='font-textFont absolute text-white bottom-8 text-xl font-bold sm:text-3xl sm:bottom-5 md:text-5xl md:bottom-20 xl:bottom-40 xl:text-6xl'>mind clensing</p>
            </div>
            <div className='w-[90%] h-auto flex flex-col mx-auto my-10 gap-3 md:flex-row'>
                <div className='w-full h-auto flex flex-col font-textFont'>
                    <p className='px-3 text-[#524FF5] tracking-widest text-xl font-smibold sm:text-xl lg:text-2xl'>WELCOME</p>
                    <p className='px-3 font-semibold text-2xl sm:text-3xl lg:text-4xl'>The story Behind</p>
                    <p className='px-3 font-semibold text-2xl sm:text-3xl lg:text-4xl'>Our Gym</p>
                    <p className='px-3 text-sm text-gray-500 mt-3 mb-5 sm:text-base lg:text-lg'>Welcome to PowerPlayGYM, where our story is one of passion, dedication, and community. Our journey began with a simple yet profound vision: to create a space where individuals of all fitness levels could come together to achieve their personal health and wellness goals.</p>
                    <div className='px-5 py-4 bg-gray-200 flex flex-col'>
                        <p className='font-semibold text-lg lg:text-2xl'>Story</p>
                        <p className='text-sm text-gray-500 mt-1 mb-5 lg:text-base xl:text-lg'>Our story started with a simple idea: to create a place where everyone, regardless of their fitness level, could come together and achieve their personal best. our founder, was driven by a deep love for fitness and a desire to share this passion with others.</p>
                        <img src={About1} alt="image" />
                    </div>
                </div>
                <div className='w-full h-auto flex flex-col font-textFont gap-3'>
                    <div className='flex flex-col relative justify-end'>
                        <img src={Image2} alt="image" className='opacity-70' />
                        <p className='font-semibold text-lg text-white absolute bottom-20 px-3 md:bottom-28 lg:text-2xl'>Our Mission</p>
                        <p className='text-xs text-white mb-3 absolute px-3 sm:text-base'>At PowerPlayGYM, our mission is to inspire and empower individuals to achieve their highest potential through fitness, wellness, and community support. <span className='hidden xl:inline'>We are dedicated to creating an inclusive and motivating environment where everyone feels welcome and valued, regardless of their fitness level or background.</span></p>
                    </div>
                    <div className='flex flex-col py-5 px-3 bg-[#A1F65E]'>
                        <p className='font-semibold text-lg lg:text-2xl'>Our Value</p>
                        <p className='text-xs mt-1 sm:text-base'>At PowerPlayGYM, our core values guide everything we do. We believe in the power of fitness to transform lives and strive to empower our members to take control of their health journeys through personalized training and motivational support. Our community is built on mutual respect, encouragement, and camaraderie, fostering a supportive environment where everyone feels welcome and valued. </p>
                    </div>
                </div>
            </div>
            <div className='w-full h-auto flex flex-col items-center bg-[#2C323A] font-textFont'>
                <div className='w-[80%] flex justify-between mt-20 items-center mb-3'>
                    <div className='flex flex-col'>
                        <p className='tracking-widest text-[#A1F65E] sm:text-lg md:text-xl xl:text-2xl'>Values</p>
                        <p className='text-white font-bold text-xl sm:text-2xl md:text-3xl xl:text-4xl'>My core work values</p>
                    </div>
                    <span className='p-2 px-4 bg-[#A1F65E] text-black cursor-pointer hidden sm:inline xl:p-3 xl:px-6'>Book a Class</span>
                </div>
                <div className='w-[80%] flex flex-col mt-3 mb-20 gap-4 lg:flex-row'>
                    <div className='w-full h-auto flex flex-col bg-gray-500 items-center gap-2'>
                        <p className='w-[80%] h-auto mt-10'><GrCertificate size={50} className='text-white cursor-pointer' /></p>
                        <p className='text-white w-[80%] font-bold text-lg md:text-xl'>Certified Trainer</p>
                        <p className='text-gray-200 w-[80%] text-sm mb-10 md:text-base lg:text-sm xl:text-lg'>At PowerPlayGYM, we pride ourselves on having a team of highly qualified and certified trainers who are dedicated to helping you achieve your fitness goals. Our trainers come with a wealth of experience, extensive training, and a passion for health and wellness.</p>
                    </div>
                    <div className='w-full h-auto flex flex-col bg-gray-500 items-center gap-2'>
                        <p className='w-[80%] h-auto mt-10'><IoNutrition size={50} className='text-white cursor-pointer' /></p>
                        <p className='text-white w-[80%] font-bold text-lg md:text-xl'>Nutrition & Diet</p>
                        <p className='text-gray-200 w-[80%] text-sm mb-10 md:text-base lg:text-sm xl:text-lg'>At PowerPlayGYM, we understand the vital role nutrition plays in achieving fitness goals. Our expert nutritionists craft personalized diet plans tailored to your specific needs, whether you're aiming for weight loss, muscle gain, or overall wellness.</p>
                    </div>
                    <div className='w-full h-auto flex flex-col bg-gray-500 items-center gap-2'>
                        <p className='w-[80%] h-auto mt-10'><IoIosMan size={50} className='text-white cursor-pointer' /></p>
                        <p className='text-white w-[80%] font-bold text-lg md:text-xl'>Years of experience</p>
                        <p className='text-gray-200 w-[80%] text-sm mb-10 md:text-base lg:text-sm xl:text-lg'>With over 10 years of experience in the fitness industry, PowerPlayGYM has been dedicated to helping individuals achieve their health and wellness goals through expert guidance, innovative programs, and a supportive community.</p>
                    </div>
                </div>
            </div>
            <div className='w-[90%] h-auto mx-auto'>
                <div className='w-full h-auto flex flex-wrap justify-center'>
                    <div className='flex flex-col justify-center items-center w-40 h-32 border-x-[1px] border-b-[1px] border-gray-400 md:w-44 md:h-36 xl:w-56 xl:h-48 2xl:w-60 2xl:h-52'>
                        <p className='text-6xl font-bold'>10+</p>
                        <p className='text-sm font-bold xl:text-lg'>Years of Experience</p>
                    </div>
                    <div className='flex flex-col justify-center items-center w-40 h-32 border-x-[1px] border-b-[1px] border-gray-400 md:w-44 md:h-36 xl:w-56 xl:h-48 2xl:w-60 2xl:h-52'>
                        <p className='text-6xl font-bold'>500+</p>
                        <p className='text-sm font-bold xl:text-lg'>Happy Clients</p>
                    </div>
                    <div className='flex flex-col justify-center items-center w-40 h-32 border-x-[1px] border-b-[1px] border-gray-400 md:w-44 md:h-36 xl:w-56 xl:h-48 2xl:w-60 2xl:h-52'>
                        <p className='text-6xl font-bold'>50+</p>
                        <p className='text-sm font-bold xl:text-lg'>Expert Trainers</p>
                    </div>
                    <div className='flex flex-col justify-center items-center w-40 h-32 border-x-[1px] border-b-[1px] border-gray-400 md:w-44 md:h-36 xl:w-56 xl:h-48 2xl:w-60 2xl:h-52'>
                        <p className='text-6xl font-bold'>25+</p>
                        <p className='text-sm font-bold xl:text-lg'>Instagram Followers</p>
                    </div>
                </div>
            </div>
            <div className='w-full h-auto my-16 flex flex-col'>
                <Trainers />
            </div>
        </div>
    )
}

export default About