import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateTask } from '../store/taskSlice';

function EditTaskPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tasks = useSelector((state) => state.tasks.items);
  const task = tasks.find(t => t.id === parseInt(id));
  const [completed, setCompleted] = useState(task?.completed || false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTask({ id: task.id, completed }));
    navigate('/');
  };

  if (!task) return <div className="p-4">Task not found</div>;

  return (
    <div className="p-6 bg-gradient-to-r from-indigo-100 to-pink-100 min-h-screen">
      <h1 className="text-4xl font-extrabold text-indigo-800 mb-8 text-center">Edit Task</h1>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
        <div>
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <select
            value={completed}
            onChange={(e) => setCompleted(e.target.value === 'true')}
            className="w-full border-2 border-indigo-500 p-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="false">Incomplete</option>
            <option value="true">Complete</option>
          </select>
        </div>
        <button type="submit" className="bg-gradient-to-r from-teal-500 to-green-500 text-white px-8 py-3 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
          Update Task
        </button>
      </form>
    </div>
  );    
}

export default EditTaskPage;
