'use client'
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Backend_URL } from '@/lib/Constants';
import TaskCard from '@/components/TaskCard';

const UserTasksPage: React.FC = () => {
  const { data: session, status } = useSession();
  const [tasks, setTasks] = useState<any[]>([]);
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

    //get the tasks belongs to the user

    const fetchTasks = async () => {
      try {
        const response = await fetch(`${Backend_URL}/tasks/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${session.backendTokens?.accessToken || ''}`,
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch tasks');
        }
        const tasksData = await response.json();
        setTasks(tasksData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [session, status]);

  //Update the task status

  const handleStatusChange = async (taskId: number, newStatus: string) => {
    const taskToUpdate = tasks.find(task => task.id === taskId);
    if (!taskToUpdate) return;

    const updatedTaskPayload = {
      title: taskToUpdate.title,
      description: taskToUpdate.description,
      dueDate: taskToUpdate.dueDate,
      status: newStatus,
      projectId: taskToUpdate.projectId, 
      userId: taskToUpdate.userId,      
    };

    try {
      const updateResponse = await fetch(`${Backend_URL}/tasks/${taskId}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${session.backendTokens?.accessToken || ''}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTaskPayload),
      });

      if (!updateResponse.ok) {
        throw new Error('Failed to update task');
      }

      const tasksResponse = await fetch(`${Backend_URL}/tasks/user/${session.user?.id}`, {
        headers: {
          Authorization: `Bearer ${session.backendTokens?.accessToken || ''}`,
        },
      });

      if (!tasksResponse.ok) {
        throw new Error('Failed to fetch tasks');
      }

      const updatedTasks = await tasksResponse.json();
      setTasks(updatedTasks);
      
    } catch (error) {
      setError((error as Error).message);
    }
  };

  const categorizedTasks = {
    TODO: tasks.filter(task => task.status === 'TODO'),
    IN_PROGRESS: tasks.filter(task => task.status === 'IN_PROGRESS'),
    DONE: tasks.filter(task => task.status === 'DONE'),
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-4 max-w-8xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Tasks</h1>
      <div className="flex space-x-4">
        <div className="flex-1 p-2 bg-gray-200">
          <h2 className="text-xl font-semibold mb-4">TODO</h2>
          <ul className="space-y-4">
            {categorizedTasks.TODO.length === 0 ? (
              <p>No TODO tasks.</p>
            ) : (
              categorizedTasks.TODO.map(task => (
                <TaskCard
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  description={task.description}
                  dueDate={task.dueDate}
                  projectTitle={task.project.title}
                  currentStatus={task.status}
                  onStatusChange={handleStatusChange}
                />
              ))
            )}
          </ul>
        </div>
        <div className="flex-1 p-2 bg-gray-200">
          <h2 className="text-xl font-semibold mb-4">In Progress</h2>
          <ul className="space-y-4">
            {categorizedTasks.IN_PROGRESS.length === 0 ? (
              <p>No In Progress tasks.</p>
            ) : (
              categorizedTasks.IN_PROGRESS.map(task => (
                <TaskCard
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  description={task.description}
                  dueDate={task.dueDate}
                  projectTitle={task.project.title}
                  currentStatus={task.status}
                  onStatusChange={handleStatusChange}
                />
              ))
            )}
          </ul>
        </div>
        <div className="flex-1 p-2 bg-gray-200">
          <h2 className="text-xl font-semibold mb-4">Done</h2>
          <ul className="space-y-4">
            {categorizedTasks.DONE.length === 0 ? (
              <p>No Done tasks.</p>
            ) : (
              categorizedTasks.DONE.map(task => (
                <TaskCard
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  description={task.description}
                  dueDate={task.dueDate}
                  projectTitle={task.project.title}
                  currentStatus={task.status}
                  onStatusChange={handleStatusChange}
                />
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserTasksPage;
