import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Plan() {
    return (
        <div>
            <h2>Project Timeline</h2>
            <VerticalTimeline>

                <VerticalTimelineElement
                    date="2024/11 - 2025/1"
                    iconStyle={{ background: '#3b82f6', color: '#fff' }}
                    title="User Research & Requirement Analysis"
                >
                    <p>
                        Conducted surveys and interviews for students, staff, and visitors to understand distinct needs
                        in navigation, equipment usage, onboarding, and guided tours.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    date="2025/1 - 2025/3"
                    iconStyle={{ background: '#10b981', color: '#fff' }}
                    title="Point Cloud Data Collection & Processing"
                >
                    <p>
                        Scanned both floors using handheld LiDAR. Used CloudCompare for noise removal, multi-scan alignment,
                        resampling, and texture enhancement to ensure clean and usable point clouds.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    date="2025/3 - 2025/5"
                    iconStyle={{ background: '#f59e0b', color: '#fff' }}
                    title="BIM Modeling & Unreal Engine Integration"
                >
                    <p>
                        Built BIM models for key lab spaces including the History Wall, Brainstorm Area, and Makerspace.
                        Integrated point cloud data for structural accuracy and imported assets into Unreal Engine.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    date="2025/5 - 2025/6"
                    iconStyle={{ background: '#8b5cf6', color: '#fff' }}
                    title="Web Platform Development"
                >
                    <p>
                        Built the project website using React to showcase team info, development progress, and later embed
                        interactive models. Deployed via Vercel for real-time updates.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    date="2025/6 - 2025/8"
                    iconStyle={{ background: '#ec4899', color: '#fff' }}
                    title="Model Refinement & Feature Enhancement"
                >
                    <p>
                        Added click events, guided tour paths, and textures. Planned immersive experiences such as smart
                        exploration and voice guidance. Preparing for VR integration.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    date="2025/8+"
                    iconStyle={{ background: '#ef4444', color: '#fff' }}
                    title="VR Integration & Public Showcase"
                >
                    <p>
                        Extend to VR headset support, implement staff onboarding guides, collaboration pathways,
                        and support for visitor modes with downloadable reports and historical annotations.
                    </p>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </div>
    );
}
