import React from "react";
import SellerCard from "./SellerCard";
import { useNewItems } from "./../Context/NewItemsContext";
import { useState, useEffect } from "react";

export default function TopSellers() {
  const {
    startIndex,
    itemsToShow,
    newItems,
    hotCollections,
    topSellers,
    handleNext,
    handlePrevious,
  } = useNewItems();

  const [fadeInClass, setFadeInClass] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track the card id is selected.

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeInClass("opacity-100 transition-opacity duration-1000");
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="py-16 md:px-16 sm:px-8">
      <h2 className="text-3xl font-bold mb-8">TOP SELLERS</h2>
      <div className="grid grid-cols-4 gap-6">
        {topSellers.map((seller, index) => (
          <div
            key={seller.id}
            onMouseEnter={() => setHoveredIndex(index)} // Show the card id is selected.
            onMouseLeave={() => setHoveredIndex(null)} // Remove the card id selected when the mouse is not there.
            className={`transform transition-all duration-500 ease-in-out 
                      ${
                        hoveredIndex === index
                          ? "scale-105 shadow-xl translate-z-0"
                          : "scale-95 opacity-70"
                      } 
                      hover:scale-105 hover:shadow-xl hover:translate-y-1 hover:z-10`}
          >
            <SellerCard key={seller.id} seller={seller} rank={index + 1} />
          </div>
        ))}
      </div>
    </section>
  );
}
