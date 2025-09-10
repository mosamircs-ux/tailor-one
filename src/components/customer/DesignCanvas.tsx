
import React from 'react';
import CustomButton from '../ui/CustomButton';

const DesignCanvas = () => {
  return (
    <div className="bg-white p-2 md:p-6 rounded-xl shadow-sm">
      <div className="aspect-[3/4] bg-light rounded-lg flex items-center justify-center mb-4">
        {/* This would be replaced with an actual design visualization canvas */}
        <div className="w-56 h-72 bg-white relative mx-auto">
          {/* Simple shirt illustration */}
          <div className="absolute inset-0">
            <div className="w-full h-full bg-accent/20 rounded"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-4 bg-accent/30"></div>
            <div className="absolute bottom-0 inset-x-0 h-16 bg-accent/30"></div>
            <div className="absolute top-10 inset-x-0 h-px bg-accent/40"></div>
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-px h-36 bg-accent/40"></div>
          </div>
          <div className="absolute bottom-2 right-2 flex space-x-1">
            <div className="w-6 h-6 bg-white/80 rounded-full flex items-center justify-center">
              <span className="text-xs">+</span>
            </div>
            <div className="w-6 h-6 bg-white/80 rounded-full flex items-center justify-center">
              <span className="text-xs">-</span>
            </div>
            <div className="w-6 h-6 bg-white/80 rounded-full flex items-center justify-center">
              <span className="text-xs">↺</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 md:gap-6">
        <div>
          <h3 className="font-semibold text-lg mb-2">Design Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Style:</span>
              <span className="font-medium">Slim Fit</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Fabric:</span>
              <span className="font-medium">Premium Cotton</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Color:</span>
              <span className="font-medium">Navy Blue</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Collar:</span>
              <span className="font-medium">Classic Spread</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Estimated Price:</span>
              <span className="font-medium">$89.00</span>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg mb-2">Actions</h3>
          <div className="space-y-2">
            <CustomButton variant="secondary" className="w-full text-sm">
              Save Design
            </CustomButton>
            <CustomButton variant="primary" className="w-full text-sm">
              Add to Cart
            </CustomButton>
            <CustomButton variant="outline" className="w-full text-sm">
              Share Design
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignCanvas;
