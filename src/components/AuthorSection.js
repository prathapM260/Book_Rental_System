
import React from 'react';

const authors = [
    {
      id: 1,
      name: 'Holly Spofford',
      image: 'https://via.placeholder.com/200x300',
      achievements: 'Best-selling author of mystery novels.',
      ratings: 5,
      description: 'Loved this seductively suspenseful book with brave characters! Snap Decision is a must read for lovers of a great plot twist.',
      reviewer: 'Chase Welch'
    },
    // Add more authors as needed
  ];

const AuthorSection = () => {
  return (
    <div id="authorSection" className="flex flex-col items-center mt-16 bg-gradient-to-b from-blue-500 to-white py-10 shadow-lg">
      <h2 data-aos="fade-up" className="text-4xl mb-8 text-white">Featured Authors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {authors.map(author => (
          <div data-aos="fade-up" key={author.id} className="flex bg-white rounded-md shadow-md overflow-hidden">
            <img src={author.image} alt={author.name} className="w-[50] h-[50] object-cover" />
            <div className="p-4 flex flex-col justify-between">
              <div>
                <h3 data-aos="fade-up" className="text-lg font-bold">{author.name}</h3>
                <div className="flex items-center mt-2">
                  {Array(author.ratings).fill(0).map((_, index) => (
                    <span key={index} className="text-yellow-500">&#9733;</span>
                  ))}
                </div>
                <p data-aos="fade-up" className="text-sm text-gray-500">{author.achievements}</p>
                <p data-aos="fade-up" className="mt-2 text-sm text-gray-700 line-clamp-4">{author.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button data-aos="fade-up" className="mt-8 text-black py-2 px-4 rounded border border-black shadow-md bg-primary-color">Explore More</button>
    </div>
  );
};

export default AuthorSection;