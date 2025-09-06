import React from 'react';
import Header from './components/Header';
import LiveActivity from './components/LiveActivity';
import TimeCharts from './components/TimeCharts';
import Controls from './components/Controls';
import SessionHistory from './components/SessionHistory';

const mockData = {
  currentUser: { name: "Lincia", score: 82 },
  currentActivity: { app: "Visual Studio Code", time: "45m" },
  dailyData: {
    labels: ['Productive', 'Distracted', 'Away'],
    datasets: [
      {
        data: [6.3, 0.75, 1.2],
        backgroundColor: ['#3383D4', '#EF4444', '#6B7280'],
      }
    ]
  },
  sessions: [
    { id: 1, time: "09:15 - 10:45", user: "Lincia", activity: "Coding (VS Code)" },
    { id: 2, time: "10:45 - 10:50", user: "Unknown", activity: "Desktop Not Active", image: true },
    { id: 3, time: "10:50 - 12:30", user: "Lincia", activity: "Coding (VS Code)" },
  ]
};

function App() {
  return (
    <div className="App min-h-screen" style={{backgroundColor: 'var(--bg-color)'}}>
      <Header currentUser={mockData.currentUser} />
      
      <main className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <LiveActivity activity={mockData.currentActivity} />
          <Controls />
        </div>

        <div className="lg:col-span-1">
          <TimeCharts dailyData={mockData.dailyData} />
        </div>

        <div className="lg:col-span-1">
          <SessionHistory sessions={mockData.sessions} />
        </div>
      </main>
    </div>
  );
}

export default App;