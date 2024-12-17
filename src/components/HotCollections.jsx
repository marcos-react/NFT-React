import React from "react";
import NFTCard from "./../components/NftCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNewItems } from "./../Context/NewItemsContext";


export default function HotCollections() {
  const { startIndex, itemsToShow, hotCollections, handleNext, handlePrevious } = useNewItems();

  return (
    <section className="py-16 md:px-16 sm:px-8">
      <h2 className="text-3xl font-bold mb-8">HOT COLLECTIONS</h2>
      <div className="relative">
        {/* Back button */}
        {startIndex > 0 && (
          <button
            className="btn btn-circle absolute left-2 top-1/2 transform -translate-y-1/2 z-10"
            onClick={handlePrevious}
          >
            <ChevronLeft />
          </button>
        )}

        <div className="grid grid-cols-4 gap-6">
          {hotCollections.slice(startIndex, startIndex + itemsToShow).map((item) => (
            <NFTCard key={item.id} item={item} />
          ))}
        </div>

        {/* forward button */}
        {startIndex + itemsToShow < hotCollections.length && (
          <button
            className="btn btn-circle absolute right-2 top-1/2 transform -translate-y-1/2 z-10"
            onClick={handleNext}
          >
            <ChevronRight />
          </button>
        )}
      </div>
    </section>
  );
}