import React from 'react'
import Mainnav from './Mainnav'
import PartOne from './PartOne'
import Parttwo from './Parttwo'
import Partthree from './Partthree'
import Auth from '../Auth/Auth'


const LandingPage = () => {
  return (
   <div className='bg-white'>
      <Mainnav/>
      <PartOne/>
      <Auth/>
      <Parttwo/>
      <Partthree/>
    
   </div>
  )
}

export default LandingPage
