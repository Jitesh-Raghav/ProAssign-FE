import React from 'react'
import Endline from '../../assets/gestural-line.webp'
import New from '../../assets/newc.webp'

const Parttwo = () => {
  return (
    <div>
        <div className='flex items-center justify-center bg-gray-100 h-full w-full pb-6'>
            <p className='text-black text-5xl font-bold z-10'>Made for complex projects or everyday tasks</p>
            <img src={Endline} alt="" className='w-12 flex items-center justify-center'/>
        </div>
   
    <div className='flex items-center justify-center pb-40'>
        <div className='ml-64 bg-gray-50 mt-14 pb-64 space-y-5'>
            <p className='text-black text-3xl font-bold border-l-4 border-gray-500 px-4'>Plan and Organize tasks</p>
            <p className='text-black text-3xl font-bold border-l-4 border-gray-500 px-4'>Align work to goals</p>
            <p className='text-black text-3xl font-bold border-l-4 border-gray-500 px-4'>Track work & bugs your way</p>
            <p className='text-black text-3xl font-bold border-l-4 border-gray-500 px-4'>Optimise with insights</p>
        </div>
        <img src={New} alt="" className='w-[800px] pt-6 mt-8'/>
    </div>
        
    </div>
  )
}

export default Parttwo
