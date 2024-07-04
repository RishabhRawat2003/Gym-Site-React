import React from 'react'
import Common from '../Images/Common.jpg'
import Classes5 from '../Images/Classes/Classes5.jpg'

function Yoga() {
  return (
    <div className='w-full h-auto'>
      <div className='w-[90%] h-auto mx-auto flex flex-col'>
        <div className='w-full h-auto flex justify-center items-center relative'>
          <img src={Common} alt="image" className='opacity-90' />
          <span className='text-3xl text-white font-textFont font-bold absolute sm:text-6xl xl:text-8xl'>Yoga</span>
        </div>
        <div className='w-full h-auto flex flex-col my-16 gap-5 md:gap-16'>
          <div className='w-full h-auto flex flex-col gap-8 md:flex-row md:gap-4'>
            <img src={Classes5} alt="image" className='md:w-[58vw] md:object-cover xl:w-[65vw]' />
            <div className='w-full h-auto flex flex-col py-10 px-4 bg-gray-100 gap-4 md:h-[65vh]'>
              <p className='text-3xl font-bold font-textFont sm:text-4xl md:text-3xl xl:text-4xl'>Class Details</p>
              <p className='text-sm text-gray-700 font-textFont sm:text-base md:text-sm 2xl:text-base'>Yoga is a holistic practice that originated in ancient India, encompassing physical postures (asanas), breath control (pranayama), meditation, and ethical principles.</p>
              <div className='w-full h-auto flex flex-col my-7 font-textFont gap-3 sm:text-lg md:text-base xl:text-lg'>
                <p className='text-gray-700 text-sm'>Duration : <span className='text-black font-bold'>45 MINUTES</span></p>
                <p className='text-gray-700 text-sm'>Intensity : <span className='text-black font-bold'>MEDIUM</span></p>
                <p className='text-gray-700 text-sm'>Fitness Level : <span className='text-black font-bold'>Advanced</span></p>
                <p className='text-gray-700 text-sm'>Schedule : <span className='text-black font-bold'>Monday, Saturday</span></p>
              </div>
              <div className='w-full h-auto mb-7'>
                <span className='text-white bg-black text-sm p-3 px-4 cursor-pointer active:bg-gray-700 md:hover:bg-gray-800 select-none font-textFont sm:text-base md:text-sm xl:text-base'>Book a Class</span>
              </div>
            </div>
          </div>
          <div className='w-full h-auto flex flex-col font-textFont gap-4 md:gap-8'>
            <p className='text-black font-bold text-2xl sm:text-3xl md:text-4xl'>Yoga</p>
            <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>Yoga is a holistic practice that originated in ancient India, encompassing physical postures (asanas), breath control (pranayama), meditation, and ethical principles.It aims to unify the body, mind, and spirit, promoting physical health, mental clarity, and spiritual growth.</p>
            <p className='text-black font-bold text-2xl sm:text-3xl md:text-4xl'>Benefits:</p>
            <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>1. Increases flexibility, strength, and balance.</p>
            <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>2. Enhances respiratory function and cardiovascular health.</p>
            <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>3. Reduces stress, anxiety, and depression.</p>
            <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>4. Promotes mindfulness and present-moment awareness.</p>
            <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>5. Fosters a sense of inner peace and connectedness.</p>
            <p className='text-black font-bold text-2xl sm:text-3xl md:text-4xl'>Types of Yoga: </p>
            <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>1. Hatha Yoga: Focuses on physical postures and breath control. Suitable for beginners due to its slower pace.</p>
            <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>2. Vinyasa Yoga: Flowing sequences that link breath with movement. Offers a dynamic and cardiovascular workout.</p>
            <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>3. Ashtanga Yoga: A rigorous and structured practice with a set sequence of postures. Emphasizes strength, flexibility, and stamina.</p>
            <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>4. Iyengar Yoga: Focuses on precision and alignment, often using props like blocks, straps, and chairs. Ideal for therapeutic benefits.</p>
            <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>5. Kundalini Yoga: Combines postures, breath work, chanting, and meditation to awaken spiritual energy (kundalini).</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Yoga