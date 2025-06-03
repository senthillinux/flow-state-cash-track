
import React from 'react';
import { DollarSign, Package, TrendingUp } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-green-600 p-2 rounded-lg">
              <DollarSign className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">CashFlow Pro</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-green-600 transition-colors">
              <TrendingUp className="h-4 w-4" />
              <span>Dashboard</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-green-600 transition-colors">
              <Package className="h-4 w-4" />
              <span>Inventory</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
