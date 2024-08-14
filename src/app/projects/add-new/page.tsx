'use client';
import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Backend_URL } from '@/lib/Constants';

const AddProjectForm: React.FC = () => {
  const { data: session, status } = useSession();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return;

    if (!session) {
      setError('You must be signed in to add a project.');
      setLoading(false);
    }
  }, [session, status]);

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!title.trim()) errors.title = 'Title is required';
    if (!description.trim()) errors.description = 'Description is required';
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setFormErrors(validationErrors);
      return;
    }

    setLoading(true);

    if (!session) {
      setError('You must be signed in to add a project.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${Backend_URL}/projects`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${session.backendTokens?.accessToken || ''}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          title, 
          description,
          userId: session.user?.id, 
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create project');
      }

      router.push('/projects');
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  if (status === 'loading') return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-center">Add New Project</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${formErrors.title ? 'border-red-500' : ''}`}
            
          />
          {formErrors.title && <p className="text-red-500 text-sm">{formErrors.title}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={`w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${formErrors.description ? 'border-red-500' : ''}`}
            
          />
          {formErrors.description && <p className="text-red-500 text-sm">{formErrors.description}</p>}
        </div>
        {error && <div className="text-red-500 mb-4 text-center">{error}</div>}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={loading}
        >
          {loading ? 'Creating...' : 'Create Project'}
        </button>
      </form>
    </div>
  );
};

export default AddProjectForm;
