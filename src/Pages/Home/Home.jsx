import React, { useEffect, useState } from 'react';

import { styles } from '../../style';

// import sevalogo from '../../assets/sevalogo.png'
import images from '../../assets/images.png'
import astralpipes from '../../assets/astralpipes.png'
import { motion } from 'framer-motion'
// import { PipeCanvas } from '../../components/Pipes';
function Home(sidebar) {
  const [mobile, setMobile] = useState(false);
  console.log(sidebar);
  useEffect(() => {
    if (window.innerWidth <= 769) {
      setMobile(true);
    }
  }, []);
  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth <= 769) {
        setMobile(true);
      }
      else {
        setMobile(false);
      }
    };
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    }
  }, []);
  <meta name='viewport' content='width=device-width,initial-scale=1.0' />
  return (
    <nav>
      <section className='relative w-full h-screen mx-auto'>
        <div className={`${styles.paddingX} absolute insert-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
          <div className='flex flex-col justify-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#2f80ed]' />
            <div className='w-1 sm:h-80 h-40 blue-gradient ml-2 ' />
          </div>
          <div className='text-black'>
            <h1 className={`lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-black`}>Welcome to <span className='blue-text-gradient'>Seva </span></h1>
            {/* <p className={`${styles.heroSubText} mt-2 text-black-100 `}>Your One-Stop Destination <br className='sm:block hidden' />  for Quality Hardware Supplies!</p> */}
            <div className='flex flex-wrap items-center mt-[35px] small:max-tablet:hidden'>
              <div className='text-[30px] flex flex-col justify-center items-center'>
                <p className='font-bold'>SEVA TRADERS</p>
                <div className='flex'>
                <span>Authorized Distributers of</span>
                <span className='ml-1 blue-text-gradient'> Astral Pipes.</span>
                </div>
                <img src={astralpipes} alt='' className='h-[200px]'/>
              </div>
              <div className='w-2 sm:h-80 h-40 blue-gradient ml-[45px]' />
              <div className='text-[30px] flex flex-col justify-center items-center ml-[45px]'>
                <p className='font-bold'>SEVA CERMAICS</p>
                <div className='flex justify-center items-center'>
                <p>Authorized Distributers of</p>
                <p className='ml-1 blue-text-gradient'> Astral Bathware.</p>
                </div>
                <img src={images} alt='' className='h-[200px]'/>
              </div>
            </div>
            <div className='tablet:hidden mt-[100px] flex flex-col justify-center items-center'>
            <div className='text-[30px] flex flex-col justify-center items-center'>
                <p className='font-bold'>SEVA TRADERS</p>
                <div>
                <span >Authorized Distributers of </span>
                <p className='ml-1 blue-text-gradient flex flex-col justify-center items-center'>Astral Pipes</p>
                </div>
                <img src={astralpipes} alt='' className='h-[100px]'/>
              </div>
              {/* <div className='w-[200px] sm:h-5 h-2 blue-gradient ml-[45px]' /> */}
              <div className='text-[30px] flex flex-col justify-center items-center ml-[45px] mt-[75px]'>
                <p className='font-bold'>SEVA CERMAICS</p>
                <div>
                <span >Authorized Distributers of </span>
                <p className='ml-1 blue-text-gradient flex flex-col justify-center items-center'>Astral Pipes</p>
                </div>
                <img src={images} alt='' className='h-[100px]'/>
              </div>
            </div>
          </div>
        </div>
        
        {/* {mobile?<><img src={sevalogo} className='absolute h-[350px] mt-[350px] ml-[60px]' alt=''/></>:<><PipeCanvas /></>} */}
        <div className='absolute xs:bottom-00 bottom-1  w-full flex justify-center items-center'>
          <a href='#about'>
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
              <motion.div animate={{ y: [0, 24, 0] }} transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }} className='w-3 h-3 rounded-full bg-secondary mb-1' />
            </div>
          </a>
        </div>
      </section>
    </nav>
  )
}

export default Home