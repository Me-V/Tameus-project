'use client';
import React, { useRef, useEffect } from 'react';
import { Copy, PlusSquare, CloudUpload } from 'lucide-react';

export default function Hero() {
  const borderRef = useRef<HTMLDivElement>(null);
  const hoverRef = useRef<boolean>(false);
  const rotationRef = useRef<number>(0);

  useEffect(() => {
    let animationFrameId: number;
    let currentSpeed = 0.5; // Base slow speed (degrees per frame)
    const targetFastSpeed = 4.0; // Fast speed on hover
    const targetSlowSpeed = 0.5; // Slow speed normally
    
    const animate = () => {
      // Smoothly interpolate speed for a soothing transition
      const targetSpeed = hoverRef.current ? targetFastSpeed : targetSlowSpeed;
      currentSpeed += (targetSpeed - currentSpeed) * 0.05; 
      
      rotationRef.current = (rotationRef.current + currentSpeed) % 360;
      
      if (borderRef.current) {
        borderRef.current.style.transform = `rotate(${rotationRef.current}deg)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center pt-20 pb-8 px-4 z-10 w-full">
      <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-3">
        Transfer and have your files travel for free
      </h1>
      <p className="text-base text-white/90 text-center mb-8 max-w-2xl">
        TransferNow is a simple and free way to securely share your files and folders.
      </p>

      {/* Upload Component */}
      <div className="relative flex flex-col items-center group">
        {/* The Start Circle */}
        <div 
          className="relative w-56 h-56 rounded-full bg-white flex items-center justify-center shadow-[0_0_40px_rgba(255,100,0,0.6)] cursor-pointer hover:scale-105 transition-transform duration-300 z-20 overflow-hidden"
          onMouseEnter={() => { hoverRef.current = true; }}
          onMouseLeave={() => { hoverRef.current = false; }}
        >
          {/* Animated border ring - divided into 4 orange variants */}
          <div 
            ref={borderRef}
            className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,#FF4500_0_90deg,#FF6B00_90deg_180deg,#FF8C00_180deg_270deg,#FFA500_270deg_360deg)]" 
          />
          
          {/* Inner white circle to hide the center of the conic gradient, leaving just the border */}
          <div className="absolute inset-[10px] rounded-full bg-white flex items-center justify-center overflow-hidden">
            <span className="absolute text-3xl font-bold text-[#FF6B00] transition-all duration-300 transform group-hover:translate-y-8 group-hover:opacity-0">Start</span>
            <CloudUpload className="absolute w-12 h-12 text-[#FF6B00] transition-all duration-300 transform -translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100" strokeWidth={2.5} />
          </div>
        </div>

        {/* Drag and drop card - attaches right below the circle */}
        <div className="bg-white rounded-xl shadow-xl w-80 pt-8 pb-6 px-6 mt-6 text-center z-10 relative animate-float">
          {/* Bubble Pointer (Triangle) */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[12px] border-b-white" />
          
          <p className="text-gray-600 font-medium mb-4">
            Click or drag-and-drop<br />your files here
          </p>
          
          <div className="flex items-center justify-center my-4">
             <hr className="w-1/4 border-gray-200" />
             <span className="px-2 text-xs text-gray-400">OR</span>
             <hr className="w-1/4 border-gray-200" />
          </div>

          <div className="flex justify-center space-x-6 mt-4">
            <button className="p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
              <Copy className="w-6 h-6" />
            </button>
            <button className="p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
              <PlusSquare className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
