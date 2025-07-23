'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { workData, assets } from '../../../assets/assets';

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState(null);
  
  useEffect(() => {
    if (params.id) {
      const projectIndex = parseInt(params.id);
      if (workData[projectIndex]) {
        setProject(workData[projectIndex]);
      } else {
        router.push('/');
      }
    }
  }, [params.id, router]);
  
  if (!project) return <div className="min-h-screen flex items-center justify-center">加载中...</div>;
  
  return (
    <div className="min-h-screen bg-white dark:bg-[#11001F]">
      {/* 项目封面 */}
      <div className="relative h-[50vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{backgroundImage: `url(${project.bgImage})`}}
        >
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white zh-title">
              {project.titleZh || project.title}
            </h1>
          </div>
        </div>
      </div>
      
      {/* 项目内容 */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* 项目概述 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-blue-500 inline-block dark:text-white zh-title">
            项目概述
          </h2>
          <p className="text-gray-800 dark:text-gray-200 zh-text">
            {project.fullDescription}
          </p>
        </div>
        
        {/* 技术栈 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-blue-500 inline-block dark:text-white zh-title">
            技术栈
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies && project.technologies.map((tech, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm zh-text"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* 功能特点 */}
        {project.features && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-blue-500 inline-block dark:text-white zh-title">
              核心功能
            </h2>
            <ul className="space-y-4">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 zh-text">
                  <span className="text-blue-500 mt-1">•</span>
                  <div>
                    <span className="font-bold dark:text-white">{feature.name}:</span>
                    <span className="text-gray-700 dark:text-gray-300"> {feature.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* 项目难点 */}
        {project.challenges && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-blue-500 inline-block dark:text-white zh-title">
              项目难点与解决方案
            </h2>
            <p className="text-gray-800 dark:text-gray-200 zh-text">
              {project.challenges}
            </p>
          </div>
        )}
        
        {/* 项目截图 */}
        {project.gallery && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-blue-500 inline-block dark:text-white zh-title">
              项目截图
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((img, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-lg transition-transform hover:-translate-y-1">
                  <img 
                    src={img} 
                    alt={`${project.titleZh || project.title} 截图 ${index+1}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* 项目链接和返回按钮 */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          {project.url && (
            <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full transition-all zh-text"
            >
              查看源代码
              <img src={assets.right_arrow_white.src} alt="→" className="w-4 h-4" />
            </a>
          )}
          <Link 
            href="/"
            className="flex items-center justify-center gap-2 border-2 border-blue-500 text-blue-500 dark:text-white py-3 px-6 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all zh-text"
          >
            <span className="transform rotate-180">→</span> 
            返回首页
          </Link>
        </div>
      </div>
    </div>
  );
}