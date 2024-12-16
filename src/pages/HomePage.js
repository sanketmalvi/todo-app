import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../store/taskSlice';

function HomePage() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.items);
  const loading = useSelector((state) => state.tasks.loading);
  const error = useSelector((state) => state.tasks.error);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  if (loading) return <div className="p-4">Loading tasks...</div>;
  if (error) return <div className="p-4">Error: {error}</div>;

  return (
    <div className="p-6 bg-gradient-to-r from-blue-100 to-green-100 min-h-screen">
      <h1 className="text-4xl font-extrabold text-blue-800 mb-8 text-center">To-Do List</h1>
      <Link to="/add" className="bg-gradient-to-r from-teal-500 to-green-500 text-white px-8 py-3 rounded-lg mb-6 inline-block hover:scale-105 transition-all duration-300 shadow-lg">
        Add Task
      </Link>
      <ul className="space-y-4">
        {tasks.map(task => (
          <li key={task.id} className="bg-white shadow-md rounded-lg p-6 border-l-4 border-teal-500 hover:bg-gray-50 transition duration-300">
            <h2 className="text-2xl font-semibold text-gray-800">{task.title}</h2>
            <p className="text-gray-600">Status: <span className={task.completed ? "text-green-500 font-bold" : "text-red-500 font-bold"}>{task.completed ? 'Complete' : 'Incomplete'}</span></p>
            <Link to={`/edit/${task.id}`} className="text-teal-600 hover:underline">Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );    
}

export default HomePage;