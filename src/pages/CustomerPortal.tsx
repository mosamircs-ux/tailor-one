
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DesignCanvas from '@/components/customer/DesignCanvas';
import CustomizationPanel from '@/components/customer/CustomizationPanel';
import MeasurementForm from '@/components/customer/MeasurementForm';
import TemplateGallery from '@/components/customer/TemplateGallery';
import CustomButton from '@/components/ui/CustomButton';
import { Shirt, Ruler, ShoppingCart, User } from 'lucide-react';

const CustomerPortal = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div className="bg-primary text-white py-8">
          <div className="container-custom">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">Design Studio</h1>
                <p className="text-white/80">Create your custom clothing</p>
              </div>
              <div className="flex items-center gap-3">
                <CustomButton variant="secondary" className="hidden md:flex items-center gap-1">
                  <ShoppingCart size={18} />
                  <span>Cart (0)</span>
                </CustomButton>
                <CustomButton variant="outline" className="border-white text-white hover:bg-white/10">
                  <User size={18} />
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container-custom py-8">
          <div className="flex flex-wrap mb-6">
            <div className="w-full md:w-1/2 pr-0 md:pr-4 mb-4 md:mb-0">
              <div className="flex items-center mb-4">
                <Shirt className="text-primary mr-2" />
                <h2 className="text-xl font-semibold">Design Your Clothing</h2>
              </div>
              <div className="h-full">
                <DesignCanvas />
              </div>
            </div>
            <div className="w-full md:w-1/2 pl-0 md:pl-4">
              <div className="flex items-center mb-4">
                <Ruler className="text-primary mr-2" />
                <h2 className="text-xl font-semibold">Customize Options</h2>
              </div>
              <CustomizationPanel />
            </div>
          </div>
          
          <div className="mt-8 mb-4">
            <h2 className="text-xl font-semibold mb-4">Your Measurements</h2>
            <MeasurementForm />
          </div>
          
          <div className="mt-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">Browse Templates</h2>
            <TemplateGallery />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CustomerPortal;
