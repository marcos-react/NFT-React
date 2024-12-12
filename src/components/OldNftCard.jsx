import React from 'react';

export default function OldNftCard({ item }) {
  return (
    <div className="card bg-base-100 shadow-xl bg-white">
      <figure className="relative top-3">
        <img src={item.image} alt={item.title} className="w-32 h-32 object-cover" />
      </figure>
      <div className="card-body">
        <h3 className="card-title text-base-300 justify-center">{item.title}</h3>
      </div>
    </div>
  );
}