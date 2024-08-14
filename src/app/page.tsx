'use client';

import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { Backend_URL } from '@/lib/Constants';
import { useRouter } from 'next/navigation';
import ProjectTaskChart from '../components/dashboard/ProjectTaskChart'; 
import UserTaskChart from '../components/dashboard/UserTaskChart'; 

const Home = () => {
  const { data: session, status } = useSession();
  const [projects, setProjects] = useState<any[]>([]);
  const [projectTasks, setProjectTasks] = useState<any>({});
  const [userTaskCounts, setUserTaskCounts] = useState<any>({
    todo: 0,
    inProgress: 0,
    done: 0,
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return;

    if (!session) {
      setError('You must be signed in to view tasks.');
      setLoading(false);
      return;
    }

    const userId = session.user?.id;
    const accessToken = session.backendTokens?.accessToken;

    const fetchProjectsAndTasks = async () => {
      try {
        // Fetching projects that the user owns
        const projectsResponse = await fetch(`${Backend_URL}/projects/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (!projectsResponse.ok) {
          throw new Error('Failed to fetch projects');
        }
        const projectsData = await projectsResponse.json();
        setProjects(projectsData);

        // Fetching tasks for each project
        const tasksPromises = projectsData.map(async (project: any) => {
          const tasksResponse = await fetch(`${Backend_URL}/tasks/project/${project.id}`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          if (!tasksResponse.ok) {
            throw new Error('Failed to fetch tasks for project');
          }
          const tasksData = await tasksResponse.json();
          return { projectId: project.id, tasks: tasksData };
        });
        const tasksData = await Promise.all(tasksPromises);
        const tasksByProject = tasksData.reduce((acc: any, { projectId, tasks }) => {
          acc[projectId] = tasks;
          return acc;
        }, {});
        setProjectTasks(tasksByProject);

      } catch (error) {
        setError((error as Error).message);
      }
    };


    //Get the count of all the tasks

    const fetchUserTaskCounts = async () => {
      try {
        const userTasksResponse = await fetch(`${Backend_URL}/tasks/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (!userTasksResponse.ok) {
          throw new Error('Failed to fetch user tasks');
        }
        const userTasksData = await userTasksResponse.json();
        const counts = {
          todo: userTasksData.filter((task: any) => task.status === 'TODO').length,
          inProgress: userTasksData.filter((task: any) => task.status === 'IN_PROGRESS').length,
          done: userTasksData.filter((task: any) => task.status === 'DONE').length,
        };
        setUserTaskCounts(counts);
      } catch (error) {
        setError((error as Error).message);
      }
    };

    const fetchData = async () => {
      setLoading(true);
      await Promise.all([fetchProjectsAndTasks(), fetchUserTaskCounts()]);
      setLoading(false);
    };

    fetchData();
  }, [session, status]);

  if (loading) return <div>Loading...</div>;

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Project Management App</h1>
        <p className="text-xl">Please sign in to manage your projects and tasks.</p>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-8xl mx-auto">
  <h1 className='mb-5 font-bold text-xl'>All Tasks Summary</h1>

      <div className="flex space-x-4 mb-8">
        <div className="p-4 bg-blue-100 rounded-lg flex-1">
          <h2 className="text-lg font-bold">ToDo</h2>
          <p className="text-4xl font-semibold">{userTaskCounts.todo}</p>
        </div>
        <div className="p-4 bg-yellow-100 rounded-lg flex-1">
          <h2 className="text-lg font-bold">In Progress</h2>
          <p className="text-4xl font-semibold">{userTaskCounts.inProgress}</p>
        </div>
        <div className="p-4 bg-green-100 rounded-lg flex-1">
          <h2 className="text-lg font-bold">Done</h2>
          <p className="text-4xl font-semibold">{userTaskCounts.done}</p>
        </div>
      </div>

      <h1 className='mb-5 font-bold text-xl'>My Projects Summary</h1>
      <div className="flex flex-col space-y-8">
        {projects.map((project) => (
          <div key={project.id} className="border p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-4">{project.title}</h2>
            <ProjectTaskChart tasks={projectTasks[project.id] || []} />
            <div className="mt-8">
              <h3 className="text-lg font-bold mb-4">Task Assignment by User</h3>
              <UserTaskChart tasks={projectTasks[project.id] || []} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
