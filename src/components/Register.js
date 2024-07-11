import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement registration logic here
    // For example, make an API call to register the user
    // After successful registration, navigate to the home page
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="container mx-auto p-4 max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        <form onSubmit={handleSubmit} className="bg-white p-8 border border-gray-300 rounded-md shadow-md">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="block w-full border border-gray-300 px-3 py-2 rounded-md mb-3 focus:outline-none focus:border-primary"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="block w-full border border-gray-300 px-3 py-2 rounded-md mb-3 focus:outline-none focus:border-primary"
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="block w-full border border-gray-300 px-3 py-2 rounded-md mb-3 focus:outline-none focus:border-primary"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="block w-full border border-gray-300 px-3 py-2 rounded-md mb-3 focus:outline-none focus:border-primary"
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="block w-full border border-gray-300 px-3 py-2 rounded-md mb-3 focus:outline-none focus:border-primary"
          />
          <button type="submit" className="w-full bg-primary hover:text-black text-black py-2 rounded-md hover:bg-secondary transition-all duration-200">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
