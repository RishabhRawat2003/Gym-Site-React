import React from 'react'
import Common from '../Images/Common.jpg'
import Classes6 from '../Images/Classes/Classes6.jpg'

function EnergyDance() {
  return (
    <div className='w-full h-auto'>
      <div className='w-[90%] h-auto mx-auto flex flex-col'>
        <div className='w-full h-auto flex justify-center items-center relative'>
          <img src={Common} alt="image" className='opacity-90' />
          <span className='text-3xl text-white font-textFont font-bold absolute sm:text-6xl xl:text-8xl'>Energy Dance</span>
        </div>
        <div className='w-full h-auto flex flex-col my-16 gap-5 md:gap-16'>
          <div className='w-full h-auto flex flex-col gap-8 md:flex-row md:gap-4'>
            <img src={Classes6} alt="image" className='md:w-[58vw] md:object-cover xl:w-[65vw]' />
            <div className='w-full h-auto flex flex-col py-10 px-4 bg-gray-100 gap-4 md:h-[65vh]'>
              <p className='text-3xl font-bold font-textFont sm:text-4xl md:text-3xl xl:text-4xl'>Class Details</p>
              <p className='text-sm text-gray-700 font-textFont sm:text-base md:text-sm 2xl:text-base'>Energy dance, often referred to as "Energetic Dance" or sometimes simply as "High-Energy Dance," encompasses a variety of dance styles that are characterized by their vigorous and lively movements.</p>
              <div className='w-full h-auto flex flex-col my-7 font-textFont gap-3 sm:text-lg md:text-base xl:text-lg'>
                <p className='text-gray-700 text-sm'>Duration : <span className='text-black font-bold'>45 MINUTES</span></p>
                <p className='text-gray-700 text-sm'>Intensity : <span className='text-black font-bold'>MODERATE</span></p>
                <p className='text-gray-700 text-sm'>Fitness Level : <span className='text-black font-bold'>MEDIUM</span></p>
                <p className='text-gray-700 text-sm'>Schedule : <span className='text-black font-bold'>Wednesday, Thursday</span></p>
              </div>
              <div className='w-full h-auto mb-7'>
                <span className='text-white bg-black text-sm p-3 px-4 cursor-pointer font-textFont active:bg-gray-700 md:hover:bg-gray-800 select-none sm:text-base md:text-sm xl:text-base'>Book a Class</span>
              </div>
            </div>
          </div>
          <div className='w-full h-auto flex flex-col font-textFont gap-4 md:gap-8'>
            <p className='text-black font-bold text-2xl sm:text-3xl md:text-4xl'>Energy Dance</p>
            <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>Energy dance, often referred to as "Energetic Dance" or sometimes simply as "High-Energy Dance," encompasses a variety of dance styles that are characterized by their vigorous and lively movements. This form of dance is designed to be physically engaging and mentally stimulating, often performed to upbeat music that enhances the experience.</p>
            <p className='text-black font-bold text-2xl sm:text-3xl md:text-4xl'>Benefits:</p>
            <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>1. Flexibility and Coordination: Enhances flexibility and coordination through varied and dynamic movements.</p>
            <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>2. Muscle Tone and Strength: Regular practice tones muscles and increases overall strength, especially in the legs, core, and arms.</p>
            <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>3. Community and Connection: Often performed in group settings, energy dance fosters social connections and a sense of community.</p>
            <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>4. Teamwork and Cooperation: In group performances, dancers learn to work together and synchronize their movements, promoting teamwork and cooperation.</p>
            <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>5. Emotional Expression: Provides a healthy outlet for expressing emotions and creativity.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EnergyDance