import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import { FaBarsStaggered } from "react-icons/fa6";

function Header() {
  return (
    <header className='h-20 w-[90%] mx-auto flex justify-between'>
        <div className='h-full w-auto flex items-center justify-center text-lg font-newFont cursor-pointer gap-2 lg:text-xl lg:gap-4'><span className='p-1 px-1.5 bg-[#A1F65E] rounded-full'><FontAwesomeIcon icon={faDumbbell} /></span> PowerPlayGYM</div>
        <div className='h-full w-10 flex justify-center items-center md:hidden'><FaBarsStaggered size={25} className='cursor-pointer' /></div>
        <div className='hidden md:flex md:justify-between md:items-center md:h-full md:w-auto md:gap-5'>
            <div className='flex items-center h-full w-auto list-none gap-8 font-serif lg:text-lg lg:gap-12 xl:gap-16 2xl:gap-20 lg:mr-10 xl:mr-14'>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Classes</li>
            <li className='cursor-pointer'>Trainers</li>
            <li className='cursor-pointer'>Contact</li>
            </div>
            <div className='p-2 px-4 bg-gray-300 lg:text-lg font-serif cursor-pointer'>Book Class</div>
        </div>
    </header>
  )
}

export default Header