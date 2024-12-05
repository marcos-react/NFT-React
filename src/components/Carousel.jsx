import React, { useEffect, useState } from "react";
import axios from "axios";

const Carousel = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    // Fetch collections from OpenSea API
    const fetchCollections = async () => {
      try {
        const response = await axios.get(
          "https://api.opensea.io/api/v1/assets",
          {
            params: {
              order_direction: "desc",
              limit: 10, // Limit to 10 collections
              offset: 0,
            },
          }
        );
        // Map and format the data
        const formattedCollections = response.data.assets.map((asset) => ({
          id: asset.id,
          name: asset.collection.name,
          image: asset.image_url,
        }));
        setCollections(formattedCollections);
      } catch (error) {
        console.error("Error fetching collections:", error);
      }
    };

    fetchCollections();
  }, []);

  return (
    <div className="carousel w-full rounded-lg shadow-lg">
      {collections.length > 0 ? (
        collections.map((collection, index) => (
          <div
            key={collection.id}
            id={`slide${index}`}
            className="carousel-item relative w-full"
          >
            <div className="flex flex-col items-center p-4 bg-base-200">
              <img
                src={collection.image}
                alt={collection.name}
                className="w-48 h-48 object-cover rounded-lg shadow-md"
              />
              <p className="mt-4 text-lg font-semibold text-center">
                {collection.name}
              </p>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href={`#slide${index === 0 ? collections.length - 1 : index - 1}`}
                className="btn btn-circle"
              >
                ❮
              </a>
              <a
                href={`#slide${(index + 1) % collections.length}`}
                className="btn btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
        ))
      ) : (
        <div className="p-4 text-center">Loading collections...</div>
      )}
    </div>
  );
};

export default Carousel;
