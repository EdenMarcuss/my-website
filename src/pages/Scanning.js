import React from 'react';

export default function Scanning() {
    return (
        <div>
            <h2>Scanning & Modeling Progress</h2>

            <p>
                We used handheld LiDAR provided by AIS to scan both floors of the Innovation Wing, collecting point cloud data
                for various zones including the History Wall, Brainstorm Area, and Makerspace. However, challenges such as noise
                from glass reflections and low point density required advanced processing.
            </p>

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

            <p>
                We aligned the processed point cloud with BIM models to improve visual clarity and ensure precise geometry.
                For surfaces like murals and glass, we manually captured textures and attached them to the mesh to enhance
                realism. All cleaned data was then imported into Unreal Engine for further interaction design and VR integration.
            </p>

            <p>
                This iterative process has laid a solid foundation for an immersive digital twin experience.
            </p>

            <div style={{ marginTop: '2rem' }}>
                <h3>📸 Model Previews from Unreal Engine</h3>
                <img
                    src="/images/brainstorm_area.png"
                    alt="Stair-like model section"
                    style={{ width: '100%', maxWidth: '800px', marginBottom: '1.5rem', borderRadius: '8px' }}
                />
                <img
                    src="/images/history_wall_view.png"
                    alt="History Wall with murals"
                    style={{ width: '100%', maxWidth: '800px', borderRadius: '8px' }}
                />
            </div>
        </div>
    );
}
