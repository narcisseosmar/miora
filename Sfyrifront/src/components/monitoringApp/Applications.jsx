import React from 'react';
import { FaServer, FaExclamationCircle } from 'react-icons/fa';

// Exemple de données simulées
const appData = [
  {
    name: 'Application A',
    status: 'Online',
    kpi: { responseTime: '200ms', errorRate: '0.5%' },
    services: ['Frontend', 'Backend', 'Database'],
    envComparison: { prod: '250ms', preProd: '300ms' },
    incidents: [{ severity: 'Critical', description: 'Outage in prod' }],
  },
  {
    name: 'Application B',
    status: 'Warning',
    kpi: { responseTime: '500ms', errorRate: '1.2%' },
    services: ['API', 'Worker'],
    envComparison: { prod: '450ms', preProd: '400ms' },
    incidents: [{ severity: 'Minor', description: 'Slow response in pre-prod' }],
  },
  // Ajouter plus d'applications ici
];

// Statut Global des Applications
const getStatusColor = (status) => {
  switch (status) {
    case 'Online':
      return 'bg-green-500 text-white';
    case 'Warning':
      return 'bg-yellow-500 text-black';
    case 'Critical':
      return 'bg-red-500 text-white';
    default:
      return 'bg-gray-500 text-white';
  }
};

// Tableau de Bord Principal
const Dashboard = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">Vue d'Ensemble des Applications</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Application</th>
              <th className="py-2 px-4 border-b">Statut</th>
              <th className="py-2 px-4 border-b">Temps de Réponse</th>
              <th className="py-2 px-4 border-b">Taux d'Erreur</th>
              <th className="py-2 px-4 border-b">Services</th>
              <th className="py-2 px-4 border-b">Comparaison Environnement</th>
              <th className="py-2 px-4 border-b">Incidents</th>
            </tr>
          </thead>
          <tbody>
            {appData.map((app, index) => (
              <tr key={index} className="text-center">
                <td className="py-2 px-4 border-b">{app.name}</td>
                <td className={`py-2 px-4 border-b ${getStatusColor(app.status)}`}>
                  {app.status}
                </td>
                <td className="py-2 px-4 border-b">{app.kpi.responseTime}</td>
                <td className="py-2 px-4 border-b">{app.kpi.errorRate}</td>
                <td className="py-2 px-4 border-b">
                  <div className="flex justify-center space-x-2">
                    {app.services.map((service, idx) => (
                      <div key={idx} className="flex items-center">
                        <FaServer className="mr-1" />
                        {service}
                      </div>
                    ))}
                  </div>
                </td>
                <td className="py-2 px-4 border-b">
                  <p>Prod: {app.envComparison.prod}</p>
                  <p>Pre-Prod: {app.envComparison.preProd}</p>
                </td>
                <td className="py-2 px-4 border-b">
                  {app.incidents.map((incident, idx) => (
                    <div key={idx} className="flex items-center justify-center">
                      <FaExclamationCircle className="mr-1" />
                      {incident.description} ({incident.severity})
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
