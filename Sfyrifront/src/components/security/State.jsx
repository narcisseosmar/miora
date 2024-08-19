import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'; // Importer les icônes pour succès et erreur
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'; // Importer les composants nécessaires de recharts

const securityChecks = [
  { name: 'Source Code Analysis', status: 'success' },
  { name: 'Dependency Scanning', status: 'success' },
  { name: 'Container Security', status: 'error' },
  { name: 'Secret Detection', status: 'success' },
  { name: 'Static Application Security Testing (SAST)', status: 'success' },
  { name: 'Dynamic Application Security Testing (DAST)', status: 'error' },
  { name: 'License Compliance', status: 'success' },
  { name: 'Infrastructure as Code (IaC) Scanning', status: 'error' },
];

// Calculer les données pour le graphique circulaire
const getPieData = () => {
  const totalChecks = securityChecks.length;
  const successCount = securityChecks.filter(check => check.status === 'success').length;
  const errorCount = securityChecks.filter(check => check.status === 'error').length;
  
  return [
    { name: 'Success', value: successCount },
    { name: 'Error', value: errorCount },
  ];
};

// Définir les couleurs pour les segments du graphique
const COLORS = ['#4caf50', '#f44336'];

function States() {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Statistic</h2>
      
      {/* Diagramme circulaire */}
      <div className="flex justify-center mb-6">
        <div className="text-center">
          <PieChart width={400} height={400}>
            <Pie
              data={getPieData()}
              dataKey="value"
              nameKey="name"
              outerRadius={150}
              fill="#8884d8"
              label
            >
              {getPieData().map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>

      {/* Liste des vérifications de sécurité */}
      <h2 className="mb-5 text-2xl font-bold mb-4 text-gray-800">Checking</h2>
      <ul className="space-y-4">
        {securityChecks.map((check, index) => (
          <li
            key={index}
            className="p-4 rounded-lg shadow-md flex items-center justify-between"
          >
            <div className="flex items-center">
              {check.status === 'success' ? (
                <FaCheckCircle className="text-green-500 text-xl mr-4" />
              ) : (
                <FaTimesCircle className="text-red-500 text-xl mr-4" />
              )}
              <span className="text-gray-700 font-medium">{check.name}</span>
            </div>
            <span className={`text-sm font-semibold ${check.status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
              {check.status === 'success' ? 'Success' : 'Error'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default States;
