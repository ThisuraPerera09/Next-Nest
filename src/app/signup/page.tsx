"use client";
import { Backend_URL } from "@/lib/Constants";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type FormInputs = {
  name: string;
  email: string;
  password: string;
};

const SignupPage = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const register = async () => {
    setError(null);
    try {
      const res = await fetch(Backend_URL + "/auth/register", {
        method: "POST",
        body: JSON.stringify({
          name: data.current.name,
          email: data.current.email,
          password: data.current.password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        const errorData = await res.json();
        setError(errorData.message || 'Registration failed');
        toast.error(errorData.message || 'Registration failed');
        return;
      }
      const response = await res.json();
      toast.success('User Registered!');
      router.push('/api/auth/signin');
    } catch (error) {
      setError('An unexpected error occurred');
      toast.error('An unexpected error occurred');
    }
  };

  const data = useRef<FormInputs>({
    name: "",
    email: "",
    password: "",
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md border rounded overflow-hidden shadow bg-white">
        <div className="p-4 bg-gradient-to-b from-white to-slate-200 text-slate-600 text-center">
          Sign up
        </div>
        <div className="p-6 flex flex-col gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="off"
              required
              onChange={(e) => (data.current.name = e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              onChange={(e) => (data.current.email = e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              onChange={(e) => (data.current.password = e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="flex justify-center items-center gap-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={register}>Submit</button>
            <Link className="text-blue-500 hover:underline" href={"/"}>
              Cancel
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignupPage;
