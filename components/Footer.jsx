import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import { translations } from '@/translations/translations'

const Footer = ({ isDarkMode, language }) => {
  const t = translations[language];
  const year = new Date().getFullYear();

  return (
    <div className='flex flex-col md:flex-row items-center justify-between p-8 md:px-20 border-t border-gray-200 dark:border-white/20'>
      <div className='flex items-center'>
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} className='w-28 cursor-pointer' alt="" />
      </div>
      <p className={`text-gray-500 my-4 md:my-0 dark:text-white/60 ${language === 'zh' ? 'zh-text' : 'en-text'}`}>© {year} LiangShengFu. {t.rightsReserved}.</p>
      <div className='flex items-center gap-5'>
        <a href="https://github.com/Taylor0566" className={`text-gray-500 dark:text-white/60 ${language === 'zh' ? 'zh-text' : 'en-text'}`}>Github</a>
        <a href="https://www.linkedin.com/in/升富-梁-616509374/" className={`text-gray-500 dark:text-white/60 ${language === 'zh' ? 'zh-text' : 'en-text'}`}>LinkedIn</a>
        <a href="https://gitee.com/lsf0566" className={`text-gray-500 dark:text-white/60 ${language === 'zh' ? 'zh-text' : 'en-text'}`}>Giee</a>
      </div>
    </div>
  )
}

export default Footer