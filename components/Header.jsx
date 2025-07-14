import React from 'react'
import {assets} from '@/assets/assets'
import Image from 'next/image'
import { motion } from "framer-motion"
import { translations } from '@/translations/translations'

const Header = ({isDarkMode, language}) => {
  const t = translations[language];
  
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <motion.div initial={{scale: 0}} whileInView={{scale: 1}} transition={{duration: 0.8,type: 'spring',stiffness: 100}} className='flex flex-col items-center'>
            <Image src={assets.profile_img} alt="" className='rounded-full w-32' />
        </motion.div>
        <motion.h3 initial={{y:-20,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration: 0.6,delay: 0.3}} className={`flex items-end justify-center gap-2 text-xl md:text-2xl mb-3 font-Ovo ${language === 'zh' ? 'zh-title' : 'en-text'}`}>{t.hiIm}<Image src={assets.hand_icon} alt="" className='w-6' /></motion.h3>
        
        <motion.h1 initial={{y:-30,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration: 0.8,delay: 0.5}} className={`text-3xl sm:text-6xl lg:text-[66px] font-Ovo ${language === 'zh' ? 'zh-title' : 'en-text'}`}>{t.frontendDeveloper}</motion.h1>
            <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 0.6,delay: 0.7}} className={`text-gray-500 text-sm sm:text-base lg:text-lg mb-3 dark:text-white/80 ${language === 'zh' ? 'zh-text' : 'en-text'}`}>
                {t.developerDescription}
            </motion.p>
            <motion.div initial={{y:-30,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration: 0.6,delay: 0.9}} className='flex flex-col sm:flex-row items-center justify-center gap-4 mt-4'>
                <motion.a initial={{y:30,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration: 0.6,delay: 1}} href="#contact" className={`px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 ${language === 'zh' ? 'zh-text' : 'en-text'}`}>{t.contactMeButton}<Image src={assets.right_arrow_white} alt="" className='w-4' /></motion.a>
                <motion.a initial={{y:30,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration: 0.6,delay: 1.2}} href="/resume.pdf" download className={`px-10 py-3 border rounded-full flex items-center gap-2 ${isDarkMode ? 'bg-white text-black border-white' : 'border-gray-500'} ${language === 'zh' ? 'zh-text' : 'en-text'}`}>{t.myResume}<Image src={assets.download_icon} alt="" className='w-4' /></motion.a>
            </motion.div>
        
    </div>
  )
}

export default Header