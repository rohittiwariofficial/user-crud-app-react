// src/pages/CreateItem.jsx
import React, { useState } from 'react';
import FormInput from '../components/FormInput';
import useItem from '../hooks/useItem';
import { useNavigate } from 'react-router-dom';

const CreateItem = () => {
  const { item, setItem, loading, saveItem } = useItem();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await saveItem();
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6 text-center">Create Item</h2>
      <FormInput
        label="Title"
        value={item.title}
        onChange={(value) => setItem({ ...item, title: value })}
        required
      />
      <FormInput
        label="Body"
        value={item.body}
        onChange={(value) => setItem({ ...item, body: value })}
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-6 rounded-lg mt-4 w-full hover:bg-blue-600 transition-colors"
      >
        {loading ? 'Creating...' : 'Create Item'}
      </button>
    </form>
  );
};

export default CreateItem;