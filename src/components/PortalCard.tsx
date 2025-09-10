
import React from 'react';
import { Link } from 'react-router-dom';

interface PortalCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  color: string;
}

const PortalCard = ({ title, description, icon, link, color }: PortalCardProps) => {
  return (
    <Link 
      to={link}
      className={`bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border-t-4 ${color} flex flex-col h-full`}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <div className="flex justify-end">
        <span className="text-sm font-medium underline">Enter Portal →</span>
      </div>
    </Link>
  );
};

export default PortalCard;
