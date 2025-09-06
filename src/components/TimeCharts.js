import React from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  ArcElement, 
  Tooltip, 
  Legend, 
  CategoryScale, 
  LinearScale, 
  BarElement,
  Title 
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

const TimeCharts = ({ dailyData }) => {
  const weeklyData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Focus Score (%)',
        data: [65, 78, 82, 75, 90],
        backgroundColor: 'rgba(51, 131, 212, 0.7)',
        borderColor: 'rgba(51, 131, 212, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: '#1E2124'
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(189, 221, 242, 0.3)'
        },
        ticks: {
          color: '#1E2124'
        }
      },
      x: {
        grid: {
          color: 'rgba(189, 221, 242, 0.3)'
        },
        ticks: {
          color: '#1E2124'
        }
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="cool-chart">
        <h2 className="text-xl font-bold mb-6 text-[#1E2124]">Today's Summary</h2>
        <div className="h-64">
          <Doughnut data={dailyData} options={chartOptions} />
        </div>
        <div className="mt-2 text-center text-sm text-[#1E2124]">
          Productive: 6h 20m | Distracted: 45m | Away: 1h 10m
        </div>
      </div>
      
      <div className="cool-chart">
        <h2 className="text-xl font-bold mb-6 text-[#1E2124]">Weekly Trends</h2>
        <div className="h-64">
          <Bar data={weeklyData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default TimeCharts;