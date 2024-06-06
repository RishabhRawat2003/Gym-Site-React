import React from 'react'
import Common from './Images/Common.jpg'
import Trainers from './TrainersComponent'
import Trainer2 from './Images/Trainers/Trainer2.jpg'
import Trainer3 from './Images/Trainers/Trainer3.jpg'
import Trainer6 from './Images/Trainers/Trainer6.jpg'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

function Trainer() {
  return (
    <div className='h-auto w-full mt-5' >
      <div className='w-[90%] h-auto mx-auto flex justify-center items-center relative'>
        <img src={Common} alt="image" className='opacity-90' />
        <span className='text-3xl text-white font-textFont font-bold absolute sm:text-6xl xl:text-8xl'>Meet our Trainers</span>
      </div>
      <div className='w-full h-auto my-16 flex flex-col'>
        <Trainers />
        <div className='w-full h-auto flex flex-wrap justify-center mb-7 gap-4 xl:gap-9 2xl:gap-12'>
          <div className='w-[90%] h-auto flex flex-col bg-[#2C323A] sm:w-[50%] md:w-[40%] lg:w-[35%] xl:w-[30%] 2xl:w-[25%]'>
            <img src={Trainer6} alt="image" />
            <p className='my-4 text-white font-textFont font-bold px-7 flex items-center justify-between lg:text-lg'>Rosita <span className='flex items-center gap-1'>5<FaStar size={20} className='text-yellow-500' /></span></p>
            <hr className='text-gray-700 w-[90%] mx-auto' />
            <p className='px-7 mt-5 text-white font-textFont text-sm font-semibold lg:text-base'>Specialisations :</p>
            <p className='px-7 mt-1 text-gray-300 font-textFont text-sm'>A Certified Personal Trainer with over 10 years of experience, is passionate about helping clients achieve their fitness goals through personalized training programs.</p>
            <div className='mt-5 mb-7 px-7 flex gap-2'><FaInstagram size={20} className='text-white cursor-pointer' /> <FaFacebook size={20} className='text-white cursor-pointer' /> </div>
          </div>
          <div className='w-[90%] h-auto flex flex-col bg-[#2C323A] sm:w-[50%] md:w-[40%] lg:w-[35%] xl:w-[30%] 2xl:w-[25%]'>
            <img src={Trainer3} alt="image" />
            <p className='my-4 text-white font-textFont font-bold px-7 flex items-center justify-between lg:text-lg'>Aliana <span className='flex items-center gap-1'>4.5<FaStar size={20} className='text-yellow-500' /></span></p>
            <hr className='text-gray-700 w-[90%] mx-auto' />
            <p className='px-7 mt-5 text-white font-textFont text-sm font-semibold lg:text-base'>Specialisations :</p>
            <p className='px-7 mt-1 text-gray-300 font-textFont text-sm'>A Strength and Conditioning Specialist, has been transforming lives through fitness for over 12 years. She holds certifications in functional training, high-intensity interval training (HIIT).</p>
            <div className='mt-5 mb-7 px-7 flex gap-2'><FaInstagram size={20} className='text-white cursor-pointer' /></div>
          </div>
          <div className='w-[90%] h-auto flex flex-col bg-[#2C323A] sm:w-[50%] md:w-[40%] lg:w-[35%] xl:w-[30%] 2xl:w-[25%]'>
            <img src={Trainer2} alt="image" />
            <p className='my-4 text-white font-textFont font-bold px-7 flex items-center justify-between lg:text-lg'>Henry<span className='flex items-center gap-1'>4<FaStar size={20} className='text-yellow-500' /></span></p>
            <hr className='text-gray-700 w-[90%] mx-auto' />
            <p className='px-7 mt-5 text-white font-textFont text-sm font-semibold lg:text-base'>Specialisations :</p>
            <p className='px-7 mt-1 text-gray-300 font-textFont text-sm'>Henry is a dedicated and highly experienced Fitness Coach with a career spanning over 9 years. He is certified in personal training, sports performance, and corrective exercise. </p>
            <div className='mt-5 mb-7 px-7 flex gap-2'><FaInstagram size={20} className='text-white cursor-pointer' /> <FaTwitter size={20} className='text-white cursor-pointer' /> </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trainer