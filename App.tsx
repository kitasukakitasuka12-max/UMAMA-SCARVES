import React from 'react';
import Navbar from './components/Navbar';
import ImageGallery from './components/ImageGallery';
import ProductInfo from './components/ProductInfo';
import { Heart } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column: Images */}
            <div className="w-full">
              <ImageGallery />
            </div>

            {/* Right Column: Content */}
            <div className="w-full flex flex-col justify-center">
              <ProductInfo />
            </div>
          </div>

        </div>
      </main>

      <footer className="bg-gray-900 text-white py-12 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex justify-center items-center gap-2 mb-4 text-gray-400">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 fill-red-500" />
            <span>by Umamascarves</span>
          </div>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} UmamaScarves. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;