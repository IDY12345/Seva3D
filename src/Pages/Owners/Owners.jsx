import React from 'react'
import { motion } from 'framer-motion'

import { styles } from '../../style'

import {textVariant} from '../../utils/motion';

import  {SectionWrapper}  from '../../hoc'

// const testimonials = [
//   {
//     testimonial:
//       "We are an elite firm with good services and provide services in a short period of time .",
//     name: "Yogesh Yeole",
//     designation: "Owner",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "We assure 100% delivery ",
//     name: "Dinesh Yeole",
//     designation: "Owner",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

// const OwnerCard=({index,testimonial,name,designation,company,image})=>
// {
//   return(
//   <motion.div variants={fadeIn("","spring",index*0.5,0.75)} className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'>
//     <p className='text-white font-black text-[48px]'>"</p>
//     <div className='mt-1'>

//     <p>{testimonial}</p>

//     <div className='mt-7 flex justify-between items-center gap-1'>
//       <div className='flex-1  flex flex-col'>
//         <p className='text-white font-medium text-[16px]'>
//           <span className='blue-text-gradient'>@</span>{name}
//         </p>
//         <p className='mt-1 text-secondary text-[12px]'>
//           {designation} 
//         </p>
//       </div>
//       <img src={image} alt={`feedback-by-${name}`} className='w-10 h-10 rounded-full object-cover '/>
//     </div>

//     </div>

//   </motion.div>
//   )
// }

const Owners = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-primary rounded-2xl min-h-[300px]`}>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>A Word From Our Founders</p>
            <h2 className={styles.sectionHeadText}>Testimonials</h2>
          </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14  flex flex-wrap gap-7 bg-primary rounded-2xl`}>
            <h2 className={`${styles.sectionSubText}`}>
                <ul>
           <li className=' text-[22px] rounded-2xl mb-[25px]'>As the proud owners of this company, we would like to extend a warm greeting and express our gratitude for your interest in our hardware supply website.</li> 

            <li className=' text-[22px] rounded-2xl mb-[25px] blue-text-gradient'>When we founded Seva Traders, our goal was to create a platform that not only offers a wide range of high-quality hardware supplies but also provides an exceptional shopping experience for our customers.</li> 
            
            <li className='text-[22px] rounded-2xl mb-[25px]'>As passionate individuals with a deep understanding of the importance of reliable tools and equipment, we wanted to share our expertise and make these products easily accessible to professionals, DIY enthusiasts, and homeowners alike.</li>

            <li className=' text-[22px] rounded-2xl mb-[25px] green-text-gradient'>We have always believed that a successful business is built on a foundation of trust, quality, and exceptional customer service. That's why we have taken great care in curating our inventory, sourcing products from reputable manufacturers who share our commitment to excellence. </li>

            <li className='text-[22px] rounded-2xl mb-[25px]'>We stand behind every item we offer and are confident that they will meet your expectations and serve you well in your projects.</li>

            <li className=' text-[22px] rounded-2xl mb-[25px] blue-text-gradient'>At Seva Traders, we strive to go above and beyond to meet your needs. Our team is dedicated to providing outstanding customer service, offering expert advice, and ensuring your shopping experience is seamless and enjoyable. We value your feedback and continuously work to improve our offerings and services based on your suggestions.</li>
            
            <li className='text-[22px] rounded-2xl mb-[25px]'>We want to assure you that we are deeply invested in your satisfaction. Your trust and loyalty are what motivate us to constantly improve and bring you the best hardware supplies on the market. We understand that your projects are important, and we are honored to be a part of your journey.</li>

            <li className='text-[22px] rounded-2xl mb-[25px] green-text-gradient'>Thank you for choosing Seva Traders as your trusted source for hardware supplies. We invite you to explore our website, browse our extensive catalog, and discover the tools and equipment that will help you bring your projects to life.</li> 
            
            <li className='text-[22px] rounded-2xl mb-[25px]'>Should you have any questions or need assistance, please do not hesitate to reach out to our dedicated team.</li>
            
            <li className='text-[22px] rounded-2xl mb-[25px]'>We look forward to serving you and being a reliable partner in your hardware supply needs.</li>

            <p className='text-[20px] mb-[10px]'>Sincerely,</p>

            <p className='text-[20px] mb-[10px]'>
            Yogesh Yeole & Dinesh Yeole
            </p>
            <h2>
            Owners, Seva Traders
            </h2>
            </ul>
            </h2>
      </div>
    </div>
  )
}

export default SectionWrapper(Owners,"")