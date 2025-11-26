import React from 'react';
import { MessageCircle, CheckCircle2 } from 'lucide-react';
import { PRODUCT_SPECS, WHATSAPP_LINK } from '../constants';

const ProductInfo: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div>
        <h2 className="text-gray-500 uppercase tracking-widest text-sm font-semibold mb-2">
          New Collection
        </h2>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
          Digital Scarves – US Series
        </h1>
        <div className="w-20 h-1 bg-gray-900 mb-6"></div>
        <p className="text-lg text-gray-600 leading-relaxed">
          Digital Scarves adalah produk premium dari UmamaScarves. Menggunakan Umamascarves box yang kokoh dengan desain motif yang sesuai dengan motif hijab.
        </p>
      </div>

      {/* Features */}
      <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
        <p className="text-gray-700 mb-4 leading-relaxed">
          ✨ Umamascarves Sedang Berbagi Hadiah! ✨
Saat ini Umamascarves membagikan hijab Hijab Box Motif Digital Scarves V.15 GRATIS kepada 100 member baru.
Jangan lewatkan kesempatan ini — dapatkan sekarang juga!
        </p>
        
        <div className="space-y-3 mt-6">
          {PRODUCT_SPECS.map((spec, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <CheckCircle2 size={20} className="text-gray-900" />
              <span className="font-semibold text-gray-900 w-24 md:w-32">{spec.label}:</span>
              <span className="text-gray-600">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Instructions */}
      <div className="border-l-4 border-gray-900 pl-4 py-1">
        <p className="italic text-gray-600">
          Caranya sangat mudah untuk mendapatkan hijab Umamascarves, cukup ikuti arahan dan membaca setiap penjelasan yang diberikan.
        </p>
      </div>

      {/* CTA Button */}
      <div className="pt-4">
        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-lg py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          <MessageCircle size={28} className="accent-sky-600" />
          <span>Join Sekarang</span>
        </a>
        <p className="text-center text-xs text-gray-400 mt-3">
          Klik tombol di atas untuk bergabung dengan komunitas kami
        </p>
      </div>
    </div>
  );
};

export default ProductInfo;
