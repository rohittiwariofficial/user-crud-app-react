import React, { useState } from "react";
import useItem from "../../hooks/useItem";
import { Link } from "react-router-dom";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState(""); // Search query state
  const [currentPage, setCurrentPage] = useState(1); // Pagination state
  const itemsPerPage = 5; // Number of items per page

  // Pass searchQuery, currentPage, and itemsPerPage to the useItem hook
  const { items, loading, totalItems, removeItem, handleSearch } = useItem(
    null, // Home component shows all items (no item ID)
    searchQuery, // Search query
    currentPage, 
    itemsPerPage
  );

  // Calculate total pages for pagination
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Pagination handler
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-4">
      {/* Create New Item Button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Item List</h2>
        <Link
          to="/create"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105"
        >
          + Create New Item
        </Link>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by title"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value); // Update search query
            handleSearch(e.target.value); // Trigger the filtering in the hook
          }}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Item List */}
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item.id} className="p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-xl">{item.title}</h3>
              <p className="text-gray-600">{item.body}</p>
              <div className="flex space-x-4 mt-2">
                <Link
                  to={`/edit/${item.id}`}
                  className="text-blue-500 hover:text-blue-700 font-medium"
                >
                  Edit
                </Link>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700 font-medium"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg disabled:bg-gray-400"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg disabled:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;