
import React from 'react';

const TemplateGallery = () => {
  const templates = [
    {
      id: 1,
      name: 'Classic Oxford Shirt',
      thumbnail: 'bg-blue-100',
      category: 'Shirts',
    },
    {
      id: 2,
      name: 'Business Casual Blazer',
      thumbnail: 'bg-gray-200',
      category: 'Jackets',
    },
    {
      id: 3,
      name: 'Modern Slim Fit Pants',
      thumbnail: 'bg-stone-200',
      category: 'Pants',
    },
    {
      id: 4,
      name: 'Summer Linen Shirt',
      thumbnail: 'bg-yellow-100',
      category: 'Shirts',
    },
    {
      id: 5,
      name: 'Formal Evening Dress',
      thumbnail: 'bg-purple-100',
      category: 'Dresses',
    },
    {
      id: 6,
      name: 'Casual Denim Jacket',
      thumbnail: 'bg-indigo-100',
      category: 'Jackets',
    },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold">Design Templates</h3>
        <div className="flex gap-2">
          <select className="px-3 py-1 border border-gray-300 rounded text-sm">
            <option>All Categories</option>
            <option>Shirts</option>
            <option>Pants</option>
            <option>Jackets</option>
            <option>Dresses</option>
          </select>
          <select className="px-3 py-1 border border-gray-300 rounded text-sm">
            <option>Most Popular</option>
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {templates.map(template => (
          <div 
            key={template.id} 
            className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className={`${template.thumbnail} aspect-[4/3] flex items-center justify-center`}>
              {/* Template thumbnail placeholder */}
              <div className="w-24 h-32 bg-white/70 rounded flex items-center justify-center">
                <span className="text-gray-500 text-xs">Template Preview</span>
              </div>
            </div>
            <div className="p-3">
              <h4 className="font-medium">{template.name}</h4>
              <p className="text-xs text-gray-500">{template.category}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 flex justify-center">
        <button className="text-accent hover:text-accent/80 font-medium flex items-center gap-1">
          Load More Templates
        </button>
      </div>
    </div>
  );
};

export default TemplateGallery;
