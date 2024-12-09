import React from 'react';

function Navbar({ searchTerm, setSearchTerm }) {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">caca</h1>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Rechercher un produit..."
          className="p-2 rounded-l border-none focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="bg-yellow-500 px-4 py-2 rounded-r">Rechercher</button>
      </div>
      <ul className="flex space-x-4">
        <li><a href="#home" className="hover:underline">Accueil</a></li>
        <li><a href="#products" className="hover:underline">Produits</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
