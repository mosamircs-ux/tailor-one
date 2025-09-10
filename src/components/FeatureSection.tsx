
import React from 'react';
import { Shirt, Users, Pencil } from 'lucide-react';

const FeatureSection = () => {
  const features = [
    {
      icon: <Shirt size={48} className="text-accent" />,
      title: "Custom Design",
      description: "Design clothing exactly how you want it, from fabric to buttons and everything in between."
    },
    {
      icon: <Users size={48} className="text-secondary" />,
      title: "Expert Tailors",
      description: "Connect with skilled tailors who bring your design to life with precision and expertise."
    },
    {
      icon: <Pencil size={48} className="text-primary" />,
      title: "Perfect Fit",
      description: "Input your measurements once and get perfectly fitted garments every time you order."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose TailorMade</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We bring together customers, tailors, and suppliers to create a seamless custom clothing experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-light p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary/5 rounded-xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">How It Works</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h4 className="font-semibold">Design Your Garment</h4>
                    <p className="text-gray-600">Use our intuitive design interface to customize every aspect of your clothing.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h4 className="font-semibold">Connect with Tailors</h4>
                    <p className="text-gray-600">We match you with skilled tailors who specialize in your garment type.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h4 className="font-semibold">Source Quality Materials</h4>
                    <p className="text-gray-600">Our network of suppliers provides premium fabrics and materials.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <h4 className="font-semibold">Receive Your Custom Garment</h4>
                    <p className="text-gray-600">Track your order and receive your perfect-fit custom clothing.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                {/* Placeholder for how-it-works image or illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mb-4">
                      <div className="w-16 h-16 mx-auto rounded-full bg-primary flex items-center justify-center text-white">
                        <Shirt size={32} />
                      </div>
                    </div>
                    <p className="text-gray-500 font-medium">Process Visualization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
