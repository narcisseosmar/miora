import React, { useEffect, useState } from 'react';
import { Routes, Route, NavLink, useNavigate, useLocation } from 'react-router-dom';
import Results from './Results';
import Notification from './Notification';
import State from './State';

function Security() {
  const [notificationCount, setNotificationCount] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Si l'utilisateur est à la racine de "security", rediriger vers "state" uniquement la première fois
    if (location.pathname === '/security') {
      navigate('state');
    }
  }, [location, navigate]);

  // Simuler la récupération des notifications depuis une API ou autre source de données
  useEffect(() => {
    // Exemple de notifications (le même que dans le composant Notification)
    const notifications = [
      { id: 1, message: 'Pipeline "Build and Test" failed.', status: 'error', timestamp: '2024-08-17' },
      { id: 2, message: 'Pipeline "Deploy to Staging" succeeded.', status: 'success', timestamp: '2024-08-16' },
      { id: 3, message: 'Security scan identified vulnerabilities.', status: 'warning', timestamp: '2024-08-15' },
      { id: 4, message: 'Code signed successfully.', status: 'success', timestamp: '2024-08-14' },
      { id: 5, message: 'Failed to deploy due to insecure configurations.', status: 'error', timestamp: '2024-08-13' },
    ];

    // Mettre à jour le nombre de notifications
    setNotificationCount(notifications.length);
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Security Dashboard</h1>
      <nav className="mb-6">
        <ul className="flex justify-center space-x-8 p-4 ">
          <li className="flex">
            <NavLink
              to="state"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600 pb-2 font-semibold transition-colors duration-300"
                  : "text-gray-600 hover:text-blue-600 pb-2 transition-colors duration-300"
              }
            >
              States
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="results"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600 pb-2 font-semibold transition-colors duration-300"
                  : "text-gray-600 hover:text-blue-600 pb-2 transition-colors duration-300"
              }
            >
              CI/CD
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="notification"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600 pb-2 font-semibold transition-colors duration-300"
                  : "text-gray-600 hover:text-blue-600 pb-2 transition-colors duration-300"
              }
            >
              Notifications <span className="ml-2 text-sm text-gray-500">({notificationCount})</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <hr />
      <Routes>
        <Route path="results" element={<Results />} />
        <Route path="notification" element={<Notification />} />
        <Route path="state" element={<State />} />
      </Routes>
    </div>
  );
}

export default Security;
