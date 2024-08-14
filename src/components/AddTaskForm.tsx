
import React, { useState, useEffect } from 'react';
import { Backend_URL } from '@/lib/Constants';
import { useSession } from 'next-auth/react';

interface AddTaskFormProps {
  projectId: number;
  onTaskAdded: (task: any) => void;
  accessToken: string;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ projectId, onTaskAdded, accessToken }) => {
  const { data: session, status } = useSession();
  const userId = session?.user?.id; 
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    status: 'TODO',
    projectId,
    userId: userId 
  });
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${Backend_URL}/user`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUsers();
  }, [accessToken]);

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!newTask.title.trim()) errors.title = 'Task title is required';
    if (newTask.title.length > 200) errors.title = 'Task title cannot exceed 200 characters';
    if (!newTask.description.trim()) errors.description = 'Task description is required';
    if (newTask.description.length > 1000) errors.description = 'Task description cannot exceed 1000 characters';
    if (!newTask.dueDate) errors.dueDate = 'Due date is required';
    if (!newTask.userId) errors.userId = 'User must be assigned';
    return errors;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewTask((prev) => ({
      ...prev,
      [name]: name === 'userId' ? parseInt(value) : value,
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${Backend_URL}/tasks`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
      });
      if (!response.ok) {
        throw new Error('Failed to create task');
      }
      const createdTask = await response.json();
      onTaskAdded(createdTask);
      setNewTask({
        title: '',
        description: '',
        dueDate: '',
        status: 'TODO',
        projectId,
        userId: userId 
      });
      setFormErrors({});
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="taskTitle">Task Title</label>
        <input
          id="taskTitle"
          name="title"
          type="text"
          value={newTask.title}
          onChange={handleInputChange}
          className={`w-full p-2 border ${formErrors.title ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-green-500`}
        />
        {formErrors.title && <p className="text-red-500 text-sm">{formErrors.title}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="taskDescription">Task Description</label>
        <textarea
          id="taskDescription"
          name="description"
          value={newTask.description}
          onChange={handleInputChange}
          className={`w-full p-2 border ${formErrors.description ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-green-500`}
        />
        {formErrors.description && <p className="text-red-500 text-sm">{formErrors.description}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="dueDate">Due Date</label>
        <input
          id="dueDate"
          name="dueDate"
          type="date"
          value={newTask.dueDate}
          onChange={handleInputChange}
          className={`w-full p-2 border ${formErrors.dueDate ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-green-500`}
        />
        {formErrors.dueDate && <p className="text-red-500 text-sm">{formErrors.dueDate}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="status">Status</label>
        <select
          id="status"
          name="status"
          value={newTask.status}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="TODO">TODO</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="DONE">Done</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="userId">Assign User</label>
        <select
          id="userId"
          name="userId"
          value={newTask.userId || ''}
          onChange={handleInputChange}
          className={`w-full p-2 border ${formErrors.userId ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-green-500`}
        >
          <option value="">Select a user</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
        {formErrors.userId && <p className="text-red-500 text-sm">{formErrors.userId}</p>}
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        disabled={loading}
      >
        {loading ? 'Adding...' : 'Add Task'}
      </button>
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </form>
  );
};

export default AddTaskForm;
