import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

interface FactoryTourLayoutProps {
  pointNumber: string;
  titleEn: string;
  titleJa: string;
  content: string[];
}

export default function FactoryTourLayout({
  pointNumber,
  titleEn,
  titleJa,
  content,
}: FactoryTourLayoutProps) {
  return (
    <div className="min-h-screen bg-[#1c1c1c] text-white font-sans flex flex-col relative overflow-hidden">
      {/* Red border mimicking the design card */}
      <div className="absolute inset-2 border border-red-800/40 rounded-sm pointer-events-none z-50"></div>

      {/* Header section with blue background */}
      <div className="bg-[#1b365d] pt-32 pb-16 px-6 relative z-10 min-h-[150px] flex flex-col justify-center mt-10 md:mt-20">
        <div className="max-w-4xl mx-auto w-full mb-8">
          <Link href="/factory-tour" className="inline-flex items-center text-white/70 hover:text-white text-sm uppercase tracking-wider transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Index
          </Link>
        </div>
        <div className="max-w-4xl mx-auto w-full flex flex-col md:flex-row md:items-center justify-between gap-6 text-white">
          <div className="flex items-center gap-2">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="text-xl font-bold tracking-wider text-white">
              POINT {pointNumber}
            </span>
          </div>
          <div className="text-left md:text-right">
            <div className="text-2xl md:text-3xl font-bold uppercase tracking-wide leading-tight text-white">
              {titleEn}
            </div>
          </div>
        </div>
      </div>

      {/* Waves */}
      <div className="relative w-full z-10 bg-[#1b365d]">
        <svg
          viewBox="0 0 1440 180"
          className="w-full h-auto block"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* White Wave (Back layer, fills down) */}
          <path
            fill="#ffffff"
            d="M0,32L80,37.3C160,43,320,53,480,53.3C640,53,800,43,960,37.3C1120,32,1280,32,1360,32L1440,32L1440,180L0,180Z"
          ></path>
          
          {/* Green Wave (Middle layer, fills down) */}
          <path
            fill="#00a651"
            d="M0,50L80,55.3C160,61,320,71,480,71.3C640,71,800,61,960,55.3C1120,50,1280,50,1360,50L1440,50L1440,180L0,180Z"
          ></path>

          {/* Dark Background (Front layer, fills down) */}
          <path
            fill="#1c1c1c"
            d="M0,90L80,85C160,80,320,70,480,85C640,100,800,140,960,140C1120,140,1280,100,1360,80L1440,60L1440,180L0,180Z"
          ></path>
        </svg>
      </div>

      {/* Content Section */}
      <div className="flex-1 max-w-2xl mx-auto px-6 pt-8 pb-20 relative z-20">
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-white text-center md:text-left">
          {titleJa}
        </h2>
        <div className="space-y-6 text-sm md:text-base leading-relaxed text-gray-200">
          {content.map((paragraph, index) => (
            <p key={index} className={paragraph.startsWith('•') ? 'pl-4' : ''}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
