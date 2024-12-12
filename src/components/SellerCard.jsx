import React from "react";

export default function SellerCard({ seller, rank }) {
  return (
    <div className="flex items-center space-x-4">
      <div className="font-bold text-xl text-gray-400">{rank}.</div>
      <div className="avatar">
        <div className="w-12 h-12 rounded-full">
          <img src={seller.avatar} alt={seller.name} />
        </div>
      </div>
      <div>
        <div className="font-semibold">{seller.name}</div>
        <div className="text-sm text-gray-600">{seller.sales}</div>
      </div>
    </div>
  );
}
