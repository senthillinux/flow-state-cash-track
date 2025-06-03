
import React from 'react';
import { DollarSign, TrendingUp, Package, ShoppingCart } from 'lucide-react';
import MetricsCard from './MetricsCard';

const Dashboard = () => {
  const metrics = [
    {
      title: 'Total Cash',
      value: '$24,580',
      change: '+12.5% from last month',
      changeType: 'positive' as const,
      icon: DollarSign,
    },
    {
      title: 'Monthly Revenue',
      value: '$18,240',
      change: '+8.2% from last month',
      changeType: 'positive' as const,
      icon: TrendingUp,
    },
    {
      title: 'Inventory Value',
      value: '$45,200',
      change: '-2.4% from last month',
      changeType: 'negative' as const,
      icon: Package,
    },
    {
      title: 'Total Transactions',
      value: '1,247',
      change: '+15.3% from last month',
      changeType: 'positive' as const,
      icon: ShoppingCart,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Dashboard Overview</h2>
        <p className="text-gray-600 mt-1">Track your cash flow and inventory performance</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <MetricsCard key={index} {...metric} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
