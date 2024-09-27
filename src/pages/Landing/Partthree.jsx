import React from 'react'
import AcUnitIcon from '@mui/icons-material/AcUnit';

const Partthree = () => {
  return (
    <div className='bg-blue-600 pb-48'>
       <div className='flex items-center justify-center mt-4'>
          <AcUnitIcon style={{ fontSize: 60 }} className="mt-14"/>
       </div>
       <div className=''>
        <p className='text-white font-bold text-5xl mt-3 flex items-center justify-center mb-6'>Your next move, suggested by AI</p>
        <p className='text-white text-xl flex items-center justify-center'>ProAssign's Intelligence takes your big ideas and automatically suggests the tasks to help get it done.</p>
       </div>
    </div>
  )
}

export default Partthree
