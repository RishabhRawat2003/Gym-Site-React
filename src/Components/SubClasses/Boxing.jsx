import React from 'react'
import Common from '../Images/Common.jpg'
import Classes4 from '../Images/Classes/Classes4.jpg'

function Boxing() {
  return (
    <div className='w-full h-auto'>
      <div className='w-[90%] h-auto mx-auto flex flex-col'>
        <div className='w-full h-auto flex justify-center items-center relative'>
          <img src={Common} alt="image" className='opacity-90' />
          <span className='text-3xl text-white font-textFont font-bold absolute sm:text-6xl xl:text-8xl'>Boxing</span>
        </div>
        <div className='w-full h-auto flex flex-col my-16 gap-5 md:gap-16'>
          <div className='w-full h-auto flex flex-col gap-8 md:flex-row md:gap-4'>
            <img src={Classes4} alt="image" className='md:w-[58vw] md:object-cover xl:w-[65vw]' />
            <div className='w-full h-auto flex flex-col py-10 px-4 bg-gray-100 gap-4 md:h-[65vh]'>
              <p className='text-3xl font-bold font-textFont sm:text-4xl md:text-3xl xl:text-4xl'>Class Details</p>
              <p className='text-sm text-gray-700 font-textFont sm:text-base md:text-sm 2xl:text-base'>Boxing is a combat sport in which two participants, typically wearing protective gloves and other safety equipment, engage in a contest of strength, reflexes, and endurance by throwing punches at each other. </p>
              <div className='w-full h-auto flex flex-col my-7 font-textFont gap-3 sm:text-lg md:text-base xl:text-lg'>
                <p className='text-gray-700 text-sm'>Duration : <span className='text-black font-bold'>45 MINUTES</span></p>
                <p className='text-gray-700 text-sm'>Intensity : <span className='text-black font-bold'>HIGH</span></p>
                <p className='text-gray-700 text-sm'>Fitness Level : <span className='text-black font-bold'>Advanced</span></p>
                <p className='text-gray-700 text-sm'>Schedule : <span className='text-black font-bold'>Tuesdat, Friday</span></p>
              </div>
              <div className='w-full h-auto mb-7'>
                <span className='text-white bg-black text-sm p-3 px-4 cursor-pointer active:bg-gray-700 md:hover:bg-gray-800 select-none font-textFont sm:text-base md:text-sm xl:text-base'>Book a Class</span>
              </div>
            </div>
          </div>
          <div className='w-full h-auto flex flex-col font-textFont gap-4 md:gap-8'>
            <p className='text-black font-bold text-2xl sm:text-3xl md:text-4xl'>Boxing</p>
            <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>Boxing is a combat sport in which two participants, typically wearing protective gloves and other safety equipment, engage in a contest of strength, reflexes, and endurance by throwing punches at each other. It is both a competitive sport and a form of physical exercise with numerous health benefits.</p>
            <p className='text-black font-bold text-2xl sm:text-3xl md:text-4xl'>Benefits:</p>
            <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>1. Coordination and Balance: Develops better hand-eye coordination and balance through footwork and punching techniques.</p>
            <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>2. Focus and Concentration: Enhances mental clarity and concentration through strategic thinking and precise movements.</p>
            <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>3. Confidence and Discipline: Builds self-confidence and discipline through rigorous training and skill development.</p>
            <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>4. Practical Skills: Teaches effective self-defense techniques and the ability to respond to physical threats.</p>
            <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>5. Cardiovascular Health: Improves heart and lung function through high-intensity workouts.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Boxing