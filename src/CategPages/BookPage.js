// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { FaHeart, FaShoppingCart } from 'react-icons/fa';

// const BookPage = () => {
//   const { id } = useParams();
//   const [book, setBook] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchBook = async () => {
//       try {
//         console.log(`Fetching book with ID: ${id}`);
//         const response = await axios.get(`http://localhost:5000/api/book/${id}`); // Updated endpoint
//         console.log('Response data:', response.data);
//         setBook(response.data);
//       } catch (err) {
//         console.error('Error fetching book:', err);
//         setError('Failed to fetch book details');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBook();
//   }, [id]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!book) {
//     return <div>No book details available.</div>;
//   }

//   return (
//     <div>
//       <div className="container mx-auto mt-16 py-10">
//         <div className="flex flex-col lg:flex-row items-center bg-gradient-to-l from-orange-200 to-primary shadow-md rounded-md">
//           <div className="w-full lg:w-1/2 p-8 relative bg-primary">
//             <img
//               src={book.image_url}
//               alt={book.name}
//               className="w-[400px] h-[500px] rounded-md shadow-md"
//             />
//             <div className="absolute top-4 right-4 flex gap-2">
//               <button className="bg-white p-2 rounded-full shadow-md">
//                 <FaHeart className="text-red-500 text-2xl" />
//               </button>
//               <button className="bg-white p-2 rounded-full shadow-md">
//                 <FaShoppingCart className="text-green-500 text-2xl" />
//               </button>
//             </div>
//           </div>
//           <div className="w-full lg:w-1/2 p-8 text-black">
//             <h2 className="text-4xl font-bold mb-4">{book.name}</h2>
//             <p className="text-lg mb-2"><strong>Author:</strong> {book.author}</p>
//             <p className="text-lg mb-2"><strong>Genre:</strong> {book.genre}</p>
//             <p className="text-lg mb-2"><strong>Publication Year:</strong> {book.publication_year}</p>
//             <p className="text-lg mb-2"><strong>Ratings:</strong> {book.ratings}</p>
//             <p className="text-lg mb-2"><strong>Views:</strong> {book.views}</p>
//             <p className="text-lg"><strong>Description:</strong> {book.description}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookPage;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { FaHeart, FaShoppingCart } from 'react-icons/fa';

// const BookPage = () => {
//   const { id } = useParams();
//   const [book, setBook] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [similarBooks, setSimilarBooks] = useState([]);

//   useEffect(() => {
//     const fetchBook = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/book/${id}`); // Updated endpoint
//         setBook(response.data);

//         // Fetch similar books based on genre
//         const similarResponse = await axios.get(`http://localhost:5000/api/books?genre=${response.data.genre}`);
//         setSimilarBooks(similarResponse.data.filter(b => b._id !== id)); // Exclude the current book
//       } catch (err) {
//         console.error('Error fetching book:', err);
//         setError('Failed to fetch book details');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBook();
//   }, [id]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!book) {
//     return <div>No book details available.</div>;
//   }

//   return (
//     <div>
//       <div className="container mx-auto mt-16 py-10">
//         <div className="flex flex-col lg:flex-row items-center bg-gradient-to-l from-orange-200 to-primary shadow-md rounded-md">
//           <div className="w-full lg:w-1/2 p-8 relative bg-primary">
//             <img
//               src={book.image_url}
//               alt={book.name}
//               className="w-[400px] h-[500px] rounded-md shadow-md"
//             />
//             <div className="absolute top-4 right-4 flex gap-2">
//               <button className="bg-white p-2 rounded-full shadow-md">
//                 <FaHeart className="text-red-500 text-2xl" />
//               </button>
//               <button className="bg-white p-2 rounded-full shadow-md">
//                 <FaShoppingCart className="text-green-500 text-2xl" />
//               </button>
//             </div>
//           </div>
//           <div className="w-full lg:w-1/2 p-8 text-black">
//             <h2 className="text-4xl font-bold mb-4">{book.name}</h2>
//             <p className="text-lg mb-2"><strong>Author:</strong> {book.author}</p>
//             <p className="text-lg mb-2"><strong>Genre:</strong> {book.genre}</p>
//             <p className="text-lg mb-2"><strong>Publication Year:</strong> {book.publication_year}</p>
//             <p className="text-lg mb-2"><strong>Ratings:</strong> {book.ratings}</p>
//             <p className="text-lg mb-2"><strong>Views:</strong> {book.views}</p>
//             <p className="text-lg"><strong>Description:</strong> {book.description}</p>
//           </div>
//         </div>

