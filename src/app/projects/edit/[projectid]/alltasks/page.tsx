'use client'
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Backend_URL } from '@/lib/Constants';
import TaskCard2 from '@/components/TaskCard2';

interface AllTasksPageProps {
  params: {
    projectid: string;
  };
}

const AllTasksPage: React.FC<AllTasksPageProps> = ({ params }) => {
  const { data: session, status } = useSession();
  const [tasks, setTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>(''); 
  const [filterStatus, setFilterStatus] = useState<string | null>(null); 
  const [startDate, setStartDate] = useState<string>(''); 
  const [endDate, setEndDate] = useState<string>(''); 
  const [assignees, setAssignees] = useState<any[]>([]); // Updated type
  const [selectedAssignee, setSelectedAssignee] = useState<string | null>(null);
  const router = useRouter();
  const { projectid } = params; 

  useEffect(() => {
    if (status === 'loading') return;

    if (!session) {
      setError('You must be signed in to view tasks.');
      setLoading(false);
      return;
    }

    const fetchTasks = async () => {
      try {
        const response = await fetch(`${Backend_URL}/tasks/project/${projectid}`, {
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

    const fetchAssignees = async () => {
      try {
        const response = await fetch(`${Backend_URL}/user`, {
          headers: {
            Authorization: `Bearer ${session.backendTokens?.accessToken || ''}`,
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch assignees');
        }
        const usersData = await response.json();
        setAssignees(usersData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchTasks();
    fetchAssignees();
  }, [session, status]);

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

      const tasksResponse = await fetch(`${Backend_URL}/tasks/project/${projectid}`, {
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

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterStatus(e.target.value);
  };

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
  };

  const handleAssigneeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAssignee(e.target.value);
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesSearchQuery = task.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = !filterStatus || task.status === filterStatus;
    const matchesStartDate = !startDate || new Date(task.dueDate) >= new Date(startDate);
    const matchesEndDate = !endDate || new Date(task.dueDate) <= new Date(endDate);
    const matchesAssignee = !selectedAssignee || String(task.userId) === selectedAssignee;

    return matchesSearchQuery && matchesStatus && matchesStartDate && matchesEndDate && matchesAssignee;
  });

  const categorizedTasks = {
    TODO: filteredTasks.filter(task => task.status === 'TODO'),
    IN_PROGRESS: filteredTasks.filter(task => task.status === 'IN_PROGRESS'),
    DONE: filteredTasks.filter(task => task.status === 'DONE'),
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-4 max-w-8xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">All Tasks</h1>

      <div className="mb-4">
        <input 
          type="text"
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="p-2 border border-gray-400 rounded"
        />
        <select value={filterStatus || ''} onChange={handleFilterChange} className="ml-2 p-2 border border-gray-400 rounded">
          <option value="">All</option>
          <option value="TODO">TODO</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="DONE">Done</option>
        </select>
        <input 
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
          className="ml-2 p-2 border border-gray-400 rounded"
        />
        <input 
          type="date"
          value={endDate}
          onChange={handleEndDateChange}
          className="ml-2 p-2 border border-gray-400 rounded"
        />
        <select value={selectedAssignee || ''} onChange={handleAssigneeChange} className="ml-2 p-2 border border-gray-400 rounded">
          <option value="">All Assignees</option>
          {assignees.map(assignee => (
            <option key={assignee.id} value={assignee.id}>{assignee.name}</option>
          ))}
        </select>
      </div>

      <div className="flex space-x-4">
        <div className="flex-1 p-2 bg-gray-200">
          <h2 className="text-xl font-semibold mb-4">TODO</h2>
          <ul className="space-y-4">
            {categorizedTasks.TODO.length === 0 ? (
              <p>No TODO tasks.</p>
            ) : (
              categorizedTasks.TODO.map(task => (
                <TaskCard2
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  description={task.description}
                  dueDate={task.dueDate}
                  projectTitle={task.project.title}
                  currentStatus={task.status}
                  onStatusChange={handleStatusChange}
                  userId={task.userId} // Pass userId
                  users={assignees} // Pass users
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
                <TaskCard2
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  description={task.description}
                  dueDate={task.dueDate}
                  projectTitle={task.project.title}
                  currentStatus={task.status}
                  onStatusChange={handleStatusChange}
                  userId={task.userId} 
                  users={assignees} 
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
                <TaskCard2
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  description={task.description}
                  dueDate={task.dueDate}
                  projectTitle={task.project.title}
                  currentStatus={task.status}
                  onStatusChange={handleStatusChange}
                  userId={task.userId} // Pass userId
                  users={assignees} // Pass users
                />
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AllTasksPage;
