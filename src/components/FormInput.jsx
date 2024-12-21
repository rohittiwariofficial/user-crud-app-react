// src/components/FormInput.jsx
import React from 'react';

const FormInput = ({ label, value, onChange, type = 'text', required = false }) => {
  return (
    <div className="mb-4">
      <label className="block text-lg font-medium text-gray-700 mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
        required={required}
      />
    </div>
  );
};

export default FormInput;