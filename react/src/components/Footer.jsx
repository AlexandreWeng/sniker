import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-700 text-white p-4 text-center">
      <p>© 2024 caca. Tous droits réservés.</p>
      <ul className="flex justify-center space-x-4 mt-2">
        <li><a href="#terms" className="hover:underline">Conditions d'utilisation</a></li>
        <li><a href="#privacy" className="hover:underline">Politique de confidentialité</a></li>
      </ul>
    </footer>
  );
}

export default Footer;
