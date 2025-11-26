import React from 'react';
import { ShoppingBag } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-100 py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-serif font-bold tracking-widest text-brand-black">
          UMAMASCARVES
        </div>
        <button className="text-gray-600 hover:text-black transition-colors">
          <ShoppingBag size={24} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;