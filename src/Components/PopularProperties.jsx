import React, { useRef, useState } from "react";
import { popularPropertiesData } from "./data";
import PopularPropertyCard from "./PopularPropertyCard";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const PopularProperties = () => {
  const scrollRef = useRef(null);
  const [clickedButton, setClickedButton] = useState(null);

  // Scroll function
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8; // Scroll by 80% of the container width

      if (direction === "left") {
        scrollRef.current.scrollTo({
          left: scrollLeft - scrollAmount,
          behavior: "smooth",
        });
      } else {
        scrollRef.current.scrollTo({
          left: scrollLeft + scrollAmount,
          behavior: "smooth",
        });
      }
       setClickedButton(direction);
       setTimeout(() => setClickedButton(null), 300);
    }
  };

  return (
    <section className="py-10 relative bg-white">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center text-gray-900">
        Discover Our Popular Properties
      </h2>

      {/* Scrollable Container with Arrows */}
      <div className="relative flex items-center justify-center">
        {/* Left Scroll Button */}
        <button
          className={`absolute left-0 z-10 p-3 shadow-md rounded-full transition ${
            clickedButton === "left"
              ? "bg-green-500 text-white"
              : "bg-white text-gray-800 hover:bg-gray-200"
          }`}
          onClick={() => scroll("left")}
        >
          <FaLongArrowAltLeft size={20} />
        </button>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="mt-6 flex gap-4 overflow-x-auto px-4 scrollbar-hide scroll-smooth snap-x"
          style={{ scrollBehavior: "smooth" }}
        >
          {popularPropertiesData.map((property) => (
            <div key={property.id} className="snap-start">
              <PopularPropertyCard property={property} />
            </div>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          className={`absolute right-0 z-10 p-3 shadow-md rounded-full transition ${
            clickedButton === "right"
              ? "bg-green-500 text-white"
              : "bg-white text-gray-800 hover:bg-gray-200"
          }`}
          onClick={() => scroll("right")}
        >
          <FaLongArrowAltRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default PopularProperties;
