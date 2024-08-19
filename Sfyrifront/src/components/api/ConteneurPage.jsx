import { useState } from 'react';

const containerData = [
  { name: 'nginx-container', status: 'Running', cpuUsage: '25%', memoryUsage: '512MB', containerId: 'abc123' },
  { name: 'db-container', status: 'Stopped', cpuUsage: '0%', memoryUsage: '0MB', containerId: 'def456' },
  { name: 'api-container', status: 'Running', cpuUsage: '30%', memoryUsage: '1GB', containerId: 'ghi789' },
  { name: 'worker-container', status: 'Running', cpuUsage: '40%', memoryUsage: '768MB', containerId: 'jkl012' },
  { name: 'cache-container', status: 'Running', cpuUsage: '15%', memoryUsage: '256MB', containerId: 'mno345' },
];

function ContainerStatusPage() {
  const [filter, setFilter] = useState('All');

  const filteredData = containerData.filter(container => filter === 'All' || container.status === filter);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Status des Conteneurs</h1>
      <div style={styles.filterContainer}>
        <label style={styles.filterLabel}>Filtrage par status:</label>
        <select style={styles.filterSelect} value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">Tous</option>
          <option value="Running">En cours</option>
          <option value="Stopped">Stop</option>
        </select>
      </div>
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Nom du Conteneur</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>CPU Utilise</th>
              <th style={styles.th}>Memoire Utilise</th>
              <th style={styles.th}>Conteneur ID</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((container, index) => (
              <tr key={index} style={styles.row}>
                <td style={styles.td}>{container.name}</td>
                <td style={{ ...styles.td, ...styles.status(container.status) }}>{container.status}</td>
                <td style={styles.td}>{container.cpuUsage}</td>
                <td style={styles.td}>{container.memoryUsage}</td>
                <td style={styles.td}>{container.containerId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#ffffff', // Fond blanc
    color: '#000000', // Texte en noir
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#000000', // Couleur du titre en noir
  },
  filterContainer: {
    marginBottom: '20px',
    textAlign: 'center',
  },
  filterLabel: {
    marginRight: '10px',
    fontSize: '16px',
    color: '#000000',
  },
  filterSelect: {
    padding: '5px',
    fontSize: '16px',
    backgroundColor: '#f0f0f0',
  },
  tableContainer: {
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    padding: '15px',
    backgroundColor: '#f0f0f0', // Fond des en-têtes en gris clair
    color: '#000000', // Texte en noir pour les en-têtes
    textAlign: 'center', // Alignement centré des en-têtes de colonne
    borderBottom: '2px solid #dddddd', // Bordure en gris clair
  },
  td: {
    padding: '15px',
    textAlign: 'center', // Alignement centré des cellules de données
    borderBottom: '1px solid #dddddd', // Bordure en gris clair
  },
  row: {
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Ombre légère pour les lignes
    marginBottom: '10px', // Espace entre les lignes
  },
  status: (status) => ({
    color: status === 'Running' ? '#178582' : '#BF8181', // Couleurs pour les statuts
    fontWeight: 'bold',
  }),
};

export default ContainerStatusPage;

