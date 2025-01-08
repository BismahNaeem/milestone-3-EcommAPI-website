"use client"
import { FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";
import { useCart } from "@/app/context/cardcontext";  // Import the useCart hook for cart context
import Link from 'next/link';  // Import Link for navigation

export default function Header() {
  const { cart } = useCart();  // Get the cart from context

  return (
    <header className="lg:flex items-center justify-between bg-gray-800 shadow-md px-4 py-3">
      {/* Logo */}
      <div className="ml-[15rem] lg:ml-0 text-2xl font-bold text-white">
        BN<span className="text-white">.</span>
      </div>

      {/* Navigation Links */}
      <nav className="md:flex space-x-6 mt-2 ml-10 lg:ml-0 lg:mt-4">
        <Link href="/" className="text-white hover:text-blue-600 font-medium">Home</Link>
        <Link href="/electronics" className="text-white hover:text-blue-600 font-medium">Electronics</Link>
        <Link href="/women" className="text-white hover:text-blue-600 font-medium">Women's Collection</Link>
        <Link href="/mens" className="text-white hover:text-blue-600 font-medium">Men's Collection</Link>
      </nav>

      {/* Icons */}
      <div className="flex items-center space-x-4 ml-[13rem] lg:ml-0 mt-4 lg:mt-0">
        {/* Basket Icon with Item Count */}
        <Link href="/cart" passHref>
          <button className="text-white hover:text-blue-600 relative">
            <FaShoppingCart className="w-5 h-5" />
            {/* Show item count */}
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </button>
        </Link>
        <button className="text-white hover:text-blue-600">
          <FaHeart className="w-5 h-5" />
        </button>
        <button className="text-white hover:text-blue-600">
          <FaUser className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}