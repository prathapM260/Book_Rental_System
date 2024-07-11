import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  // Function to handle navigation to personal social media links
  const handleSocialMediaClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <footer className="bg-gradient-to-t from-gray-200 via-white to-gray-100 py-8 mt-16">
      <div data-aos="fade-up" className="container mx-auto flex justify-between items-center px-4">
        {/* Left section: Book rental system details */}
        <div className="w-1/2">
          <h2 className="text-lg font-bold mb-2">About Book Rental Simplified</h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod nulla et dolor ultricies mattis. Sed id tristique felis, at sodales arcu.
          </p>
        </div>

        {/* Right section: Social media icons */}
        <div className="flex items-center justify-end w-1/2 space-x-4">
          <FaFacebook className="text-3xl text-blue-600 cursor-pointer hover:text-blue-800" onClick={() => handleSocialMediaClick('https://www.facebook.com/yourpage')} />
          <FaTwitter className="text-3xl text-blue-400 cursor-pointer hover:text-blue-600" onClick={() => handleSocialMediaClick('https://twitter.com/yourhandle')} />
          <FaInstagram className="text-3xl text-pink-600 cursor-pointer hover:text-pink-800" onClick={() => handleSocialMediaClick('https://www.instagram.com/youraccount')} />
          <FaLinkedin className="text-3xl text-blue-800 cursor-pointer hover:text-blue-900" onClick={() => handleSocialMediaClick('https://www.linkedin.com/in/yourprofile')} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
