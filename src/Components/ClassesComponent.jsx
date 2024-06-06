import React from 'react'
import Classes1 from './Images/Classes/Classes1.jpg'
import Classes2 from './Images/Classes/Classes2.jpg'
import Classes3 from './Images/Classes/Classes3.jpg'

function ClassesComponent() {
    return (
        <div className='w-full h-auto flex flex-wrap justify-center mt-5 gap-5'>
            <div className='w-[80%] h-auto flex flex-col gap-2 sm:w-[40%] md:w-[30%]'>
                <img src={Classes1} alt="class1" />
                <p className='text-lg font-semibold font-textFont'>Pilates Training</p>
                <p className='text-xs font-mono text-gray-700 lg:text-sm'>Pilates is a form of low-impact exercise that focuses on strengthening muscles while improving postural alignment and flexibility.</p>
                <p className='text-xs font-mono text-blue-700 lg:text-sm cursor-pointer'>Read More</p>
            </div>
            <div className='w-[80%] h-auto flex flex-col gap-2 sm:w-[40%] md:w-[30%]'>
                <img src={Classes2} alt="class1" />
                <p className='text-lg font-semibold font-textFont'>Aerobic Training</p>
                <p className='text-xs font-mono text-gray-700 lg:text-sm'>Aerobic training, also known as cardiovascular or endurance training, involves activities that increase your heart rate and breathing over extended periods.</p>
                <p className='text-xs font-mono text-blue-700 lg:text-sm cursor-pointer'>Read More</p>
            </div>
            <div className='w-[80%] h-auto flex flex-col gap-2 sm:w-[40%] md:w-[30%]'>
                <img src={Classes3} alt="class1" />
                <p className='text-lg font-semibold font-textFont'>CrossFitworkout</p>
                <p className='text-xs font-mono text-gray-700 lg:text-sm'>CrossFit is a high-intensity fitness program that combines elements of various exercise disciplines, including weightlifting, cardio, gymnastics, and bodyweight exercises.</p>
                <p className='text-xs font-mono text-blue-700 lg:text-sm cursor-pointer'>Read More</p>
            </div>
        </div>
    )
}

export default ClassesComponent