//         {/* Display Similar Books */}
//         <div className="mt-16">
//           <h2 className="text-3xl mb-4">Similar Books</h2>
//           <div className="grid grid-cols-4 gap-4">
//             {similarBooks.map((similarBook) => (
//               <div key={similarBook._id} className="w-52 mb-8 cursor-pointer">
//                 <img
//                   src={similarBook.image_url}
//                   alt={similarBook.name}
//                   className="w-full h-[300px] rounded-md shadow-md"
//                 />
//                 <div className="mt-2 text-center">
//                   <h2 className="text-xl font-semibold text-black">{similarBook.name}</h2>
//                   <p className="text-black"><strong>Ratings:</strong> {similarBook.ratings}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookPage;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import useStore from '../useStore';
import {jwtDecode} from 'jwt-decode';
import useCartStore from '../cartStore';
import {  useNavigate } from 'react-router-dom';
const BookPage = () => {
  const navigate = useNavigate();
  const user = useStore(state => state.user);
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [similarBooks, setSimilarBooks] = useState([]);
  const [allBooks, setAllBooks] = useState([]);
  const [wishlist, setWishlist] = useState(false); // Track if book is in wishlist
  const [cart, setCart] = useState(false); // Track if book is in cart
  const { addToCart, setCartItems } = useCartStore((state) => ({
    addToCart: state.addToCart,
    setCartItems: state.setCartItems,
  }));

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/book/${id}`);
        setBook(response.data);

        // Fetch similar books based on genre
        const similarResponse = await axios.get(`http://localhost:5000/api/books?genre=${response.data.genre}`);
        setSimilarBooks(similarResponse.data.filter(b => b._id !== id));

        // Fetch all books
        const allResponse = await axios.get('http://localhost:5000/api/books');
        setAllBooks(allResponse.data.filter(b => b._id !== id));
      } catch (err) {
        console.error('Error fetching book:', err);
        setError('Failed to fetch book details');
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  useEffect(() => {
    // Example logic to check if book is in wishlist or cart (mock implementation)
    // Replace with actual logic based on your application state management or backend integration
    const checkWishlist = () => {
      // Mock example: Check if book ID exists in local storage for wishlist
      const wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
      const isInWishlist = wishlistItems.some(item => item._id === id);
      setWishlist(isInWishlist);
    };

    const checkCart = () => {
      // Mock example: Check if book ID exists in local storage for cart
      const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
      const isInCart = cartItems.some(item => item._id === id);
      setCart(isInCart);
    };

    checkWishlist();
    checkCart();
  }, [id]);

  const handleAddToWishlist = () => {
    // Example logic to add/remove from wishlist (mock implementation)
    // Replace with actual logic to update backend or state management
    let wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
    if (!wishlist) {
      wishlistItems = [...wishlistItems, book];
    } else {
      wishlistItems = wishlistItems.filter(item => item._id !== id);
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
    setWishlist(!wishlist);
  };
  const decodeToken = () => {
    try {
      const decoded = jwtDecode(user.token);
      console.log("Decoded token data:", decoded.user.id);
      return decoded.user.id; // Return only the userId
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  };


  const handleAddToCart = async () => {
    const { name, image_url, author, genre } = book;
    const userId = decodeToken(); // Decode token to get userId

    try {
      await axios.post(`http://localhost:5000/api/cart/add/cart`, { userId, name, image_url, author, genre });
      setCart(true);
      alert('Book added to cart successfully!');
      const updatedCartItems = await fetchCartItems(userId);
      setCartItems(updatedCartItems); 
      navigate('/cartpage');
        
    } catch (error) {
      console.error('Error adding book to cart:', error);
      alert('Failed to add book to cart');
    }
  };
  const fetchCartItems = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/cart/${userId}`);
      console.log("fetched data man",response);
      return response.data; // Return fetched cart items
    } catch (error) {
      console.error('Error fetching cart items:', error);
      return []; // Return empty array if error occurs
    }
  };
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!book) {
    return <div>No book details available.</div>;
  }

  return (
    <div>
      <div className="container mx-auto mt-16 py-10">
        <div className="flex flex-col lg:flex-row items-center bg-gradient-to-l from-orange-200 to-primary shadow-md rounded-md">
          <div className="w-full lg:w-1/2 p-8 relative bg-primary">
            <img
              src={book.image_url}
              alt={book.name}
              className="w-[400px] h-[500px] rounded-md shadow-md"
            />
            <div className="absolute top-4 right-4 flex gap-2">
              <button className="bg-white p-2 rounded-full shadow-md" onClick={handleAddToWishlist}>
                <FaHeart className={`text-white-500 text-2xl ${wishlist ? 'text-red-600' : ''}`} />
              </button>
              <button className="bg-white p-2 rounded-full shadow-md" onClick={handleAddToCart}>
                <FaShoppingCart className={`text-green-500 text-2xl ${cart ? 'text-green-600' : ''}`} />
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-8 text-black">
            <h2 className="text-4xl font-bold mb-4">{book.name}</h2>
            <p className="text-lg mb-2"><strong>Author:</strong> {book.author}</p>
            <p className="text-lg mb-2"><strong>Genre:</strong> {book.genre}</p>
            <p className="text-lg mb-2"><strong>Publication Year:</strong> {book.publication_year}</p>
            <p className="text-lg mb-2"><strong>Ratings:</strong> {book.ratings}</p>
            <p className="text-lg mb-2"><strong>Views:</strong> {book.views}</p>
            <p className="text-lg"><strong>Description:</strong> {book.description}</p>
          </div>
        </div>

        {/* Display Same Genre Books First */}
        {similarBooks.length > 0 && (
          <div className="mt-8 bg-white py-10">
            <h2 className="text-3xl mb-4 text-center text-black">Similar Books ({book.genre})</h2>
            <div className="grid grid-cols-4 gap-4 px-4 bg-secondary/40">
              {similarBooks.map((similarBook) => (
                <Link key={similarBook._id} to={`/books/${similarBook._id}`} className="w-52 mb-8 cursor-pointer bg-secondary/40 shadow-lg rounded-md">
                  <img
                    src={similarBook.image_url}
                    alt={similarBook.name}
                    className="w-full h-[300px] rounded-md shadow-md"
                  />
                  <div className="mt-2 text-center text-black ">
                    <h2 className="text-xl font-semibold">{similarBook.name}</h2>
                    <p><strong>Ratings:</strong> {similarBook.ratings}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Display All Books */}
        <div className="mt-8 bg-primary py-10">
          <h2 className="text-3xl mb-4 text-center text-black">All Books</h2>
          <div className="grid grid-cols-4 gap-4 px-4">
            {allBooks.map((allBook) => (
              <div key={allBook._id} className="w-52 mb-8 cursor-pointer shadow-lg rounded-md">
                <img
                  src={allBook.image_url}
                  alt={allBook.name}
                  className="w-full h-[300px] rounded-md shadow-md"
                />
                <div className="mt-2 text-center text-black">
                  <h2 className="text-xl font-semibold">{allBook.name}</h2>
                  <p><strong>Ratings:</strong> {allBook.ratings}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
