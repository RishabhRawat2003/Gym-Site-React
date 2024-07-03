import React from 'react'
import Common from '../Images/Common.jpg'
import Classes2 from '../Images/Classes/Classes2.jpg'

function Aerobic() {
  return (
    <div className='w-full h-auto'>
      <div className='w-[90%] h-auto mx-auto flex flex-col'>
        <div className='w-full h-auto flex justify-center items-center relative'>
          <img src={Common} alt="image" className='opacity-90' />
          <span className='text-3xl text-white font-textFont font-bold absolute sm:text-6xl xl:text-8xl'>Aerobic Training</span>
        </div>
        <div className='w-full h-auto flex flex-col my-16 gap-5 md:gap-16'>
          <div className='w-full h-auto flex flex-col gap-8 md:flex-row md:gap-4'>
            <img src={Classes2} alt="image" className='md:w-[58vw] md:object-cover xl:w-[65vw]' />
            <div className='w-full h-auto flex flex-col py-10 px-4 bg-gray-100 gap-4 md:h-[65vh]'>
              <p className='text-3xl font-bold font-textFont sm:text-4xl md:text-3xl xl:text-4xl'>Class Details</p>
              <p className='text-sm text-gray-700 font-textFont sm:text-base md:text-sm 2xl:text-base'>Aerobic training, also known as cardiovascular or endurance training, involves exercises that improve the efficiency of the cardiovascular and respiratory systems in delivering oxygen to the body.</p>
              <div className='w-full h-auto flex flex-col my-7 font-textFont gap-3 sm:text-lg md:text-base xl:text-lg'>
                <p className='text-gray-700 text-sm'>Duration : <span className='text-black font-bold'>45 MINUTES</span></p>
                <p className='text-gray-700 text-sm'>Intensity : <span className='text-black font-bold'>HIGH</span></p>
                <p className='text-gray-700 text-sm'>Fitness Level : <span className='text-black font-bold'>Advanced</span></p>
                <p className='text-gray-700 text-sm'>Schedule : <span className='text-black font-bold'>Tuesday, Friday</span></p>
              </div>
              <div className='w-full h-auto mb-7'>
                <span className='text-white bg-black text-sm p-3 px-4 cursor-pointer font-textFont sm:text-base md:text-sm xl:text-base'>Book a Class</span>
              </div>
            </div>
          </div>
          <div className='w-full h-auto flex flex-col font-textFont gap-4 md:gap-8'>
            <p className='text-black font-bold text-2xl sm:text-3xl md:text-4xl'>Aerobic Training</p>
            <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>Aerobic training, also known as cardiovascular or endurance training, involves exercises that improve the efficiency of the cardiovascular and respiratory systems in delivering oxygen to the body. This type of training enhances overall fitness, endurance, and stamina.</p>
            <p className='text-black font-bold text-2xl sm:text-3xl md:text-4xl'>Benefits:</p>
            <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>1. Strengthens the heart, reduces blood pressure, and improves cholesterol levels.</p>
            <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>2. Enhances lung capacity and efficiency.</p>
            <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>3. Helps in burning calories and reducing body fat.</p>
            <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>4. Reduces stress, anxiety, and depression; improves mood and cognitive function.</p>
            <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>5. Increases stamina and reduces fatigue during daily activities.</p>
            <p className='text-black font-bold text-2xl sm:text-3xl md:text-4xl'>Tips for Effective Aerobic Training: </p>
            <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>1. Start with a 5-10 minute warm-up to prepare the body, and end with a cool-down to gradually reduce heart rate and prevent stiffness.</p>
            <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>2. Maintain proper hydration and nutrition to support energy levels and recovery.</p>
            <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>3. Regular exercise is key to reaping the long-term benefits of aerobic training.</p>
            <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>4. Incorporate different types of aerobic exercises to keep workouts interesting and engage different muscle groups.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aerobic