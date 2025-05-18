
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();



  return (
    <article
      key={product.id}
      className="border-0 rounded-2xl bg-white shadow-xl p-4 flex flex-col transition hover:shadow-lg"
      
    >
      <a href={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          onLoad={(e) => e.currentTarget.classList.add('opacity-100')}
          className="h-40 object-contain mx-auto mb-4 transition-opacity duration-500 ease-in opacity-0"
        />
        <h2 className="text-md sm:text-lg font-semibold text-gray-900 line-clamp-2 mb-1">
          {product.title}
        </h2>
      </a>
      <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.description}</p>
      <div className="mt-auto">
        <p className="text-lg font-bold text-green-600">${product.price}</p>
        <button
          onClick={() => dispatch(addToCart(product))}
          className="w-full mt-3 bg-gray-900 hover:bg-gray-700 text-white text-sm sm:text-base font-bold cursor-pointer border rounded-3xl py-2 px-4 hover:bg-transparent hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition"
          aria-label={`Add ${product.title} to cart`}
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
