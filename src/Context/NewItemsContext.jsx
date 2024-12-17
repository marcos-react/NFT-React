import React, { createContext, useState, useContext } from "react";
import { newItems } from "./../data/items";
import { hotCollections } from "./../data/collections";
import { topSellers } from './../data/sellers';


// Create the context
const NewItemsContext = createContext();

// Context provider
export function NewItemsProvider({ children }) {
  const [startIndex, setStartIndex] = useState(0);
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
      }}
    >
      {children}
    </NewItemsContext.Provider>
  );
}

// Hook use context
export function useNewItems() {
  return useContext(NewItemsContext);
}
