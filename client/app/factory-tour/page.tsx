import Link from 'next/link';
import { factoryTourData } from '@/lib/factoryTourData';

export default function FactoryTourIndex() {
  return (
    <div className="min-h-screen bg-[#1c1c1c] text-white pt-32 pb-20 px-6 mt-10 md:mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-wide text-[#00a651] mb-4">
            Factory Tour
          </h1>
          <p className="text-gray-300 text-lg">
            工場見学ポイント (Factory View Points)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {factoryTourData.map((item) => (
            <Link 
              key={item.id} 
              href={`/factory-tour/${item.id}`}
              className="bg-[#1b365d] border border-gray-700 hover:border-[#00a651] transition-colors rounded-lg p-6 flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 bg-[#00a651] rounded-full flex items-center justify-center text-xl font-bold mb-4 group-hover:scale-110 transition-transform">
                {item.pointNumber}
              </div>
              <h2 className="text-lg font-bold mb-2 uppercase">
                {item.titleEn}
              </h2>
              <h3 className="text-sm text-gray-300 opacity-80 mt-auto pt-4 border-t border-gray-600/50 w-full">
                {item.titleJa}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
