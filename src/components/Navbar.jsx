import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ShoppingCart, Menu, X } from 'lucide-react';

const Navbar = ({onCartClick}) => {
  const totalItems = useSelector((state) => state.cart.totalItems);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-black tracking-tight">
            <a href="/" className="hover:opacity-80 transition">ClouDStore</a>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-6 text-gray-700 text-base font-medium">
            <li><a href="/" className="hover:text-gray-600 transition text-lg font-semibold">Home</a></li>
            <li><a href="/" className="hover:text-gray-600 transition text-lg font-semibold">Products</a></li>
          </ul>

          {/* Right Buttons */}
          <div className="flex items-center space-x-4">
            {/* Cart Button */}
            <button
             onClick={onCartClick}
              type="button"
              aria-label="View cart"
              className="relative inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-white hover:bg-gray-600 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition"
            >
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Hamburger for Mobile */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="md:hidden text-gray-600 hover:text-gray-600 focus:outline-none"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Sidebar Drawer */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <span className="text-lg font-bold text-gray-600">Menu</span>
          <button
            onClick={() => setIsSidebarOpen(false)}
            aria-label="Close menu"
            className="text-gray-600 hover:text-red-500"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="p-4 space-y-4 text-gray-700 font-medium">
          <a href="/" className="block hover:text-gray-600">Home</a>
          <a href="/" className="block hover:text-gray-600">Products</a>
        </nav>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-10 z-40"
          onClick={() => setIsSidebarOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navbar;
