
import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Dashboard from '@/components/Dashboard';
import TransactionList from '@/components/TransactionList';
import InventoryGrid from '@/components/InventoryGrid';
import AddTransactionForm from '@/components/AddTransactionForm';

const Index = () => {
  const [isAddTransactionOpen, setIsAddTransactionOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Dashboard Overview */}
          <Dashboard />
          
          {/* Action Button */}
          <div className="flex justify-end">
            <Button 
              onClick={() => setIsAddTransactionOpen(true)}
              className="bg-green-600 hover:bg-green-700"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Transaction
            </Button>
          </div>
          
          {/* Transaction List */}
          <TransactionList />
          
          {/* Inventory Grid */}
          <InventoryGrid />
        </div>
      </main>
      
      {/* Add Transaction Modal */}
      <AddTransactionForm 
        isOpen={isAddTransactionOpen}
        onClose={() => setIsAddTransactionOpen(false)}
      />
    </div>
  );
};

export default Index;
