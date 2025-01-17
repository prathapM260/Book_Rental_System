// // src/components/SignIn.js

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import useStore from '../useStore'; // Import Zustand store

// const SignIn = () => {
//   const navigate = useNavigate();
//   const setUser = useStore(state => state.setUser); // Get setUser from Zustand store
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     navigate("/")
    
//     try {
//       const response = await fetch('http://localhost:5000/api/signin', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       console.log("Response check",response);
//       if (!response.ok) {
//         throw new Error('Sign-in failed');
//       }

//       const data = await response.json();
//       console.log("data display",data);
//       setUser(data); // Store user data in Zustand
//       navigate('/'); // Navigate to home page after successful sign-in
//     } catch (error) {
//       console.error('Sign-in error:', error);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="container mx-auto p-4 max-w-md">
//         <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
//         <form onSubmit={handleSubmit} className="bg-white p-8 border border-gray-300 rounded-md shadow-md">
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="block w-full border border-gray-300 px-3 py-2 rounded-md mb-3 focus:outline-none focus:border-primary"
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             className="block w-full border border-gray-300 px-3 py-2 rounded-md mb-3 focus:outline-none focus:border-primary"
//           />
//           <button
//             type="submit"
            
//             className="w-full bg-primary hover:text-black text-black py-2 rounded-md hover:bg-secondary transition-all duration-200"
//           >
//             Sign In
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignIn;


// src/components/SignIn.js

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import useStore from '../useStore'; // Import Zustand store

// const SignIn = () => {
//   const navigate = useNavigate();
//   const setUser = useStore(state => state.setUser); // Get setUser from Zustand store
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   const [error, setError] = useState(''); // State to store error messages

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//       const response = await fetch('http://localhost:5000/api/signin', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       console.log("Response check", response);
//       if (!response.ok) {
//         throw new Error('Sign-in failed');
//       }

//       const data = await response.json();
//       console.log("data display", data);
//       setUser(data); // Store user data in Zustand
//       navigate('/'); // Navigate to home page after successful sign-in
//     } catch (error) {
//       console.error('Sign-in error:', error);
//       setError(error.message); // Set error message
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="container mx-auto p-4 max-w-md">
//         <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
//         {error && <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">{error}</div>} {/* Display error message */}
//         <form onSubmit={handleSubmit} className="bg-white p-8 border border-gray-300 rounded-md shadow-md">
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="block w-full border border-gray-300 px-3 py-2 rounded-md mb-3 focus:outline-none focus:border-primary"
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             className="block w-full border border-gray-300 px-3 py-2 rounded-md mb-3 focus:outline-none focus:border-primary"
//           />
//           <button
//             type="submit"
//             className="w-full bg-primary hover:text-black text-black py-2 rounded-md hover:bg-secondary transition-all duration-200"
//           >
//             Sign In
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignIn;

// src/components/SignIn.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../useStore'; // Import Zustand store

const SignIn = () => {
  const navigate = useNavigate();
  const setUser = useStore((state) => state.setUser); // Get setUser from Zustand store
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(''); // State to store error messages

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('Form Data:', formData); // Log form data to ensure it is correct

      const response = await fetch('http://localhost:5000/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response check:', response);
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Sign-in failed: ${errorText}`);
      }

      const data = await response.json();
      console.log('Data display:', data);
      setUser(data); // Store user data in Zustand
      navigate('/'); // Navigate to home page after successful sign-in
    } catch (error) {
      console.error('Sign-in error:', error);
      setError(error.message); // Set error message
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="container mx-auto p-4 max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
        {error && <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">{error}</div>} {/* Display error message */}
        <form onSubmit={handleSubmit} className="bg-white p-8 border border-gray-300 rounded-md shadow-md">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
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
          <button
            type="submit"
            className="w-full bg-primary hover:text-black text-black py-2 rounded-md hover:bg-secondary transition-all duration-200"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
