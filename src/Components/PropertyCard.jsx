import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoBedOutline } from "react-icons/io5";
import { LiaBathSolid } from "react-icons/lia";
import { BsCameraVideoFill, BsImages, BsArrowLeftRight } from "react-icons/bs";
import { GrLink } from "react-icons/gr";
import { FiShare2 } from "react-icons/fi";
import { HiOutlineHeart } from "react-icons/hi";
import { TbArrowsDiff } from "react-icons/tb";

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white relative rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <div className="relative w-full h-60">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover"
        />

        <span className="absolute top-4 left-4 bg-[#3D9970] text-white text-sm font-semibold h-8 w-20 flex items-center justify-center rounded-md">
          Featured
        </span>

        <span className="absolute top-4 right-4 bg-[#D3D3D3B2] text-white text-sm font-semibold h-8 w-20 flex items-center justify-center rounded-md">
          {property.type}
        </span>

        <div className="absolute bottom-4 right-4 flex gap-2">
          <div className="bg-[#878787B2] text-white p-2 rounded-md">
            <GrLink size={18} />
          </div>
          <div className="bg-[#878787B2] text-white p-2 rounded-md">
            <BsCameraVideoFill size={18} />
          </div>
          <div className="bg-[#878787B2] text-white p-2 rounded-md">
            <BsImages size={18} />
          </div>
        </div>
      </div>

      <div className="p-5 border-[#DDD8D8] border-t-0">
        <p className="text-xl font-bold">{property.name}</p>
        <div className="flex items-center text-gray-600 text-sm mt-1">
          <FaLocationDot className="text-lg text-gray-500 mr-1" />
          {property.location}
        </div>

        <div className="flex gap-[20px] lg:gap-[100px] items-center text-gray-600 text-sm mt-3">
          <span className="flex items-center gap-1">
            <IoBedOutline className="text-lg" />
            {property.bedrooms} Bedrooms
          </span>
          <span className=" flex items-center gap-1">
            <LiaBathSolid className="text-lg" />
            {property.bathrooms} Bathrooms
          </span>
        </div>

        <hr className="border-gray-300 my-4" />

        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold text-gray-900">
            {property.price}
          </p>

          <div className="flex gap-3 text-gray-700">
            <TbArrowsDiff
              className="cursor-pointer hover:text-gray-900"
              size={22}
            />
            <FiShare2
              className="cursor-pointer hover:text-green-900"
              size={20}
            />
            <HiOutlineHeart
              className="cursor-pointer hover:text-red-600"
              size={22}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
