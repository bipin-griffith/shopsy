import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import productsData from "../data/productData"; // Adjust the path to your actual product data
import { FaMapMarkerAlt, FaClock, FaUsers, FaStar } from "react-icons/fa";

const AllProducts = () => {
  const [filters, setFilters] = useState({
    destination: "All",
    category: "All",
    duration: "All",
    price: [0, 10000],
  });

  const [filteredProducts, setFilteredProducts] = useState(productsData);

  // Apply filters
  useEffect(() => {
    let filtered = productsData;

    // Destination
    if (filters.destination !== "All") {
      filtered = filtered.filter((p) => p.destination === filters.destination);
    }

    // Category
    if (filters.category !== "All") {
      filtered = filtered.filter((p) => p.category === filters.category);
    }

    // Duration
    if (filters.duration === "1-7 days") {
      filtered = filtered.filter((p) => p.duration <= 7);
    } else if (filters.duration === "8-14 days") {
      filtered = filtered.filter((p) => p.duration >= 8 && p.duration <= 14);
    } else if (filters.duration === "15+ days") {
      filtered = filtered.filter((p) => p.duration >= 15);
    }

    // Price
    filtered = filtered.filter(
      (p) => p.price >= filters.price[0] && p.price <= filters.price[1]
    );

    setFilteredProducts(filtered);
  }, [filters]);

  const destinations = ["All", "Iraq", "Saudi Arabia", "Iran"];
  const categories = ["All", "Hajj", "Umrah", "Ziyarat"];
  const durations = ["All", "1-7 days", "8-14 days", "15+ days"];

  return (
    <div className="flex flex-col md:flex-row gap-8 container mx-auto px-4 py-10">
      {/* Sidebar */}
      <div className="md:w-1/4 bg-gray-50 rounded-xl p-6 shadow">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-bold text-lg">Filters</h2>
          <button
            className="text-sm text-blue-600"
            onClick={() =>
              setFilters({
                destination: "All",
                category: "All",
                duration: "All",
                price: [0, 10000],
              })
            }
          >
            Reset All
          </button>
        </div>

        <div className="mb-6">
          <h3 className="font-medium mb-2">Destination</h3>
          {destinations.map((dest) => (
            <label key={dest} className="block mb-1">
              <input
                type="radio"
                name="destination"
                checked={filters.destination === dest}
                onChange={() =>
                  setFilters((prev) => ({ ...prev, destination: dest }))
                }
              />{" "}
              {dest}
            </label>
          ))}
        </div>

        <div className="mb-6">
          <h3 className="font-medium mb-2">Category</h3>
          {categories.map((cat) => (
            <label key={cat} className="block mb-1">
              <input
                type="radio"
                name="category"
                checked={filters.category === cat}
                onChange={() =>
                  setFilters((prev) => ({ ...prev, category: cat }))
                }
              />{" "}
              {cat}
            </label>
          ))}
        </div>

        <div className="mb-6">
          <h3 className="font-medium mb-2">Duration</h3>
          {durations.map((dur) => (
            <label key={dur} className="block mb-1">
              <input
                type="radio"
                name="duration"
                checked={filters.duration === dur}
                onChange={() =>
                  setFilters((prev) => ({ ...prev, duration: dur }))
                }
              />{" "}
              {dur}
            </label>
          ))}
        </div>

        <div>
          <h3 className="font-medium mb-2">Price Range</h3>
          <input
            type="range"
            min={1000}
            max={8000}
            step={100}
            value={filters.price[1]}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                price: [prev.price[0], parseInt(e.target.value)],
              }))
            }
            className="w-full"
          />
          <div className="flex justify-between text-sm mt-1 text-gray-500">
            <span>${filters.price[0]}</span>
            <span>${filters.price[1]}</span>
          </div>
        </div>
      </div>

      {/* Product Cards */}
      <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative">
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              {product.featured && (
                <span className="absolute top-2 left-2 bg-yellow-400 text-xs font-semibold text-white px-2 py-1 rounded-full">
                  Featured
                </span>
              )}
              <span className="absolute top-2 right-2 bg-gray-900 text-white text-sm px-3 py-1 rounded-full">
                ${product.price}
              </span>
            </div>
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <div className="text-sm text-gray-500 space-y-1">
                <p className="flex items-center gap-1">
                  <FaMapMarkerAlt className="text-primary" />
                  {product.destination}
                </p>
                <p className="flex items-center gap-1">
                  <FaClock className="text-primary" />
                  {product.duration} days
                </p>
                <p className="flex items-center gap-1">
                  <FaUsers className="text-primary" />
                  {product.groupSize}
                </p>
              </div>
              <p className="text-sm text-gray-600">
                {product.description?.slice(0, 100)}...
              </p>
              <div className="flex justify-between items-center mt-2">
                <div className="flex items-center text-yellow-500 text-sm font-medium">
                  <FaStar /> <span className="ml-1">{product.rating}</span>
                </div>
                <div className="flex gap-2">
                  <Link
                    to={`/product/${product.id}`}
                    className="text-sm px-3 py-1 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition"
                  >
                    View Details
                  </Link>
                  <Link
                    to="/contact"
                    className="text-sm px-3 py-1 bg-primary text-white rounded-full hover:bg-opacity-90 transition"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        {filteredProducts.length === 0 && (
          <p className="text-gray-500 col-span-full text-center">No tours found.</p>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
