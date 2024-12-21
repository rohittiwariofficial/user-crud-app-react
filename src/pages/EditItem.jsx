import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FormInput from "../components/FormInput";
import useItem from "../hooks/useItem";

const EditItem = () => {
  const { id } = useParams();
  const { item, setItem, loading, saveItem, loadItem } = useItem(id);
  const navigate = useNavigate();

  // Load item when ID changes
  useEffect(() => {
    if (id) {
      loadItem(id);  // Fetch item by ID
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;  // Prevent submission if already loading

    await saveItem();  // Save or update item
    navigate("/");  // Navigate back to the Home page after saving/updating
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2 className="text-xl mb-4">Edit Item</h2>
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
        className="bg-blue-500 text-white py-2 px-4 rounded"
        disabled={loading}  // Disable button while loading
      >
        {loading ? "Updating..." : "Update Item"}  {/* Show loading text while saving */}
      </button>
    </form>
  );
};

export default EditItem;