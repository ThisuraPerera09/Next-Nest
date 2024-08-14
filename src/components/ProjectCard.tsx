'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, description, createdAt }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/projects/edit/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="border border-gray-300 rounded-lg shadow-md p-4 mb-4 bg-white cursor-pointer hover:shadow-lg transition-shadow duration-200"
    >
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 mb-2">{description}</p>
      <div className="text-gray-600 text-sm">
        <p>Created At: {new Date(createdAt).toLocaleDateString()}</p>
    
      </div>
    </div>
  );
};

export default ProjectCard;
