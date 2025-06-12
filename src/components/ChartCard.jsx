import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const ChartCard = ({ title, data, showGroups, showCS, showOCR }) => {
  const datasets = [];

  if (showGroups) {
    datasets.push({
      label: 'Groups %',
      data: data.map(d => d.groups),
      backgroundColor: '#a3e635',
      borderRadius: 12,
      borderSkipped: false,
      barThickness: 100
    });
  }

  if (showCS) {
    datasets.push({
      label: 'CS %',
      data: data.map(d => d.cs),
      backgroundColor: '#38bdf8',
      borderRadius: 12,
      borderSkipped: false,
      barThickness: 100
    });
  }

  if (showOCR) {
    datasets.push({
      label: 'OCR %',
      data: data.map(d => d.ocr),
      backgroundColor: '#facc15',
      borderRadius: 12,
      borderSkipped: false,
      barThickness:100
    });
  }

  const chartData = {
    labels: data.map(d => d.month),
    datasets
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw.toFixed(2)}%`
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: val => `${val}%`
        }
      }
    }
  };

  return (
    <div className="p-6 bg-white rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold text-center mb-4">{title}</h2>
      {datasets.length > 0 ? (
        <Bar data={chartData} options={options} />
      ) : (
        <p className="text-center text-gray-500">No data to display</p>
      )}
    </div>
  );
};

export default ChartCard;
