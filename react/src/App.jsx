import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:1337/api/produits?populate=*&filters[transaction][statut][$eq]=valider');
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
  
        const formattedProducts = data.data.map((item) => ({
          id: item.id,
          name: item.nom || 'Nom inconnu', 
          price: item.prix || 0, 
          image: item.image && item.image.length > 0 
          ? `http://localhost:1337${item.image[0].url}` 
          : 'https://via.placeholder.com/150',
      }));
  
        setProducts(formattedProducts);
      } catch (error) {
        console.error('Erreur lors de la récupération des produits:', error);
      }
    };
  
    fetchProducts();
  }, []);
  

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">Bienvenue sur le site caca</h1>
        <ProductList products={filteredProducts} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
