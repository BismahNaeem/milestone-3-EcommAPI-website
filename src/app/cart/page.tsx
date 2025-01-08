'use client'
import { useCart } from '@/app/context/cardcontext';
import Image from 'next/image';

export default function CartPage() {
  const { cart, removeFromCart } = useCart(); // Use the context hook to get cart data

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Shopping Cart</h1>
      {cart.length > 0 ? (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-start bg-white shadow-md rounded-lg p-4 gap-4"
            >
              {/* Product Image */}
              <Image
                src={item.image}
                alt={item.title}
                height={500}
                width={500}
                className="w-24 h-24 object-contain rounded-md"
              />
              {/* Product Details */}
              <div className="flex flex-col justify-between flex-1">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-600 text-sm">${item.price}</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 mt-6">Your cart is empty.</p>
      )}
    </div>
  );
}