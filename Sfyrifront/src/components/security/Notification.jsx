import React from 'react';
import { FaCheckCircle, FaTimesCircle, FaExclamationTriangle } from 'react-icons/fa'; // Importer les icônes nécessaires

function Notification() {
  const notifications = [
    {
      id: 1,
      message: 'Pipeline "Build and Test" failed due to a missing security patch in Docker image.',
      status: 'error',
      timestamp: '2024-08-17 14:30',
    },
    {
      id: 2,
      message: 'Pipeline "Deploy to Staging" succeeded with all security checks passed.',
      status: 'success',
      timestamp: '2024-08-16 10:20',
    },
    {
      id: 3,
      message: 'Security scan identified vulnerabilities in third-party libraries.',
      status: 'warning',
      timestamp: '2024-08-15 18:45',
    },
    {
      id: 4,
      message: 'Code signed successfully after passing security validation in "Release to Production".',
      status: 'success',
      timestamp: '2024-08-14 09:10',
    },
    {
      id: 5,
      message: 'Failed to deploy due to insecure configurations detected in Kubernetes manifest.',
      status: 'error',
      timestamp: '2024-08-13 16:00',
    },
  ];

  return (
    <div className="p-6">
      <ul className=" space-y-4">
        {notifications.map((notification) => (
          <li
            key={notification.id}
            className="flex items-start p-4 rounded-lg shadow-md space-x-3"
          >
            <div className="text-xl">
              {notification.status === 'success' && <FaCheckCircle className="text-green-500" />}
              {notification.status === 'error' && <FaTimesCircle className="text-red-500" />}
              {notification.status === 'warning' && <FaExclamationTriangle className="text-yellow-500" />}
            </div>
            <div className="flex-grow">
              <p className="font-medium">{notification.message}</p>
              <p className="text-sm text-gray-500">{notification.timestamp}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notification;
