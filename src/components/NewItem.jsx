import React from "react";
import NFTCard from './../components/NftCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { newItems } from './../data/items';

export default function NewItem() {
  return (
    <section className="py-16 md:px-16 sm:px-8">
      <h2 className="text-3xl font-bold mb-8">NEW ITEMS</h2>
      <div className="grid grid-cols-4 gap-6">
        {newItems.map((item, index) => (
          <div key={item.id} className="relative">
            {index === 0 && (
              <button className="btn btn-circle absolute left-2 top-1/2 transform -translate-y-1/2 z-10">
                <ChevronLeft />
              </button>
            )}
            <NFTCard item={item} />
            {index === newItems.length - 1 && (
              <button className="btn btn-circle absolute right-2 top-1/2 transform -translate-y-1/2 z-10">
                <ChevronRight />
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
