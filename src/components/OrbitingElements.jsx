import React, { useEffect, useRef } from 'react';

const OrbitingElements = React.memo(() => {
  const containerRef = useRef(null);

  useEffect(() => {
    const floaters = containerRef.current?.querySelectorAll('.floating-icon');
    if (!floaters) return;

    floaters.forEach((floater, index) => {
      // Spread icons evenly around the model in different positions
      const angle = (index / floaters.length) * Math.PI * 2;
      const baseRadius = 180 + (Math.random() * 60);
      const startX = Math.cos(angle) * baseRadius;
      const startY = Math.sin(angle) * baseRadius * 0.6;
      
      const moveX = (Math.random() - 0.5) * 60;
      const moveY = (Math.random() - 0.5) * 40;
      const duration = 8 + Math.random() * 8;
      const delay = Math.random() * 3;

      floater.style.left = `calc(50% + ${startX}px)`;
      floater.style.top = `calc(45% + ${startY}px)`;
      floater.style.setProperty('--move-x', `${moveX}px`);
      floater.style.setProperty('--move-y', `${moveY}px`);
      floater.style.animationDuration = `${duration}s`;
      floater.style.animationDelay = `${delay}s`;
    });
  }, []);

  return (
    <div ref={containerRef} className="absolute top-0 right-0 w-1/2 h-full pointer-events-none z-20">
      <div className="relative w-full h-full">\n        {/* Floating tech stack icons */}
        <div className="floating-icon absolute w-12 h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center p-2 pointer-events-auto cursor-pointer hover:scale-110 transition-transform">
          <img src="/images/logos/react.png" alt="React" className="w-full h-full object-contain" />
        </div>
        <div className="floating-icon absolute w-10 h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center p-2 pointer-events-auto cursor-pointer hover:scale-110 transition-transform">
          <img src="/images/logos/python.svg" alt="Python" className="w-full h-full object-contain" />
        </div>
        <div className="floating-icon absolute w-12 h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center p-2 pointer-events-auto cursor-pointer hover:scale-110 transition-transform">
          <img src="/images/logos/node.png" alt="Node" className="w-full h-full object-contain" />
        </div>
        <div className="floating-icon absolute w-10 h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center p-2 pointer-events-auto cursor-pointer hover:scale-110 transition-transform">
          <img src="/images/logos/git.svg" alt="Git" className="w-full h-full object-contain" />
        </div>
        <div className="floating-icon absolute w-14 h-14 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center p-2 pointer-events-auto cursor-pointer hover:scale-110 transition-transform">
          <img src="/images/logos/three.png" alt="Three.js" className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  );
});

OrbitingElements.displayName = 'OrbitingElements';

export default OrbitingElements;
