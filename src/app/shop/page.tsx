"use client";

import React from "react";
import NavBar from "@/components/NavBar"; // Ensure NavBar path is correct
import About from "@/components/About";
import Footer from "@/components/Footer"; // Ensure Footer path is correct

const ProductGrid = () => {
  return (
    <>
      {/* NavBar Section */}
      <NavBar />


      {/* Our Products Section */}
      <section className="p-8">
        <h1 className="text-2xl font-bold mb-6">Shop Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "/images/line 1.png",
            "/images/line 2.jpeg",
            "/images/line 3.png",
            "/images/line 4.png",
            "/images/grey2.png",
            "/images/grey.png",
            "/images/black.png",
            "/images/tap a2.png",
          ].map((imagePath, idx) => (
            <div
              key={idx}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <span
                className="inline-block px-3 py-1 text-sm font-semibold rounded-full mb-4 bg-red-100 text-red-800"
              >
                Sale
              </span>
              <img
                src={imagePath}
                alt={`Product ${idx + 1}`}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-lg font-semibold mb-2">Library Stool Chair</h2>
              <p className="text-gray-700 font-medium">
                $20
                <span className="line-through text-gray-500 ml-2">$30</span>
              </p>
              <button className="mt-4 bg-teal-500 text-white px-4 py-2 rounded-md shadow hover:bg-teal-600 transition w-full">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

    
      <About />
      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default ProductGrid;
