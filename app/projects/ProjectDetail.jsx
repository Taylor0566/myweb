import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { assets } from '../../assets/assets';
import { workData } from '../../assets/assets';
import Link from 'next/link';

const ProjectDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [isEnglish, setIsEnglish] = useState(true);
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (id && workData) {
      const projectData = workData.find((item, index) => index === parseInt(id));
      setProject(projectData);
    }
  }, [id]);

  if (!project) return <div className="loading">加载中...</div>;

  return (
    <div className="project-detail-container">
      {/* 导航栏 */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <Link href="/">
              <img src={isEnglish ? assets.logo : assets.logo_dark} alt="Logo" className="logo" />
            </Link>
            <div className="header-right">
              <button onClick={() => setIsEnglish(!isEnglish)} className="language-btn">
                <img src={isEnglish ? assets.language_switch : assets.language_switch_dark} alt="Language" />
              </button>
              <Link href="/" className="back-btn">
                <img src={isEnglish ? assets.arrow_icon : assets.arrow_icon_dark} alt="Back" />
                {isEnglish ? 'Back to Home' : '返回首页'}
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* 项目封面 */}
      <section className="project-hero" style={{ backgroundImage: `url(${project.bgImage})` }}>
        <div className="container">
          <h1>{isEnglish ? project.title : project.titleZh}</h1>
          <p>{isEnglish ? project.description : project.descriptionZh}</p>
        </div>
      </section>

      {/* 项目概述 */}
      <section className="project-overview">
        <div className="container">
          <h2>{isEnglish ? 'Project Overview' : '项目概述'}</h2>
          <p>{isEnglish ? 'Project background and objectives...' : '项目背景和目标...'}</p>
          {project.url && (
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <span>{isEnglish ? 'View on GitHub' : '查看 GitHub'}</span>
              <img src={assets.right_arrow_white} alt="Arrow" />
            </a>
          )}
        </div>
      </section>

      {/* 功能展示 */}
      <section className="project-features">
        <div className="container">
          <h2>{isEnglish ? 'Key Features' : '核心功能'}</h2>
          <div className="features-grid">
            {/* 功能项示例 */}
            <div className="feature-item">
              <div className="feature-image">
                <img src="/feature-1.png" alt="Feature 1" />
              </div>
              <h3>{isEnglish ? 'Feature 1' : '功能一'}</h3>
              <p>{isEnglish ? 'Feature description...' : '功能描述...'}</p>
            </div>
            {/* 更多功能项... */}
          </div>
        </div>
      </section>

      {/* 技术栈 */}
      <section className="project-tech">
        <div className="container">
          <h2>{isEnglish ? 'Technologies Used' : '使用技术'}</h2>
          <div className="tech-grid">
            {/* 可以从一个技术栈数组中遍历生成 */}
            <div className="tech-item">
              <img src={assets.react} alt="React" />
              <span>React</span>
            </div>
            {/* 更多技术项... */}
          </div>
        </div>
      </section>

      {/* 开发过程 */}
      <section className="development-process">
        <div className="container">
          <h2>{isEnglish ? 'Development Process' : '开发过程'}</h2>
          <div className="timeline">
            {/* 时间线项目 */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>{isEnglish ? 'Planning Phase' : '规划阶段'}</h3>
                <p>{isEnglish ? 'Process description...' : '过程描述...'}</p>
              </div>
            </div>
            {/* 更多时间线项目... */}
          </div>
        </div>
      </section>

      {/* 联系区域 */}
      <section className="contact-section">
        <div className="container">
          <h2>{isEnglish ? 'Get In Touch' : '联系我们'}</h2>
          <p>{isEnglish ? 'Have questions about this project?' : '对此项目有疑问？'}</p>
          <a href="mailto:contact@example.com" className="mail-link">
            <img src={isEnglish ? assets.mail_icon : assets.mail_icon_dark} alt="Email" />
            <span>contact@example.com</span>
          </a>
        </div>
      </section>

      {/* 相关项目 */}
      <section className="related-projects">
        <div className="container">
          <h2>{isEnglish ? 'Related Projects' : '相关项目'}</h2>
          <div className="project-grid">
            {workData
              .filter((item, index) => index !== parseInt(id))
              .slice(0, 3)
              .map((item, index) => (
                <div 
                  key={index} 
                  className="project-card"
                  onClick={() => router.push(`/projects/${index}`)}
                  style={{ backgroundImage: `url(${item.bgImage})` }}
                >
                  <div className="project-info">
                    <h3>{isEnglish ? item.title : item.titleZh}</h3>
                    <p>{isEnglish ? item.description : item.descriptionZh}</p>
                    <img src={assets.right_arrow} alt="View" />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2023 {isEnglish ? 'Your Portfolio' : '您的作品集'}. {isEnglish ? 'All Rights Reserved.' : '版权所有。'}</p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetail;