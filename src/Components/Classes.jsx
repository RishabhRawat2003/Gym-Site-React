import React from 'react'
import Common from './Images/Common.jpg'
import ClassesComponent from './ClassesComponent'
import Classes5 from './Images/Classes/Classes5.jpg'
import Classes4 from './Images/Classes/Classes4.jpg'
import Classes6 from './Images/Classes/Classes6.jpg'

function Classes() {
  return (
    <div className='h-auto w-full mt-5' >
      <div className='w-[90%] h-auto mx-auto flex justify-center items-center relative'>
        <img src={Common} alt="image" className='opacity-90' />
        <span className='text-3xl text-white font-textFont font-bold absolute sm:text-6xl xl:text-8xl'>Classes</span>
      </div>
      <div className='w-[90%] h-auto mx-auto flex flex-col my-16'>
        <p className='w-full h-auto text-center tracking-widest text-blue-700 font-textFont font-semibold sm:text-lg xl:text-2xl'>OUR TRAINERS</p>
        <p className='w-full h-auto text-center font-bold text-2xl font-textFont sm:text-3xl xl:text-4xl'>We Trained You to Gain</p>
        <ClassesComponent />
        <div className='w-full h-auto flex flex-wrap justify-center mt-8 gap-5'>
          <div className='w-[80%] h-auto flex flex-col gap-2 sm:w-[40%] md:w-[30%]'>
            <img src={Classes5} alt="class1" />
            <p className='text-lg font-semibold font-textFont'>Yoga as Therapy</p>
            <p className='text-xs font-mono text-gray-700 lg:text-sm'>Yoga as a therapy offers a holistic approach to health and well-being, integrating physical postures, breathing exercises, and meditation to support the healing of various physical, mental, and emotional conditions.</p>
            <p className='text-xs font-mono text-blue-700 lg:text-sm cursor-pointer'>Read More</p>
          </div>
          <div className='w-[80%] h-auto flex flex-col gap-2 sm:w-[40%] md:w-[30%]'>
            <img src={Classes4} alt="class1" />
            <p className='text-lg font-semibold font-textFont'>Boxing</p>
            <p className='text-xs font-mono text-gray-700 lg:text-sm'>Boxing is a dynamic and physically demanding sport that combines strength, speed, agility, and strategy. It offers a full-body workout, improving cardiovascular health, muscle tone, and coordination.</p>
            <p className='text-xs font-mono text-blue-700 lg:text-sm cursor-pointer'>Read More</p>
          </div>
          <div className='w-[80%] h-auto flex flex-col gap-2 sm:w-[40%] md:w-[30%]'>
            <img src={Classes6} alt="class1" />
            <p className='text-lg font-semibold font-textFont'>Energy Dance</p>
            <p className='text-xs font-mono text-gray-700 lg:text-sm'>Energy dance is a vibrant and expressive form of movement that blends dance techniques with rhythmic patterns and dynamic motions to invigorate both body and spirit.</p>
            <p className='text-xs font-mono text-blue-700 lg:text-sm cursor-pointer'>Read More</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Classes