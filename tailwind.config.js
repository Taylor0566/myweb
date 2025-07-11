/** @type {import('tailwindcss').Config} */
export default{
  content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      extend: {
          colors: {
              lightHover: '#fcf4ff',
              darkHover: '#2a004a',
              darkTheme: '#11001F',
          },
          fontFamily:{
              Outfit:["var(--font-outfit)","sans-serif"],
              Ovo:["var(--font-ovo)","serif"],
              ZcoolXiaoWei:["var(--font-zcool-xiaowei)","sans-serif"],
              MaShanZheng:["var(--font-ma-shan-zheng)","sans-serif"],
          },
          boxShadow:{
            'black': '4px 4px 0 #000',
            'white': '4px 4px 0 #fff',
          },
          gridTemplateColumns:{
            'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
          }
      },
  },
  darkMode:'class',
  plugins:[]
};