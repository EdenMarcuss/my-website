// src/pages/Team.js
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Karlos Ma',
    role: '',
    bio: '',
    github: '#',
    linkedin: '#'
  },
  {
    name: 'Edward Zhang',
    role: '',
    bio: '',
    github: '#',
    linkedin: '#'
  },
  {
    name: 'Todd Tang',
    role: '',
    bio: '',
    github: '#',
    linkedin: '#'
  }
];

const Team = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">
            核心团队
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.name}
              className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex flex-col items-center">
                {/* 头像占位符 */}
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-400 to-purple-300 mb-6 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">
                    
                  </span>
                </div>
                
                <h3 className="text-2xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-blue-600 font-medium mt-2">{member.role}</p>
                <p className="mt-4 text-gray-600 text-center leading-relaxed">
                  {member.bio}
                </p>
                
                <div className="mt-6 flex space-x-4">
                  <a 
                    href={member.github}
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="h-6 w-6" />
                  </a>
                  <a 
                    href={member.linkedin}
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;