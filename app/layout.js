import { Outfit, Ovo, ZCOOL_XiaoWei, Ma_Shan_Zheng } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: '--font-outfit',
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: '--font-ovo',
});

// 添加艺术风格的中文字体选项
const zcoolXiaoWei = ZCOOL_XiaoWei({
  subsets: ["latin"],
  weight: ["400"],
  variable: '--font-zcool-xiaowei',
});

// 马善政体 - 书法风格字体
const maShanZheng = Ma_Shan_Zheng({
  subsets: ["latin"],
  weight: ["400"],
  variable: '--font-ma-shan-zheng',
});

export const metadata = {
  title: "Portfolio - LiangShengFu",
  description: "LiangShengFu's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${ovo.variable} ${zcoolXiaoWei.variable} ${maShanZheng.variable} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}