import { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const data = [
  { time: '00:00:00', cpu: 20, memoire: 50 },
  { time: '00:00:05', cpu: 25, memoire: 55 },
  { time: '00:00:10', cpu: 30, memoire: 52 },
  { time: '00:00:15', cpu: 35, memoire: 60 },
  { time: '00:00:20', cpu: 45, memoire: 65 },
  { time: '00:00:25', cpu: 40, memoire: 63 },
  { time: '00:00:30', cpu: 50, memoire: 70 },
  { time: '00:00:35', cpu: 55, memoire: 75 },
  { time: '00:00:40', cpu: 60, memoire: 80 },
  { time: '00:00:45', cpu: 65, memoire: 85 },
  { time: '00:00:50', cpu: 70, memoire: 90 },
  { time: '00:00:55', cpu: 75, memoire: 95 },
  { time: '00:01:00', cpu: 80, memoire: 100 },
  { time: '00:01:05', cpu: 5,  memoire: 20 },
  { time: '00:01:10', cpu: 15, memoire: 40 },
];

function StatisticsPage() {
  const [timeRange, setTimeRange] = useState('All');

  const filteredData = timeRange === 'All'
    ? data
    : data.filter(item => item.time >= timeRange.start && item.time <= timeRange.end);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Utilisation de Ressources en Temps Réel (CPU et Mémoire)</h1>
      <div style={styles.filterContainer}>
        <label style={styles.filterLabel}>Filtrage de temp:</label>
        <select
          style={styles.filterSelect}
          onChange={(e) => {
            const value = e.target.value;
            if (value === 'All') {
              setTimeRange('All');
            } else {
              const [start, end] = value.split('-');
              setTimeRange({ start, end });
            }
          }}
        >
          <option value="All">Tous</option>
          <option value="00:00:00-00:00:30">00:00:00 to 00:00:30</option>
          <option value="00:00:30-00:01:00">00:00:30 to 00:01:00</option>
        </select>
      </div>
      <div style={styles.chartContainer}>
        <ResponsiveContainer width="100%" height={600}>
          <LineChart data={filteredData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
            <XAxis dataKey="time" stroke="#666" />
            <YAxis domain={[0, 100]} stroke="#666" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="cpu" stroke="#178582" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
            <Line type="monotone" dataKey="memoire" stroke="#BFA181" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
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
    borderRadius: '4px',
    border: '1px solid #ddd',
    backgroundColor: '#f0f0f0',
  },
  chartContainer: {
    backgroundColor: '#f9f9f9', // Fond du conteneur du graphique en gris très clair
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Ombre pour un effet de profondeur
    border: '1px solid #ddd',
  },
};

export default StatisticsPage;





