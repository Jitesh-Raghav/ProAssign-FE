import React from 'react'
import applogo from '../../assets/appLogo.png';
import SearchIcon from '@mui/icons-material/Search';


const Mainnav = () => {

  return (
    <div>
        <div className='fixed top-0 left-0 z-40 h-[73px] w-full bg-white flex items-center border-b border-gray-200 shadow-md'>
             <div className='bg-blue-600 h-full w-[74px] items-start mr-16'><img src={applogo} className='items-center justify-between size-[70px] object-contain'/></div>
             <h2 className='text-black text-xl font-extrabold mr-16'><span className='text-blue-600'>Pro</span><span className='text-gray-700'>Assign</span></h2>
              
              <div className='flex items-center justify-between space-x-8 ml-12 mr-8'>
              <p className='text-gray-700 text-lg font-normal'>Features</p>
              <p className='text-gray-700 text-lg font-normal'>Product Guide</p>
              <p className='text-gray-700 text-lg font-normal'>Templates</p>
              <p className='text-gray-700 text-lg font-normal'>Pricing</p>
              <p className='text-gray-700 text-lg font-normal'>Enterprise</p>
              </div>

          <div className='flex items-center justify-between ml-32'>
                <button className='bg-blue-600 rounded-3xl px-[28px] py-[10px] ml-[140px] hover:bg-blue-900 text-white'>Get it free</button>
                <SearchIcon style={{ color: 'black', marginLeft: '16px', fontSize: '32px' }} />
                <div className='flex items-center justify-between ml-3'>
                   <button className='text-blue-600 text-sm font-bold px-11 border-l border-gray-800' >Sign in</button>
                </div>
          </div>
         </div> 
    
    </div>
  )
}

export default Mainnav
