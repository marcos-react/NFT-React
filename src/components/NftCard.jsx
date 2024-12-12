import React from "react";
import { BookOpen, Heart } from "lucide-react";


export default function NftCard({ item }) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="relative">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-64 object-cover"
        />
        <button className="absolute top-4 right-4 btn btn-circle btn-sm">
          <BookOpen size={16} />
        </button>
      </figure>
      <div className="card-body">
        <h3 className="card-title">{item.title}</h3>
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">Price: {item.price} ETH</div>
          <div className="flex items-center">
            <Heart size={16} className="mr-1" />
            <span className="text-sm">{item.likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
