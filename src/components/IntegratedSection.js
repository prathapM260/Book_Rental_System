import React, { useEffect, useState } from 'react';
import Typed from 'typed.js';

const genres = [
  { name: "Adventure", src: "https://assets-cdn.reedsy.com/assets/landing/landing-v2/index/adventure-2871435d32d475f2d3a0ea886e2e1a5f7f36185c92330eb2600f37c5c98db301.svg", background: "bg-gradient-to-r from-green-400 to-green-600" },
  { name: "Romance", src: "https://assets-cdn.reedsy.com/assets/landing/landing-v2/index/romance-afd7e47bd62e75fcb6d7245ec3c797203dbe352cc75fabfd7235d6f7d44ae97e.svg", background: "bg-gradient-to-r from-red-200 to-white" },
  { name: "Mystery", src: "https://assets-cdn.reedsy.com/assets/landing/landing-v2/index/mystery-b2c4e96682838a00555a9d83448d99a5cce01ee7f4d32e3bcb86726ff38be69c.svg", background: "bg-gradient-to-r from-gray-200 to-gray-400" },
  { name: "Self-Help", src: "https://assets-cdn.reedsy.com/assets/landing/landing-v2/index/self-help-fab4ec4ec9f9364fbd0b30fd6c8af2da0c7b8a7f46ec6211f3ff1a3043ef6215.svg", background: "bg-gradient-to-r from-blue-100 to-blue-300" },
];

const IntegratedSection = () => {
  const [currentGenreIndex, setCurrentGenreIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGenreIndex((prevIndex) => (prevIndex + 1) % genres.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const currentGenre = genres[currentGenreIndex];

  useEffect(() => {
    const options = {
      strings: genres.map(genre => genre.name),
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
      onStringTyped: (arrayPos) => {
        setCurrentGenreIndex(arrayPos);
      },
    };

    const typed = new Typed('#typed', options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className={`flex flex-col justify-center items-center h-screen w-screen mt-16 ${currentGenre.background}`}>
      <div className="flex flex-row-reverse flex-grow flex-shrink-0 w-full">
        <div className="flex justify-center items-center flex-shrink-0 w-1/2">
          {genres.map((genre, index) => (
            <img
              key={index}
              className={`w-120 h-auto ${genre === currentGenre ? 'block' : 'hidden'}`}
              src={genre.src}
              alt={genre.name}
            />
          ))}
        </div>
        <div className={`flex flex-col justify-center items-start w-1/2 px-10 pr-7 mt-3 ml-5`}>
                    <h1 className="text-4xl text-center font-bold">
              Where beautiful <br />
              <span id="typed" className="text-typed font-bold text-green"></span> books <br />
              are made
            </h1>
            <h3 className="font-bold mt-4 mb-4 text-center">
              Meet the <span className="font-bold">editor</span>, <span className="font-bold">designer</span> or <span className="font-bold">marketer</span> who can help bring&nbsp;<span className="font-bold">your book</span> to life.
            </h3>
          <form className="w-full text-center md:text-left" action="/accounts" method="post">
            <input type="hidden" name="authenticity_token" value="LtHEog4TE0kEmyoqO7VWPkowcSFCuGngyn2PRBVQh7vp4AuK8gFmctjTvPaCSmf5etHeVw1CzPRNeJ9M1uLZHQ" />
            <input type="hidden" name="g-recaptcha-response-v3" className="g-recaptcha-response" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {/* <div className='flex ml-2'>
                <input className="w-full p-2 border border-gray-300 rounded mb-2" placeholder="Enter your email..." required="required" type="email" name="user[email]" id="user_email" />
                <input type="submit" name="commit" value="Get started" className="w-full md:w-auto bg-gray-400 text-white py-1 px-2 rounded cursor-pointer" />

              </div> */}
              <div className="flex justify-start md:justify-end">
              </div>
            </div>
            {/* <p className="mt-4 text-center">
              Sign up with
              <a href="/auth/social_sign_in/facebook" className="ml-1 font-bold text-blue-600">facebook</a>
              or
              <a href="/auth/social_sign_in/google" className="ml-1">
                <img style={{ verticalAlign: 'middle', marginBottom: '4px' }} src="https://assets-cdn.reedsy.com/assets/landing/landing-v2/index/google-signin-66d08936802e774cce28e894a3555a92e748991a4cffd23c9bf59d79f152c91c.svg" alt="Google Sign-In" />
              </a>
            </p> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default IntegratedSection;
