'use client';
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { Backend_URL } from '@/lib/Constants'; 
import ProjectCard from '../../components/ProjectCard'; 
import ProjectCard2 from '../../components/ProjectCard2'; 
import { useRouter } from 'next/navigation';

const Projects = () => {
  const { data: session, status } = useSession();
  const [projects, setProjects] = useState<any[]>([]);
  const [assignedProjects, setAssignedProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return;

    if (!session) {
      setError('You must be signed in to view projects.');
      setLoading(false);
      return;
    }

    const userId = session.user?.id;
    const accessToken = session.backendTokens?.accessToken;

    //Get the projects belongs to the current user

    const fetchProjects = async () => {
      try {
        const response = await fetch(`${Backend_URL}/projects/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        setError(error.message);
      }
    };

    const fetchAssignedProjects = async () => {
      try {
        const response = await fetch(`${Backend_URL}/tasks/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch assigned projects');
        }
        const data = await response.json();
        setAssignedProjects(data);
      } catch (error) {
        setError(error.message);
      }
    };

    const fetchData = async () => {
      setLoading(true);
      await Promise.all([fetchProjects(), fetchAssignedProjects()]);
      setLoading(false);
    };

    fetchData();
  }, [session, status]);

  const filteredAssignedProjects = assignedProjects.filter(
    (assigned) => !projects.some((project) => project.id === assigned.project.id)
  );

  const handleNewProject = () => {
    router.push('/projects/add-new'); 
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Projects Dashboard</h1>
        <button
          onClick={handleNewProject}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          New Project
        </button>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">My Projects</h2>
        {projects.length === 0 ? (
          <p>No projects available</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                createdAt={project.createdAt}
              />
            ))}
          </div>
        )}
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Assigned Other Projects</h2>
        {filteredAssignedProjects.length === 0 ? (
          <p>No assigned projects</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredAssignedProjects.map((assigned) => (
              <ProjectCard2
                key={assigned.project.id}
                id={assigned.project.id}
                title={assigned.project.title}
                description={assigned.project.description}
                createdAt={assigned.project.createdAt}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
