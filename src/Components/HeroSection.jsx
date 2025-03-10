import React, { useState } from "react";

const HeroSection = ({ onSearch }) => {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [bedrooms, setBedrooms] = useState(0);

  const handleFindProperty = () => {
    onSearch({ location, type, bedrooms }); // Pass search params to parent
    const featuredSection = document.getElementById("featured-properties");
    if (featuredSection) {
      featuredSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full flex flex-col items-center py-20 px-4">
      <div className="relative z-10 text-center text-white px-5 max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
          Browse Our Properties
        </h1>
        <p className="mt-3 text-lg md:text-xl">
          Find your perfect home among our curated properties. Start browsing
          now!
        </p>
      </div>

      <div className="w-full lg:w-5xl min-h-[130px] mt-10 bg-[#FFFFFF33] flex justify-center items-center">
        <div className="bg-white rounded-lg shadow-lg flex flex-col lg:flex-row items-center w-full max-w-4xl mx-auto p-4 md:p-0">
          <div className="w-full lg:w-1/3 p-3 border-b lg:border-r border-gray-300">
            <label className="block text-xs md:text-start font-bold text-gray-800">
              LOCATION
            </label>
            <input
              type="text"
              placeholder="eg. Gbagada"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full mt-1 px-3 py-2 text-gray-600 border-none focus:outline-none"
            />
          </div>

          <div className="w-full lg:w-1/3 p-3 border-b lg:border-r border-gray-300">
            <label className="block text-xs font-bold text-gray-800">
              PROPERTY TYPE
            </label>
            <input
              type="text"
              placeholder="eg. Duplex, Bedroom Flat"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full mt-1 px-3 py-2 text-gray-600 border-none focus:outline-none"
            />
          </div>

          <div className="w-full lg:w-1/3 p-3 flex flex-col items-center">
            <label className="block text-xs font-bold text-gray-800">
              BEDROOM
            </label>
            <div className="flex items-center gap-5 mt-2">
              <button
                className="w-7 h-7 flex items-center justify-center border border-gray-600 rounded-full text-gray-600"
                onClick={() => setBedrooms((prev) => Math.max(0, prev - 1))}
              >
                -
              </button>
              <span className="text-gray-800 font-semibold">{bedrooms}</span>
              <button
                className="w-7 h-7 flex items-center justify-center border border-gray-600 rounded-full text-gray-600"
                onClick={() => setBedrooms((prev) => prev + 1)}
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={handleFindProperty}
            disabled={!location && !type && bedrooms === 0}
            className={`greenbtn w-full lg:w-sm text-white px-6 py-2 md:py-8 rounded-lg lg:rounded-r-lg font-semibold mt-4 lg:mt-0 ${
              !location && !type && bedrooms === 0
                ? "opacity-80 cursor-not-allowed"
                : ""
            }`}
          >
            Find Property
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;