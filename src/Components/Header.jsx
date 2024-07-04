import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { IoClose } from "react-icons/io5";

function Header() {

  const [bars, setBars] = useState(false)

  return (
    <>
      <header className='h-20 w-[90%] mx-auto flex justify-between'>
        <div className='h-full w-auto flex items-center justify-center text-lg font-newFont cursor-pointer gap-2 lg:text-xl lg:gap-4'><span className='p-1 px-1.5 bg-[#A1F65E] rounded-full'><FontAwesomeIcon icon={faDumbbell} /></span> PowerPlayGYM</div>
        <div className='h-full w-10 flex justify-center items-center md:hidden'>{bars ? <IoClose onClick={() => setBars(!bars)} size={25} className='cursor-pointer' /> : <FaBarsStaggered onClick={() => setBars(!bars)} size={25} className='cursor-pointer' />} </div>
        <div className='hidden md:flex md:justify-between md:items-center md:h-full md:w-auto md:gap-5'>
          <div className='flex items-center h-full w-auto list-none gap-8 font-serif lg:text-lg lg:gap-12 xl:gap-16 2xl:gap-20 lg:mr-10 xl:mr-14'>
            <NavLink to='/' className={({ isActive }) => `${isActive ? 'text-blue-500' : 'text-black'} cursor-pointer hover:text-blue-500`}>Home</NavLink>
            <NavLink to='/about' className={({ isActive }) => `${isActive ? 'text-blue-500' : 'text-black'} cursor-pointer hover:text-blue-500`}>About</NavLink>
            <NavLink to='/classes' className={({ isActive }) => `${isActive ? 'text-blue-500' : 'text-black'} cursor-pointer hover:text-blue-500`}>Classes</NavLink>
            <NavLink to='/trainers' className={({ isActive }) => `${isActive ? 'text-blue-500' : 'text-black'} cursor-pointer hover:text-blue-500`}>Trainers</NavLink>
            <NavLink to='/contact' className={({ isActive }) => `${isActive ? 'text-blue-500' : 'text-black'} cursor-pointer hover:text-blue-500`}>Contact</NavLink>
          </div>
          <div className='p-2 px-4 bg-gray-300 hover:bg-gray-400 lg:text-lg font-serif cursor-pointer'>Book Class</div>
        </div>
      </header>
      <div className={`${bars ? 'flex flex-col' : 'hidden'} w-full items-center h-48 border-[1px] duration-200 transition-all border-gray-400 rounded-md py-3 px-3 gap-3 sm:flex-row sm:h-20 sm:gap-10 sm:justify-center sm:text-lg md:hidden`} >
        <NavLink to='/' onClick={() => setBars(!bars)} className={({ isActive }) => `${isActive ? 'text-blue-500' : 'text-black'} cursor-pointer active:text-blue-500`}>Home</NavLink>
        <NavLink to='/about' onClick={() => setBars(!bars)} className={({ isActive }) => `${isActive ? 'text-blue-500' : 'text-black'} cursor-pointer active:text-blue-500`}>About</NavLink>
        <NavLink to='/classes' onClick={() => setBars(!bars)} className={({ isActive }) => `${isActive ? 'text-blue-500' : 'text-black'} cursor-pointer active:text-blue-500`}>Classes</NavLink>
        <NavLink to='/trainers' onClick={() => setBars(!bars)} className={({ isActive }) => `${isActive ? 'text-blue-500' : 'text-black'} cursor-pointer active:text-blue-500`}>Trainers</NavLink>
        <NavLink to='/contact' onClick={() => setBars(!bars)} className={({ isActive }) => `${isActive ? 'text-blue-500' : 'text-black'} cursor-pointer active:text-blue-500`}>Contact</NavLink>
      </div>
    </>
  )
}

export default Header