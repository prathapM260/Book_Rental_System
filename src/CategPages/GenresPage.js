// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { useParams } from 'react-router-dom';

// // const AdventuresPage = () => {
// //   const { id: category } = useParams();
// //   const [books, setBooks] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState('');

// //   useEffect(() => {
// //     const fetchBooks = async () => {
// //       try {
// //         const response = await axios.get(`http://localhost:5000/api/books?category=${category}`);
// //         setBooks(response.data);
// //       } catch (err) {
// //         setError('Failed to fetch Adventure books');
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchBooks();
// //   }, [category]);

// //   if (loading) {
// //     return <div>Loading...</div>;
// //   }

// //   if (error) {
// //     return <div>Error: {error}</div>;
// //   }

// //   return (
// //     <div className="flex flex-col items-center mt-16 bg-gradient-to-l from-orange-200 to-primary py-10 shadow-md">
// //       <h2 className="text-4xl mb-8 text-white">Adventure Books</h2>
// //       <div className="grid grid-cols-5 gap-4">
// //         {books.map((book, index) => (
// //           <div key={index} className="w-52 mb-8">
// //             <img
// //               src={book.image_url}
// //               alt={book.name}
// //               className="w-full h-[300px] rounded-md shadow-md"
// //               onError={(e) => (e.target.style.display = 'none')}
// //             />
// //             <div className="mt-2 text-center">
// //               <h2 className="text-xl font-semibold text-black">{book.name}</h2>
// //               <p className="text-black"><strong>Ratings:</strong> {book.ratings}</p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default AdventuresPage;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const GenresPage = () => {
//   const { id: category } = useParams();
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/books?category=${category}`);
//         setBooks(response.data);
//         console.log(response);
//       } catch (err) {
//         setError('Failed to fetch Adventure books');
//       } finally {
//         setLoading(false);
//       }
//     };

    

//     fetchBooks();
//   }, [category]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

  

//   return (
//     <div className="flex flex-col items-center mt-16 bg-gradient-to-l from-orange-200 to-primary py-10 shadow-md">
//       <h2 className="text-4xl mb-8 text-white">Adventure Books</h2>
//       <div className="grid grid-cols-5 gap-4">
//         {books.map((book, index) => (
//           <div key={index} className="w-52 mb-8">
//             <img
//               src={book.image_url}

//               alt={book.name}
//               className="w-full h-[300px] rounded-md shadow-md"
              
//             />
//             <div className="mt-2 text-center">
//               <h2 className="text-xl font-semibold text-black">{book.name}</h2>
//               <p className="text-black"><strong>Ratings:</strong> {book.ratings}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GenresPage;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const GenresPage = () => {
  const { id: category } = useParams();
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/books?category=${category}`);
        setBooks(response.data);
      } catch (err) {
        setError('Failed to fetch books');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [category]);

  const handleBookClick = (id) => {
    navigate(`/book/${id}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col items-center mt-16 bg-gradient-to-l from-orange-200 to-primary py-10 shadow-md">
      <h2 className="text-4xl mb-8 text-white">Books</h2>
      <div className="grid grid-cols-5 gap-4">
        {books.map((book) => (
          <Link key={book._id} to={`/book/${book._id}`}>
          <div
            key={book._id}
            className="w-52 mb-8 cursor-pointer"
            onClick={() => handleBookClick(book._id)}
          >
            <img
              src={book.image_url}
              alt={book.name}
              className="w-full h-[300px] rounded-md shadow-md"
            />
            <div className="mt-2 text-center">
              <h2 className="text-xl font-semibold text-black">{book.name}</h2>
              <p className="text-black"><strong>Ratings:</strong> {book.ratings}</p>
            </div>
          </div>
          </Link>
        ))}
        
      </div>
    </div>
  );
};

export default GenresPage;
