import React from 'react'
import applogo from '../../assets/appLogo.png';
import SearchIcon from '@mui/icons-material/Search';
import  { useState, useEffect } from 'react';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../../components/ui/animated-modal";


const Mainnav = () => {

  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
        <div className='fixed top-0 left-0 z-40 h-[74px] w-full bg-white flex items-center border-b border-gray-200 font-Charlie shadow-lg'>
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
          <Modal>
              <ModalTrigger className="bg-blue-600 dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
                <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                 Get it free
                </span>
                <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                  <MoneyOffIcon/>
                </div>
              </ModalTrigger>
              </Modal>
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
