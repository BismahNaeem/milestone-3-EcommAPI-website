import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li><a href="/" className="hover:text-gray-400">Home</a></li>
              <li><a href="/electronics" className="hover:text-gray-400">Electronics</a></li>
              <li><a href="/womens" className="hover:text-gray-400">Womens Collection</a></li>
              <li><a href="/mens" className="hover:text-gray-400">Mens Collection</a></li>
              <li><a href="/contact" className="hover:text-gray-400">Contact Us</a></li>
            </ul>
          </div>

          {/* About Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">We provide a wide variety of products to meet your shopping needs. Explore discover and shop with us</p>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <form action="#" method="POST" className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 w-full rounded-md text-black"
                required
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-200">
                <FaFacebookF size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>&copy; 2024 Your Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;