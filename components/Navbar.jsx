import React, { useState, useEffect } from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import { translations } from '@/translations/translations'

const Navbar = ({ isDarkMode, setIsDarkMode, language, setLanguage }) => {
    const [isScroll, setIsScroll] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openMenu = () => {
        setIsMenuOpen(true);
    }
    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'zh' : 'en');
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        })
    }, [])

    const t = translations[language];

    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
                <Image src={assets.header_bg_color} alt='' className='w-full' />
            </div>
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}>
                <a href="#top">
                    <Image src={isDarkMode ? assets.logo_dark : assets.logo} className='w-28 cursor-pointer mr-14' alt="" />
                </a>

                <ul className={'hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark border dark:broder-white/50 dark:bg-transparent"} '}>
                    <li><a className={`font-Ovo ${language === 'zh' ? 'zh-text' : 'en-text'}`} href="#top">{t.home}</a></li>
                    <li><a className={`font-Ovo ${language === 'zh' ? 'zh-text' : 'en-text'}`} href="#about">{t.aboutMe}</a></li>
                    <li><a className={`font-Ovo ${language === 'zh' ? 'zh-text' : 'en-text'}`} href="#services">{t.services}</a></li>
                    <li><a className={`font-Ovo ${language === 'zh' ? 'zh-text' : 'en-text'}`} href="#works">{t.myWorks}</a></li>
                    <li><a className={`font-Ovo ${language === 'zh' ? 'zh-text' : 'en-text'}`} href="#contact">{t.contactMe}</a></li>
                </ul>
                <div className='flex items-center gap-4'>
                    <button onClick={toggleLanguage} className="mr-2">
                        <Image src={isDarkMode ? assets.language_switch_dark : assets.language_switch} alt="Switch Language" className='w-6' />
                    </button>
                    <button onClick={() => setIsDarkMode(prev => !prev)}>
                        <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="" className='w-6' />
                    </button>
                    <a href="#contact" className={`hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50 ${language === 'zh' ? 'zh-text' : 'en-text'}`}>{t.contact} <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="" className='w-3' /></a>
                    <button className='block md:hidden ml-3' onClick={openMenu}>
                        <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="" className='w-6' />
                    </button>
                </div>
                {/* 移动端菜单 */}
                <ul
                    className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 z-50 h-screen transition duration-500 ${isMenuOpen ? 'right-0' : '-right-64'} ${isDarkMode ? 'text-white' : ''}`}
                    style={{ backgroundColor: isDarkMode ? '#11001F' : '#fcf4ff' }}
                >
                    <div className='absolute right-6 top-6' onClick={closeMenu}>
                        <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="" className='w-5 cursor-pointer' />
                    </div>
                    <li><a className={`font-Ovo ${language === 'zh' ? 'zh-text' : 'en-text'}`} onClick={closeMenu} href="#top">{t.home}</a></li>
                    <li><a className={`font-Ovo ${language === 'zh' ? 'zh-text' : 'en-text'}`} onClick={closeMenu} href="#about">{t.aboutMe}</a></li>
                    <li><a className={`font-Ovo ${language === 'zh' ? 'zh-text' : 'en-text'}`} onClick={closeMenu} href="#services">{t.services}</a></li>
                    <li><a className={`font-Ovo ${language === 'zh' ? 'zh-text' : 'en-text'}`} onClick={closeMenu} href="#works">{t.myWorks}</a></li>
                    <li><a className={`font-Ovo ${language === 'zh' ? 'zh-text' : 'en-text'}`} onClick={closeMenu} href="#contact">{t.contactMe}</a></li>
                </ul>

            </nav>
        </>
    )
}

export default Navbar