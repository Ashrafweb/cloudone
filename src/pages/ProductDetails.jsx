import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById } from '../store/productSlice';
import { addToCart } from '../store/cartSlice';
import { CircleChevronLeft } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedProduct: product, loading, error } = useSelector((state) => state.products);
 const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  if (loading) return <div className="text-center p-10">Loading...</div>;
  if (error) return <div className="text-center p-10 text-red-600">{error}</div>;
 if (!product) return <div className="text-center p-10">Loading...</div>;

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-left">
         <button
        onClick={() => navigate(-1)}
        className="mb-6 inline-flex items-center gap-2 text-gray-900  transition duration-200 cursor-pointer hover:text-gray-600"
        aria-label="Go back"
      >
        <CircleChevronLeft className="w-6 h-6" />
        <span className="text-sm sm:text-base font-medium">Back</span>
      </button>
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Product Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-64 sm:w-80 md:w-full max-h-[500px] object-contain"
          />
        </div>

        {/* Product Info */}
        <section className="w-full md:w-1/2 space-y-4">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 leading-tight">
            {product.title}
          </h1>
          <p className="text-3xl text-gray-600 font-bold">${product.price}</p>
          <p className="text-gray-700 text-sm leading-relaxed">{product.description}</p>

          <p className="text-sm text-gray-500 mt-2">
            <span className="font-medium text-gray-700">Category:</span> {product.category}
          </p>
          <p className="text-sm text-yellow-500">Rating: {product.rating?.rate} / 5</p>

          <button
            onClick={() => dispatch(addToCart(product))}
            className="mt-4 bg-gray-900  text-white px-7 py-2 rounded-3xl border  hover:bg-white cursor-pointer hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition text-sm sm:text-base"
          >
            Add to Cart
          </button>
        </section>
      </div>
    </main>
  );
};

export default ProductDetails