import React, { useState } from 'react'
import Common from './Images/Common.jpg'
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import FAQ from './FAQ';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function Contact() {

  const [index, setIndex] = useState(null)

  function handleSelection(i) {
    if (i === index) {
      setIndex(0)
    } else {
      setIndex(i)
    }
  }

  return (
    <div className='h-auto w-full mt-5' >
      <div className='w-[90%] h-auto mx-auto flex justify-center items-center relative'>
        <img src={Common} alt="image" className='opacity-90' />
        <span className='text-3xl text-white font-textFont font-bold absolute sm:text-6xl xl:text-8xl'>Contact Us</span>
      </div>
      <div className='w-[90%] h-auto mx-auto flex flex-col my-16 gap-4 md:flex-row xl:w-[70%] items-center'>
        <div className='w-full h-autp flex flex-col gap-1 sm:font-textFont'>
          <p className='text-blue-700 tracking-widest text-sm font-bold sm:text-lg'>WELCOME TO POWERPLAYGYM</p>
          <p className='font-bold text-2xl sm:text-4xl'>Get in Touch With Us</p>
          <p className='text-sm text-gray-500 mt-3 font-textFont sm:text-lg'>At PowerPlayGYM, we're committed to providing you with the best fitness experience possible. Whether you have questions, feedback, or just want to say hello, feel free to get in touch with us. </p>
          <p className='text-xl font-semibold mt-3'>Open Hours</p>
          <hr className='w-[70%]' />
          <p className='text-base text-gray-500 mt-1.5 sm:text-lg'><span className='font-bold text-black'>Mon - Fri :</span> 08:00 AM To 09:00 PM</p>
          <p className='text-base text-gray-500 mt-1.5 sm:text-lg'><span className='font-bold text-black'>Sat :</span> 09:00 AM To 06:00 PM</p>
          <p className='text-base text-gray-500 mt-1.5 sm:text-lg'><span className='font-bold text-black'>Sunday :</span> 09:00 AM To 02:00 PM</p>
        </div>
        <div className='w-full h-autp flex flex-col gap-1 px-8 py-14 bg-gray-200'>
          <p className='text-xl font-bold text-black sm:text-3xl'>Send Us a Message</p>
          <p className='text-blue-700 text-sm sm:text-lg'>Your email address will not be published *</p>
          <input type="text" placeholder='Enter Your Full Name' className='bg-gray-200 outline-none px-4 py-2 border-[1px] border-gray-400 mt-3' />
          <input type="email" placeholder='Enter Your Email' className='bg-gray-200 outline-none px-4 py-2 border-[1px] border-gray-400 mt-3' />
          <input type="text" placeholder='Subject' className='bg-gray-200 outline-none px-4 py-2 border-[1px] border-gray-400 mt-3' />
          <textarea placeholder='Message' className='bg-gray-200 min-h-32 max-h-32 outline-none px-4 py-2 border-[1px] border-gray-400 mt-3'></textarea>
          <div className='w-full h-auto mt-6'><span className='px-6 p-3 bg-black text-gray-200 font-semibold cursor-pointer'>Send Now</span></div>
        </div>
      </div>
      <div className='w-full h-auto py-20 bg-[#524FF5] flex items-center justify-center'>
        <div className='w-[90%] h-auto flex flex-col py-10 px-10 bg-[#A1F65E] gap-10 md:flex-row lg:w-[80%] xl:w-[70%]'>
          <div className='flex flex-col border-r-2 border-black pr-6'>
            <p className='flex items-center justify-center'><span className='p-5 rounded-full bg-black'><IoCallOutline size={20} className='text-white cursor-pointer' /></span></p>
            <p className='text-center font-bold font-textFont my-3 lg:text-lg'>Phone</p>
            <div className='w-[30%] mx-auto h-[3px] bg-black'></div>
            <p className='text-sm text-black font-textFont my-2 text-center lg:text-base'>Need immediate assistance? Give us a call! Our friendly staff is ready to assist you with any questions or concerns you might have about our services.</p>
            <p className='text-sm text-black text-center font-textFont lg:text-base'>(+91) 1234567890</p>
          </div>
          <div className='flex flex-col border-r-2 border-black pr-6'>
            <p className='flex items-center justify-center'><span className='p-5 rounded-full bg-black'><CiMail size={20} className='text-white cursor-pointer' /></span></p>
            <p className='text-center font-bold font-textFont my-3 lg:text-lg'>Mail</p>
            <div className='w-[30%] mx-auto h-[3px] bg-black'></div>
            <p className='text-sm text-black font-textFont my-2 text-center lg:text-base'>We love hearing from our members and visitors. For any inquiries, feedback, or support, feel free to drop us an email.</p>
            <p className='text-sm text-black text-center font-textFont lg:text-base'>rajputrishabh359@gmail.com</p>
          </div>
          <div className='flex flex-col pr-6'>
            <p className='flex items-center justify-center'><span className='p-5 rounded-full bg-black'><CiLocationOn size={20} className='text-white cursor-pointer' /></span></p>
            <p className='text-center font-bold font-textFont my-3 lg:text-lg'>Location</p>
            <div className='w-[30%] mx-auto h-[3px] bg-black'></div>
            <p className='text-sm text-black font-textFont my-2 text-center lg:text-base'>Come visit us at our gym! We’re conveniently located and ready to welcome you for a tour or a workout session.</p>
            <p className='text-sm text-black text-center font-textFont lg:text-base'>Chhawla, New Delhi - 110071</p>
          </div>
        </div>
      </div>
      <div className='w-[80%] h-auto flex flex-col mx-auto my-16'>
        <p className='text-center w-full h-auto text-[#524FF5] tracking-wider font-textFont font-bold sm:text-xl lg:text-3xl'>FAQ</p>
        <p className='text-center w-full h-auto mb-5 font-textFont font-bold text-lg sm:text-3xl lg:text-4xl'>Frequently Asked Questions</p>
        {
          FAQ.map((items, i) => (
            <div key={items.id} className='w-full h-auto text-sm py-2 px-1 bg-gray-100 flex flex-col font-textFont my-1 md:w-[80%] md:mx-auto lg:w-[70%] xl:w-[60%]'>
              <p className='flex justify-between items-center sm:text-lg lg:text-xl xl:text-2xl xl:py-2 xl:px-1'>{items.title} <span className='mx-1' onClick={() => handleSelection(items.id)}>{index === items.id ? <IoIosArrowUp size={20} className='cursor-pointer' /> : <IoIosArrowDown size={20} className='cursor-pointer' />}</span></p>
              {index === items.id ?
                <p className='mt-3 text-sm text-gray-600 sm:text-base lg:text-lg'>{items.answer}</p>
                : null
              }
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default Contact