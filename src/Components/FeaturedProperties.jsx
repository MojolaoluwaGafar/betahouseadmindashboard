import React, { useState, useEffect } from "react";
import PropertyCard from "./PropertyCard";
import { propertiesData } from "../Components/data";
import { BsFilterRight } from "react-icons/bs";

const FeaturedProperties = ({ searchParams }) => {
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 9;

  // Filter properties based on searchParams from HeroSection
  const filteredProperties = propertiesData.filter((property) => {
    const matchesLocation = searchParams?.location
      ? property.location
          .toLowerCase()
          .includes(searchParams.location.toLowerCase())
      : true;
    const matchesType = searchParams?.type
      ? property.type.toLowerCase().includes(searchParams.type.toLowerCase())
      : true;
    const matchesPrice =
      searchParams?.minPrice && searchParams?.maxPrice
        ? property.price >= searchParams.minPrice &&
          property.price <= searchParams.maxPrice
        : true;
    return matchesLocation && matchesType && matchesPrice;
  });

  // Sorting function
  const sortedProperties = [...filteredProperties].sort((a, b) => {
    if (sortOption === "priceLowHigh") return a.price - b.price;
    if (sortOption === "priceHighLow") return b.price - a.price;
    if (sortOption === "bedrooms") return b.bedrooms - a.bedrooms;
    return 0;
  });

  // Pagination Logic
  const totalPages = Math.ceil(sortedProperties.length / propertiesPerPage);
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = sortedProperties.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

  // Dynamic Page Numbers
  const getPageNumbers = () => {
    let pages = [];
    if (totalPages <= 5) {
      pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  // Scroll to Featured Properties on search
  useEffect(() => {
    const featuredSection = document.getElementById("featured-properties");
    if (searchParams && featuredSection) {
      featuredSection.scrollIntoView({ behavior: "smooth" });
    }
  }, [searchParams]);

  return (
    <section id="featured-properties" className="mx-auto p-10 bg-white">
      <div className="flex flex-wrap gap-3 mb-4 items-center justify-between">
        <div className="flex items-center gap-1">
          <BsFilterRight size={20} />
          <span>More Filters</span>
          <p className="ms-3">
            Showing {indexOfFirstProperty + 1}-
            {Math.min(indexOfLastProperty, sortedProperties.length)} of{" "}
            {sortedProperties.length} results
          </p>
        </div>
        <div className="flex items-center gap-2">
          <label className="mr-2">Sort By:</label>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border rounded-md px-2 py-1"
          >
            <option value="default">Default</option>
            <option value="priceLowHigh">Price: Low to High</option>
            <option value="priceHighLow">Price: High to Low</option>
            <option value="bedrooms">Most Bedrooms</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {currentProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      {/* Pagination Always Visible */}
      <div className="flex justify-center mt-6 space-x-2 items-center">
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
