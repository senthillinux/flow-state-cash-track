
import React, { useState } from 'react';
import { Package, AlertCircle, TrendingUp, TrendingDown } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

interface InventoryItem {
  id: string;
  name: string;
  category: string;
  stock: number;
  minStock: number;
  price: number;
  value: number;
  status: 'in-stock' | 'low-stock' | 'out-of-stock';
}

const InventoryGrid = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const inventoryItems: InventoryItem[] = [
    {
      id: '1',
      name: 'iPhone 15 Pro',
      category: 'Smartphones',
      stock: 25,
      minStock: 10,
      price: 999,
      value: 24975,
      status: 'in-stock',
    },
    {
      id: '2',
      name: 'MacBook Air M2',
      category: 'Laptops',
      stock: 8,
      minStock: 5,
      price: 1199,
      value: 9592,
      status: 'in-stock',
    },
    {
      id: '3',
      name: 'AirPods Pro',
      category: 'Accessories',
      stock: 3,
      minStock: 10,
      price: 249,
      value: 747,
      status: 'low-stock',
    },
    {
      id: '4',
      name: 'Samsung Galaxy S24',
      category: 'Smartphones',
      stock: 0,
      minStock: 8,
      price: 899,
      value: 0,
      status: 'out-of-stock',
    },
    {
      id: '5',
      name: 'iPad Pro 12.9"',
      category: 'Tablets',
      stock: 15,
      minStock: 5,
      price: 1099,
      value: 16485,
      status: 'in-stock',
    },
    {
      id: '6',
      name: 'Apple Watch Series 9',
      category: 'Wearables',
      stock: 12,
      minStock: 8,
      price: 399,
      value: 4788,
      status: 'in-stock',
    },
  ];

  const filteredItems = inventoryItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'in-stock':
        return <Badge className="bg-green-100 text-green-800">In Stock</Badge>;
      case 'low-stock':
        return <Badge className="bg-yellow-100 text-yellow-800">Low Stock</Badge>;
      case 'out-of-stock':
        return <Badge className="bg-red-100 text-red-800">Out of Stock</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'low-stock':
      case 'out-of-stock':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Package className="h-4 w-4 text-green-500" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Inventory Management</h3>
          <p className="text-gray-600">Monitor stock levels and product values</p>
        </div>
        
        <div className="w-full sm:w-64">
          <Input
            placeholder="Search inventory..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                {getStatusIcon(item.status)}
                <div>
                  <h4 className="font-semibold text-gray-900">{item.name}</h4>
                  <p className="text-sm text-gray-600">{item.category}</p>
                </div>
              </div>
              {getStatusBadge(item.status)}
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Stock Level</span>
                <span className="font-medium">{item.stock} units</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Min Stock</span>
                <span className="text-sm text-gray-500">{item.minStock} units</span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    item.stock <= item.minStock ? 'bg-red-500' : 'bg-green-500'
                  }`}
                  style={{
                    width: `${Math.min((item.stock / (item.minStock * 2)) * 100, 100)}%`,
                  }}
                ></div>
              </div>
              
              <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                <span className="text-sm text-gray-600">Unit Price</span>
                <span className="font-medium">${item.price}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Total Value</span>
                <span className="font-semibold text-green-600">${item.value.toLocaleString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InventoryGrid;
