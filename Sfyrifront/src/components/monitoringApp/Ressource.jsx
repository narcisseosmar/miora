import React from 'react';
import { FaHome } from 'react-icons/fa'; // Import de l'icône home/menu
import { useNavigate } from 'react-router-dom'; // Import de useNavigate si vous utilisez react-router-dom

const Ressource = () => {
  const navigate = useNavigate(); // Utiliser useNavigate pour la redirection

  const handleMenuClick = () => {
    navigate('/dashb'); // Rediriger vers le Dashboard (ou une autre route)
  };

  return (
    <div>
      <button onClick={handleMenuClick} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
        <FaHome size={30} color="#007bff" /> {/* Icône de menu */}
      </button>
      <div>Contenu des Ressources</div>
    </div>
  );
};

export default Ressource;
