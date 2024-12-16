export function CollectionCard() {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={collection.image} alt={collection.title} className="w-full h-48 object-cover" />
      </figure>
      <div className="card-body">
        <div className="flex items-center space-x-4">
          <div className="avatar">
            <div className="w-10 h-10 rounded-full">
              <img src={collection.author.avatar} alt={collection.author.name} />
            </div>
          </div>
          <div>
            <h3 className="font-bold">{collection.title}</h3>
            <p className="text-sm text-gray-600">{collection.author.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}