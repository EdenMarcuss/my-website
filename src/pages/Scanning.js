import React from 'react';
import '../App.css'; // 引入全局样式

export default function Scanning() {
    return (
        <div className="page-container">
            <div className="section-card">
                <h2 className="section-title">
                    <span>📡</span> Scanning & Modeling Progress
                </h2>
                <p>
                    We used handheld LiDAR provided by AIS to scan both floors of the Innovation Wing, collecting point cloud data
                    for various zones including the History Wall, Brainstorm Area, and Makerspace. However, challenges such as noise
                    from glass reflections and low point density required advanced processing.
                </p>
            </div>

            <div className="section-card">
                <h2 className="section-title">
                    <span>🧰</span> Processing Pipeline
                </h2>
                <p>
                    The point cloud data was processed in CloudCompare using a multi-stage pipeline:
                </p>
                <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                    <li><strong>Noise Removal:</strong> Statistical and radius filters to remove outliers caused by glass and reflections</li>
                    <li><strong>Manual Cleaning:</strong> Removed shadow clusters and false highlights from reflective surfaces</li>
                    <li><strong>Point Cloud Densification:</strong> Merged multiple scans using ICP alignment for better resolution</li>
                    <li><strong>Interpolation:</strong> Used Poisson Disk Sampling to fill gaps behind objects</li>
                    <li><strong>Edge Refinement:</strong> Applied curvature analysis to smooth boundaries and restore structure</li>
                </ul>
            </div>

            <div className="section-card">
                <h2 className="section-title">
                    <span>🧱</span> BIM Alignment & Visual Enhancement
                </h2>
                <p>
                    We aligned the processed point cloud with BIM models to improve visual clarity and ensure precise geometry.
                    For surfaces like murals and glass, we manually captured textures and attached them to the mesh to enhance
                    realism. All cleaned data was then imported into Unreal Engine for further interaction design and VR integration.
                </p>
            </div>

            <div className="section-card">
                <h2 className="section-title">
                    <span>🖼️</span> Unreal Model Snapshots
                </h2>

                <div className="img-block">
                    <img src="/images/brainstorm_area.png" alt="Stair model section" />
                    <p>Figure 1: Brainstorm Area</p>
                </div>

                <div className="img-block">
                    <img src="/images/history_wall_view.png" alt="History Wall view" />
                    <p>Figure 2: History Wall</p>
                </div>
            </div>
        </div>
    );
}
