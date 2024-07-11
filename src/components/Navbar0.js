/* eslint-disable jsx-a11y/anchor-is-valid */
// import React, { useState } from 'react';
// import { IoMdSearch } from 'react-icons/io';
// import { FaShoppingCart, FaUser, FaBars } from 'react-icons/fa';
// import DarkMode from './DarkMode';
// import Book from "../Assets/Book.jpg";

// const Menu = [
//   { id: 1, name: "Home", link: "#" },
//   { id: 2, name: "Browse Books", link: "#browse-books" },
//   { id: 3, name: "My Rentals", link: "#my-rentals" },
//   { id: 4, name: "New Arrivals", link: "#new-arrivals" },
//   { id: 5, name: "Top Rated", link: "#top-rated" },
//   { id: 6, name: "Recommendations", link: "#recommendations" },
//   { id: 7, name: "Authors", link: "#authors" },
//   { id: 8, name: "Contact Us", link: "#contact-us" },
//   { id: 9, name: "About Us", link: "#about-us" },
//   { id: 10, name: "FAQs", link: "#faqs" },
// ];

// const DropdownLinks = [
//   { id: 1, name: "Adventures", link: "/#adventures" },
//   { id: 2, name: "Cooking", link: "/#cooking" },
//   { id: 3, name: "Fantasy", link: "/#fantasy" },
//   { id: 4, name: "Motivation", link: "/#motivation" },
//   { id: 5, name: "Thrillers", link: "/#thrillers" },
//   { id: 6, name: "Arts", link: "/#arts" },
//   { id: 7, name: "Crime", link: "/#crime" },
//   { id: 8, name: "Fiction", link: "/#fiction" },
//   { id: 9, name: "Mystery", link: "/#mystery" },
//   { id: 10, name: "Western", link: "/#western" },
//   { id: 11, name: "Biography", link: "/#biography" },
//   { id: 12, name: "Detective", link: "/#detective" },
//   { id: 13, name: "History", link: "/#history" },
//   { id: 14, name: "Personal Development", link: "/#personal-development" },
// ];

// const Navbar0 = () => {
//   const [showMenu, setShowMenu] = useState(false);
//   const [showCategories, setShowCategories] = useState(false);
//   const [showUserProfile, setShowUserProfile] = useState(false);
//   const user = {
//     name: "John Doe",
//     email: "john.doe@example.com",
//     avatar: "https://via.placeholder.com/150", // Replace with actual user avatar URL
//   };

//   const handleUserProfileClick = () => {
//     setShowUserProfile(!showUserProfile); // Toggle user profile popup visibility
//   };

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   // Function to handle dropdown toggle
//   const handleDropdownToggle = () => {
//     setShowCategories(!showCategories);
//   };

//   return (
//     <div className="fixed top-0 left-0 w-full shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 z-40">
//       <div className="bg-primary/40 py-2">
//         <div className="container flex justify-between items-center mx-auto">
//           <div>
//             <a href="/" className="font-bold text-2xl sm:text-3xl flex gap-2 items-center">
//               <img src={Book} alt="BookLogo" className="w-10" />
//               <span className="hidden sm:block">Read here</span>
//             </a>
//           </div>
//           <div className="flex items-center gap-4">
//             <div className="relative group">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="w-[300px] sm:w-[200px] group-hover:w-[400px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-2 focus:outline-none focus:border-primary dark:border-gray-500 dark:bg-gray-800"
//               />
//               <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
//             </div>
//             <button
//               onClick={() => alert("Order feature is not available yet")}
//               className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
//             >
//               <span className="group-hover:block hidden transition-all duration-200">
//                 Order
//               </span>
//               <FaShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
//             </button>
//             <div className="flex items-center gap-4">
//               <DarkMode />
//               <div className="relative">
//                 <button
//                   onClick={handleUserProfileClick}
//                   className="text-gray-500 dark:text-white p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
//                 >
//                   <FaUser className="text-xl" />
//                 </button>
//                 {showUserProfile && (
//                   <div className="absolute right-0 mt-2 w-[250px] bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 z-10">
//                     <div className="flex items-center gap-4 px-4">
//                       {/* User Avatar */}
//                       <img src={user.avatar} alt="User Avatar" className="w-16 h-16 rounded-full border border-gray-300" />
//                       <div>
//                         {/* User Name */}
//                         <p className="text-gray-800 dark:text-white font-medium">{user.name}</p>
//                         {/* User Email */}
//                         <p className="text-sm text-gray-500 dark:text-gray-300">{user.email}</p>
//                       </div>
//                     </div>
//                     {/* Sign Out Button */}
//                     <div className="border-t border-gray-200 dark:border-gray-700 mt-4 px-4 py-2">
//                       <a href="#" className="block text-sm text-gray-700 hover:text-primary hover:underline dark:text-white dark:hover:text-gray-100">Sign Out</a>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//             {/* Hamburger menu for mobile */}
//             <div className="sm:hidden">
//               <button onClick={toggleMenu} className="text-gray-500 dark:text-white p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800">
//                 <FaBars className="text-xl" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Menu for desktop */}
//       <div className="sm:flex hidden justify-center">
//         <ul className="flex items-center gap-4">
//           {Menu.map((data) => (
//             <li key={data.id}>
//               <a
//                 href={data.link}
//                 className="inline-block duration-200 cursor-pointer px-4 hover:text-primary whitespace-nowrap"
//               >
//                 {data.name}
//               </a>
//             </li>
//           ))}
//           {/* Categories Dropdown */}
//           <li className="relative cursor-pointer">
//   <button onClick={handleDropdownToggle} className="flex items-center gap-2 py-2">
//     Categories
//   </button>
//   <div className={`absolute left-0 z-10 bg-white dark:bg-gray-800 rounded-md shadow-md mt-2 min-w-300 max-w-400 ${showCategories ? 'block' : 'hidden'}`} style={{ boxShadow: showCategories ? '0px 8px 16px rgba(0, 0, 0, 0.1)' : 'none' }}>
//     <div className="flex flex-col p-2 overflow-y-auto max-h-300">
//       {showCategories && DropdownLinks.map((data) => (
//         <a
//           key={data.id}
//           href={data.link}
//           className="px-4 py-2 rounded-md text-sm text-black dark:text-gray-300 hover:bg-primary hover:shadow-lg transition-all duration-200"
//         >
//           {data.name}
//         </a>
//       ))}
//     </div>
//     {showCategories && (
//       <div className="absolute bottom-0 left-0 right-0 h-2 bg-white dark:bg-gray-800 rounded-b-md shadow-top-md"></div>
//     )}
//   </div>
// </li>






