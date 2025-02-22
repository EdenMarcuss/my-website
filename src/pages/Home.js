import React from 'react';
import './Home.css'; // 创建对应的样式文件

export default function Home() {
  return (
    <div className="home-container">
      <div className="content-card">
        <h2 className="title-gradient">
          <span className="icon">🌐</span>
          实验室数字孪生项目
        </h2>
        <p className="description">
          通过高精度雷达扫描与Unreal引擎深度结合，构建毫米级精度的实验室三维数字孪生模型。
          实现环境数据的实时映射与可视化交互，为科研实验提供沉浸式虚拟操作平台。
        </p>
        <div className="tech-grid">
          <div className="tech-item">
            <div className="tech-icon">📡</div>
            <span>雷达点云扫描</span>
          </div>
          <div className="tech-item">
            <div className="tech-icon">🎮</div>
            <span>Unreal引擎渲染</span>
          </div>
          <div className="tech-item">
            <div className="tech-icon">📊</div>
            <span>实时数据映射</span>
          </div>
        </div>
      </div>
    </div>
  );
}