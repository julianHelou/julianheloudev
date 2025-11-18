'use client';

import { Button } from '@/components/ui/Button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-950 to-slate-900 text-foreground overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Animated blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-[float1_6s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-pink-400/20 to-orange-600/20 rounded-full blur-3xl animate-[float2_8s_ease-in-out_infinite]"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-cyan-400/20 to-teal-600/20 rounded-full blur-3xl animate-[float3_7s_ease-in-out_infinite]"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          {' '}
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Julian Helou
          </span>
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
          Full Stack Developer specializing in crafting innovative digital solutions with modern technologies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="primary" size="large" href="https://me.julianhelou.dev">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
