import React, { useEffect, useState } from 'react';
import { Tilt } from 'react-tilt'
import { styles } from '../../style';
// import {motion} from 'framer-motion'
// import { styles } from '../../style'
import { fadeIn, textVariant } from '../../utils/motion'
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
      <section className='relative w-full min-h-screen mx-auto'>
        <div className={`${styles.paddingX} absolute insert-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
          <div className='flex flex-col justify-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#2f80ed]' />
            <div className='w-1 sm:h-80 h-40 blue-gradient ml-2 ' />
          </div>
          <div className='text-black w-full'>
            <h1 className={`lg:text-[80px] sm:text-[30px] xs:text-[30px] text-[30px] lg:leading-[98px] mt-2 text-black`}>Welcome to <span className='blue-text-gradient'>Seva </span></h1>
            {/* <p className={`${styles.heroSubText} mt-2 text-black-100 `}>Your One-Stop Destination <br className='sm:block hidden' />  for Quality Hardware Supplies!</p> */}

            <div className='w-full flex small:max-tablet:flex-col flex-row text-center'>
              <div className='w-auto bg-transparent p-[1px] rounded-[20px] shadow-lg border-blue-400 border-2'>
                <div options={{ max: 45, scale: 1, speed: 450 }} className={` rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center  flex-col`}>
                  <h3 className='lg:text-[30px] sm:text-[19px] xs:text-[19px] text-[19px] lg:leading-[98px] mt-2 text-black font-bold'>SEVA TRADERS</h3>
                  <h1 className={`lg:text-[30px] sm:text-[19px] xs:text-[19px] text-[19px] lg:leading-[98px] mt-2 text-black`}>Authorized Distributor of <span className='blue-text-gradient'>Astral Pipes </span></h1>
                  <img src={astralpipes} alt='pipes' className='h-[80px]' />
                </div>
              </div>
              <div className='w-auto bg-transparent p-[1px] rounded-[20px] shadow-lg small:max-tablet:mt-5 small:max-tablet:ml-0  ml-4 border-blue-400 border-2'>
                <div options={{ max: 45, scale: 1, speed: 450 }} className={` rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center  flex-col`}>
                  <h3 className='lg:text-[30px] sm:text-[19px] xs:text-[19px] text-[19px] lg:leading-[98px] mt-2 text-black font-bold'>SEVA CERAMICS</h3>
                  <h1 className={`lg:text-[30px] sm:text-[19px] xs:text-[19px] text-[19px] lg:leading-[98px] mt-2 text-black`}>Authorized Distributor of <span className='blue-text-gradient'>Astral Baths</span></h1>
                  <img src={images} alt='pipes' className='h-[100px]' />
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* {mobile?<><img src={sevalogo} className='absolute h-[350px] mt-[350px] ml-[60px]' alt=''/></>:<><PipeCanvas /></>} */}
        {/* <div className='absolute xs:bottom-00 bottom-1  w-full flex justify-center items-center'>
          <a href='#about'>
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
              <motion.div animate={{ y: [0, 24, 0] }} transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }} className='w-3 h-3 rounded-full bg-secondary mb-1' />
            </div>
          </a>
        </div> */}
      </section>
    </nav>
  )
}

export default Home