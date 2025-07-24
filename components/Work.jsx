import React from 'react'
import { workData } from '@/assets/assets'
import Image from 'next/image'
import { motion } from "framer-motion"
import { translations } from '@/translations/translations'

const Work = ({ isDarkMode, language }) => {
    const t = translations[language];

    return (
        <motion.div id='works' className='w-full px-[12%] py-10 scroll-mt-20' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
            <motion.h4 initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} className={`text-center mb-2 text-lg font-Ovo ${language === 'zh' ? 'zh-text' : 'en-text'}`}>{t.workTitle}</motion.h4>
            <motion.h2 initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className={`text-center text-5xl font-Ovo ${language === 'zh' ? 'zh-text' : 'en-text'}`}>{t.recentWorks}</motion.h2>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className='grid grid-cols-auto gap-6 mt-20'>
                {workData.map(({ title, titleZh, description, descriptionZh, bgImage }, index) => (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                        className='h-80 rounded-xl overflow-hidden group cursor-pointer relative' key={index}
                        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    >
                        <div className='absolute h-full w-full bg-black bg-opacity-30 group-hover:bg-opacity-50 flex flex-col justify-end p-6 transition'>
                            <h3 className={`text-white font-semibold text-2xl ${language === 'zh' ? 'zh-text' : 'en-text'}`}>{language === 'en' ? title : titleZh}</h3>
                            <p className={`text-white/80 ${language === 'zh' ? 'zh-text' : 'en-text'}`}>{language === 'en' ? description : descriptionZh}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Work