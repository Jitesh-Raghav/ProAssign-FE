import React from 'react'
import One from '../../assets/one.webp'
import Two from '../../assets/two.webp'
import Three from '../../assets/three.webp'
import Four from '../../assets/four.webp'
import Five from '../../assets/five.webp'
import { BackgroundLines } from "@/components/ui/background-lines";
import RocketIcon from '@mui/icons-material/RocketLaunch';
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Cover } from "@/components/ui/cover";
import { FollowerPointerCard } from  "@/components/ui/following-pointer";

const PartOne = () => {

  

  return (
    <div className='bg-gray-100'>
     
     
      
      {/* <div className="flex items-center justify-center bg-gradient-to-b from-gray-100 to-white h-full w-full mt-[74px]">
  <h1 className="text-gray-900 text-8xl font-bold items-center mt-16 mb-6 font-Charlielight text-center">
    <span className="text-black font-Charlie">Great outcomes</span> start with
    <br />
    <span className="text-blue-700 font-extrabold font-Charlie block">ProAssign<RocketIcon sx={{ fontSize: 80 }} /></span>
  </h1>
</div> */}
<BackgroundLines className="flex items-center justify-center w-full flex-col">
<div className="h-[40rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] z[-20] bg-dot-black/[0.5] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
     
      <h1 className="text-gray-900 text-8xl font-bold items-center mt-16 mb-6 font-Charlielight text-center">
    <span className="text-black font-Charlie">Great outcomes</span> start with
    <br />
    <span className="text-blue-700 font-extrabold font-Charlie block">ProAssign<RocketIcon sx={{ fontSize: 80 }} /></span>
  </h1>
    </div>

    
        <p className='text-gray-600 font-normal text-xl flex items-center justify-center mb-6 font-Charlielight'>The only project management tool you need to plan and track work across every team.</p>
       <div className='bg-gray-100 flex items-center justify-center mb-14'>
       <button className='bg-blue-600 px-6 py-3 rounded-3xl font-normal justify-center flex items-center hover:bg-blue-900 font-Charlielight text-lg text-white cursor-pointer'>Signup for free</button>
         </div>
         </BackgroundLines>
         
       <div className="relative bg-gray-100 flex items-center justify-center mt-20 space-x-4 h-full w-full pb-64">
      <div className="absolute bottom-0 left-0 w-full h-20 bg-white transform skew-y-[-5deg] z-0"></div>
      
      {/* Product Card 1 */}
     <FollowerPointerCard>
      <div className="bg-gray-50 border border-gray-300 rounded-3xl h-[580px] w-[280px] overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out hover:translate-y-[-15px] hover:shadow-2xl hover:shadow-[0_0_20px_rgb(144,238,144)] z-10">
        <p className="text-sm font-normal text-gray-700 pt-8 px-7 font-Charlielight">PRODUCT & ISSUE TRACKING</p>
        <p className="font-extrabold text-3xl text-black pt-2 pl-7 font-Charlielight">Software <br /> Development</p>
        <div className="mt-6 mr-0 ml-6">
          <img src={One} className="w-full h-auto object-cover" alt="Software Development" />
        </div>
      </div>
      </FollowerPointerCard>

      {/* Product Card 2 */}
      <FollowerPointerCard>
      <div className="bg-gray-50 border border-gray-300 rounded-3xl h-[580px] w-[280px] overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out hover:translate-y-[-15px] hover:shadow-2xl hover:shadow-[0_0_20px_rgb(96,165,250)] z-10">
        <p className="text-sm font-normal text-gray-700 pt-8 px-7 font-Charlielight">COLLABORATE WITH TEAM</p>
        <p className="font-extrabold text-3xl text-black pt-2 pl-7 font-Charlielight">Real Time</p>
        <div className="mt-12 mr-0 ml-6">
          <img src={Two} className="w-full h-auto object-cover" alt="Real Time Collaboration" />
        </div>
      </div>
     </FollowerPointerCard>

      {/* Product Card 3 */}
      <FollowerPointerCard> 
      <div className="bg-gray-50 border border-gray-300 rounded-3xl h-[580px] w-[280px] overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out hover:translate-y-[-15px] hover:shadow-[0_0_20px_rgb(238,130,238)] z-10">
        <p className="text-sm font-normal text-gray-700 pt-8 px-7 font-Charlielight">MANAGE & TRACK REQUESTS</p>
        <p className="font-bold text-3xl text-black pt-2 pl-7 font-Charlielight">IT</p>
        <div className="mt-12 mr-0 ml-6">
          <img src={Three} className="w-full h-auto object-cover" alt="Manage Requests" />
        </div>
      </div>
      </FollowerPointerCard>
      {/* Product Card 4 */}
      <FollowerPointerCard>
      <div className="bg-gray-50 border border-gray-300 rounded-3xl h-[580px] w-[280px] overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out hover:translate-y-[-15px] hover:shadow-2xl hover:shadow-[0_0_20px_rgb(255,255,0)] z-10">
        <p className="text-sm font-normal text-gray-700 pt-8 px-7 font-Charlielight">BUILD CREATIVE WORKFLOWS</p>
        <p className="font-extrabold text-3xl text-black pt-2 pl-7 font-Charlielight">Design</p>
        <div className="mt-12 mr-0 ml-6">
          <img src={Four} className="w-full h-auto object-cover" alt="Creative Workflows" />
        </div>
      </div>
      </FollowerPointerCard>

      {/* Product Card 5 */}
      <FollowerPointerCard>
      <div className="bg-gray-50 border border-gray-300 rounded-3xl h-[580px] w-[280px] overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out hover:translate-y-[-15px] hover:shadow-2xl hover:shadow-[0_0_20px_rgb(0,255,255)] z-10">
        <p className="text-sm font-normal text-gray-700 pt-8 px-7 font-Charlielight">CREATE CUSTOM PROCESS</p>
        <p className="font-extrabold text-3xl text-black pt-2 pl-7 font-Charlielight">Operations</p>
        <div className="mt-12 mr-0 ml-6">
          <img src={Five} className="w-full h-auto object-cover" alt="Custom Process" />
        </div>
      </div>
      </FollowerPointerCard>
    </div>
    {/* <div className='flex items-center justify-center z-25'>
         <p className="text-7xl font-bold text-blue-600 items-center justify-center z-20">Come Join Us!</p>
      </div> */}
    </div>
  )
}



export default PartOne
