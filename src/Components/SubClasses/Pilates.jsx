import React from 'react'
import Common from '../Images/Common.jpg'
import Classes1 from '../Images/Classes/Classes1.jpg'

function Pilates() {
    return (
        <div className='w-full h-auto'>
            <div className='w-[90%] h-auto mx-auto flex flex-col'>
                <div className='w-full h-auto flex justify-center items-center relative'>
                    <img src={Common} alt="image" className='opacity-90' />
                    <span className='text-3xl text-white font-textFont font-bold absolute sm:text-6xl xl:text-8xl'>Pilates Training</span>
                </div>
                <div className='w-full h-auto flex flex-col my-16 gap-5 md:gap-16'>
                    <div className='w-full h-auto flex flex-col gap-8 md:flex-row md:gap-4'>
                        <img src={Classes1} alt="image" className='md:w-[58vw] md:object-cover xl:w-[65vw]' />
                        <div className='w-full h-auto flex flex-col py-10 px-4 bg-gray-100 gap-4 md:h-[65vh]'>
                            <p className='text-3xl font-bold font-textFont sm:text-4xl md:text-3xl xl:text-4xl'>Class Details</p>
                            <p className='text-sm text-gray-700 font-textFont sm:text-base md:text-sm xl:text-base'>Pilates classes typically involve a series of controlled movements and exercises performed on a mat or using specialized equipment like the Reformer, Cadillac, and Wunda Chair.</p>
                            <div className='w-full h-auto flex flex-col my-7 font-textFont gap-3 sm:text-lg md:text-base xl:text-lg'>
                                <p className='text-gray-700 text-sm'>Duration : <span className='text-black font-bold'>45 MINUTES</span></p>
                                <p className='text-gray-700 text-sm'>Intensity : <span className='text-black font-bold'>HIGH</span></p>
                                <p className='text-gray-700 text-sm'>Fitness Level : <span className='text-black font-bold'>Advanced</span></p>
                                <p className='text-gray-700 text-sm'>Schedule : <span className='text-black font-bold'>Monday, Saturday</span></p>
                            </div>
                            <div className='w-full h-auto mb-7'>
                                <span className='text-white bg-black text-sm p-3 px-4 cursor-pointer font-textFont sm:text-base md:text-sm xl:text-base'>Book a Class</span>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-auto flex flex-col font-textFont gap-4 md:gap-8'>
                        <p className='text-black font-bold text-2xl sm:text-3xl md:text-4xl'>Pilates Training</p>
                        <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>Pilates is a low-impact exercise method that focuses on strengthening muscles while improving postural alignment and flexibility. It was developed by Joseph Pilates in the early 20th century and has become popular worldwide for its holistic approach to physical fitness.</p>
                        <p className='text-black font-bold text-2xl sm:text-3xl md:text-4xl'>Benefits:</p>
                        <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>1. Pilates places a strong emphasis on building core strength, which supports overall body strength and stability.</p>
                        <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>2. Regular practice enhances flexibility and mobility in the joints.</p>
                        <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>3. Pilates exercises promote proper posture and alignment, reducing the risk of injury.</p>
                        <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>4. It encourages a mindful approach to movement, enhancing body awareness and control.</p>
                        <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>5. The focused, controlled movements can be calming and help reduce stress levels.</p>
                        <p className='text-black font-bold text-2xl sm:text-3xl md:text-4xl'>Who Can Benefit: </p>
                        <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>Pilates is suitable for people of all ages and fitness levels. It's particularly beneficial for those looking to:</p>
                        <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>1. Improve core stability and overall strength</p>
                        <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>2. Enhance flexibility and balance</p>
                        <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>3. Recover from injuries or alleviate chronic pain</p>
                        <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>4. Complement other fitness routines or athletic training</p>
                        <p className='text-black font-bold text-2xl sm:text-3xl md:text-4xl'>Why Try Pilates: </p>
                        <p className='text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl'>Whether you're looking to build a strong foundation for other physical activities, rehabilitate from an injury, or simply improve your overall fitness and well-being, Pilates offers a comprehensive approach to achieving your goals.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pilates