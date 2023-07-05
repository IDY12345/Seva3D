import React from 'react'
import { motion } from 'framer-motion'

import { styles } from '../../style'

import {fadeIn,textVariant} from '../../utils/motion';

import  {SectionWrapper}  from '../../hoc'

const testimonials = [
  {
    testimonial:
      "Working on Seva Traders has been a fulfilling journey that allowed us to pursue our passion for providing top-quality hardware supplies to customers worldwide. As a founder, I am proud of the platform we have built and the positive impact it has made on individuals and businesses. Seeing customers successfully complete their projects with the tools and equipment we offer is incredibly rewarding. We remain dedicated to continuous improvement and innovation, ensuring that Seva Traders remains a trusted destination for all your hardware supply needs",
    name: "Yogesh Yeole",
    designation: "Owner",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "When we started Seva Traders, we wanted to create a platform that offers not only a wide range of hardware supplies but also exceptional customer service. As a founder, I am deeply grateful for the trust our customers have placed in us. It is incredibly satisfying to see our vision come to life and witness the positive feedback and success stories from our customers. We are committed to upholding the highest standards of quality, sourcing products from reliable manufacturers, and continuously improving our services. Thank you for choosing Seva Traders as your go-to source for all your hardware needs ",
    name: "Dinesh Yeole",
    designation: "Owner",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },

];

const TestimonialCard=({index,testimonial,name,designation,company,image})=>
{
  return(
  <motion.div variants={fadeIn("","spring",index*0.5,0.75)} className='bg-black-200 p-10 rounded-3xl xs:w-[480px] w-full'>
    <p className='text-white font-black text-[48px]'>"</p>
    <div className='mt-1'>

    <p>{testimonial}</p>

    <div className='mt-7 flex justify-between items-center gap-1'>
      <div className='flex-1  flex flex-col'>
        <p className='text-white font-medium text-[16px]'>
          <span className='blue-text-gradient'>@</span>{name}
        </p>
        <p className='mt-1 text-secondary text-[12px]'>
          {designation} 
        </p>
      </div>
      <img src={image} alt={`feedback-by-${name}`} className='w-10 h-10 rounded-full object-cover '/>
    </div>

    </div>

  </motion.div>
  )
}

const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>A Word From Our Founders</p>
            <h2 className={styles.sectionHeadText}>Testimonials</h2>
          </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14  flex flex-wrap gap-7 `}>
          {testimonials.map((testimonial,index)=>
          (
            <TestimonialCard 
            key={testimonial.name}
            index={index}
            {...testimonial}
            />
          ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks,"")