import React from 'react'
import One from '../../assets/one.webp'
import Two from '../../assets/two.webp'
import Three from '../../assets/three.webp'
import Four from '../../assets/four.webp'
import Five from '../../assets/five.webp'


const PartOne = () => {
  return (
    <div className='bg-gray-100'>
        <div className='flex items-center justify-center bg-gray-100 h-full w-full mt-[74px]'>
            <h1 className='text-gray-900 text-7xl font-bold items-center mt-16 mb-6 font-Charlielight'><span className='text-black font-extrabold font-Charlie'>Great outcomes</span> start with ProAssign</h1>
        </div>
        <p className='text-gray-600 font-normal text-xl flex items-center justify-center bg-gray-100 mb-14 font-Charlielight'>The only project management tool you need to plan and track work across every team.</p>
       <div className='bg-gray-100 flex items-center justify-center mb-14'>
       <button className='bg-blue-600 px-6 py-3 rounded-3xl font-normal justify-center flex items-center hover:bg-blue-900 font-Charlielight text-lg'>Signup for free</button>
       </div>

       <div className="relative bg-gray-100 flex items-center justify-center mt-20 space-x-4 h-full w-full pb-64">
      <div className="absolute bottom-0 left-0 w-full h-20 bg-white transform skew-y-[-5deg] z-0"></div>
      
      {/* Product Card 1 */}
      <div className="bg-gray-50 border border-gray-300 rounded-3xl h-[580px] w-[280px] overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out hover:translate-y-[-15px] hover:shadow-2xl hover:shadow-[0_0_20px_rgb(144,238,144)] z-10">
        <p className="text-sm font-normal text-gray-700 pt-8 px-7 font-Charlielight">PRODUCT & ISSUE TRACKING</p>
        <p className="font-extrabold text-3xl text-black pt-2 pl-7 font-Charlielight">Software <br /> Development</p>
        <div className="mt-6 mr-0 ml-6">
          <img src={One} className="w-full h-auto object-cover" alt="Software Development" />
        </div>
      </div>

      {/* Product Card 2 */}
      <div className="bg-gray-50 border border-gray-300 rounded-3xl h-[580px] w-[280px] overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out hover:translate-y-[-15px] hover:shadow-2xl hover:shadow-[0_0_20px_rgb(96,165,250)] z-10">
        <p className="text-sm font-normal text-gray-700 pt-8 px-7 font-Charlielight">COLLABORATE WITH TEAM</p>
        <p className="font-extrabold text-3xl text-black pt-2 pl-7 font-Charlielight">Real Time</p>
        <div className="mt-12 mr-0 ml-6">
          <img src={Two} className="w-full h-auto object-cover" alt="Real Time Collaboration" />
        </div>
      </div>

      {/* Product Card 3 */}
      <div className="bg-gray-50 border border-gray-300 rounded-3xl h-[580px] w-[280px] overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out hover:translate-y-[-15px] hover:shadow-[0_0_20px_rgb(238,130,238)] z-10">
        <p className="text-sm font-normal text-gray-700 pt-8 px-7 font-Charlielight">MANAGE & TRACK REQUESTS</p>
        <p className="font-bold text-3xl text-black pt-2 pl-7 font-Charlielight">IT</p>
        <div className="mt-12 mr-0 ml-6">
          <img src={Three} className="w-full h-auto object-cover" alt="Manage Requests" />
        </div>
      </div>

      {/* Product Card 4 */}
      <div className="bg-gray-50 border border-gray-300 rounded-3xl h-[580px] w-[280px] overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out hover:translate-y-[-15px] hover:shadow-2xl hover:shadow-[0_0_20px_rgb(255,255,0)] z-10">
        <p className="text-sm font-normal text-gray-700 pt-8 px-7 font-Charlielight">BUILD CREATIVE WORKFLOWS</p>
        <p className="font-extrabold text-3xl text-black pt-2 pl-7 font-Charlielight">Design</p>
        <div className="mt-12 mr-0 ml-6">
          <img src={Four} className="w-full h-auto object-cover" alt="Creative Workflows" />
        </div>
      </div>

      {/* Product Card 5 */}
      <div className="bg-gray-50 border border-gray-300 rounded-3xl h-[580px] w-[280px] overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out hover:translate-y-[-15px] hover:shadow-2xl hover:shadow-[0_0_20px_rgb(0,255,255)] z-10">
        <p className="text-sm font-normal text-gray-700 pt-8 px-7 font-Charlielight">CREATE CUSTOM PROCESS</p>
        <p className="font-extrabold text-3xl text-black pt-2 pl-7 font-Charlielight">Operations</p>
        <div className="mt-12 mr-0 ml-6">
          <img src={Five} className="w-full h-auto object-cover" alt="Custom Process" />
        </div>
      </div>
    </div>
    {/* <div className='flex items-center justify-center z-25'>
         <p className="text-7xl font-bold text-blue-600 items-center justify-center z-20">Come Join Us!</p>
      </div> */}
    </div>
  )
}

export default PartOne
