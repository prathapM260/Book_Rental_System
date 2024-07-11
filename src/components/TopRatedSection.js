import React from 'react';


  const topRatedBooks = [
    {
      id: 1,
      title: 'Book Title 1',
      author: 'Author 1',
      rating: 4.5,
      image: 'https://via.placeholder.com/150', // Replace with actual image URLs
    },
    {
      id: 2,
      title: 'Book Title 2',
      author: 'Author 2',
      rating: 4.7,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      title: 'Book Title 3',
      author: 'Author 3',
      rating: 5.5,
      image: 'https://via.placeholder.com/150', // Replace with actual image URLs
    },
    {
      id: 4,
      title: 'Book Title 4',
      author: 'Author 4',
      rating: 5.7,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 5,
      title: 'Book Title 5',
      author: 'Author 5',
      rating: 4.5,
      image: 'https://via.placeholder.com/150', // Replace with actual image URLs
    },
    {
      id: 6,
      title: 'Book Title 6',
      author: 'Author 6',
      rating: 3.7,
      image: 'https://via.placeholder.com/150',
    },
];

const TopRatedSection = () => {
  return (
    <div id="topRatedSection" className="flex flex-col items-center mt-16 bg-gradient-to-b from-blue-500 to-white py-10 shadow-md">
      <h2 className="text-4xl mb-8 text-white">Top Rated Books</h2>
      <div className="flex justify-center space-x-4">
        {topRatedBooks.slice(0, 4).map((book) => (
          <div key={book.id} className="w-52 h-80"> {/* Adjusted height */}
            <img src={book.image} alt={book.title} className="w-full h-[300px] rounded-md shadow-md" /> {/* Adjusted height */}
            <p className="text-center mt-2 text-black">{book.title}</p>
          </div>
        ))}
      </div>
      <button className="mt-8 text-black py-2 px-4 rounded border border-black">Read More</button>
    </div>
  );
};

export default TopRatedSection;
