import React from 'react';
import './Home.css';

export default function Home() {
    return (
        <div className="home-container">
            <div className="content-card">
                <h2 className="title-gradient">
                    <span className="icon">🌐</span>
                    Digital Twin of Innovation Wing
                </h2>

                <p className="description">
                    Innovation Wing is a key space at the University of Hong Kong for undergraduate courses, hardware workshops, software development, and academic exploration. To meet the needs of students, staff, and visitors, we are building a digital twin platform that offers immersive 3D interaction and real-time information about the lab’s facilities and layout.
                </p>

                <section className="description">
                    <h3 style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>🔍 Project Background</h3>
                    <p>
                        Students often face challenges locating tools like 3D printers or understanding the use of MakerSpace. Staff need efficient ways to plan training and events, while visitors—often professors and industry experts—seek clear and self-guided tours. Our digital twin bridges these gaps by offering a real-time, interactive view of the lab’s layout and equipment.
                    </p>
                </section>

                <section className="description">
                    <h3 style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>🎯 User Research Highlights</h3>
                    <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.8' }}>
                        <li><strong>Students:</strong> Need quick access to equipment location, SOPs, and lab zone information</li>
                        <li><strong>Staff:</strong> Require tools for onboarding, space simulation, and equipment status management</li>
                        <li><strong>Visitors:</strong> Seek interactive and autonomous tours with highlights and historical context</li>
                    </ul>
                </section>

                <section className="description">
                    <h3 style={{ marginTop: '1rem', marginBottom: '1rem' }}>🏗️ Featured Spaces</h3>
                    <div className="tech-grid">
                        <div className="tech-item">
                            <div className="tech-icon">📡</div>
                            <span>History Wall</span>
                        </div>
                        <div className="tech-item">
                            <div className="tech-icon">🎮</div>
                            <span>Brainstorm Area</span>
                        </div>
                        <div className="tech-item">
                            <div className="tech-icon">📊</div>
                            <span>Makerspace</span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
