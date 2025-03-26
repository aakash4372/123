import React from 'react';

const HomeSection = () => {
  return (
    <div className="section bg-blue-900">
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Our Website</h1>
            <p className="text-lg mb-6">
              Discover amazing features with fullPage.js scrolling.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg">
              Get Started
            </button>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://via.placeholder.com/600x400" 
              alt="Home" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;