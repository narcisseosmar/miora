import React, { useState } from 'react';
import { FaAppStore, FaDatabase, FaChartLine, FaBell } from 'react-icons/fa';
import Applications from './Applications';
import Ressource from './Ressource';
import Alerte from './Alerte';
import Graphique from './Graphique';
import CustomIcon from './customIcon.svg'; // Import du fichier SVG

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState('Dashboard');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Applications':
        return <Applications />;
      case 'Ressource':
        return <Ressource />;
      case 'Alerte':
        return <Alerte />;
      case 'Graphique':
        return <Graphique />;
      default:
        return (
          <div style={{ height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img 
              src={CustomIcon} 
              alt="Custom Icon" 
              style={{ 
                display: 'block', 
                margin: '0 auto', 
                width: '50%', 
                height: 'auto', 
                border: 'none'
              }} 
            />
          </div>
        );
    }
  };

  return (
    <div>
      <nav style={{ position: 'fixed', top: 0, width: '80%', backgroundColor: '#f0f0f0', padding: '10px', display: 'flex', justifyContent: 'space-around' }}>
        <button onClick={() => setActiveComponent('Applications')} style={styles.button}>
          <FaAppStore size={20} style={{ marginRight: '8px' }} />
          Applications
        </button>
        <button onClick={() => setActiveComponent('Ressource')} style={styles.button}>
          <FaDatabase size={20} style={{ marginRight: '8px' }} />
          Ressource
        </button>
        <button onClick={() => setActiveComponent('Alerte')} style={styles.button}>
          <FaBell size={20} style={{ marginRight: '8px' }} />
          Alerte
        </button>
        <button onClick={() => setActiveComponent('Graphique')} style={styles.button}>
          <FaChartLine size={20} style={{ marginRight: '8px' }} />
          Graphique
        </button>
      </nav>
      <div style={{ marginTop: '60px', padding: '20px', height: 'calc(100vh - 60px)' }}>
        {renderComponent()}
      </div>
    </div>
  );
};

const styles = {
  button: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default Dashboard;
