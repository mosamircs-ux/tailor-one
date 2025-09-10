
import React from 'react';
import CustomButton from '../ui/CustomButton';

const MeasurementForm = () => {
  const measurementFields = [
    { id: 'chest', label: 'Chest (inches)', placeholder: 'e.g., 40' },
    { id: 'waist', label: 'Waist (inches)', placeholder: 'e.g., 34' },
    { id: 'hips', label: 'Hips (inches)', placeholder: 'e.g., 42' },
    { id: 'shoulders', label: 'Shoulders (inches)', placeholder: 'e.g., 18' },
    { id: 'sleeve', label: 'Sleeve Length (inches)', placeholder: 'e.g., 25' },
    { id: 'neck', label: 'Neck (inches)', placeholder: 'e.g., 16' },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-xl font-semibold mb-4">Your Measurements</h3>
      <p className="mb-6 text-gray-600">
        Enter your measurements below to ensure a perfect fit. Need help? 
        <a href="#sizing-guide" className="text-accent ml-1 underline">
          Check our sizing guide
        </a>
      </p>
      
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {measurementFields.map(field => (
            <div key={field.id} className="form-group">
              <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-1">
                {field.label}
              </label>
              <input
                type="text"
                id={field.id}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder={field.placeholder}
              />
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
          <CustomButton variant="outline" type="button">
            Save Measurements
          </CustomButton>
          <CustomButton variant="accent" type="button">
            Use These Measurements
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default MeasurementForm;
