import React from "react";
import { FaLocationDot } from "react-icons/fa6";


const PopularPropertyCard = ({ property }) => {
  return (
    <div className="relative w-full min-w-[280px] max-w-[320px] rounded-lg overflow-hidden">
      {/* Property Image */}
      <div className="relative w-full h-[300px]">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover rounded-lg"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
      </div>

      {/* Property Details */}
      <div className="absolute bottom-4 left-4 right-4 text-white">
        <h3 className="text-lg font-semibold">{property.name}</h3>
        <p className="text-xl font-bold">{property.price}</p>

        {/* Bed & Bath Info */}
        <div className="flex gap-3 text-sm text-gray-200 mt-1">
          <span className="border-r pe-2">{property.bedrooms}</span>
          <span className="border-r pe-2">{property.bathrooms}</span>
          <span className="">{property.landarea}</span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1 text-sm text-gray-300 mt-1">
          <FaLocationDot size={14} />
          <span>{property.location}</span>
        </div>
      </div>
    </div>
  );
};

export default PopularPropertyCard;
