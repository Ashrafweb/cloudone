import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/productSlice';
import Pagination from '../components/ui/Pagination';
import ProductCard from '../components/ProductCard';
import Loader from '../components/ui/Loader';
const PRODUCTS_PER_PAGE = 8;

const ProductsPage = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(state => state.products);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

    const totalPages = Math.ceil(items.length / PRODUCTS_PER_PAGE);

  const paginatedItems = items.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );
 if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <section>
        <header className="mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 tracking-tight">
            Our Products
          </h1>
          <p className="text-gray-600 mt-2 text-base sm:text-lg">
            Browse through a collection of top-quality items from FakeStoreAPI.
          </p>
        </header>

        {loading ? (
          <p className="text-lg font-medium text-blue-600">Loading products...</p>
        ) : error ? (
          <p className="text-lg text-red-600">Error: {error}</p>
        ) : (
          <div
            role="list"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
              {paginatedItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          </div>
          
        )}
         <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
      </section>
    </main>
  );
};

export default ProductsPage;
