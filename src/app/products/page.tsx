"use client";

import NavBar from "@/components/NavBar";
import AboutUs from "@/components/Contact"
import Footer from "@/components/Footer";
import React from "react";
import Contact from "@/components/ContactUs";

const Product = () => {
  // Define an array of product objects
  const products = [
    {
      id: 1,
      name: "Library Stool Chair",
      price: 20,
      image: "/images/line 1.png", 
      tag: "New",
    },
    {
      id: 2,
      name: "Library Stool Chair",
      price: 20,
      originalPrice: 30,
      image: "/images/line 2.jpeg", 
      tag: "Sales",
    },
    {
      id: 3,
      name: "Library Stool Chair",
      price: 20,
      image: "/images/line 3.png", 
    },
    {
      id: 4,
      name: "Library Stool Chair",
      price: 20,
      image: "/images/line 4.png", 
    },
    {
      id: 5,
      name: "Library Stool Chair",
      price: 20,
      image: "/images/tap a2.png", 
      tag: "New",
    },
    {
      id: 6,
      name: "Library Stool Chair",
      price: 20,
      originalPrice: 30,
      image: "/images/grey.png", 
      tag: "Sales",
    },
    {
      id: 7,
      name: "Library Stool Chair",
      price: 20,
      image: "/images/black grey.png", 
    },
    {
      id: 8,
      name: "Library Stool Chair",
      price: 20,
      image: "/images/line 1.png", 
    },
    {
      id: 9,
      name: "Library Stool Chair",
      price: 20,
      image: "/images/grey wood2.png", 
      tag: "New",
    },
    {
      id: 10,
      name: "Library Stool Chair",
      price: 20,
      originalPrice: 30,
      image: "/images/line 2.jpeg", 
      tag: "Sales",
    },
    {
      id: 11,
      name: "Library Stool Chair",
      price: 20,
      image: "/images/line 3.png", 
    },
    {
      id: 12,
      name: "Library Stool Chair",
      price: 20,
      image: "/images/line 4.png", 
    },
  ];

  return (
    <>
      <NavBar /> {/* Add NavBar at the top */}
      <section className="p-8">
        <h1 className="text-2xl font-bold mb-6">All Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <div className="relative w-full h-48 group">
                {/* Product Image with hover effect */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-md group-hover:scale-110 group-hover:opacity-80 transition-all duration-300"
                />
                {/* Tag */}
                {product.tag && (
                  <span
                    className={`absolute top-2 left-2 px-3 py-1 text-sm font-semibold rounded-full ${
                      product.tag === "New"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {product.tag}
                  </span>
                )}
              </div>
              {/* Product Name */}
              <h2 className="text-lg font-semibold mt-4">{product.name}</h2>
              {/* Product Price */}
              <p className="text-gray-700 font-medium">
                ${product.price}
                {product.originalPrice && (
                  <span className="line-through text-gray-500 ml-2">
                    ${product.originalPrice}
                  </span>
                )}
              </p>
              {/* Add to Cart Button */}
              <button className="mt-4 bg-teal-500 text-white px-4 py-2 rounded-md shadow hover:bg-teal-600 transition w-full">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
      <Contact /> {/* Add About section */}
      <Footer /> {/* Add Footer section */}
    </>
  );
};

export default Product;
