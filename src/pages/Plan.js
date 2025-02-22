import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/Style.min.css';

export default function Plan() {
  return (
    <div>
      <h2>项目计划</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          date="2025/1 - 2025/3"
          iconStyle={{ background: 'green' }}
          title="数据采集"
        >
          <p>已完成雷达扫描和点云处理</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="2025/3 - 2025/6"
          iconStyle={{ background: 'orange' }}
          title="模型构建"
        >
          <p>Unreal引擎模型开发中</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}