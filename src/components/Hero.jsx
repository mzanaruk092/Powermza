import React from 'react'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#bef264] font-bold p-4'>
        <span  class=' flex h-3 w-3 '>
            <span class='animate-ping absolute inline-flex h-full w-full rounded-full bg-[#bef264] opacity-75'></span>
            <span class='relative inline-flex rounded-full h-3 w-3 bg-[#bef264]'></span>
            </span> GROWING WITH DATA ANALYTICS</p>
        <h1 className='md:text-6xl sm:text-5xl text-2xl font-bold md:py-6'>Grow with data.</h1>
        <div>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Data, Processing Now !
             </p>
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500 py-2'>Monitor you data analyics to increase for  business in the world </p>
        <button className='bg-[#bef264] border-2 hover:bg-blue-300 hover:border-blue-300 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black '>Get Started</button>
        </div>
    </div>
  )
}

export default Hero