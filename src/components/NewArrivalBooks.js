import React from 'react';

const books = [
  { id: 1, title: 'Book 1', image: 'https://via.placeholder.com/200x300' },
  { id: 2, title: 'Book 2', image: 'https://via.placeholder.com/200x300' },
  { id: 3, title: 'Book 3', image: 'https://via.placeholder.com/200x300' },
  { id: 4, title: 'Book 4', image: 'https://via.placeholder.com/200x300' },
  { id: 5, title: 'Book 5', image: 'https://via.placeholder.com/200x300' },
];

const NewArrivalBooks = () => {
  return (
    <div id="newarrivalbooks" className="flex flex-col items-center mt-16 bg-gradient-to-b from-blue-500 to-white py-10 shadow-md">
      <h2 className="text-4xl mb-8 text-white">New Arrivals</h2>
      <div className="flex justify-center space-x-4">
        {books.map(book => (
          <div key={book.id} className="w-52">
            <img src={book.image} alt={book.title} className="w-full h-auto rounded-md shadow-md" />
            <p className="text-center mt-2 text-black">{book.title}</p>
          </div>
        ))}
      </div>
      <button className="mt-8 text-black py-2 px-4 rounded border border-black">Explore More</button>
    </div>
  );
};

export default NewArrivalBooks;
