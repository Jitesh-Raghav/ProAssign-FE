import React from 'react'
import applogo from '../../assets/appLogo.png';
import SearchIcon from '@mui/icons-material/Search';


const Mainnav = () => {

  return (
    <div>
        <div className='fixed top-0 left-0 z-40 h-[74px] w-full bg-white flex items-center border-b border-gray-200 shadow-lg font-Charlie'>
             <div className='bg-blue-600 h-full w-[74px] items-start mr-16'><img src={applogo} className='items-center justify-between size-[74px] object-contain'/></div>
             <h2 className='text-black text-xl font-extrabold mr-16'><span className='text-blue-600 font-Charlie'>Pro</span><span className='text-gray-700 font-Charlie'>Assign</span></h2>
              
              <div className='flex items-center justify-between space-x-8 ml-12 mr-8'>
              <p className='text-gray-700 text-lg font-normal font-Charlielight'>Features</p>
              <p className='text-gray-700 text-lg font-normal font-Charlielight'>Product Guide</p>
              <p className='text-gray-700 text-lg font-normal font-Charlielight'>Templates</p>
              <p className='text-gray-700 text-lg font-normal font-Charlielight'>Pricing</p>
              <p className='text-gray-700 text-lg font-normal font-Charlielight'>Enterprise</p>
              </div>

          <div className='flex items-center justify-between ml-32'>
                <button className='bg-blue-600 rounded-3xl px-[28px] py-[10px] ml-[140px] hover:bg-blue-900 text-white font-Charlielight text-lg'>Get it free</button>
                <SearchIcon style={{ color: 'black', marginLeft: '16px', fontSize: '32px' }} />
                <div className='flex items-center justify-between ml-3'>
                   <button className='text-blue-600 font-bold px-11 border-l border-gray-800 font-Charlielight text-lg' >Sign in</button>
                </div>
          </div>
         </div> 
    
    </div>
  )
}

export default Mainnav
