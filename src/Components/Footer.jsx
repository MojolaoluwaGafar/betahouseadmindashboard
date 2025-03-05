import React from "react";
import { MdLocationOn } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footerbg text-white py-10 px-5">
      <div className="container mx-auto flex-row lg:flex items-center justify-evenly">
        <div className="">
          <div className="flex items-center gap-2 mb-3">
            <span className="logobg rounded-full h-8 w-8 flex items-center justify-center font-extrabold">
              BH
            </span>
            <h1 className="text-xl font-bold">BetaHouse</h1>
          </div>
          <p className="text-sm">
            Discover, rent, and find your ideal home hassle-free with BetaHouse.
            Take control of your rental journey today!
          </p>
          <div className="mt-3 space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <MdLocationOn className="text-green-400" />
              95 Tinubu Estate, Lekki, Lagos
            </p>
            <p className="flex items-center gap-2">
              <BsFillTelephoneFill className="text-green-400" />
              +234 675 8935 675
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-green-400" />
              support@rentbetahouse.com
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-green-400 cursor-pointer">
              <a href="/">Home</a>
            </li>
            <li className="hover:text-green-400 cursor-pointer">Properties</li>
            <li className="hover:text-green-400 cursor-pointer">About</li>
            <li className="hover:text-green-400 cursor-pointer">Contact us</li>
            <li className="hover:text-green-400 cursor-pointer">Blog</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">More</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-green-400 cursor-pointer">Agents</li>
            <li className="hover:text-green-400 cursor-pointer">
              Affordable Houses
            </li>
            <li className="hover:text-green-400 cursor-pointer">FAQ’s</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Popular Searches</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-green-400 cursor-pointer">
              Apartment for Sale
            </li>
            <li className="hover:text-green-400 cursor-pointer">
              Apartment for Rent
            </li>
            <li className="hover:text-green-400 cursor-pointer">
              3 Bedroom Flat
            </li>
            <li className="hover:text-green-400 cursor-pointer">Bungalow</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm flex items-center justify-evenly">
        <p>© 2025 BetaHouse | Designed by Michael.fig</p>
        <p>
          <a href="#" className="underline hover:text-green-400">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
