import React from "react";
import SellerCard from "./SellerCard";
import { useNewItems } from "./../Context/NewItemsContext";

export default function TopSellers() {
  const { startIndex, itemsToShow, newItems, hotCollections, topSellers, handleNext, handlePrevious } =
    useNewItems();
  return (
    <section className="py-16 md:px-16 sm:px-8">
      <h2 className="text-3xl font-bold mb-8">TOP SELLERS</h2>
      <div className="grid grid-cols-4 gap-6">
        {topSellers.map((seller, index) => (
          <SellerCard key={seller.id} seller={seller} rank={index + 1} />
        ))}
      </div>
    </section>
  );
}
