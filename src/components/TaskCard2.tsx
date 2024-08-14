// components/TaskCard.tsx
import React from 'react';

interface TaskCardProps {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  projectTitle: string;
  currentStatus: string;
  onStatusChange: (taskId: string, newStatus: string) => void;
  onEdit: () => void;
  onDelete: () => void;
}

const TaskCard2: React.FC<TaskCardProps> = ({
  id,
  title,
  description,
  dueDate,
  projectTitle,
  currentStatus,
  onStatusChange,
  onEdit,
  onDelete,
}) => {
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onStatusChange(id, e.target.value);
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg border border-gray-200">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <p className="text-gray-400">Due Date: {dueDate}</p>
      <p className="text-gray-400">Project: {projectTitle}</p>
      <div className="mt-2 mb-4">
        <label htmlFor={`status-${id}`} className="mr-2">
          Status:
        </label>
        <select
          id={`status-${id}`}
          value={currentStatus}
          onChange={handleStatusChange}
          className="p-1 border border-gray-300 rounded"
        >
          <option value="TODO">TODO</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="DONE">Done</option>
        </select>
      </div>
      <div className="flex justify-between">
        <button
          onClick={onEdit}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard2;
