import React from 'react';

function ProductList({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-lg p-4 flex flex-col items-center bg-gray-50"
        >
          <img
            src={product.image || 'https://via.placeholder.com/150'}
            alt={product.name}
            className="w-32 h-32 object-cover mb-4"
          />
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-700 mb-4">{product.price} €</p>
          <button
            className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
            aria-label={`Ajouter ${product.name} au panier`}
          >
            Ajouter au panier
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
