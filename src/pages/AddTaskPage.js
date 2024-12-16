import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addTask } from '../store/taskSlice';

function AddTaskPage() {
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ title, completed }));
    navigate('/');
  };

  return (
    <div className="p-6 bg-gradient-to-r from-purple-100 to-pink-100 min-h-screen">
      <h1 className="text-4xl font-extrabold text-purple-800 mb-8 text-center">Add Task</h1>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border-2 border-purple-500 p-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <select
            value={completed}
            onChange={(e) => setCompleted(e.target.value === 'true')}
            className="w-full border-2 border-purple-500 p-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <option value="false">Incomplete</option>
            <option value="true">Complete</option>
          </select>
        </div>
        <button type="submit" className="bg-gradient-to-r from-teal-500 to-green-500 text-white px-8 py-3 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
          Add Task
        </button>
      </form>
    </div>
  );    
}

export default AddTaskPage;