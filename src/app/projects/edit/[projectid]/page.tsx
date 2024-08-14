'use client';
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Backend_URL } from '@/lib/Constants';
import AddTaskForm from '@/components/AddTaskForm';
import EditProjectForm from '@/components/EditProjectForm';
import TaskEditModal from '@/components/Modal';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface EditProjectPageProps {
  params: {
    projectid: string;
  };
}

const EditProjectPage: React.FC<EditProjectPageProps> = ({ params }) => {
  const { projectid } = params;
  const { data: session, status } = useSession();
  const [project, setProject] = useState({ title: '', description: '' });
  const [tasks, setTasks] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]); // State for users
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [taskError, setTaskError] = useState<string | null>(null);
  const [selectedTask, setSelectedTask] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>(''); // State for search query
  const [filterStatus, setFilterStatus] = useState<string | null>(null); // State for filter status
  const [startDate, setStartDate] = useState<string>(''); // State for start date
  const [endDate, setEndDate] = useState<string>(''); // State for end date
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return;

    if (!session) {
      setError('You must be signed in to edit a project.');
      setLoading(false);
      return;
    }

    const fetchProject = async () => {
      try {
        // Fetch project details
        const projectResponse = await fetch(`${Backend_URL}/projects/${projectid}`, {
          headers: {
            Authorization: `Bearer ${session.backendTokens?.accessToken || ''}`,
          },
        });
        if (!projectResponse.ok) {
          throw new Error('Failed to fetch project');
        }
        const projectData = await projectResponse.json();
        setProject({ title: projectData.title, description: projectData.description });


        try {
          const tasksResponse = await fetch(`${Backend_URL}/tasks/project/${projectid}`, {
            headers: {
              Authorization: `Bearer ${session.backendTokens?.accessToken || ''}`,
            },
          });
          if (!tasksResponse.ok) {
            throw new Error('Failed to fetch tasks');
          }
          const tasksData = await tasksResponse.json();
          setTasks(tasksData);
        } catch (taskError) {
          setTaskError((taskError as Error).message);
        }

        // Fetch users
        try {
          const usersResponse = await fetch(`${Backend_URL}/user`, {
            headers: {
              Authorization: `Bearer ${session.backendTokens?.accessToken || ''}`,
            },
          });
          if (!usersResponse.ok) {
            throw new Error('Failed to fetch users');
          }
          const usersData = await usersResponse.json();
          setUsers(usersData);
        } catch (userError) {
          console.error('Error fetching users:', userError);
        }
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [projectid, session, status]);


  //Update the Project details
  const handleFormSubmit = async (updatedProject: { title: string; description: string }) => {
    setLoading(true);
    try {
      const response = await fetch(`${Backend_URL}/projects/${projectid}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${session.backendTokens?.accessToken || ''}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProject),
      });
      if (!response.ok) {
        throw new Error('Failed to update project');
      }
      setProject(updatedProject);
      toast.success('Project updated successfully!');
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const handleTaskAdded = (task: any) => {
    console.log('Task Added:', task);
    setTasks((prev) => [...prev, task]);
  };


  //Delete the project
  const handleDeleteProject = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${Backend_URL}/projects/${projectid}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${session.backendTokens?.accessToken || ''}`,
        },
      });
      if (!response.ok) {
        throw new Error('Failed to delete project');
      }
      router.push('/projects');
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const handleEditTask = (task: any) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };




  //Task Update

  const handleTaskUpdate = async (updatedTask: any) => {
    try {
      const { id, ...taskWithoutId } = updatedTask;
      const updateResponse = await fetch(`${Backend_URL}/tasks/${id}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${session.backendTokens?.accessToken || ''}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskWithoutId),
      });

      if (!updateResponse.ok) {
        throw new Error('Failed to update task');
      }
      const updatedTaskData = await updateResponse.json();

      const tasksResponse = await fetch(`${Backend_URL}/tasks/project/${updatedTaskData.projectId}`, {
        headers: {
          Authorization: `Bearer ${session.backendTokens?.accessToken || ''}`,
        },
      });

      if (!tasksResponse.ok) {
        throw new Error('Failed to fetch tasks');
      }

      const tasks = await tasksResponse.json();

      setTasks(tasks);

    } catch (error) {
      setTaskError((error as Error).message);
    } finally {
      setIsModalOpen(false);
      setSelectedTask(null);
    }
  };



  //Delete a Task
  const handleDeleteTask = async (taskId: string) => {
    try {
      const response = await fetch(`${Backend_URL}/tasks/${taskId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${session.backendTokens?.accessToken || ''}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete task');
      }

      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
      toast.success('Task Deleted successfully!');
    } catch (error) {
      setTaskError((error as Error).message);
    }
  };


  const getUserName = (userId: string) => {
    const user = users.find(user => user.id === userId);
    return user ? user.name : 'Unknown User';
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-4 max-w-8xl mx-auto">
      <ToastContainer />
      <h1 className="text-2xl font-bold mb-4">Edit Project</h1>
      <div className="flex space-x-4">
        <div className="flex-1 p-2">
          <h2 className="text-xl font-semibold mb-4">Project Details</h2>
          <EditProjectForm
            project={project}
            onSubmit={handleFormSubmit}
            onDelete={handleDeleteProject}
            loading={loading}
          />
        </div>
        <div className="flex-1 p-2">
          <h2 className="text-xl font-semibold mb-4">Add Task</h2>
          <AddTaskForm
            projectId={parseInt(projectid, 10)}
            onTaskAdded={handleTaskAdded}
            accessToken={session.backendTokens?.accessToken || ''}
          />
        </div>
        <div className="flex-1 p-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Tasks</h2>

            <button
              onClick={() => router.push(`/projects/edit/${projectid}/alltasks`)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              More
            </button>
          </div>
          <div className="h-[calc(100vh-10rem)] overflow-y-auto">
            {tasks.length === 0 ? (
              <p>No tasks found.</p>
            ) : (
              <ul className="space-y-4">
                {tasks.map((task) => (
                  <li key={task.id} className="p-4 border border-gray-200 rounded-lg flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold">{task.title}</h3>
                      <p className="text-gray-600">{task.description}</p>
                      <p className="text-gray-500">Due Date: {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'N/A'}</p>
                      <p className="text-gray-500">Status: {task.status}</p>
                      <p className="text-gray-500">Assignees: {getUserName(task.userId)}</p> 
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleEditTask(task)}
                        className="text-blue-500 hover:underline"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteTask(task.id)}
                        className="text-red-500 hover:underline"
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}


          </div>
        </div>
      </div>
      {selectedTask && (
        <TaskEditModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          task={selectedTask}
          onUpdate={handleTaskUpdate}
          accessToken={session.backendTokens?.accessToken || ''}
        />
      )}
    </div>
  );
};

export default EditProjectPage;
