"use client";
import React, { useEffect, useState } from "react";
import sanityClient from "@sanity/client"; // Sanity client moved to a separate file
import Image from "next/image";

const sanity = sanityClient({
  projectId: "r79i5c8", // Ensure your Sanity project ID is correct
  dataset: "production", // Ensure your dataset name is correct
  apiVersion: "2023-01-01", // Ensure your API version is correct
  useCdn: true,
});

interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  imageUrl: string;
  productImage: {
    assets: {
      _ref: string;
    };
  };
  tags: string[];
}

const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Fetch products from Sanity
  const fetchProducts = async () => {
    try {
      const query = `*[_type == "product"] {
        _id,
        title,
        price,
        description,
        discountPercentage,
        "imageUrl": productImage.assets->url,
        tags
      }`;
      const data = await sanity.fetch(query);
      setProducts(data);
      setError(null); // Reset error on successful fetch
    } catch (err: any) {
      console.error("Error fetching products:", err);
      if (err.message.includes("NetworkError")) {
        setError("Network error occurred. Please check your connection.");
      } else {
        setError("Failed to load products. Please try again later.");
      }
    }
  };

  // Add product to cart
  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.title} has been added to your cart!`);
  };

  // Remove product from cart by _id
  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== id));
  };

  // Truncate description to a specific length
  const truncateDescription = (description: string, maxLength = 100): string => {
    return description.length > maxLength
      ? `${description.slice(0, maxLength)}...`
      : description;
  };

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl text-center text-slate-800 mt-4 mb-4">
        Products From API Data
      </h2>

      {error ? (
        <p className="text-red-600 text-center">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id} // Use only the unique _id as the key
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={300}
                height={300}
                className="w-full h-48 object-cover rounded-md"
              
              />
              <div className="mt-4">
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p className="text-slate-800 mt-2 text-sm">
                  {truncateDescription(product.description)}
                </p>
                <div className="mt-4">
                  <p className="text-slate-800 font-bold">${product.price}</p>
                  {product.discountPercentage > 0 && (
                    <p className="text-sm text-green-600">
                      {product.discountPercentage}% OFF
                    </p>
                  )}
                </div>

                <div className="mt-2 flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={`${product._id}-${tag}`} // Ensure unique combination of _id and tag
                      className="bg-gray-200 text-gray-700 text-xs py-1 px-2 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => addToCart(product)}
                  className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}

          <div className="mt-8 bg-slate-100 p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-black text-red-800">Cart Summary</h2>
            {cart.length > 0 ? (
              <ul className="space-y-4">
                {cart.map((item) => (
                  <li
                    key={item._id} // Use unique _id for cart items
                    className="flex justify-between items-center bg-yellow-50 shadow-sm p-4 rounded-md"
                  >
                    <div>
                      <p className="font-medium text-slate-900">{item.title}</p>
                      <p className="text-sm text-blue-600">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={50}
                      height={50}
                      className="rounded-md"
                    />
                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="ml-4 text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-black text-center">
                Your Cart Is Empty. Please Add Products.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCards;
