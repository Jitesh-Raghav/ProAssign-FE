import React from 'react';
import Endline from '../../assets/gestural-line.webp';
import New from '../../assets/newc.webp';

const Parttwo = () => {
  return (
    <div className="relative bg-white">
      <div className="absolute inset-x-0 top-0 h-20 bg-white clip-path-slanted-top" />
      <div className='flex items-center justify-center pb-6'>
        <p className='text-black text-5xl font-extrabold z-10 pt-6 font-Charlielight'>Made for complex projects or everyday tasks</p>
        <img src={Endline} alt="" className='w-12 flex items-center justify-center' />
      </div>

      <div className='flex items-center justify-center pb-40'>
        <div className='ml-40 bg-white mt-14 pb-64 space-y-5'>
          <p className='text-black text-3xl font-bold border-l-4 border-gray-500 px-4 font-Charlielight'>Plan and Organize tasks</p>
          <p className='text-black text-3xl font-bold border-l-4 border-gray-500 px-4 font-Charlielight'>Align work to goals</p>
          <p className='text-black text-3xl font-bold border-l-4 border-gray-500 px-4 font-Charlielight'>Track work & bugs your way</p>
          <p className='text-black text-3xl font-bold border-l-4 border-gray-500 px-4 font-Charlielight'>Optimise with insights</p>
        </div>
        <img src={New} alt="" className='w-[800px] pt-6 mt-8' />
      </div>
    </div>
  );
}

export default Parttwo;
