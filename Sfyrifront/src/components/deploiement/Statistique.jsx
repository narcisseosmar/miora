import React from 'react';
import ApexCharts from 'react-apexcharts';

// Fonction pour générer des données aléatoires
const generateData = (count, yrange) => {
  const series = [];
  for (let i = 0; i < count; i++) {
    const x = `Day ${i + 1}`;
    const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    series.push({ x, y });
  }
  return series;
};

// Fonction pour générer des données pour chaque mois
const generateMonthlyData = (days, yrange) => {
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  return months.map(month => ({
    name: month,
    data: generateData(days, yrange)
  }));
};

class Statistique extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartOptions: {
        series: generateMonthlyData(31, { min: 0, max: 100 }), // 31 jours, plage de valeurs ajustée
        chart: {
          height: 500, // Augmenter la hauteur pour un meilleur affichage
          type: 'heatmap',
        },
        plotOptions: {
          heatmap: {
            shadeIntensity: 0.5,
            radius: 4, // Augmenter le rayon pour plus d'arrondi
            useFillColorAsStroke: true,
            colorScale: {
              ranges: [
                {
                  from: 0,
                  to: 25,
                  name: 'Low',
                  color: '#e0f7fa' // Bleu clair
                },
                {
                  from: 26,
                  to: 50,
                  name: 'Medium',
                  color: '#b2ebf2' // Bleu moyen
                },
                {
                  from: 51,
                  to: 75,
                  name: 'High',
                  color: '#4fc3f7' // Bleu foncé
                },
                {
                  from: 76,
                  to: 100,
                  name: 'Extreme',
                  color: '#0288d1' // Bleu profond
                }
              ]
            }
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 1
        },
        title: {
          text: 'Deploiement continue de l\'application'
        },
        xaxis: {
          type: 'category',
          categories: Array.from({ length: 31 }, (_, i) => `Day ${i + 1}`),
          labels: {
            rotate: -45,
            style: {
              colors: '#9aa0ac',
              fontSize: '12px'
            }
          },
          tickAmount: 31,
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        },
        yaxis: {
          type: 'category',
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          labels: {
            style: {
              colors: '#9aa0ac',
              fontSize: '12px'
            }
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        },
        grid: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          },
          borderColor: '#e0e0e0',
          strokeDashArray: 4,
          row: {
            colors: ['#f5f5f5', 'transparent'],
            opacity: 0.5,
            offset: 2 // Augmenter l'espacement entre les lignes
          },
          column: {
            colors: ['#f5f5f5', 'transparent'],
            opacity: 0.5,
            offset: 2 // Augmenter l'espacement entre les colonnes
          }
        },
        fill: {
          opacity: 1
        }
      }
    };
  }

  render() {
    return (
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ overflow: 'auto', borderRadius: '20px', border: '1px solid #ccc', padding: '20px' }}>
          <ApexCharts
            options={this.state.chartOptions}
            series={this.state.chartOptions.series}
            type="heatmap"
            height={500}
          />
        </div>
      </div>
    );
  }
}

export default Statistique;
