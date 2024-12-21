import { useState, useEffect } from "react";
import {
  fetchItems,
  fetchItem,
  createItem,
  updateItem,
  deleteItem,
} from "../services/ItemService";

const useItem = (
  id = null,
  searchQuery = "",
  currentPage = 1,
  itemsPerPage = 5
) => {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState({ title: "", body: "" });
  const [loading, setLoading] = useState(false);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const fetchItemsData = async () => {
      setLoading(true);
      try {
        const fetchedItems = await fetchItems(
          searchQuery,
          currentPage,
          itemsPerPage
        );
        setItems(fetchedItems.items);
        setTotalItems(fetchedItems.total);
      } catch (error) {
        console.error("Error fetching items:", error);
      } finally {
        setLoading(false);
      }
    };

    if (!id) {
      fetchItemsData();
    } else {
      loadItem(id);
    }
  }, [id, searchQuery, currentPage, itemsPerPage]);

  const loadItem = async (id) => {
    setLoading(true);
    try {
      const fetchedItem = await fetchItem(id);
      setItem(fetchedItem);
    } catch (error) {
      console.error("Error fetching item:", error);
    } finally {
      setLoading(false);
    }
  };

  const saveItem = async () => {
    setLoading(true);
    try {
      if (item.id) {
        await updateItem(item.id, item);
      } else {
        await createItem(item);
      }
    } catch (error) {
      console.error("Error saving item:", error);
    } finally {
      setLoading(false);
    }
  };

  const removeItem = async (id) => {
    setLoading(true);
    try {
      await deleteItem(id);
      setItems(items.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    } finally {
      setLoading(false);
    }
  };

  // You can now call handleSearch from Home.jsx
  const handleSearch = (query) => {
    setLoading(true); // Set loading state while fetching data
    setItems([]); // Clear previous items while searching
    fetchItemsData(query, currentPage, itemsPerPage); // Refetch with search query
  };

  return {
    items,
    item,
    loading,
    saveItem,
    setItem,
    removeItem,
    loadItem,
    totalItems,
    handleSearch,
  };
};

export default useItem;
