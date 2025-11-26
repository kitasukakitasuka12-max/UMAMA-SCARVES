import React, { useState } from 'react';
import { PRODUCT_IMAGES } from '../constants';

const ImageGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(PRODUCT_IMAGES[0]);

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full aspect-square bg-gray-50 rounded-lg overflow-hidden border border-gray-100 shadow-sm">
        <img 
          src={selectedImage} 
          alt="Digital Scarf Detail" 
          className="w-full h-full object-cover transition-opacity duration-300 ease-in-out"
        />
      </div>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {PRODUCT_IMAGES.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(img)}
            className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-all duration-200 ${
              selectedImage === img ? 'border-brand-black opacity-100' : 'border-transparent opacity-60 hover:opacity-100'
            }`}
          >
            <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;