import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import cursor from './cursor.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import language_switch from './language-switch.png';
import language_switch_dark from './language-switch-dark.png';
import right_arrow from './right-arrow.png';
import framer from './framer.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    cursor,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    language_switch,
    language_switch_dark,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    framer,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'Tianditu GIS Application Framework',
        titleZh: '天地图GIS应用框架',
        description: 'A modern GIS application framework based on Mapbox GL JS and Tianditu API, providing flexible basemap switching and geospatial analysis capabilities.',
        descriptionZh: '基于Mapbox GL JS和天地图API的现代GIS应用框架，提供灵活的底图切换和地理空间分析功能',
        url: 'https://github.com/Taylor0566/map',
        bgImage: '/work-1.png',
        fullDescription: '这是一个集成天地图API和Mapbox GL JS的现代GIS应用框架，实现了矢量图、影像图和地形图三种底图类型切换，以及多种地理数据可视化方式。系统采用模块化设计，包含图层管理、绘图工具、空间分析等功能模块，并通过代理服务器解决跨域访问问题。项目基于Next.js和React构建，使用TypeScript确保代码类型安全，适合作为天地图应用开发的基础框架。',
        technologies: ['Next.js', 'React', 'TypeScript', 'Mapbox GL JS', '天地图API', 'Zustand', 'TailwindCSS', 'Node.js'],
        challenges: '项目主要挑战包括天地图API的跨域访问问题、多图层数据管理和渲染性能优化、地理空间数据的高效可视化表达，以及不同坐标系统间的精确转换。通过代理服务器、状态管理优化和图层按需加载等方案有效解决了这些问题。',
        features: [
            {name: '多底图支持', description: '集成矢量图、影像图和地形图三种底图类型，支持快速切换和混合显示'},
            {name: '地理数据可视化', description: '内置热力图、蜂窝图、分级设色图等多种地理数据可视化方式，支持大规模地理数据的直观展示'},
            {name: '空间分析工具', description: '提供区域绘制、空间查询和地理编码等功能，支持交互式空间分析和位置信息处理'}
        ],
        gallery: ['/map-screen1.png', '/map-screen2.png', '/map-screen3.png']
    },
    // {
    //     title: 'Geo based app',
    //     titleZh: '基于地理位置的应用',
    //     description: 'Mobile App',
    //     descriptionZh: '移动应用',
    //     bgImage: '/work-2.png',
    // },
    // {
    //     title: 'Photography site',
    //     titleZh: '摄影网站',
    //     description: 'Web Design',
    //     descriptionZh: '网页设计',
    //     bgImage: '/work-3.png',
    // },
    // {
    //     title: 'UI/UX designing',
    //     titleZh: 'UI/UX 设计',
    //     description: 'UI/UX Design',
    //     descriptionZh: 'UI/UX 设计',
    //     bgImage: '/work-4.png',
    // },
];

export const serviceData = [
    { 
        icon: assets.web_icon, 
        title: 'Web design', 
        titleZh: '网页设计',
        description: 'Web development is the process of building, programming...', 
        descriptionZh: '网页开发是构建和编程网站的过程...',
        link: '' 
    },
    { 
        icon: assets.mobile_icon, 
        title: 'Mobile app', 
        titleZh: '移动应用',
        description: 'Mobile app development involves creating software for mobile devices...', 
        descriptionZh: '移动应用开发涉及为移动设备创建软件...',
        link: '' 
    },
    { 
        icon: assets.ui_icon, 
        title: 'UI/UX design', 
        titleZh: 'UI/UX 设计',
        description: 'UI/UX design focuses on creating a seamless user experience...', 
        descriptionZh: 'UI/UX 设计专注于创造无缝的用户体验...',
        link: '' 
    },
    { 
        icon: assets.graphics_icon, 
        title: 'Graphics design', 
        titleZh: '平面设计',
        description: 'Creative design solutions to enhance visual communication...', 
        descriptionZh: '创意设计解决方案，增强视觉传达效果...',
        link: '' 
    },
];

export const infoList = [
    { 
      icon: assets.code_icon, 
      iconDark: assets.code_icon_dark, 
      title: 'Languages', 
      titleZh: '编程语言',
      description: 'HTML, CSS, JavaScript React Js, Next Js, Vue, C/C++, Python',
      descriptionZh: 'HTML, CSS, JavaScript React Js, Next Js, Vue, C/C++, Python'
    },
    { 
      icon: assets.edu_icon, 
      iconDark: assets.edu_icon_dark, 
      title: 'Education', 
      titleZh: '教育背景',
      description: 'B.Tech in Computer Science',
      descriptionZh: '计算机科学学士学位'
    },
    { 
      icon: assets.project_icon, 
      iconDark: assets.project_icon_dark, 
      title: 'Projects', 
      titleZh: '项目经验',
      description: 'Built more than 5 projects',
      descriptionZh: '已完成5个以上项目'
    }
];

export const toolsData = [
    assets.vscode, assets.figma, assets.git, assets.cursor, assets.framer
];