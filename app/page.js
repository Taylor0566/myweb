'use client'
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About";
import Services from "../components/Services";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [language, setLanguage] = useState('en'); // 添加语言状态，默认英文

  useEffect(() => {
    setIsClient(true);

    try {
      if (localStorage.theme === 'dark') {
        setIsDarkMode(true);
      }
      else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setIsDarkMode(true);
      }
      else {
        setIsDarkMode(false);
      }

      // 获取保存的语言设置
      if (localStorage.language) {
        setLanguage(localStorage.language);
      }
    } catch (e) {
      // 忽略错误
    }
  }, []);

  useEffect(() => {
    if (!isClient) return;

    try {
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.theme = '';
      }
    } catch (e) {
      // 忽略错误
    }
  }, [isDarkMode, isClient]);

  // 保存语言设置
  useEffect(() => {
    if (!isClient) return;

    try {
      localStorage.language = language;
      // 设置文档语言属性
      document.documentElement.lang = language;
    } catch (e) {
      // 忽略错误
    }
  }, [language, isClient]);

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} language={language} setLanguage={setLanguage} />
      <Header isDarkMode={isDarkMode} language={language} />
      <About isDarkMode={isDarkMode} language={language} />
      <Services isDarkMode={isDarkMode} language={language} />
      <Work isDarkMode={isDarkMode} language={language} />
      <Contact isDarkMode={isDarkMode} language={language} />
      <Footer isDarkMode={isDarkMode} language={language} />
    </>
  );
}