import React from 'react'
import {assets} from '@/assets/assets'
import Image from 'next/image'
import { motion } from "framer-motion"
import { translations } from '@/translations/translations'

const Contact = ({isDarkMode, language}) => {
    const [result, setResult] = React.useState("");
    const t = translations[language];
    
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult(language === 'en' ? "Sending...." : "发送中....");
        const formData = new FormData(event.target);

        formData.append("access_key", "f4d132a2-453c-4ba6-b03f-f83556b95356");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult(language === 'en' ? "Form Submitted Successfully" : "表单提交成功");
        event.target.reset();
        } else {
        console.log("Error", data);
        setResult(data.message);
        }
    };
  return (
    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}} id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>
        <motion.h4 initial={{y:-20,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration: 0.5,delay: 0.3}} className={`text-center mb-2 text-lg font-Ovo ${language === 'zh' ? 'zh-text' : 'en-text'}`}>{t.contactWithMe}</motion.h4>
        <motion.h2 initial={{y:-20,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration: 0.5,delay: 0.5}} className={`text-center text-5xl font-Ovo ${language === 'zh' ? 'zh-text' : 'en-text'}`}>{t.getInTouch}</motion.h2>
        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 0.5,delay: 0.7}} className={`text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo ${language === 'zh' ? 'zh-text' : 'en-text'}`}>
            {t.contactDescription}
        </motion.p>
        <motion.form initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 0.5,delay: 0.9}} onSubmit={onSubmit} className='max-w-2xl mx-auto'>
            <motion.div className='grid grid-cols-auto gap-6 mt-10 mb-8' style={{gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'}}>
                <motion.input initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0}} transition={{duration: 0.6,delay:1.1}} type="text" name='name' placeholder={t.enterName} required  className={`flex-1 p-3 outline-none boeder-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90 ${language === 'zh' ? 'zh-text' : 'en-text'}`}/>
                <motion.input initial={{opacity:0,x:50}} whileInView={{opacity:1,x:0}} transition={{duration: 0.6,delay:1.2}} type="email" name='email' placeholder={t.enterEmail} required className={`flex-1 p-3 outline-none boeder-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90 ${language === 'zh' ? 'zh-text' : 'en-text'}`}/>
            </motion.div>
            <motion.textarea initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration: 0.5,delay: 0.3}} rows='6' placeholder={t.enterMessage} required className={`w-full p-4 outline-none boeder-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90 ${language === 'zh' ? 'zh-text' : 'en-text'}`} name='message'></motion.textarea>
            <motion.button initial={{scale:1}} whileHover={{scale:1.05}} transition={{duration: 0.3}} type='submit' className={`py-3 px-8 w-max flex items-center justify-between gap-2 mx-auto bg-black/80 text-white rounded-full hover:bg-black duration-500 dark:bg-transparent dark:hover:bg-darkHover dark:border-[0.5px] ${language === 'zh' ? 'zh-text' : 'en-text'}`}>{t.submitNow}<Image src={assets.right_arrow_white} alt="" className='w-4' /></motion.button>
            <motion.p className={`mt-4 text-center ${language === 'zh' ? 'zh-text' : 'en-text'}`}>{result}</motion.p>
        </motion.form>
    </motion.div>
  )
}

export default Contact