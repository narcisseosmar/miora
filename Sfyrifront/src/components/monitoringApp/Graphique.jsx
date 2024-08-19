import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import 'tailwindcss/tailwind.css';

const RealTimeChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Temps de Réponse (ms)',
        data: [],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  });

  const [timeRange, setTimeRange] = useState('24h');

  // Fonction simulant la réception de nouvelles données en temps réel
  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = new Date().toLocaleTimeString();
      const newResponseTime = Math.floor(Math.random() * 200); // Temps de réponse simulé

      setChartData((prevData) => {
        const newLabels = [...prevData.labels, newTime].slice(-20); // Conserver les 20 derniers points
        const newDataset = [...prevData.datasets[0].data, newResponseTime].slice(-20);

        return {
          labels: newLabels,
          datasets: [
            {
              ...prevData.datasets[0],
              data: newDataset,
            },
          ],
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Fonction de gestion du changement de plage temporelle
  const handleTimeRangeChange = (range) => {
    setTimeRange(range);
    // Logique pour filtrer les données en fonction de la plage sélectionnée
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Surveillance en Temps Réel</h1>
      <div className="flex justify-center mb-4">
        <button
          className={`px-4 py-2 rounded mr-2 ${timeRange === '24h' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          onClick={() => handleTimeRangeChange('24h')}
        >
          24h
        </button>
        <button
          className={`px-4 py-2 rounded ${timeRange === '7d' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          onClick={() => handleTimeRangeChange('7d')}
        >
          7 jours
        </button>
      </div>
      <div className="bg-white shadow rounded-lg p-4">
        <Line
          data={chartData}
          options={{
            responsive: true,
            scales: {
              x: {
                display: true,
                title: {
                  display: true,
                  text: 'Temps',
                },
              },
              y: {
                display: true,
                title: {
                  display: true,
                  text: 'Temps de Réponse (ms)',
                },
                beginAtZero: true,
                ticks: {
                  color: (context) => {
                    if (context.tick.value > 150) {
                      return 'red'; // Alerte visuelle si temps de réponse élevé
                    }
                    return 'black';
                  },
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default RealTimeChart;
