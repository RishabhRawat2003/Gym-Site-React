import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <>
            <footer className='bg-[#2C323A] w-full h-auto mt-10 flex flex-col gap-3 md:flex-row xl:gap-6'>
                <div className='w-full h-auto flex flex-col my-10 px-7'>
                    <div className='h-auto w-full flex items-center text-lg text-white font-bold font-newFont cursor-pointer gap-2 lg:text-xl lg:gap-4'><span className='p-1 px-1.5 bg-[#A1F65E] rounded-full'><FontAwesomeIcon className='text-black' icon={faDumbbell} /></span> PowerPlayGYM</div>
                    <p className='text-gray-400 my-3 font-textFont lg:text-lg'>Welcome to PowerPlayGYM, your number one source for Excercise. We're dedicated to providing you the very best of Excercise/Workout. We now serve customers all over India, and are thrilled to be a part of the Excercise/GYM industry.</p>
                    <div className='flex flex-col w-[95%] border-[1px] mx-auto mt-5 pl-7 bg-gray-700 border-gray-400 md:pl-3 md:px-5'>
                        <p className='mt-7 text-[#A1F65E] font-bold'>Call : </p>
                        <p className='mt-1 text-gray-400 font-bold'>0123456789</p>
                        <p className='mt-1 text-gray-400 font-bold'>9876543210</p>
                        <p className='mt-3 text-[#A1F65E] font-bold'>Mail : </p>
                        <p className='mt-1 mb-7 text-gray-400 font-bold'>rajputrishabh359@gmail.com</p>
                    </div>
                </div>
                <div className='flex w-full mx-auto justify-around px-7 md:my-10 md:hidden lg:flex lg:justify-between'>
                    <div className='flex flex-col font-textFont'>
                        <span className='text-white font-bold text-lg lg:text-2xl'>ABOUT</span>
                        <span className='text-gray-400 text-sm mt-4 active:text-gray-100 md:hover:text-gray-100 cursor-pointer lg:text-lg'>About Us</span>
                        <span className='text-gray-400 text-sm mt-1 active:text-gray-100 md:hover:text-gray-100 cursor-pointer lg:text-lg'>Careers</span>
                        <span className='text-gray-400 text-sm mt-1 active:text-gray-100 md:hover:text-gray-100 cursor-pointer lg:text-lg'>Press</span>
                        <span className='text-gray-400 text-sm mt-1 active:text-gray-100 md:hover:text-gray-100 cursor-pointer lg:text-lg'>Blog</span>
                    </div>
                    <div className='flex flex-col font-textFont'>
                        <span className='text-white font-bold text-lg lg:text-2xl'>Help</span>
                        <span className='text-gray-400 text-sm mt-4 active:text-gray-100 md:hover:text-gray-100 cursor-pointer lg:text-lg'>Contact Us</span>
                        <span className='text-gray-400 text-sm mt-1 active:text-gray-100 md:hover:text-gray-100 cursor-pointer lg:text-lg'>FAQ</span>
                        <span className='text-gray-400 text-sm mt-1 active:text-gray-100 md:hover:text-gray-100 cursor-pointer lg:text-lg'>Accessibility</span>
                    </div>
                </div>
                <div className='flex flex-col w-full my-7 px-7 gap-3'>
                    <p className='text-white text-xl font-bold font-textFont lg:text-2xl'>Newsletter</p>
                    <input type="text" placeholder='Enter Your Email' className='px-3 py-2 border-[1px] text-white bg-gray-700 border-gray-400 mt-5 xl:w-[80%]' />
                    <div className='w-full h-auto mt-5'><span className='p-3 px-6 font-medium cursor-pointer bg-[#A1F65E] active:bg-[#80c64a] md:hover:bg-[#80c64a] text-black'>Subscribe</span></div>
                    <p className='text-2xl text-white flex gap-2 my-4 xl:text-3xl'><FaInstagram /><FaFacebook /><FaTwitter /></p>
                    <hr className='text-white w-[95%] mx-auto' />
                </div>
            </footer>
            <p className='mt-5 mb-2 w-full h-auto text-center text-xs font-textFont sm:text-sm md:text-lg lg:text-xl'>Copyright &#169; 2024 PowerPlayGYM. All Right Reserved.</p>
        </>
    )
}

export default Footer