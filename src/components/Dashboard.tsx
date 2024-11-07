import React from 'react';
import { Package, ShoppingCart, AlertTriangle, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Total Products</p>
            <h3 className="text-2xl font-bold text-gray-900">0</h3>
          </div>
          <Package className="h-8 w-8 text-blue-600" />
        </div>
        <p className="text-sm text-green-600 mt-2">↑ 12% increase</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Low Stock Items</p>
            <h3 className="text-2xl font-bold text-gray-900">18</h3>
          </div>
          <AlertTriangle className="h-8 w-8 text-yellow-500" />
        </div>
        <p className="text-sm text-red-600 mt-2">↑ 4 new alerts</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Today's Sales</p>
            <h3 className="text-2xl font-bold text-gray-900">0</h3>
          </div>
          <ShoppingCart className="h-8 w-8 text-green-600" />
        </div>
        <p className="text-sm text-green-600 mt-2">↑ 8% from yesterday</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Monthly Revenue</p>
            <h3 className="text-2xl font-bold text-gray-900">0</h3>
          </div>
          <TrendingUp className="h-8 w-8 text-purple-600" />
        </div>
        <p className="text-sm text-green-600 mt-2">↑ 15% from last month</p>
      </div>
    </div>
  );
};

export default Dashboard;