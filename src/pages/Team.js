import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../App.css';

const teamMembers = [
    {
        name: 'Karlos Ma',
        role: 'BIM Modeling & Texture Mapping',
        bio: 'Responsible for modeling the History Wall and manually capturing mural textures to enhance visual fidelity.',
        github: '#',
        linkedin: '#'
    },
    {
        name: 'Edward Zhang',
        role: 'Interaction Design & Brainstorm Area',
        bio: 'Leads the modeling and interaction implementation for the Brainstorm Area, including layout and screen design.',
        github: '#',
        linkedin: '#'
    },
    {
        name: 'Todd Tang',
        role: 'Point Cloud Processing & Unreal Integration',
        bio: 'Handles point cloud cleanup, alignment with BIM, and model integration into Unreal Engine for immersive display.',
        github: '#',
        linkedin: '#'
    }
];

const Team = () => {
    return (
        <div className="page-container">
            <div className="section-card">
                <h2 className="section-title">
                    <span>👥</span> Core Team
                </h2>

                <div
                    className="team-grid"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2rem',
                        marginTop: '2rem',
                    }}
                >
                    {teamMembers.map((member) => (
                        <div
                            key={member.name}
                            className="team-card"
                            style={{
                                background: '#ffffff',
                                borderRadius: '16px',
                                padding: '1.5rem',
                                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            }}
                        >
                            <div
                                className="avatar"
                                style={{
                                    width: '90px',
                                    height: '90px',
                                    borderRadius: '999px',
                                    background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                                    color: '#fff',
                                    fontSize: '2rem',
                                    fontWeight: 'bold',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 1rem',
                                }}
                            >
                                {member.name.charAt(0)}
                            </div>

                            <h3 style={{ textAlign: 'center', fontSize: '1.25rem', fontWeight: 600 }}>{member.name}</h3>
                            <p style={{ textAlign: 'center', color: '#3b82f6', fontWeight: 500 }}>{member.role}</p>
                            <p style={{ marginTop: '1rem', fontSize: '0.95rem', color: '#555', lineHeight: 1.6 }}>
                                {member.bio}
                            </p>

                            <div
                                className="socials"
                                style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}
                            >
                                <a href={member.github} target="_blank" rel="noopener noreferrer" style={{ color: '#64748b' }}>
                                    <FaGithub size={20} />
                                </a>
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#64748b' }}>
                                    <FaLinkedin size={20} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;