//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar0;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { IoMdSearch } from 'react-icons/io';
// import { FaShoppingCart, FaUser, FaBars } from 'react-icons/fa';
// import DarkMode from './DarkMode';
// import Book from '../Assets/Book.jpg';

// const Menu = [
//   { id: 1, name: 'Home', link: '#' },
//   { id: 2, name: 'Browse Books', link: '#browse-books' },
//   { id: 3, name: 'My Rentals', link: '#my-rentals' },
//   { id: 4, name: 'New Arrivals', link: '#new-arrivals' },
//   { id: 5, name: 'Top Rated', link: '#top-rated' },
//   { id: 6, name: 'Recommendations', link: '#recommendations' },
//   { id: 7, name: 'Authors', link: '#authors' },
//   { id: 8, name: 'Contact Us', link: '#contact-us' },
//   { id: 9, name: 'About Us', link: '#about-us' },
//   { id: 10, name: 'FAQs', link: '#faqs' },
// ];

// const Navbar0 = () => {
//   const [showMenu, setShowMenu] = useState(false);
//   const [showCategories, setShowCategories] = useState(false);
//   const [showUserProfile, setShowUserProfile] = useState(false);
//   const [categories, setCategories] = useState([]);
//   const user = {
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     avatar: 'https://via.placeholder.com/150', // Replace with actual user avatar URL
//   };

//   useEffect(() => {
//     async function fetchCategories() {
//       try {
//         const response = await axios.get('/api/books'); // Replace with your backend API endpoint for categories
//         setCategories(response.data); // Assuming response.data is an array of categories
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//       }
//     }

//     fetchCategories();
//   }, []); // Empty dependency array ensures useEffect runs only once on component mount

