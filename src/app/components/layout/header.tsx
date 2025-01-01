import { FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";

export default function Header() {
  return (
    <header className=" lg:flex items-center justify-between bg-gray-800 shadow-md px-4 py-3 ">
      {/* Logo */}
      <div className=" ml-[15rem] lg:ml-0  text-2xl font-bold text-white">
        BN<span className="text-white ">.</span>
      </div>

      {/* Navigation Links */}
      <nav className=" md:flex space-x-6   mt-2 ml-10 lg:ml-0  lg:mt-4  ">
        <a href="/" className="text-white hover:text-blue-600 font-medium">
          Home
        </a>
        <a href="/electronics" className="text-white hover:text-blue-600 font-medium">
          electronics
        </a>
        <a href="/women" className="text-white hover:text-blue-600 font-medium">
          womens collection
        </a>
        <a href="/mens" className="text-white  hover:text-blue-600 font-medium">
          mens Collection
        </a>
      </nav>

      {/* Icons */}
      <div className="flex items-center space-x-4 ml-[13rem] lg:ml-0 mt-4 lg:mt-0 ">
        <button className="text-white hover:text-blue-600">
          <FaShoppingCart className="w-5 h-5" />
        </button>
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