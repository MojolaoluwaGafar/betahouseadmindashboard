import React, { useState } from "react";
import PropertyCard from "./PropertyCard";
import { propertiesData } from "../Components/data";
import { BsFilterRight } from "react-icons/bs";

const FeaturedProperties = () => {
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 9; // Change this based on how many per page

  // Sorting function
  const sortedProperties = [...propertiesData].sort((a, b) => {
    if (sortOption === "priceLowHigh") return a.price - b.price;
    if (sortOption === "priceHighLow") return b.price - a.price;
    if (sortOption === "bedrooms") return b.bedrooms - a.bedrooms;
    return 0; // Default order
  });

  // Pagination Logic
  const totalPages = Math.ceil(sortedProperties.length / propertiesPerPage);
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = sortedProperties.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

  // Generate Page Numbers with Dynamic Range
  const getPageNumbers = () => {
    let pages = [];

    if (totalPages <= 5) {
      // Show all pages if 5 or fewer
      pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      // Always include first page
      pages.push(1);

      // Show "..." when skipping pages
      if (currentPage > 3) pages.push("...");

      // Add middle range
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);

      // Show "..." if there are more pages after
      if (currentPage < totalPages - 2) pages.push("...");

      // Always include last page
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <section className="mx-auto p-10 bg-white">
      {/* Filters & Sorting */}
      <div className="flex flex-wrap gap-3 mb-4 items-center justify-between">
        <div className="flex items-center gap-1">
          <BsFilterRight size={20} />
          <span>More Filters</span>
          <p className="ms-3">
            Showing {indexOfFirstProperty + 1}-
            {Math.min(indexOfLastProperty, propertiesData.length)} of{" "}
            {propertiesData.length} results
          </p>
        </div>
        {/* Sort Dropdown */}
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className=""
        >
          <option value="default">Sort by: Default</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
          <option value="bedrooms">Most Bedrooms</option>
        </select>
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {currentProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6 space-x-2 items-center">
        {/* Previous Button */}
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-2 rounded-md ${
            currentPage === 1
              ? "text-gray-400 cursor-not-allowed"
              : "text-gray-600 hover:text-black"
          }`}
        >
          &lt;
        </button>

        {/* Page Numbers with "..." */}
        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === "number" && setCurrentPage(page)}
            className={`px-4 py-2 rounded-md font-medium ${
              currentPage === page
                ? "bg-green-600 text-white"
                : "text-gray-600 hover:text-black"
            }`}
            disabled={page === "..."}
          >
            {page}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-2 rounded-md ${
            currentPage === totalPages
              ? "text-gray-400 cursor-not-allowed"
              : "text-gray-600 hover:text-black"
          }`}
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default FeaturedProperties;
