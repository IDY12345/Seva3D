import React,{useEffect,useState} from 'react';

import { styles } from '../../style';

import { motion } from 'framer-motion'
import { PipeCanvas } from '../../components/Pipes';
function Home(sidebar) {
  const [mobile, setMobile] = useState(false);
  console.log(sidebar);
    useEffect(() => {
        if (window.innerWidth <= 768) {
            setMobile(true);
        }
    }, []);
    useEffect(() => {
        const handleSize = () => {
            if (window.innerWidth <= 768) {
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
      {!mobile && (
            <section className='relative w-full h-screen mx-auto'>
            <div className={`${styles.paddingX} absolute insert-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
              <div className='flex flex-col justify-center mt-5'>
                <div className='w-5 h-5 rounded-full bg-[#2f80ed]' />
                <div className='w-1 sm:h-80 h-40 blue-gradient ml-2 ' />
              </div>
              <div>
                <h1 className={`${styles.heroHeadText} text-white`}>Welcome to <span className='blue-text-gradient'>Seva Traders</span></h1>
                <p className={`${styles.heroSubText} mt-2 text-white-100 `}>Your One-Stop Destination <br className='sm:block hidden' />  for Quality Hardware Supplies!</p>        
               </div>
            </div>
            <PipeCanvas />
            <div className='absolute xs:bottom-00 bottom-1  w-full flex justify-center items-center'>
              <a href='#about'>
                <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                    <motion.div animate={{y:[0,24,0]}} transition={{duration:1.5 ,repeat:Infinity,repeatType:'loop'}} className='w-3 h-3 rounded-full bg-secondary mb-1' />
                </div>
              </a>
            </div>
          </section>
      )}
      {
        mobile &&(
          <div class="Main-sidebar">
            <div class={sidebar ? "Inner-Main active":"Inner-Main"}>
              <p class="Checked">{sidebar}</p>
              <p class="Sidebar-Name">DELIVERS ELITE PLUMBING SERVICES</p>
              <p class="Sidebar-Subname">to businesses and home owners</p>
            </div>
          </div>
        )
      }
    </nav>
  )
}

export default Home