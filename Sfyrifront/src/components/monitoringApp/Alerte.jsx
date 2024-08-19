import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const AlertesNotifications = () => {
  const [activeAlerts, setActiveAlerts] = useState([
    { id: 1, message: 'Taux d\'erreur API supérieur à 5%', severity: 'Critique', time: '10:32 AM' },
    { id: 2, message: 'Temps de réponse supérieur à 200ms', severity: 'Avertissement', time: '10:30 AM' },
  ]);

  const [alertHistory, setAlertHistory] = useState([
    { id: 1, message: 'Service DB non disponible', severity: 'Critique', time: '09:45 AM' },
    { id: 2, message: 'Mémoire serveur dépassée', severity: 'Moyenne', time: '09:30 AM' },
  ]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Alertes et Notifications</h1>
      
      {/* Section des Alertes Actives */}
      <div className="bg-white shadow rounded-lg p-4 mb-6">
        <h2 className="text-2xl font-semibold mb-2">Alertes Actives</h2>
        {activeAlerts.length > 0 ? (
          activeAlerts.map((alert) => (
            <div key={alert.id} className={`p-3 mb-2 rounded ${alert.severity === 'Critique' ? 'bg-red-500 text-white' : 'bg-yellow-400 text-black'}`}>
              <div className="flex justify-between">
                <span>{alert.message}</span>
                <span className="font-bold">{alert.time}</span>
              </div>
              <span className="text-sm">{alert.severity}</span>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Aucune alerte active.</p>
        )}
      </div>

      {/* Section de l'Historique des Alertes */}
      <div className="bg-white shadow rounded-lg p-4 mb-6">
        <h2 className="text-2xl font-semibold mb-2">Historique des Alertes</h2>
        {alertHistory.length > 0 ? (
          alertHistory.map((alert) => (
            <div key={alert.id} className="p-3 mb-2 border rounded">
              <div className="flex justify-between">
                <span>{alert.message}</span>
                <span className="font-bold">{alert.time}</span>
              </div>
              <span className="text-sm text-gray-500">{alert.severity}</span>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Aucune alerte dans l'historique.</p>
        )}
      </div>

      {/* Section de Configuration des Alertes */}
      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="text-2xl font-semibold mb-2">Configuration des Alertes</h2>
        <div className="flex flex-col space-y-4">
          <label className="flex items-center">
            <span className="mr-2">Seuil du taux d'erreur :</span>
            <input type="number" className="border rounded p-2" placeholder="5%" />
          </label>
          <label className="flex items-center">
            <span className="mr-2">Seuil du temps de réponse :</span>
            <input type="number" className="border rounded p-2" placeholder="200ms" />
          </label>
          <label className="flex items-center">
            <span className="mr-2">Type de Notification :</span>
            <select className="border rounded p-2">
              <option>Email</option>
              <option>SMS</option>
              <option>Slack</option>
              <option>Notification Push</option>
            </select>
          </label>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
            Sauvegarder les Paramètres
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertesNotifications;
