import React from 'react';

const trendingBooks = [
  {
    id: 1,
    title: 'Trending Book 1',
    author: 'Author A',
    rating: 4.2,
    image: 'https://via.placeholder.com/150', // Replace with actual image URLs
  },
  {
    id: 2,
    title: 'Trending Book 2',
    author: 'Author B',
    rating: 4.8,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Trending Book 3',
    author: 'Author C',
    rating: 4.5,
    image: 'https://via.placeholder.com/150', // Replace with actual image URLs
  },
  {
    id: 4,
    title: 'Trending Book 4',
    author: 'Author D',
    rating: 4.3,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    title: 'Trending Book 5',
    author: 'Author E',
    rating: 4.7,
    image: 'https://via.placeholder.com/150', // Replace with actual image URLs
  },
  {
    id: 6,
    title: 'Trending Book 2',
    author: 'Author B',
    rating: 4.8,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 7,
    title: 'Trending Book 3',
    author: 'Author C',
    rating: 4.5,
    image: 'https://via.placeholder.com/150', // Replace with actual image URLs
  },
  {
    id: 8,
    title: 'Trending Book 4',
    author: 'Author D',
    rating: 4.3,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 9,
    title: 'Trending Book 5',
    author: 'Author E',
    rating: 4.7,
    image: 'https://via.placeholder.com/150', // Replace with actual image URLs
  },
];

const TrendingSection = () => {
  return (
    <div id="trending" className="flex flex-col items-center mt-16 bg-gradient-to-b from-blue-500 to-white py-10 shadow-md">
      <h2 className="text-4xl mb-8 text-white">Trending Books</h2>
      <div className="flex justify-center space-x-4">
        {trendingBooks.slice(0, 5).map((book) => (
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

export default TrendingSection;
