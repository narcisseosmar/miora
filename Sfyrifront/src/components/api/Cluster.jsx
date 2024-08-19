import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, BarChart, Bar, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';

// Données pour les graphiques et tableaux
const nodeData = [
  { name: 'node-1', status: 'Ready', cpuUsage: 30, memoryUsage: 2, podsRunning: 15 },
  { name: 'node-2', status: 'Not Ready', cpuUsage: 0, memoryUsage: 0, podsRunning: 0 },
  { name: 'node-3', status: 'Ready', cpuUsage: 45, memoryUsage: 3, podsRunning: 20 },
];

const alerts = [
  { id: 1, message: 'Nœud node-2 non prêt.', severity: 'critical' },
  { id: 2, message: 'Utilisation CPU élevée sur node-3.', severity: 'warning' },
];

const podLogs = [
  { pod: 'api-container', logs: 'Error: Database connection failed.' },
  { pod: 'worker-container', logs: 'Task completed successfully.' },
];

const pieData = [
  { name: 'Pods Running', value: 35 },
  { name: 'Pods Stopped', value: 15 },
];

const COLORS = ['#178582', '#BF8181'];

const cpuMemoryData = [
  { time: '00:00', cpu: 30, memory: 2 },
  { time: '00:01', cpu: 35, memory: 2.5 },
  { time: '00:02', cpu: 40, memory: 2.7 },
  { time: '00:03', cpu: 45, memory: 3 },
  { time: '00:04', cpu: 50, memory: 3.2 },
];

// Composants pour les graphiques et sections
function NodeOverview() {
  return (
    <div style={styles.nodeContainer}>
      <h2 style={styles.nodeTitle}>Vue d’Ensemble des Nœuds</h2>
      <div style={styles.nodeTableContainer}>
        <table style={styles.nodeTable}>
          <thead>
            <tr>
              <th style={styles.nodeTh}>Nom du Nœud</th>
              <th style={styles.nodeTh}>Statut</th>
              <th style={styles.nodeTh}>Utilisation CPU (%)</th>
              <th style={styles.nodeTh}>Utilisation Mémoire (GB)</th>
              <th style={styles.nodeTh}>Pods en Cours</th>
            </tr>
          </thead>
          <tbody>
            {nodeData.map((node, index) => (
              <tr key={index}>
                <td style={styles.nodeTd}>{node.name}</td>
                <td style={{ ...styles.nodeTd, ...styles.nodeStatus(node.status) }}>{node.status}</td>
                <td style={styles.nodeTd}>{node.cpuUsage}</td>
                <td style={styles.nodeTd}>{node.memoryUsage}</td>
                <td style={styles.nodeTd}>{node.podsRunning}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <NodeUsageChart />
      <NodeRadarChart />
    </div>
  );
}

function NodeUsageChart() {
  return (
    <div style={styles.chartContainer}>
      <h3 style={styles.chartTitle}>Utilisation des Nœuds</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={nodeData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="cpuUsage" fill="#8884d8" />
          <Bar dataKey="memoryUsage" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function NodeRadarChart() {
  return (
    <div style={styles.chartContainer}>
      <h3 style={styles.chartTitle}>Comparaison des Nœuds</h3>
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart outerRadius="80%" data={nodeData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="name" />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <Radar name="CPU Usage" dataKey="cpuUsage" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Radar name="Memory Usage" dataKey="memoryUsage" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

function AlertSection() {
  const [filter, setFilter] = React.useState('all');

  const filteredAlerts = alerts.filter(alert => filter === 'all' || alert.severity === filter);

  function handleFilterChange(e) {
    setFilter(e.target.value);
  }

  return (
    <div style={styles.alertContainer}>
      <h2 style={styles.alertTitle}>Alertes</h2>
      <select onChange={handleFilterChange} style={styles.filterSelect}>
        <option value="all">Tous</option>
        <option value="critical">Critique</option>
        <option value="warning">Avertissement</option>
      </select>
      <ul style={styles.alertList}>
        {filteredAlerts.map((alert) => (
          <li key={alert.id} style={{ ...styles.alertItem, ...styles.alertSeverity(alert.severity) }}>
            {alert.message}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PodLogsViewer() {
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredLogs = podLogs.filter(log => log.logs.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div style={styles.logsContainer}>
      <h2 style={styles.logsTitle}>Logs des Pods</h2>
      <input
        type="text"
        placeholder="Rechercher dans les logs..."
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.searchInput}
      />
      {filteredLogs.map((log, index) => (
        <div key={index} style={styles.logItem}>
          <h3 style={styles.logPod}>{log.pod}</h3>
          <p style={styles.logText}>{log.logs}</p>
        </div>
      ))}
    </div>
  );
}

function ClusterVisualizationPage() {
  return (
    <div style={styles.pageContainer}>
      <h1 style={styles.pageTitle}>Visualisation du Cluster Kubernetes</h1>
      <NodeOverview />
      <div style={styles.chartsContainer}>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={cpuMemoryData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="cpu" stroke="#8884d8" />
            <Line type="monotone" dataKey="memory" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div style={styles.pieContainer}>
        <ResponsiveContainer width="50%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <AlertSection />
      <PodLogsViewer />
    </div>
  );
}

const styles = {
  pageContainer: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    // backgroundColor: '#e0f7fa', // Fond bleu clair pour le contraste
  },
  pageTitle: {
    textAlign: 'center',
    marginBottom: '40px',
    color: '#0A1828',
    fontSize: '2rem', // Taille du titre augmentée
  },
  nodeContainer: {
    marginTop: '30px',
    padding: '20px',
    backgroundColor: '#ffffff',
    color: '#000000',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  nodeTitle: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#000000',
  },
  nodeTableContainer: {
    overflowX: 'auto',
  },
  nodeTable: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  nodeTh: {
    padding: '15px',
    backgroundColor: '#0A1828',
    color: '#ffffff',
    borderBottom: '2px solid #dddddd',
  },
  nodeTd: {
    padding: '15px',
    textAlign: 'center',
    borderBottom: '1px solid #dddddd',
    transition: 'background-color 0.3s',
  },
  nodeTdHover: {
    backgroundColor: '#f5f5f5',
  },
  nodeStatus: (status) => ({
    color: status === 'Ready' ? '#4caf50' : '#f44336',
  }),
  chartContainer: {
    marginTop: '20px',
  },
  chartTitle: {
    marginBottom: '10px',
    color: '#000000',
  },
  chartsContainer: {
    marginTop: '20px',
  },
  pieContainer: {
    marginTop: '20px',
  },
  alertContainer: {
    marginTop: '30px',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  alertTitle: {
    marginBottom: '20px',
    color: '#000000',
  },
  filterSelect: {
    marginBottom: '20px',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    width: '100%',
  },
  alertList: {
    listStyleType: 'none',
    padding: 0,
  },
  alertItem: {
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
  alertSeverity: (severity) => ({
    backgroundColor: severity === 'critical' ? '#f8d7da' : '#fff3cd',
    color: severity === 'critical' ? '#721c24' : '#856404',
  }),
  logsContainer: {
    marginTop: '30px',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  logsTitle: {
    marginBottom: '20px',
    color: '#000000',
  },
  searchInput: {
    marginBottom: '20px',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    width: '100%',
  },
  logItem: {
    marginBottom: '15px',
  },
  logPod: {
    fontWeight: 'bold',
  },
  logText: {
    marginTop: '5px',
  },
};

export default ClusterVisualizationPage;


  
