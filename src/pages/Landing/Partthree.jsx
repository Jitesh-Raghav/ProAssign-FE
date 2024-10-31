import React from 'react';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Pro from '../../assets/Pro.png';
import Image from '../../assets/image.webp';
import Imageone from '../../assets/Imageone.webp';
import Logo from '../../assets/appLogo.png';
import { Boxes } from "../../components/ui/background-boxes";
import { cn } from "@/lib/utils";

const Partthree = () => {
  return (
    <div className='relative bg-blue-600 pb-52'>
      {/* Slanted Border */}
      <div className='absolute bottom-0 left-0 w-full h-24 bg-blue-600 z-10'>
        <div className='bg-yellow-500 h-full w-[50%] -skew-y-12 absolute right-0'></div>
      </div>

      <div className='flex items-center justify-center mt-4'>
        <AcUnitIcon style={{ fontSize: 60 }} className="mt-14 text-white" />
      </div>
      
      <div className=''>
        <p className='text-white font-bold text-7xl mt-3 flex items-center justify-center mb-6 font-Charlie'>
          Your next move, suggested by AI
        </p>
        <p className='text-white text-xl flex items-center justify-center font-Charlielight'>
          ProAssign's Intelligence takes your big ideas and automatically suggests the tasks to help get it done.
        </p>
        <div className='flex justify-center items-center'>
          <p className='font-Charlielight text-white font-normal text-lg border border-white rounded-sm py-2 px-2 my-16 max-w-fit'>
            Explore ProAssign's Intelligence
          </p>
        </div>
      </div>

      <div className='mt-6 flex items-center justify-center mb-20'>
        <img src={Pro} alt="" className='w-[60%]' />
      </div>

      <div className='bg-white h-auto w-full mt-12 pb-24'>
      <p className='text-gray-700 text-5xl font-Charlie flex items-center justify-center pt-20 pb-12'>Bring every team together under one roof</p>
      <p className='text-gray-700 text-2xl font-Charlielight flex flex-col items-center justify-center text-center'>Spend less time trying to get aligned and more time driving projects forward<br />with confidence.</p>
      
        <div className='flex items-center justify-around'>
           <img src={Image} alt="" className='w-[40%]'/>
           <div>
           <p className='text-black text-4xl font-bold font-Charlielight text mb-3'>Everything in One Place</p>
           <p className='text-black font-normal text-xl font-Charlielight flex flex-col justify-center items-center text-center'>The context you need, when you need it. <br />See software team release dates, real-<br/>time views of Figma designs, and more,<br /> all inside Jira.</p>
           </div>
        </div>

        <div className='flex items-center justify-around mt-8'>
          <div>
           <p className='text-black text-4xl font-bold font-Charlielight text mb-3'>Tailor it for your team</p>
           <p className='text-black font-normal text-xl font-Charlielight flex flex-col justify-center items-center text-center'>Configure Jira to match your team’s<br />processes, workflows, language, and<br/>more. Integrate with every tool you use<br />to get work done.</p>
           </div>
           <img src={Imageone} alt="" className='w-[40%]'/>
        </div>

      </div>
      {/* <div className='flex items-center justify-around'>
      <p className='text-white text-5xl items-start font-Charlie font-bold pt-40 ml-4 justify-center'>No matter what you're trying to dream up, <br />ProAssign helps you get it done</p>
       <img src={Logo} alt="" className='items-center justify-center w-[25%]'/>
      </div> */}
      <div className="h-96 relative w-full overflow-hidden bg-blue-600 flex flex-col items-center justify-center rounded-lg">
  <div className="absolute inset-0 w-full h-full bg-blue-600 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

  <Boxes />
  <h1 className={cn("md:text-4xl text-xl text-white font-Charlie font-bold  relative z-20")}>
  No matter what you're trying to dream up
  </h1>
  <p className="text-center mt-2 text-blue-200 text-lg font-Charlie font-bold  relative z-20">
  ProAssign helps you get it done.
  </p>
</div>

       </div>
  );
}

export default Partthree;
