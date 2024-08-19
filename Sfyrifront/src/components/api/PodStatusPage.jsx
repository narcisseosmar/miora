import { useState } from 'react';

// Données des pods avec nombre de réplicas
const podData = [
  { name: 'nginx-pod', status: 'Running', cpuUsage: '20%', memoryUsage: '400MB', podId: 'pod123', containerName: 'nginx-container', replicas: 3 },
  { name: 'db-pod', status: 'Running', cpuUsage: '35%', memoryUsage: '750MB', podId: 'pod456', containerName: 'db-container', replicas: 2 },
  { name: 'api-pod', status: 'Running', cpuUsage: '50%', memoryUsage: '1.2GB', podId: 'pod789', containerName: 'api-container', replicas: 5 },
  { name: 'worker-pod', status: 'Pending', cpuUsage: '10%', memoryUsage: '150MB', podId: 'pod012', containerName: 'worker-container', replicas: 1 },
  { name: 'cache-pod', status: 'Running', cpuUsage: '5%', memoryUsage: '100MB', podId: 'pod345', containerName: 'cache-container', replicas: 4 },
];

function PodStatusPage() {
  const [filter, setFilter] = useState('All');

  const filteredData = podData.filter(pod => filter === 'All' || pod.status === filter);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Pod Status Overview</h1>
      <div style={styles.filterContainer}>
        <label style={styles.filterLabel}>Filter by Status:</label>
        <select style={styles.filterSelect} value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Running">Running</option>
          <option value="Pending">Pending</option>
          <option value="Stopped">Stopped</option>
        </select>
      </div>
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Nom du POD</th>
              <th style={styles.th}>Nom du Conteneur</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>CPU Utilise</th>
              <th style={styles.th}>Memoire Utilise</th>
              <th style={styles.th}>Pod ID</th>
              <th style={styles.th}>Instance</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((pod, index) => (
              <tr key={index} style={styles.row}>
                <td style={styles.td}>{pod.name}</td>
                <td style={styles.td}>{pod.containerName}</td>
                <td style={{ ...styles.td, ...styles.status(pod.status) }}>{pod.status}</td>
                <td style={styles.td}>{pod.cpuUsage}</td>
                <td style={styles.td}>{pod.memoryUsage}</td>
                <td style={styles.td}>{pod.podId}</td>
                <td style={styles.td}>{pod.replicas}</td>
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
    color: '#000000', // Texte en noir pour contraster avec le fond blanc
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
    color: status === 'Running' ? '#178582' : status === 'Pending' ? '#FFA500' : '#BF8181',
    fontWeight: 'bold',
  }),
};

export default PodStatusPage;


