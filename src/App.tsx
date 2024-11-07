import React from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import InventorySection from './components/InventorySection';
import StatsSection from './components/StatsSection';
import RecentActivity from './components/RecentActivity';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Dashboard />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <InventorySection />
          </div>
          <div>
            <StatsSection />
          </div>
        </div>
        <RecentActivity />
      </main>
    </div>
  );
}

export default App;