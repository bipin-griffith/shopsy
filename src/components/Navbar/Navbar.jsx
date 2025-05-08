import React from "react";
import Logo from "../../assets/logo.png";
import DarkMode from "./DarkMode";
import { Link } from "react-router-dom";

const Menu = [
  { id: 1, name: "Home", link: "/", icon: "fas fa-home" },
  { id: 2, name: "Services", link: "/services", icon: "fas fa-star" },
  { id: 3, name: "Products", link: "/products", icon: "fas fa-tags" },
  { id: 4, name: "About Us", link: "/about", icon: "fas fa-users" },
  { id: 5, name: "Contact Us", link: "/contact", icon: "fas fa-envelope" },
];

const DropdownLinks = [
  { id: 1, name: "Trending Products", link: "/", icon: "fas fa-fire" },
  { id: 2, name: "Best Selling", link: "/", icon: "fas fa-chart-line" },
  { id: 3, name: "Top Rated", link: "/", icon: "fas fa-thumbs-up" },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <a
            href="/"
            className="font-bold text-2xl sm:text-3xl flex items-center gap-2"
          >
            <img src={Logo} alt="Logo" className="w-16 h-22" />
            Forest Veda
          </a>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-3 py-1 focus:outline-none focus:border-primary dark:border-gray-600 dark:bg-gray-800"
              />
              <i className="fas fa-search absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 group-hover:text-primary" />
            </div>

            {/* Order Button */}
            <button
              onClick={handleOrderPopup}
              className="bg-gradient-to-r from-primary to-secondary text-white py-1 px-4 rounded-full flex items-center gap-2 group transition-all duration-200"
            >
              <Link to={`/cart`}>
                <span className="hidden group-hover:inline-block transition-all duration-200">
                  Order
                </span>
              </Link>
              <i className="fas fa-shopping-cart text-xl" />
            </button>

            {/* Dark Mode Toggle */}
            <DarkMode />
            <Link
              to="/login"
              className="text-gray-700 dark:text-white hover:text-primary transition"
              title="Login"
            >
              <i className="fas fa-user text-xl" />
            </Link>
          </div>
        </div>
      </div>

      {/* lower Navbar */}
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4 py-2">
          {Menu.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                className="inline-flex items-center gap-2 px-4 hover:text-primary transition-colors duration-200"
              >
                <i className={item.icon}></i>
                {item.name}
              </a>
            </li>
          ))}

          {/* Dropdown */}
          <li className="relative group cursor-pointer">
            <a href="#" className="flex items-center gap-1 px-4 py-2">
              Trending Products
              <i className="fas fa-caret-down transition-transform duration-200 group-hover:rotate-180" />
            </a>
            <div className="absolute hidden group-hover:block bg-white dark:bg-gray-800 text-black dark:text-white shadow-md rounded-md p-2 w-48 z-50">
              <ul>
                {DropdownLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.link}
                      className="flex items-center gap-2 p-2 rounded-md hover:bg-primary/20 dark:hover:bg-white/10 transition-colors"
                    >
                      <i className={link.icon}></i>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
