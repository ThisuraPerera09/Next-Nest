// TaskCard.tsx

import React, { useState } from 'react';

interface TaskCardProps {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  projectTitle: string;
  currentStatus: string;
  onStatusChange: (taskId: number, newStatus: string) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ id, title, description, dueDate, projectTitle, currentStatus, onStatusChange }) => {
  const [status, setStatus] = useState(currentStatus);

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = event.target.value;
    setStatus(newStatus);
    onStatusChange(id, newStatus);
  };

  return (
    <div className="p-6 border border-gray-200 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex items-center text-gray-500 text-sm mb-4">
        <span className="mr-2">Due:</span>
        <span>{new Date(dueDate).toLocaleDateString()}</span>
      </div>
      <div className="flex items-center text-gray-500 text-sm mb-4">
        <span className="mr-2">Project:</span>
        <span className="font-medium text-gray-700">{projectTitle}</span>
      </div>
      <div className="relative">
        <select
          value={status}
          onChange={handleStatusChange}
          className="block w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
        >
          <option value="TODO">TODO</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="DONE">Done</option>
        </select>
      </div>
    </div>
  );
};

export default TaskCard;
