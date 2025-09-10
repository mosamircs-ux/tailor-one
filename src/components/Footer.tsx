
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TailorMade</h3>
            <p className="text-gray-300 mb-4">
              Connecting customers, tailors, and suppliers for personalized fashion.
            </p>
            <div className="flex space-x-4">
              {/* Social media icons would go here */}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Portals</h4>
            <ul className="space-y-2">
              <li><Link to="/customer-portal" className="text-gray-300 hover:text-white transition">Customer Portal</Link></li>
              <li><Link to="/tailor-portal" className="text-gray-300 hover:text-white transition">Tailor Portal</Link></li>
              <li><Link to="/supplier-portal" className="text-gray-300 hover:text-white transition">Supplier Portal</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/sizing-guide" className="text-gray-300 hover:text-white transition">Sizing Guide</Link></li>
              <li><Link to="/fabric-guide" className="text-gray-300 hover:text-white transition">Fabric Guide</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition">FAQ</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-gray-300 hover:text-white transition">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-white transition">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="text-gray-300 hover:text-white transition">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-700 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} TailorMade. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
