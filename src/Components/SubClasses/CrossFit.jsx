import React from 'react'
import Common from '../Images/Common.jpg'
import Classes3 from '../Images/Classes/Classes3.jpg'

function CrossFit() {
  return (
    <div className='w-full h-auto'>
      <div className='w-[90%] h-auto mx-auto flex flex-col'>
        <div className='w-full h-auto flex justify-center items-center relative'>
          <img src={Common} alt="image" className='opacity-90' />
          <span className='text-3xl text-white font-textFont font-bold absolute sm:text-6xl xl:text-8xl'>CrossFit Workout</span>
        </div>
        <div className='w-full h-auto flex flex-col my-16 gap-5 md:gap-16'>
          <div className='w-full h-auto flex flex-col gap-8 md:flex-row md:gap-4'>
            <img src={Classes3} alt="image" className='md:w-[58vw] md:object-cover xl:w-[65vw]' />
            <div className='w-full h-auto flex flex-col py-10 px-4 bg-gray-100 gap-4 md:h-[65vh]'>
              <p className='text-3xl font-bold font-textFont sm:text-4xl md:text-3xl xl:text-4xl'>Class Details</p>
              <p className='text-sm text-gray-700 font-textFont sm:text-base md:text-sm xl:text-base'>CrossFit is a high-intensity fitness program that incorporates elements from various sports and types of exercise. </p>
              <div className='w-full h-auto flex flex-col my-7 font-textFont gap-3 sm:text-lg md:text-base xl:text-lg'>
                <p className='text-gray-700 text-sm'>Duration : <span className='text-black font-bold'>45 MINUTES</span></p>
                <p className='text-gray-700 text-sm'>Intensity : <span className='text-black font-bold'>HIGH</span></p>
                <p className='text-gray-700 text-sm'>Fitness Level : <span className='text-black font-bold'>Advanced</span></p>
                <p className='text-gray-700 text-sm'>Schedule : <span className='text-black font-bold'>Wednesday, Thursday</span></p>
              </div>
              <div className='w-full h-auto mb-7'>
                <span className='text-white bg-black text-sm p-3 px-4 cursor-pointer active:bg-gray-700 md:hover:bg-gray-800 select-none font-textFont sm:text-base md:text-sm xl:text-base'>Book a Class</span>
              </div>
            </div>
          </div>
          <div className='w-full h-auto flex flex-col font-textFont gap-4 md:gap-8'>
            <p className='text-black font-bold text-2xl sm:text-3xl md:text-4xl'>CrossFit Workout</p>
            <p className='text-gray-700 text-sm sm:text-base md:text-lg 2xl:text-xl'>CrossFit is a high-intensity fitness program that incorporates elements from various sports and types of exercise. It aims to improve overall fitness by focusing on ten key physical domains: cardiovascular and respiratory endurance, stamina, strength, flexibility, power, speed, coordination, agility, balance, and accuracy.</p>
            <p className='text-black font-bold text-2xl sm:text-3xl md:text-4xl'>Benefits:</p>
            <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>1. Enhances strength, endurance, flexibility, and cardiovascular health.</p>
            <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>2. The group setting fosters a sense of community and support, motivating participants to push themselves.</p>
            <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>3. Constantly varied workouts prevent boredom and keep the body challenged.</p>
            <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>4. Focus on functional movements improves everyday performance and reduces the risk of injury.</p>
            <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>5. Workouts can be adjusted to fit individual fitness levels and abilities, making it inclusive.</p>
            <p className='text-black font-bold text-2xl sm:text-3xl md:text-4xl'>Common Exercises in CrossFit: </p>
            <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>1. Olympic lifts: Snatch, clean and jerk.</p>
            <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>2. Powerlifting: Squat, deadlift, bench press.</p>
            <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>3. Kettlebell exercises: Swings, goblet squats, Turkish get-ups.</p>
            <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>4. Push-ups, pull-ups, sit-ups, burpees.</p>
            <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>5. Running, rowing, cycling, jumping rope.</p>
            <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>6. Box jumps, wall balls, medicine ball slams, tire flips.</p>
            <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>7. Gymnastics: Handstands, muscle-ups, ring dips.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CrossFit