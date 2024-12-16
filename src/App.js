import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import HomePage from './pages/HomePage';
import AddTaskPage from './pages/AddTaskPage';
import EditTaskPage from './pages/EditTaskPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="max-w-2xl mx-auto bg-gray-50 min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add" element={<AddTaskPage />} />
            <Route path="/edit/:id" element={<EditTaskPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;