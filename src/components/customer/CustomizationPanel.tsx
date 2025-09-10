
import React, { useState } from 'react';
import CustomButton from '../ui/CustomButton';

const CustomizationPanel = () => {
  const [activeTab, setActiveTab] = useState('style');

  const tabs = [
    { id: 'style', label: 'Style' },
    { id: 'fabric', label: 'Fabric' },
    { id: 'color', label: 'Color' },
    { id: 'details', label: 'Details' },
  ];
  
  // Sample color options
  const colorOptions = [
    { id: 'navy', color: '#2C3E50', name: 'Navy Blue' },
    { id: 'white', color: '#FFFFFF', name: 'White' },
    { id: 'black', color: '#333333', name: 'Black' },
    { id: 'lightblue', color: '#3498DB', name: 'Light Blue' },
    { id: 'red', color: '#E74C3C', name: 'Red' },
    { id: 'gray', color: '#95A5A6', name: 'Gray' },
  ];
  
  // Sample fabric options
  const fabricOptions = [
    { id: 'cotton', name: 'Cotton', description: 'Soft, breathable natural fabric' },
    { id: 'linen', name: 'Linen', description: 'Light and airy natural fabric' },
    { id: 'silk', name: 'Silk', description: 'Smooth, luxurious natural fabric' },
    { id: 'polyester', name: 'Polyester', description: 'Durable synthetic fabric' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="flex border-b">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`flex-1 py-3 text-center font-medium ${
              activeTab === tab.id
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-500 hover:text-gray-800'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      <div className="p-4">
        {activeTab === 'style' && (
          <div>
            <h4 className="font-medium mb-3">Choose a Style</h4>
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="border rounded-lg p-3 cursor-pointer hover:bg-light">
                <div className="bg-gray-100 aspect-square mb-2 rounded flex items-center justify-center">
                  <span className="text-xs text-gray-500">Slim Fit</span>
                </div>
                <p className="text-sm font-medium text-center">Slim Fit</p>
              </div>
              <div className="border rounded-lg p-3 cursor-pointer hover:bg-light">
                <div className="bg-gray-100 aspect-square mb-2 rounded flex items-center justify-center">
                  <span className="text-xs text-gray-500">Regular Fit</span>
                </div>
                <p className="text-sm font-medium text-center">Regular Fit</p>
              </div>
              <div className="border rounded-lg p-3 cursor-pointer hover:bg-light">
                <div className="bg-gray-100 aspect-square mb-2 rounded flex items-center justify-center">
                  <span className="text-xs text-gray-500">Relaxed Fit</span>
                </div>
                <p className="text-sm font-medium text-center">Relaxed Fit</p>
              </div>
              <div className="border rounded-lg p-3 cursor-pointer hover:bg-light">
                <div className="bg-gray-100 aspect-square mb-2 rounded flex items-center justify-center">
                  <span className="text-xs text-gray-500">Athletic Fit</span>
                </div>
                <p className="text-sm font-medium text-center">Athletic Fit</p>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'fabric' && (
          <div>
            <h4 className="font-medium mb-3">Select Fabric</h4>
            <div className="space-y-3">
              {fabricOptions.map(fabric => (
                <div 
                  key={fabric.id}
                  className="flex items-center border rounded-lg p-3 cursor-pointer hover:bg-light"
                >
                  <div className="w-12 h-12 bg-gray-200 rounded mr-3"></div>
                  <div>
                    <p className="font-medium">{fabric.name}</p>
                    <p className="text-sm text-gray-600">{fabric.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeTab === 'color' && (
          <div>
            <h4 className="font-medium mb-3">Select Color</h4>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {colorOptions.map(color => (
                <div 
                  key={color.id}
                  className="flex flex-col items-center cursor-pointer"
                >
                  <div 
                    className="w-12 h-12 rounded-full mb-2 border border-gray-200" 
                    style={{ backgroundColor: color.color }}
                  ></div>
                  <span className="text-sm">{color.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeTab === 'details' && (
          <div>
            <h4 className="font-medium mb-3">Customize Details</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Collar Type</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>Classic Spread</option>
                  <option>Button-Down</option>
                  <option>Cutaway</option>
                  <option>Mandarin</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Cuff Style</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>Standard</option>
                  <option>French (Double)</option>
                  <option>Convertible</option>
                  <option>Round</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Button Type</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>Standard Plastic</option>
                  <option>Mother of Pearl</option>
                  <option>Metal</option>
                  <option>Wood</option>
                </select>
              </div>
            </div>
          </div>
        )}
        
        <div className="mt-6 flex gap-3">
          <CustomButton variant="outline" className="flex-1">Reset</CustomButton>
          <CustomButton variant="primary" className="flex-1">Apply Changes</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default CustomizationPanel;
