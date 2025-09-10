
import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from './ui/CustomButton';

const LandingHero = () => {
  return (
    <section className="pt-28 md:pt-32 pb-16 md:pb-24 bg-light">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary leading-tight">
              Custom Clothing <span className="text-secondary">Designed</span> For You
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-xl">
              Connect with tailors and material suppliers to create personalized fashion items that fit perfectly and express your unique style.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/customer-portal">
                <CustomButton variant="secondary" size="lg">
                  Start Designing
                </CustomButton>
              </Link>
              <Link to="/#how-it-works">
                <CustomButton variant="outline" size="lg">
                  How It Works
                </CustomButton>
              </Link>
            </div>
          </div>
          <div className="relative animate-slide-up">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="aspect-[4/3] bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-32 h-40 bg-gray-200 mx-auto mb-4 relative">
                    {/* Shirt template illustration */}
                    <div className="absolute inset-0 bg-accent/20 rounded"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-accent/30 rounded-b"></div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-accent/40"></div>
                  </div>
                  <div className="grid grid-cols-4 gap-2 max-w-xs mx-auto">
                    <div className="w-full aspect-square bg-primary rounded"></div>
                    <div className="w-full aspect-square bg-secondary rounded"></div>
                    <div className="w-full aspect-square bg-accent rounded"></div>
                    <div className="w-full aspect-square bg-gray-300 rounded"></div>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Style:</span>
                  <span>Business Casual</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Material:</span>
                  <span>Premium Cotton</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Color:</span>
                  <span>Navy Blue</span>
                </div>
                <div className="mt-4">
                  <CustomButton className="w-full">
                    Customize Now
                  </CustomButton>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/20 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
