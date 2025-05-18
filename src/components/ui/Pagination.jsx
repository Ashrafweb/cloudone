
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Lucide icons

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center items-center gap-4 mt-10">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`flex items-center justify-center gap-2 px-4 py-2 w-30 rounded-lg font-medium transition 
          ${currentPage === 1
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-gray-900 text-white hover:bg-gray-700'}`}
        aria-label="Previous page"
      >
        <ChevronLeft size={18} />
        Previous
      </button>

      <span className="text-sm sm:text-base text-gray-700">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`flex items-center justify-center gap-2 px-4 py-2 w-30 rounded-lg font-medium transition 
          ${currentPage === totalPages
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-gray-900 text-white hover:bg-gray-700'}`}
        aria-label="Next page"
      >
        Next
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

export default Pagination;
