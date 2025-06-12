import { useState } from 'react';
import ChartCard from './ChartCard';
import { scores } from '../data/mockData';

const Dashboard = () => {
  const [showGroups, setShowGroups] = useState(true);
  const [showCS, setShowCS] = useState(true);
  const [showOCR, setShowOCR] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-green-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-6">📊 Jim QA & OCR Dashboard</h1>

      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        <button
          onClick={() => setShowGroups(prev => !prev)}
          className={`px-4 py-2 rounded-full ${showGroups ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
        >
          Toggle Groups
        </button>
        <button
          onClick={() => setShowCS(prev => !prev)}
          className={`px-4 py-2 rounded-full ${showCS ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Toggle CS
        </button>
        <button
          onClick={() => setShowOCR(prev => !prev)}
          className={`px-4 py-2 rounded-full ${showOCR ? 'bg-yellow-400 text-black' : 'bg-gray-200'}`}
        >
          Toggle OCR
        </button>
      </div>

      <ChartCard
        title="Monthly Performance"
        data={scores.months}
        showGroups={showGroups}
        showCS={showCS}
        showOCR={showOCR}
      />
    </div>
  );
};

export default Dashboard;
