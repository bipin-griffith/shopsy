// src/pages/ProductDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import ProductsData from "../data/productData";
import { FaStar } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = ProductsData.find((p) => p.id === parseInt(id));

  if (!product) return <div className="text-center mt-20">Product not found</div>;

  return (
    <div className="container mx-auto mt-10 mb-20 px-4">
      <div className="flex flex-col md:flex-row gap-10">
        <img src={product.img} alt={product.title} className="w-full md:w-[400px] rounded-lg object-cover" />
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-bold">{product.title}</h2>
          <p className="text-sm text-gray-500">{product.color}</p>
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-400" />
            <span>{product.rating}</span>
          </div>
          <p className="text-primary text-2xl font-semibold">${product.price}</p>
          <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, unde!</p>
          <button
            onClick={() => dispatch(addToCart(product))}
            className="bg-primary text-white px-6 py-2 rounded-full mt-4"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