//   const handleUserProfileClick = () => {
//     setShowUserProfile(!showUserProfile); // Toggle user profile popup visibility
//   };

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   const handleDropdownToggle = () => {
//     setShowCategories(!showCategories); // Toggle categories dropdown visibility
//   };

//   return (
//     <div className="fixed top-0 left-0 w-full shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 z-40">
//       <div className="bg-primary/40 py-2">
//         <div className="container flex justify-between items-center mx-auto">
//           <div>
//             <a href="/" className="font-bold text-2xl sm:text-3xl flex gap-2 items-center">
//               <img src={Book} alt="BookLogo" className="w-10" />
//               <span className="hidden sm:block">Read here</span>
//             </a>
//           </div>
//           <div className="flex items-center gap-4">
//             <div className="relative group">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="w-[300px] sm:w-[200px] group-hover:w-[400px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-2 focus:outline-none focus:border-primary dark:border-gray-500 dark:bg-gray-800"
//               />
//               <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
//             </div>
//             <button
//               onClick={() => alert('Order feature is not available yet')}
//               className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
//             >
//               <span className="group-hover:block hidden transition-all duration-200">Order</span>
//               <FaShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
//             </button>
//             <div className="flex items-center gap-4">
//               <DarkMode />
//               <div className="relative">
//                 <button
//                   onClick={handleUserProfileClick}
//                   className="text-gray-500 dark:text-white p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
//                 >
//                   <FaUser className="text-xl" />
//                 </button>
//                 {showUserProfile && (
//                   <div className="absolute right-0 mt-2 w-[250px] bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 z-10">
//                     <div className="flex items-center gap-4 px-4">
//                       <img
//                         src={user.avatar}
//                         alt="User Avatar"
//                         className="w-16 h-16 rounded-full border border-gray-300"
//                       />
//                       <div>
//                         <p className="text-gray-800 dark:text-white font-medium">{user.name}</p>
//                         <p className="text-sm text-gray-500 dark:text-gray-300">{user.email}</p>
//                       </div>
//                     </div>
//                     <div className="border-t border-gray-200 dark:border-gray-700 mt-4 px-4 py-2">
//                       <a
//                         href="#"
//                         className="block text-sm text-gray-700 hover:text-primary hover:underline dark:text-white dark:hover:text-gray-100"
//                       >
//                         Sign Out
//                       </a>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//             <div className="sm:hidden">
//               <button
//                 onClick={toggleMenu}
//                 className="text-gray-500 dark:text-white p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
//               >
//                 <FaBars className="text-xl" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="sm:flex hidden justify-center">
//         <ul className="flex items-center gap-4">
//           {Menu.map((data) => (
//             <li key={data.id}>
//               <a
//                 href={data.link}
//                 className="inline-block duration-200 cursor-pointer px-4 hover:text-primary whitespace-nowrap"
//               >
//                 {data.name}
//               </a>
//             </li>
//           ))}
//           <li className="relative cursor-pointer">
//             <button onClick={handleDropdownToggle} className="flex items-center gap-2 py-2">
//               Categories
//             </button>
//             <div
//               className={`absolute left-0 z-10 bg-white dark:bg-gray-800 rounded-md shadow-md mt-2 min-w-300 max-w-400 ${
//                 showCategories ? 'block' : 'hidden'
//               }`}
//               style={{ boxShadow: showCategories ? '0px 8px 16px rgba(0, 0, 0, 0.1)' : 'none' }}
//             >
//               <div className="flex flex-col p-2 overflow-y-auto max-h-300">
//                 {categories.map((data) => (
//                   <a
//                     key={data.id}
//                     href={data.link}
//                     className="px-4 py-2 rounded-md text-sm text-black dark:text-gray-300 hover:bg-primary hover:shadow-lg transition-all duration-200"
//                   >
//                     {data.name}
//                   </a>
//                 ))}
//               </div>
//               {showCategories && (
//                 <div className="absolute bottom-0 left-0 right-0 h-2 bg-white dark:bg-gray-800 rounded-b-md shadow-top-md"></div>
//               )}
//             </div>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar0;






// import React, { useState, useEffect } from 'react';
// import { IoMdSearch } from 'react-icons/io';
// import { FaShoppingCart, FaUser, FaBars } from 'react-icons/fa';
// import axios from 'axios';
// import DarkMode from './DarkMode';
// import Book from "../Assets/Book.jpg";

// const Menu = [
//   { id: 1, name: "Home", link: "#" },
//   { id: 2, name: "Browse Books", link: "#browse-books" },
//   { id: 3, name: "My Rentals", link: "#my-rentals" },
//   { id: 4, name: "New Arrivals", link: "#new-arrivals" },
//   { id: 5, name: "Top Rated", link: "#top-rated" },
//   { id: 6, name: "Recommendations", link: "#recommendations" },
//   { id: 7, name: "Authors", link: "#authors" },
//   { id: 8, name: "Contact Us", link: "#contact-us" },
//   { id: 9, name: "About Us", link: "#about-us" },
//   { id: 10, name: "FAQs", link: "#faqs" },
// ];

// const Navbar0 = () => {
//   const [showMenu, setShowMenu] = useState(false);
//   const [showCategories, setShowCategories] = useState(false);
//   const [categories, setCategories] = useState([]);
//   const [showUserProfile, setShowUserProfile] = useState(false);

//   const user = {
//     name: "John Doe",
//     email: "john.doe@example.com",
//     avatar: "https://via.placeholder.com/150", // Replace with actual user avatar URL
//   };

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get('/api/categories');
//         console.log('Fetched categories:', response.data); // Log the fetched categories
//         setCategories(response.data);
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   const handleUserProfileClick = () => {
//     setShowUserProfile(!showUserProfile); // Toggle user profile popup visibility
//   };

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   const handleDropdownToggle = () => {
//     setShowCategories(!showCategories);
//   };

//   return (
//     <div className="fixed top-0 left-0 w-full shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 z-40">
//       <div className="bg-primary/40 py-2">
//         <div className="container flex justify-between items-center mx-auto">
//           <div>
//             <a href="/" className="font-bold text-2xl sm:text-3xl flex gap-2 items-center">
//               <img src={Book} alt="BookLogo" className="w-10" />
//               <span className="hidden sm:block">Read here</span>
//             </a>
//           </div>
//           <div className="flex items-center gap-4">
//             <div className="relative group">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="w-[300px] sm:w-[200px] group-hover:w-[400px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-2 focus:outline-none focus:border-primary dark:border-gray-500 dark:bg-gray-800"
//               />
//               <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
//             </div>
//             <button
//               onClick={() => alert("Order feature is not available yet")}
//               className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
//             >
//               <span className="group-hover:block hidden transition-all duration-200">
//                 Order
//               </span>
//               <FaShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
//             </button>
//             <div className="flex items-center gap-4">
//               <DarkMode />
//               <div className="relative">
//                 <button
//                   onClick={handleUserProfileClick}
//                   className="text-gray-500 dark:text-white p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
//                 >
//                   <FaUser className="text-xl" />
//                 </button>
//                 {showUserProfile && (
//                   <div className="absolute right-0 mt-2 w-[250px] bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 z-10">
//                     <div className="flex items-center gap-4 px-4">
//                       {/* User Avatar */}
//                       <img src={user.avatar} alt="User Avatar" className="w-16 h-16 rounded-full border border-gray-300" />
//                       <div>
//                         {/* User Name */}
//                         <p className="text-gray-800 dark:text-white font-medium">{user.name}</p>
//                         {/* User Email */}
//                         <p className="text-sm text-gray-500 dark:text-gray-300">{user.email}</p>
//                       </div>
//                     </div>
//                     {/* Sign Out Button */}
//                     <div className="border-t border-gray-200 dark:border-gray-700 mt-4 px-4 py-2">
//                       <a href="#" className="block text-sm text-gray-700 hover:text-primary hover:underline dark:text-white dark:hover:text-gray-100">Sign Out</a>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//             {/* Hamburger menu for mobile */}
//             <div className="sm:hidden">
//               <button onClick={toggleMenu} className="text-gray-500 dark:text-white p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800">
//                 <FaBars className="text-xl" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Menu for desktop */}
//       <div className="sm:flex hidden justify-center">
//         <ul className="flex items-center gap-4">
//           {Menu.map((data) => (
//             <li key={data.id}>
//               <a
//                 href={data.link}
//                 className="inline-block duration-200 cursor-pointer px-4 hover:text-primary whitespace-nowrap"
//               >
//                 {data.name}
//               </a>
//             </li>
//           ))}
//           {/* Categories Dropdown */}
//           <li className="relative cursor-pointer">
//             <button onClick={handleDropdownToggle} className="flex items-center gap-2 py-2">
//               Categories
//             </button>
//             <div className={`absolute left-0 z-10 bg-white dark:bg-gray-800 rounded-md shadow-md mt-2 min-w-300 max-w-400 ${showCategories ? 'block' : 'hidden'}`} style={{ boxShadow: showCategories ? '0px 8px 16px rgba(0, 0, 0, 0.1)' : 'none' }}>
//               <div className="flex flex-col p-2 overflow-y-auto max-h-300">
//                 {showCategories && categories.map((data) => (
//                   <a
//                     key={data._id}
//                     href={data.link}
//                     className="px-4 py-2 rounded-md text-sm text-black dark:text-gray-300 hover:bg-primary hover:shadow-lg transition-all duration-200"
//                   >
//                     {data.name}
//                   </a>
//                 ))}
//               </div>
//               {showCategories && (
//                 <div className="absolute bottom-0 left-0 right-0 h-2 bg-white dark:bg-gray-800 rounded-b-md shadow-top-md"></div>
//               )}
//             </div>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar0;




// import React, { useState, useEffect } from 'react';
// import { IoMdSearch } from 'react-icons/io';
// import { FaShoppingCart, FaUser, FaBars } from 'react-icons/fa';
// import axios from 'axios';
// import DarkMode from './DarkMode';
// import Book from "../Assets/Book.jpg";
// import { useNavigate } from 'react-router-dom';

// const Menu = [
//   { id: 1, name: "Home", link: "#" },
//   { id: 2, name: "Browse Books", link: "#browse-books" },
//   { id: 3, name: "My Rentals", link: "#my-rentals" },
//   { id: 4, name: "New Arrivals", link: "#new-arrivals" },
//   { id: 5, name: "Top Rated", link: "#top-rated" },
//   { id: 6, name: "Recommendations", link: "#recommendations" },
//   { id: 7, name: "Authors", link: "#authors" },
//   { id: 8, name: "Contact Us", link: "#contact-us" },
//   { id: 9, name: "About Us", link: "#about-us" },
//   { id: 10, name: "FAQs", link: "#faqs" },
// ];

// const Navbar0 = () => {
//   const navigate = useNavigate();

//   const [showMenu, setShowMenu] = useState(false);
//   const [showCategories, setShowCategories] = useState(false);
//   const [books, setBooks] = useState([]);
//   const [showUserProfile, setShowUserProfile] = useState(false);

//   const user = {
//     name: "John Doe",
//     email: "john.doe@example.com",
//     avatar: "https://via.placeholder.com/150", // Replace with actual user avatar URL
//   };

//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/categories');
//         console.log('Fetched books:', response.data); // Log the fetched books
//         setBooks(response.data);
//       } catch (error) {
//         console.error('Error fetching books:', error);
//       }
//     };

//     fetchBooks();
//   }, []);

//   const handleUserProfileClick = () => {
//     setShowUserProfile(!showUserProfile); // Toggle user profile popup visibility
//   };

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   const handleDropdownToggle = () => {
//     setShowCategories(!showCategories);
//   };


//   const handleCategoryClick = (bookname) => {
//     console.log("cliked", bookname)
//     navigate(`/category/${bookname}`);
//   };
//   return (
//     <div className="fixed top-0 left-0 w-full shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 z-40">
//       <div className="bg-primary/40 py-2">
//         <div className="container flex justify-between items-center mx-auto">
//           <div>
//             <a href="/" className="font-bold text-2xl sm:text-3xl flex gap-2 items-center">
//               <img src={Book} alt="BookLogo" className="w-10" />
//               <span className="hidden sm:block">Read here</span>
//             </a>
//           </div>
//           <div className="flex items-center gap-4">
//             <div className="relative group">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="w-[300px] sm:w-[200px] group-hover:w-[400px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-2 focus:outline-none focus:border-primary dark:border-gray-500 dark:bg-gray-800"
//               />
//               <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
//             </div>
//             <button
//               onClick={() => alert("Order feature is not available yet")}
//               className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
//             >
//               <span className="group-hover:block hidden transition-all duration-200">
//                 Order
//               </span>
//               <FaShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
//             </button>
//             <div className="flex items-center gap-4">
//               <DarkMode />
//               <div className="relative">
//                 <button
//                   onClick={handleUserProfileClick}
//                   className="text-gray-500 dark:text-white p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
//                 >
//                   <FaUser className="text-xl" />
//                 </button>
//                 {showUserProfile && (
//                   <div className="absolute right-0 mt-2 w-[250px] bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 z-10">
//                     <div className="flex items-center gap-4 px-4">
//                       {/* User Avatar */}
//                       <img src={user.avatar} alt="User Avatar" className="w-16 h-16 rounded-full border border-gray-300" />
//                       <div>
//                         {/* User Name */}
//                         <p className="text-gray-800 dark:text-white font-medium">{user.name}</p>
//                         {/* User Email */}
//                         <p className="text-sm text-gray-500 dark:text-gray-300">{user.email}</p>
//                       </div>
//                     </div>
//                     {/* Sign Out Button */}
//                     <div className="border-t border-gray-200 dark:border-gray-700 mt-4 px-4 py-2">
//                       <a href="#" className="block text-sm text-gray-700 hover:text-primary hover:underline dark:text-white dark:hover:text-gray-100">Sign Out</a>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//             {/* Hamburger menu for mobile */}
//             <div className="sm:hidden">
//               <button onClick={toggleMenu} className="text-gray-500 dark:text-white p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800">
//                 <FaBars className="text-xl" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Menu for desktop */}
//       <div className="sm:flex hidden justify-center">
//         <ul className="flex items-center gap-4">
//           {Menu.map((data) => (
//             <li key={data.id}>
//               <a
//                 href={data.link}
//                 className="inline-block duration-200 cursor-pointer px-4 hover:text-primary whitespace-nowrap"
//               >
//                 {data.name}
//               </a>
//             </li>
//           ))}
//           {/* Categories Dropdown */}
//           <li className="relative cursor-pointer">
//             <button onClick={handleDropdownToggle} className="flex items-center gap-2 py-2">
//               Categories
//             </button>
//             <div className={`absolute left-0 z-10 bg-white dark:bg-gray-800 rounded-md shadow-md mt-2 min-w-300 max-w-400 ${showCategories ? 'block' : 'hidden'}`} style={{ boxShadow: showCategories ? '0px 8px 16px rgba(0, 0, 0, 0.1)' : 'none' }}>
//               <div className="flex flex-col p-2 overflow-y-auto max-h-300">
//                 {showCategories && books.map((book) => (
//                   <div
//                     key={book._id}
//                     onClick={() => handleCategoryClick(book.name)}
//                     className="px-4 py-2 rounded-md text-sm text-black dark:text-gray-300 hover:bg-primary hover:shadow-lg transition-all duration-200"
//                   >
//                     {book.name}
//                   </div>
//                 ))}
//               </div>
//               {showCategories && (
//                 <div className="absolute bottom-0 left-0 right-0 h-2 bg-white dark:bg-gray-800 rounded-b-md shadow-top-md"></div>
//               )}
//             </div>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar0;


// // import React, { useState, useEffect, useRef } from 'react';
// // import { IoMdSearch } from 'react-icons/io';
// // import { FaShoppingCart, FaUser, FaBars } from 'react-icons/fa';
// // import axios from 'axios';
// // import DarkMode from './DarkMode';
// // import Book from "../Assets/Book.jpg";
// // import { useNavigate } from 'react-router-dom';
// // import { Link } from 'react-router-dom';
// // const Menu = [
// //   { id: 1, name: "Home", link: "integratedSection" },
// //   { id: 2, name: "My Rentals", link: "myRentals" },
// //   { id: 3, name: "New Arrivals", link: "newArrivalBooks" },
// //   { id: 4, name: "Top Rated", link: "topRatedSection" },
// //   { id: 5, name: "Recommendation", link: "recommendations" },
// //   { id: 6, name: "Authors", link: "authorSection" },
// //   { id: 7, name: "Contact Us", link: "footer" },
// //   { id: 8, name: "About Us", link: "footer" },
// //   { id: 9, name: "FAQs", link: "/faqs" },
// // ];

// // const Navbar0 = () => {
// //   const navigate = useNavigate();
// //   const dropdownRef = useRef(null);

// //   const [showMenu, setShowMenu] = useState(false);
// //   const [showCategories, setShowCategories] = useState(false);
// //   const [books, setBooks] = useState([]);
// //   const [showUserProfile, setShowUserProfile] = useState(false);

// //   const user = {
// //     name: "John Doe",
// //     email: "john.doe@example.com",
// //     avatar: "https://via.placeholder.com/150", // Replace with actual user avatar URL
// //   };

// //   useEffect(() => {
// //     const fetchBooks = async () => {
// //       try {
// //         const response = await axios.get('http://localhost:5000/api/categories');
// //         console.log('Fetched books:', response.data); // Log the fetched books
// //         setBooks(response.data);
// //       } catch (error) {
// //         console.error('Error fetching books:', error);
// //       }
// //     };

// //     fetchBooks();
// //   }, []);

// //   useEffect(() => {
// //     const handleOutsideClick = (event) => {
// //       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
// //         setShowCategories(false);
// //       }
// //     };

// //     document.addEventListener('mousedown', handleOutsideClick);

// //     return () => {
// //       document.removeEventListener('mousedown', handleOutsideClick);
// //     };
// //   }, []);

// //   const handleUserProfileClick = () => {
// //     setShowUserProfile(!showUserProfile); // Toggle user profile popup visibility
// //   };

// //   const toggleMenu = () => {
// //     setShowMenu(!showMenu);
// //   };

// //   const handleDropdownToggle = () => {
// //     setShowCategories(!showCategories);
// //   };

// //   const handleCategoryClick = (bookname) => {
// //     console.log("clicked", bookname);
// //     navigate(`/category/${bookname}`);
// //   };

// //   return (
// //     <div className="fixed top-0 left-0 w-full shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 z-40">
// //       <div className="bg-primary/40 py-2">
// //         <div className="container flex justify-between items-center mx-auto">
// //           <div>
// //             <a href="/" className="font-bold text-2xl sm:text-3xl flex gap-2 items-center">
// //               <img src={Book} alt="BookLogo" className="w-10" />
// //               <span className="hidden sm:block">Read here</span>
// //             </a>
// //           </div>
// //           <div className="flex items-center gap-4">
// //             <div className="relative group">
// //               <input
// //                 type="text"
// //                 placeholder="Search..."
// //                 className="w-[300px] sm:w-[200px] group-hover:w-[400px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-2 focus:outline-none focus:border-primary dark:border-gray-500 dark:bg-gray-800"
// //               />
// //               <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
// //             </div>
// //             <button
// //               onClick={() => alert("Order feature is not available yet")}
// //               className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
// //             >
// //               <span className="group-hover:block hidden transition-all duration-200">
// //                 Order
// //               </span>
// //               <FaShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
// //             </button>
// //             <div className="flex items-center gap-4">
// //               <DarkMode />
// //               <div className="relative">
// //                 <button
// //                   onClick={handleUserProfileClick}
// //                   className="text-gray-500 dark:text-white p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
// //                 >
// //                   <FaUser className="text-xl" />
// //                 </button>
// //                 {showUserProfile && (
// //                   <div className="absolute right-0 mt-2 w-[250px] bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 z-10">
// //                     <div className="flex items-center gap-4 px-4">
// //                       {/* User Avatar */}
// //                       <img src={user.avatar} alt="User Avatar" className="w-16 h-16 rounded-full border border-gray-300" />
// //                       <div>
// //                         {/* User Name */}
// //                         <p className="text-gray-800 dark:text-white font-medium">{user.name}</p>
// //                         {/* User Email */}
// //                         <p className="text-sm text-gray-500 dark:text-gray-300">{user.email}</p>
// //                       </div>
// //                     </div>
// //                     {/* Sign Out Button */}
// //                     <div className="border-t border-gray-200 dark:border-gray-700 mt-4 px-4 py-2">
// //                       <a href="#" className="block text-sm text-gray-700 hover:text-primary hover:underline dark:text-white dark:hover:text-gray-100">Sign Out</a>
// //                     </div>
// //                   </div>
// //                 )}
// //               </div>
// //             </div>
// //             {/* Hamburger menu for mobile */}
// //             <div className="sm:hidden">
// //               <button onClick={toggleMenu} className="text-gray-500 dark:text-white p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800">
// //                 <FaBars className="text-xl" />
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       {/* Menu for desktop */}
      
// //       <div className="sm:flex hidden justify-center">
// //         <ul className="flex items-center gap-4">
// //         {Menu.map((menu) => (
// //               <Link
// //                 key={menu.id}
// //                 to={menu.link}
// //                 smooth={true}
// //                 duration={500}
// //                 offset={-70}
// //                 className={"inline-block duration-200 cursor-pointer px-4 hover:text-primary whitespace-nowrap"}
// //                 onClick={() => {
// //                   setShowMenu(false);
// //                 }}
// //               >
// //                 {menu.name}
// //               </Link>
// //             ))}
// //           {/* Categories Dropdown */}
// //           <li ref={dropdownRef} className="relative cursor-pointer">
// //             <button onClick={handleDropdownToggle} className="flex items-center gap-2 py-2">
// //               Genres
// //             </button>
// //             <div className={`absolute left-0 z-10 bg-white dark:bg-gray-800 rounded-md shadow-md mt-2 min-w-300 max-w-400 ${showCategories ? 'block' : 'hidden'}`} style={{ boxShadow: showCategories ? '0px 8px 16px rgba(0, 0, 0, 0.1)' : 'none' }}>
// //               <div className="flex flex-col p-2 overflow-y-auto max-h-300">
// //                 {showCategories && books.map((book) => (
// //                   <div
// //                     key={book._id}
// //                     onClick={() => handleCategoryClick(book.name)}
// //                     className="px-4 py-2 rounded-md text-sm text-black dark:text-gray-300 hover:bg-primary hover:shadow-lg transition-all duration-200 cursor-pointer"
// //                   >
// //                     {book.name}
// //                   </div>
// //                 ))}
// //               </div>
// //               {showCategories && (
// //                 <div className="absolute bottom-0 left-0 right-0 h-2 bg-white dark:bg-gray-800 rounded-b-md shadow-top-md"></div>
// //               )}
// //             </div>
// //           </li>
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Navbar0;



// import React, { useEffect, useRef, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { FaBars, FaUser, FaShoppingCart } from 'react-icons/fa';
// import { IoMdSearch } from 'react-icons/io';
// import DarkMode from './DarkMode';
// import Book from "../Assets/Book.jpg";
// import Register from './Register';

// const Menu = [
//   { id: 1, name: "Home", link: "integratedSection" },
//   { id: 2, name: "My Rentals", link: "myRentals" },
//   { id: 3, name: "New Arrivals", link: "newArrivalBooks" },
//   { id: 4, name: "Top Rated", link: "topRatedSection" },
//   { id: 5, name: "Recommendation", link: "recommendations" },
//   { id: 6, name: "Authors", link: "authorSection" },
//   { id: 7, name: "Contact Us", link: "footer" },
//   { id: 8, name: "About Us", link: "footer" },
//   { id: 9, name: "FAQs", link: "/faqs" },
// ];


// import React, { useEffect, useRef, useState } from 'react';
// import {  useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { FaBars, FaUser, FaShoppingCart } from 'react-icons/fa';
// import { IoMdSearch } from 'react-icons/io';
// import DarkMode from './DarkMode';
// import Book from '../Assets/Book.jpg';
// import SignIn from './Signin'; // Import the SignIn component
// import useStore from '../useStore'; // Import useStore hook for user state
// import { jwtDecode } from 'jwt-decode'; // Import jwtDecode for decoding JWT
// import { Link } from 'react-scroll';
// const Menu = [
//   { id: 1, name: "Home", link: "/" },
//   { id: 2, name: "My Rentals", link: "myrentals" },
//   { id: 3, name: "New Arrivals", link: "newarrivalBooks" },
//   { id: 4, name: "Top Rated", link: "topRatedSection" },
//   { id: 5, name: "Recommendation", link: "recommendations" },
//   { id: 6, name: "Authors", link: "authorSection" },
//   { id: 7, name: "Contact Us", link: "footer" },
//   { id: 8, name: "About Us", link: "footer" },
//   { id: 9, name: "FAQs", link:"faqs" },
// ];

// const Navbar0 = () => {
//   const navigate = useNavigate();
//   const dropdownRef = useRef(null);
//   const [showMenu, setShowMenu] = useState(false);
//   const [showCategories, setShowCategories] = useState(false);
//   const [books, setBooks] = useState([]);
//   const [showUserProfile, setShowUserProfile] = useState(false);
//   const [showSignIn, setShowSignIn] = useState(false); // State for showing the sign-in form
//   const user1 = useStore(state => state.user); // Fetch user state from useStore

//   let user = {
//     name: "John Doe", // Default values
//     email: "john.doe@example.com",
//     avatar: "" // Replace with actual user avatar URL
//   };

//   // Decode JWT token and update user information if available
//   if (user1) {
//     try {
//       const decoded = jwtDecode(user1.token);
//       user.name = decoded.user.username; // Update user name from decoded token
//       user.email = decoded.user.email; // Update user email from decoded token

//       console.log(user);
//     } catch (error) {
//       console.error("Error decoding token:", error);
//     }
//   }

//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/categories');
//         console.log('Fetched books:', response.data); // Log the fetched books
//         setBooks(response.data);
//       } catch (error) {
//         console.error('Error fetching books:', error);
//       }
//     };

//     fetchBooks();
//   }, []);

//   useEffect(() => {
//     const handleOutsideClick = (event) => {
//       if (!dropdownRef.current?.contains(event.target)) {
//         setShowCategories(false);
//       }
//       if (!event.target.closest('.user-profile') && !event.target.closest('.user-dropdown')) {
//         setShowUserProfile(false);
//         setShowSignIn(false);
//       }
//     };

//     document.addEventListener('mousedown', handleOutsideClick);

//     return () => {
//       document.removeEventListener('mousedown', handleOutsideClick);
//     };
//   }, []);

//   const handleUserProfileClick = () => {
//     setShowUserProfile(!showUserProfile); // Toggle user profile popup visibility
//     setShowSignIn(false); // Ensure sign-in form is closed when opening user profile
//   };

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   const handleDropdownToggle = () => {
//     setShowCategories(!showCategories);
//   };

//   const handleCategoryClick = (bookname) => {
//     console.log("clicked", bookname);
//     navigate(`/category/${bookname}`);
//   };

//   const handleSignInClick = () => {
//     setShowUserProfile(true); // Ensure user profile popup is visible
//     setShowSignIn(true); // Show the sign-in form
//   };

//   const handleSignOutClick = () => {
//     // Implement sign-out logic here
//     // For example: clear session, local storage, or state
//     setShowUserProfile(false);
//     setShowSignIn(false);
//   };

//   const navigateAndClosePopup = (path) => {
//     setShowUserProfile(false);
//     setShowSignIn(false);
//     navigate(path);
//   };
//   return (
//     <div className="fixed top-0 left-0 w-full shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 z-40">
//       <div className="bg-primary/40 py-2">
//         <div className="container flex justify-between items-center mx-auto">
//           <div>
//             <a href="/" className="font-bold text-2xl sm:text-3xl flex gap-2 items-center">
//               <img src={Book} alt="" className="w-10" />
//               <span className="hidden sm:block">Read here</span>
//             </a>
//           </div>
//           <div className="flex items-center gap-4">
//             <div className="relative group">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="w-[300px] sm:w-[200px] group-hover:w-[400px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-2 focus:outline-none focus:border-primary dark:border-gray-500 dark:bg-gray-800"
//               />
//               <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
//             </div>
//             <button
//               onClick={() => alert("Order feature is not available yet")}
//               className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
//             >
//               <span className="group-hover:block hidden transition-all duration-200">
//                 Order
//               </span>
//               <FaShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
//             </button>
//             <div className="flex items-center gap-4">
//               <DarkMode />
//               <div className="relative">
//                 <button
//                   onClick={handleUserProfileClick}
//                   className="text-gray-500 dark:text-white p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
//                 >
//                   <FaUser className="text-xl" />
//                 </button>
//                 {showUserProfile && (
//                   <div className="absolute right-0 mt-2 w-[250px] bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 z-10 user-profile">
//                     {showSignIn && (
//                       <SignIn /> 
//                     )}
//                     {!showSignIn && (
//                       <div className="flex items-center gap-4 px-2">
//                         {/* User Avatar */}
//                         <img
//                           src={user.avatar}
//                           alt="User"
//                           className="w-16 h-16 rounded-full border border-gray-300"
//                         />
//                         <div>
//                           {/* User Name */}
//                           <p className="text-gray-800 dark:text-white font-medium">{user.name}</p>
//                           {/* User Email */}
//                           <p className="text-sm text-gray-500 dark:text-gray-300">{user.email}</p>
//                         </div>
//                       </div>
//                     )}
//                     {/* Sign Out or Sign In/Sign Up Links */}
//                     <div className="border-t border-gray-200 dark:border-gray-700 mt-4 px-4 py-2">
//                       {!showSignIn && (
//                         <button
//                           onClick={handleSignOutClick}
//                           className="block w-full px-4 py-2 rounded-md text-sm text-black dark:text-white-400 hover:dark:text-black dark:text-white hover:bg-primary hover:shadow-lg transition-all duration-200 cursor-pointer"
//                         >
//                           Sign Out
//                         </button>
//                       )}
//                       {!showSignIn && (
//                         <button
//                           onClick={() => navigateAndClosePopup('/signin')}
//                           className="block w-full px-4 py-2 rounded-md text-sm text-black dark:text-white-400 hover:dark:text-black dark:text-white hover:bg-primary hover:shadow-lg transition-all duration-200 cursor-pointer"
//                         >
//                           Sign In
//                         </button>
//                       )}
//                       {!showSignIn && (
//                         <button
//                           onClick={() => navigateAndClosePopup('/register')}
//                           className="block w-full px-4 py-2 rounded-md text-sm text-black dark:text-white-400 hover:dark:text-black dark:text-white hover:bg-primary hover:shadow-lg transition-all duration-200 cursor-pointer"
//                         >
//                           Sign Up
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaBars, FaUser, FaShoppingCart } from 'react-icons/fa';
import { IoMdSearch } from 'react-icons/io';
import DarkMode from './DarkMode';
import Book from '../Assets/Book.jpg';
import SignIn from './Signin';
import useStore from '../useStore';
import {jwtDecode} from 'jwt-decode'; // Import jwtDecode from jwt-decode
import useCartStore from "./useCartStore";
import  {Link } from 'react-scroll';
const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Trending", link: "trending" },
  { id: 3, name: "New Arrivals", link: "newarrivalbooks" },
  { id: 4, name: "Top Rated", link: "topRatedSection" },
  { id: 5, name: "Recommendation", link: "recommendations" },
  { id: 6, name: "Authors", link: "authorSection" },
  { id: 7, name: "Contact Us", link: "footer" },
  { id: 8, name: "About Us", link: "footer" },
  { id: 9, name: "FAQs", link: "faqs" },
];

const Navbar0 = () => {
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [books, setBooks] = useState([]);
  const [showUserProfile, setShowUserProfile] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const user1 = useStore(state => state.user);

  let user = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "" // Replace with actual user avatar URL
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      user = JSON.parse(storedUser);
    }
  }, []);

  if (user1) {
    try {
      const decoded = jwtDecode(user1.token);
      user.name = decoded.user.username;
      user.email = decoded.user.email;

      localStorage.setItem('user', JSON.stringify(user));

      console.log(user);
    } catch (error) {
      console.error("Error decoding token:", error);
    }
  }

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/categories');
        console.log('Fetched books:', response.data);
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!dropdownRef.current?.contains(event.target)) {
        setShowCategories(false);
      }
      if (!event.target.closest('.user-profile') && !event.target.closest('.user-dropdown')) {
        setShowUserProfile(false);
        setShowSignIn(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleUserProfileClick = () => {
    setShowUserProfile(!showUserProfile);
    setShowSignIn(false);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleDropdownToggle = () => {
    setShowCategories(!showCategories);
  };

  const handleCategoryClick = (bookname) => {
    console.log("clicked", bookname);
    navigate(`/category/${bookname}`);
  };

  const handleSignInClick = () => {
    setShowUserProfile(true);
    setShowSignIn(true);
  };

  const handleSignOutClick = () => {
    localStorage.removeItem('user');
    setShowUserProfile(false);
    setShowSignIn(false);
    navigate('/');
  };

  const navigateAndClosePopup = (path) => {
    setShowUserProfile(false);
    setShowSignIn(false);
    navigate(path);
  };

  const { fetchCartItems } = useCartStore();

  const handleNavigateToCart = () => {
    navigate('/cartpage');
  };

  return (
    <div className="fixed top-0 left-0 w-full shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 z-40">
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center mx-auto">
          <div>
            <a href="/" className="font-bold text-2xl sm:text-3xl flex gap-2 items-center">
              <img src={Book} alt="" className="w-10" />
              <span className="hidden sm:block">Read here</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative group">
              <input
                type="text"
                placeholder="Search..."
                className="w-[300px] sm:w-[200px] group-hover:w-[400px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-2 focus:outline-none focus:border-primary dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            <button
              onClick={() => {
        fetchCartItems(); // Ensure cart items are fetched before navigating
        handleNavigateToCart();
      }}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
            <div className="flex items-center gap-4">
              <DarkMode />
              <div className="relative">
                <button
                  onClick={handleUserProfileClick}
                  className="text-gray-500 dark:text-white p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
                >
                  <FaUser className="text-xl" />
                </button>
                {showUserProfile && (
                  <div className="absolute right-0 mt-2 w-[250px] bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 z-10 user-profile">
                    {showSignIn && (
                      <SignIn />
                    )}
                    {!showSignIn && (
                      <div className="flex items-center gap-4 px-2">
                        <img
                          src={user.avatar}
                          alt="User"
                          className="w-16 h-16 rounded-full border border-gray-300"
                        />
                        <div>
                          <p className="text-gray-800 dark:text-white font-medium">{user.name}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-300">{user.email}</p>
                        </div>
                      </div>
                    )}
                    <div className="border-t border-gray-200 dark:border-gray-700 mt-4 px-4 py-2">
                      {!showSignIn && (
                        <button
                          onClick={handleSignOutClick}
                          className="block w-full px-4 py-2 rounded-md text-sm text-black dark:text-white-400 hover:dark:text-black dark:text-white hover:bg-primary hover:shadow-lg transition-all duration-200 cursor-pointer"
                        >
                          Sign Out
                        </button>
                      )}
                      {!showSignIn && (
                        <button
                          onClick={() => navigateAndClosePopup('/signin')}
                          className="block w-full px-4 py-2 rounded-md text-sm text-black dark:text-white-400 hover:dark:text-black dark:text-white hover:bg-primary hover:shadow-lg transition-all duration-200 cursor-pointer"
                        >
                          Sign In
                        </button>
                      )}
                      {!showSignIn && (
                        <button
                          onClick={() => navigateAndClosePopup('/signup')}
                          className="block w-full px-4 py-2 rounded-md text-sm text-black dark:text-white-400 hover:dark:text-black dark:text-white hover:bg-primary hover:shadow-lg transition-all duration-200 cursor-pointer"
                        >
                          Sign Up
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
              </div>
            {/* Hamburger menu for mobile */}
            <div className="sm:hidden">
              <button onClick={toggleMenu} className="text-gray-500 dark:text-white p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800">
                <FaBars className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:flex hidden justify-center">
        <ul className="flex items-center gap-4">
          {Menu.map((menu) => (
            <Link 
              key={menu.id}
              
             navigate to={menu.link}
              smooth={true}
              duration={500}
              // className={"inline-block duration-200 cursor-pointer px-4 hover:text-primary whitespace-nowrap"}
              className="px-4 py-2 rounded-md text-sm text-black dark:text-white-400 hover:dark:text-black dark:text-white hover:bg-primary hover:shadow-lg transition-all duration-200 cursor-pointer"
              onClick={() => {
                setShowMenu(false);
                
              }}
            >
              {menu.name}
            </Link>
          ))}
          <li className="ml-6 text-xl sm:my-0 my-7">
            <button
              onClick={handleDropdownToggle}
              className="text-gray-800 text-sm dark:text-white hover:text-gray-400 duration-500"
            >
              Categories
            </button>
            {showCategories && (
              <ul ref={dropdownRef} className="absolute z-10 bg-white dark:bg-gray-900 rounded-lg shadow-lg mt-2 p-2">
                {books.map((book) => (
                  <li
                    key={book.name}
                    onClick={() => handleCategoryClick(book.name)}
                    className="px-4 py-2 rounded-md text-sm text-black dark:text-white-400 hover:dark:text-black dark:text-white hover:bg-primary hover:shadow-lg transition-all duration-200 cursor-pointe0"
                  >
                    {book.name}
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar0;
