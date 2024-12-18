import React, { createContext, useState, useContext } from "react";
import { newItems as defaultItems } from "./../data/items";
import { topSellers as defaultSellers } from "./../data/sellers";
import { hotCollections } from "./../data/collections";

// Crear el contexto
const NewItemsContext = createContext();

// Proveedor del contexto
export function NewItemsProvider({ children }) {
  const [startIndex, setStartIndex] = useState(0);
  const [newItems, setNewItems] = useState(defaultItems); // Inicializado con items.js
  const [topSellers, setTopSellers] = useState(defaultSellers); // Inicializado con sellers.js

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

  // Función para cargar nuevos datos según la colección seleccionada
  const loadCollectionData = async (collectionId) => {
    try {
      // Importación dinámica de los archivos de datos
      const { newItems:items } = await import(`./../data/collections/${collectionId}/items.js`);
      const { topSellers:sellers } = await import(`./../data/collections/${collectionId}/sellers.js`);

      setNewItems(items); // Actualizar newItems
      setTopSellers(sellers); // Actualizar topSellers
      setStartIndex(0); // Reiniciar el índice de paginación
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

// Hook para usar el contexto
export function useNewItems() {
  return useContext(NewItemsContext);
}

