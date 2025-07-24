import React from 'react'
import { serviceData } from '@/assets/assets'
import Image from 'next/image'
import { motion } from "framer-motion"
import { translations } from '@/translations/translations'

const Services = ({ isDarkMode, language }) => {
    const t = translations[language];

    return (
        <motion.div id='services' className='w-full px-[12%] py-10 scroll-mt-20' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
            <motion.h4 initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} className={`text-center mb-2 text-lg font-Ovo ${language === 'zh' ? 'zh-text' : 'en-text'}`}>{t.servicesTitle}</motion.h4>
            <motion.h2 initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className={`text-center text-5xl font-Ovo ${language === 'zh' ? 'zh-text' : 'en-text'}`}>{t.whatIDo}</motion.h2>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className='grid grid-cols-auto gap-6 max-w-6xl mx-auto mt-20'>
                {serviceData.map(({ icon, title, titleZh, description, descriptionZh, link }, index) => (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                        className='border-[0.5px] border-gray-400 p-8 rounded-xl group cursor-pointer hover:bg-lightHover hover:-translate-y-2 transition hover:shadow-xl shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50' key={index}
                    >
                        <Image src={icon} alt="" className='w-10 mt-3' />
                        <h3 className={`my-4 font-semibold text-gray-700 text-xl dark:text-white ${language === 'zh' ? 'zh-text' : 'en-text'}`}>{language === 'en' ? title : titleZh}</h3>
                        <p className={`text-gray-600 mb-4 dark:text-white/80 ${language === 'zh' ? 'zh-text' : 'en-text'}`}>{language === 'en' ? description : descriptionZh}</p>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Services