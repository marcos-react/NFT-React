import React, { createContext, useState, useContext } from "react";
import { newItems as defaultItems } from "./../data/items";
import { topSellers as defaultSellers } from "./../data/sellers";
import { hotCollections } from "./../data/collections";

// Create context
const NewItemsContext = createContext();

// Provider context
export function NewItemsProvider({ children }) {
  const [startIndex, setStartIndex] = useState(0);
  const [newItems, setNewItems] = useState(defaultItems); // Inicialize items.js
  const [topSellers, setTopSellers] = useState(defaultSellers); // Inicialize sellers.js

  const itemsToShow = 4;

  const handleNext = () => {
    if (startIndex + itemsToShow < newItems.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  // Fuction loadColletionData to select specific collection by ID
  const loadCollectionData = async (collectionId) => {
    try {
      // Dinamic import for specific collections items and sellers
      const { newItems:items } = await import(`./../data/collections/${collectionId}/items.js`);
      const { topSellers:sellers } = await import(`./../data/collections/${collectionId}/sellers.js`);

      setNewItems(items); // Update newItems
      setTopSellers(sellers); // Update topSellers
      setStartIndex(0); // Restart index
    } catch (error) {
      console.error("Error loading collection data:", error);
    }
  };

  return (
    <NewItemsContext.Provider
      value={{
        startIndex,
        itemsToShow,
        newItems,
        hotCollections,
        topSellers,
        handleNext,
        handlePrevious,
        loadCollectionData,
      }}
    >
      {children}
    </NewItemsContext.Provider>
  );
}

// Hook for context
export function useNewItems() {
  return useContext(NewItemsContext);
}

