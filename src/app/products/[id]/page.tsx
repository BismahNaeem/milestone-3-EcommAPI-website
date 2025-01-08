'use client';  // Make sure this is at the top to enable client-side hooks

//import { useRouter } from 'next/navigation';  // Correct import for app directory
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { useCart } from '@/app/context/cardcontext';  // Correct import for your CartContext

interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
  category: string;
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);  // State to store product details
 // const router = useRouter();  // Correct way to use router in the app directory
  const { addToCart } = useCart();  // Access the addToCart function from context

  // Fetch product details after the page mounts (client-side)
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
      const productData = await response.json();
      setProduct(productData);
    };

    fetchProduct();
   }, [params.id]);  // Fetch again when the id changes

   if (!product) {
     return <p>Loading product details...</p>;  // This will be shown until the product data is fetched
   }

  const handleAddToCart = () => {
    // Add the current product to the cart
    addToCart(product); // This will add the current product to the cart context
    alert('Item added to cart!'); // Optional: Display a message to the user after adding to cart
  };

  return (
    <div className="max-w-4xl mx-auto p-5 bg-white shadow-md rounded-lg mt-20">
      <div className="flex gap-8">
        {/* Left: Product Image */}
        <div className="w-1/2">
          <Image
            src={product.image}
            alt={product.title}
            height={500}
            width={500}
            
            className="w-full h-auto object-contain rounded-md"
          />
        </div>

        {/* Right: Product Details */}
        <div className="w-1/2 space-y-4">
          <h1 className="text-2xl font-bold">{product.title}</h1>

          {/* Ratings and Stars */}
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className="text-gray-600 text-sm">(4.5/5 based on 120 reviews)</p>
          </div>

          {/* Description */}
          <p className="text-gray-700">{product.description}</p>

          {/* Price */}
          <p className="text-xl font-bold text-gray-800">Price: ${product.price}</p>

          {/* Category */}
          <p className="text-sm text-gray-500">Category: {product.category}</p>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="px-6 py-3 bg-blue-600 text-white rounded-md mt-4"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}