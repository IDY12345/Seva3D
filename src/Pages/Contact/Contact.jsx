import React,{useState,useRef} from 'react'

import { motion } from 'framer-motion'

import emailjs from '@emailjs/browser'

import { styles } from '../../style'

import EarthCanvas from '../../components/Earth'

import { slideIn } from '../../utils/motion'

import  {SectionWrapper}  from '../../hoc'

const Contact = () => {

  const formRef=useRef()

  const [form, setForm] = useState({name:'' ,email:'',message:''})
  const [loading, setLoading] = useState(false)
  const handleChange=(e)=>{
    const {name,value } = e.target;

    setForm({...form , [name]:value})

  }

  const handleSubmit=(e)=>{

    e.preventDefault();
    setLoading(true);

    // template_o76o5qc

    // service_dxfgm9d

    // pbpafx7ir1g4vWs0K

    emailjs.send(
      'service_dxfgm9d',
      'template_o76o5qc',
      {
      from_name:form.name,
      to_Name:'Seva Traders',
      from_email:form.email,
      to_email:'info@sevatraders.com',
      message:form.message,
      },
      'pbpafx7ir1g4vWs0K'
      )
      .then(()=>{
        setLoading(false)
        alert('Thank You for message ! I will get back to you as soon as possible.');

        setForm({
          name:'',
          email:'',
          message:'',
        },(error )=>{
          setLoading(false)

          console.log(error)

          alert ('Something went wrong.')
        })
      })
  }
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left','tween',0.2,1)} className='flex-[0.75] bg-[#008bd6] p-8 rounded-2xl'>
        <p className={`sm:text-[18px] text-[14px] text-gray-600 uppercase tracking-wider`}>Get In Touch</p>
        <h3 className={styles.sectionHeadText}>
          Contact.
        </h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input type='text' name='name' value={form.name} onChange={handleChange} placeholder='Name, Please !' className='bg-[#00b1f4] py-4 px-6 placeholder:text-white text white rounded-lg outlined-none border-none font-medium' />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input type='email' name='email' value={form.email} onChange={handleChange} placeholder='Email, Please ! ' className='bg-[#00b1f4] py-4 px-6 placeholder:text-white text white rounded-lg outlined-none border-none font-medium' />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea rows="7" name='message' value={form.message} onChange={handleChange} placeholder='Query, Please ! ' className='bg-[#00b1f4] py-4 px-6 placeholder:text-white text white rounded-lg outlined-none border-none font-medium' />
          </label>
          <button type='submit' className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>
            {loading ? 'Sending...':'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div variants={slideIn('right','tween',0.2,1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")