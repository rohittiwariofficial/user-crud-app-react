// src/components/ItemList.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ items, loading, removeItem }) => {
  if (loading) return <p>Loading...</p>;

  return (
    <ul className="space-y-4">
      {items.length === 0 ? (
        <li className="text-center text-gray-500">No items available</li>
      ) : (
        items.map((item) => (
          <li key={item.id} className="p-4 border rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-700">{item.body}</p>
            <div className="flex justify-between mt-4">
              <Link to={`/edit/${item.id}`} className="text-blue-500 hover:underline">
                Edit
              </Link>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          </li>
        ))
      )}
    </ul>
  );
};

export default ItemList;