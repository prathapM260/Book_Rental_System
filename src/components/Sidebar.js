import React, { useState } from 'react';

function Sidebar({ genres, onSelectGenre }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleGenreClick = (genre) => {
        onSelectGenre(genre);
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="bg-primary/40 w-1/4 p-4 dark:text-white dark:bg-gray-900 fixed h-screen overflow-y-auto">
                <h2 className="text-lg font-bold mb-4">Categories</h2>
                {/* Search bar */}
                <input
                    type="text"
                    placeholder="Search..."
                    className="border border-gray-300 p-2 mb-4 rounded-md w-full dark:border-gray-500 dark:bg-gray-800"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                {/* Genre categories */}
                <div>
                    <div
                        key="home"
                        className="cursor-pointer py-1 px-2 mb-2 rounded-md text-lg font-semibold hover:bg-primary hover:text-white transition-all duration-200"
                        onClick={() => handleGenreClick(null)} // Home section
                    >
                        Home
                    </div>
                    {/* Check if genres is defined before mapping */}
                    {genres && genres.map((genre) => (
                        <div
                            key={genre.id}
                            className="cursor-pointer py-1 px-2 mb-2 rounded-md text-lg font-semibold hover:bg-primary hover:text-white transition-all duration-200"
                            onClick={() => handleGenreClick(genre)}
                        >
                            {genre.name}
                        </div>
                    ))}
                </div>
            </div>
            {/* Main content */}
            <div className="flex-1 p-4 ml-[25%]">
                {/* Content related to selected genre */}
                {/* This area will display books or details based on the selected genre */}
                {/* You can implement this part based on your application logic */}
            </div>
        </div>
    );
}

export default Sidebar;
