import React, { createContext, useState, useContext } from 'react';

const ItemContext = createContext();

export const useItems = () => {
  return useContext(ItemContext);
};

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (item) => setItems([...items, item]);
  const updateItem = (updatedItem) => {
    setItems(items.map(item => item.id === updatedItem.id ? updatedItem : item));
  };

  return (
    <ItemContext.Provider value={{ items, addItem, updateItem }}>
      {children}
    </ItemContext.Provider>
  );
};