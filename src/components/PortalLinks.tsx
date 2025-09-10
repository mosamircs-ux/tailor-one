
import React from 'react';
import { Users, User, Database } from 'lucide-react';
import PortalCard from './PortalCard';

const PortalLinks = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Access Portals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PortalCard
            title="Customer Portal"
            description="Customize clothing, upload measurements, and manage your orders"
            icon={<Users className="w-8 h-8 text-blue-500" />}
            link="/customer-portal"
            color="border-blue-500"
          />
          
          <PortalCard
            title="Tailor Portal"
            description="Manage customer orders, update progress, and communicate with clients"
            icon={<User className="w-8 h-8 text-green-500" />}
            link="/tailor-portal"
            color="border-green-500"
          />
          
          <PortalCard
            title="Supplier Portal"
            description="Manage fabric inventory, fulfill orders, and coordinate with tailors"
            icon={<Database className="w-8 h-8 text-purple-500" />}
            link="/supplier-portal"
            color="border-purple-500"
          />
        </div>
      </div>
    </section>
  );
};

export default PortalLinks;
