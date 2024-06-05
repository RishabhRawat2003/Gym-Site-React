import React from 'react'
import Trainer1 from './Images/Trainers/Trainer1.jpg'
import Trainer4 from './Images/Trainers/Trainer4.jpg'
import Trainer5 from './Images/Trainers/Trainer5.jpg'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

function Trainers() {
    return (
        <>
            <p className='w-full h-auto text-center tracking-widest text-blue-700 font-textFont font-semibold sm:text-lg xl:text-2xl'>OUR TRAINERS</p>
            <p className='w-full h-auto text-center font-bold text-2xl font-textFont sm:text-3xl xl:text-4xl'>We Trained You to Gain</p>
            <div className='w-full h-auto flex flex-wrap justify-center my-7 gap-4 xl:gap-9 2xl:gap-12'>
                <div className='w-[90%] h-auto flex flex-col bg-[#2C323A] sm:w-[50%] md:w-[40%] lg:w-[35%] xl:w-[30%] 2xl:w-[25%]'>
                    <img src={Trainer1} alt="image" />
                    <p className='my-4 text-white font-textFont font-bold px-7 flex items-center justify-between lg:text-lg'>Rick Grimes <span className='flex items-center gap-1'>5<FaStar size={20} className='text-yellow-500' /></span></p>
                    <hr className='text-gray-700 w-[90%] mx-auto' />
                    <p className='px-7 mt-5 text-white font-textFont text-sm font-semibold lg:text-base'>Specialisations :</p>
                    <p className='px-7 mt-1 text-gray-300 font-textFont text-sm'>Focus on developing customized strength training programs for athletes and individuals looking to improve their power, strength, and endurance.</p>
                    <div className='mt-5 mb-7 px-7 flex gap-2'><FaInstagram size={20} className='text-white cursor-pointer' /> <FaFacebook size={20} className='text-white cursor-pointer' /> </div>
                </div>
                <div className='w-[90%] h-auto flex flex-col bg-[#2C323A] sm:w-[50%] md:w-[40%] lg:w-[35%] xl:w-[30%] 2xl:w-[25%]'>
                    <img src={Trainer4} alt="image" />
                    <p className='my-4 text-white font-textFont font-bold px-7 flex items-center justify-between lg:text-lg'>Amanda <span className='flex items-center gap-1'>4.5<FaStar size={20} className='text-yellow-500' /></span></p>
                    <hr className='text-gray-700 w-[90%] mx-auto' />
                    <p className='px-7 mt-5 text-white font-textFont text-sm font-semibold lg:text-base'>Specialisations :</p>
                    <p className='px-7 mt-1 text-gray-300 font-textFont text-sm'>Concentrate on functional training that improves everyday movement patterns and supports injury prevention and recovery.</p>
                    <div className='mt-5 mb-7 px-7 flex gap-2'><FaInstagram size={20} className='text-white cursor-pointer' /> <FaFacebook size={20} className='text-white cursor-pointer' /> <FaTwitter size={20} className='text-white cursor-pointer' />  </div>
                </div>
                <div className='w-[90%] h-auto flex flex-col bg-[#2C323A] sm:w-[50%] md:w-[40%] lg:w-[35%] xl:w-[30%] 2xl:w-[25%]'>
                    <img src={Trainer5} alt="image" />
                    <p className='my-4 text-white font-textFont font-bold px-7 flex items-center justify-between lg:text-lg'>Jennifer<span className='flex items-center gap-1'>5<FaStar size={20} className='text-yellow-500' /></span></p>
                    <hr className='text-gray-700 w-[90%] mx-auto' />
                    <p className='px-7 mt-5 text-white font-textFont text-sm font-semibold lg:text-base'>Specialisations :</p>
                    <p className='px-7 mt-1 text-gray-300 font-textFont text-sm'>Combine fitness training with nutrition advice to help clients achieve weight management goals and optimize sports performance.</p>
                    <div className='mt-5 mb-7 px-7 flex gap-2'><FaInstagram size={20} className='text-white cursor-pointer' /> <FaFacebook size={20} className='text-white cursor-pointer' /> </div>
                </div>
            </div>
        </>
    )
}

export default Trainers