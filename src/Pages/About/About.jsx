import React,{useState,useEffect} from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'
import { styles } from '../../style'
import {fadeIn,textVariant } from '../../utils/motion'
import  {SectionWrapper}  from '../../hoc'

// import SectionWrapper from '../hoc'
const services = [
  {
    title: "Our Journey",
    description:"Founded in 2003, Seva Traders was born out of a passion for providing a comprehensive range of hardware supplies to customers across various industries. Our founders recognized the importance of having access to reliable tools and equipment for both professional and personal projects. With this vision in mind, we embarked on a mission to create a platform that offers an extensive selection of high-quality hardware supplies at competitive prices.",
    color:"primary"
  },
  {
    title: "Our Commitment",
    description:"We are dedicated to offering products that meet the highest standards of quality and durability. We carefully curate our inventory, partnering with reputable manufacturers who share our commitment to excellence. This ensures that our customers can trust the products they purchase from us, knowing that they will perform reliably and stand the test of time.",
    color:"tertiary"
  },
  {
    title: "Customer Satisfaction",
    description:"At Seva Traders, customer satisfaction is at the core of everything we do. We strive to exceed your expectations by providing an exceptional shopping experience from start to finish. Our team of knowledgeable professionals is always available to assist you, offering expert advice, answering your questions, and guiding you in selecting the right hardware supplies for your specific needs.We value your feedback and continuously strive to improve our services. Your input helps us refine our product offerings, enhance our website's functionality, and provide an even better experience for our valued customers.",
    color:"primary"
  },
  {
    title: "Our Vision",
    description:"Our vision is to be the go-to destination for hardware supplies, serving as a reliable partner for professionals, DIY enthusiasts, and homeowners alike. We aim to be synonymous with quality, innovation, and exceptional customer service, making it effortless for you to find the hardware supplies you need to bring your projects to life.",
    color:"tertiary"
  },
  {
    title:"Join Us",
    description:"We invite you to explore our website and discover the diverse range of hardware supplies we offer. Whether you're looking for power tools, fasteners, plumbing supplies, electrical equipment, or any other hardware products, we have you covered. With our user-friendly interface, secure ordering system, and efficient shipping, we make it easy for you to get the supplies you need, right when you need them.",
    color:"primary"
  },
];

const ServiceCard=({index,title,description,color})=>{
  const [mobile, setMobile] = useState(false);
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
  return(
    <Tilt className={`"max-w-[250px] w-full h-full"`} >
      <motion.div variants={fadeIn("right","spring",0.5*index,0.75)} className='w-full blue-black-gradient p=[1px] rounded-[20px] shadow-card'>
        <div options={{max:45,scale:1,speed:450}} className={` rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center  flex-col`}>
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
            <p className='text-white text-[19px] '>{`${mobile?"":`${description}`}`}</p>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText}`}>Introduction</p>
      <h2 className={styles.sectionHeadText}>OverView.</h2>
    </motion.div>

    <motion.p variants={fadeIn("","",0.1,1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
    At Seva Traders, we take pride in being a leading provider of high-quality hardware supplies. With a strong commitment to excellence, we have established ourselves as a reliable source for individuals and businesses seeking top-notch products to meet their hardware needs.    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service,index)=>
      (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About,"about")