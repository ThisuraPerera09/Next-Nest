// components/EditProjectForm.tsx
import React, { useState } from 'react';

interface EditProjectFormProps {
  project: {
    title: string;
    description: string;
  };
  onSubmit: (project: { title: string; description: string }) => void;
  onDelete: () => void;
  loading: boolean;
}

const EditProjectForm: React.FC<EditProjectFormProps> = ({ project, onSubmit, onDelete, loading }) => {
  const [localProject, setLocalProject] = useState(project);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(localProject);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          value={localProject.title}
          onChange={(e) => setLocalProject((prev) => ({ ...prev, title: e.target.value }))}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={localProject.description}
          onChange={(e) => setLocalProject((prev) => ({ ...prev, description: e.target.value }))}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        disabled={loading}
      >
        Update Project
      </button>
      <button
        type="button"
        onClick={onDelete}
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 ml-2"
        disabled={loading}
      >
        Delete Project
      </button>
    </form>
  );
};

export default EditProjectForm;
