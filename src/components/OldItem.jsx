import React from "react";
import OldNFTCard from './../components/OldNftCard';
import { oldItems } from './../data/oldItems';

export default function OldItem() {
  return (
    <section className="py-16 md:px-16 sm:px-8">
      <div className="grid grid-cols-6 gap-6">
        {oldItems.map((item, index) => (
          <div key={item.id} className="relative">
            <OldNFTCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}