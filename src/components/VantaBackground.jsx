// src/components/VantaBackground.jsx
import React, { useEffect, useRef, useState } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import HALO from 'vanta/dist/vanta.halo.min';
import FOG from 'vanta/dist/vanta.fog.min';
import * as THREE from 'three';

const VantaBackground = ({ 
  children,
  effect,
  
  // Common props
  mouseControls,
  touchControls,
  gyroControls,
  backgroundColor,
  
  // FOG effect props
  backgroundAlpha,
  baseColor,
  blurFactor,
  highlightColor,
  lowlightColor,
  midtoneColor,
  scale,
  scaleMobile,
  speed,
  zoom,
  
  // HALO effect props
  haloBaseColor,
  amplitudeFactor,
  xOffset,
  yOffset,
  size,
  
  // NET effect props
  color,
  points,
  maxDistance,
  spacing,
  showDots
}) => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      let vantaInstance;
      
      if (effect === 'FOG') {
        vantaInstance = FOG({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls,
          touchControls,
          gyroControls,
          minHeight: 200,
          minWidth: 200,
          backgroundAlpha,
          baseColor,
          blurFactor,
          highlightColor,
          lowlightColor,
          midtoneColor,
          scale,
          scaleMobile,
          speed,
          zoom
        });
      } else if (effect === 'HALO') {
        vantaInstance = HALO({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls,
          touchControls,
          gyroControls,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          baseColor: haloBaseColor,
          backgroundColor,
          amplitudeFactor,
          xOffset,
          yOffset,
          size
        });
      } else if (effect === 'NET') {
        vantaInstance = NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls,
          touchControls,
          gyroControls,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color,
          backgroundColor,
          points,
          maxDistance,
          spacing,
          showDots
        });
      }
      
      setVantaEffect(vantaInstance);
    }
    
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [
    vantaEffect, effect, mouseControls, touchControls, gyroControls,
    backgroundAlpha, baseColor, blurFactor, highlightColor, lowlightColor, midtoneColor,
    scale, scaleMobile, speed, zoom, haloBaseColor, amplitudeFactor, xOffset, yOffset, size,
    color, points, maxDistance, spacing, showDots, backgroundColor
  ]);

  useEffect(() => {
    const handleResize = () => {
      if (vantaEffect) {
        vantaEffect.resize();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [vantaEffect]);

  return (
    <div 
      ref={vantaRef} 
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1
      }}
    >
      {children}
    </div>
  );
};

export default VantaBackground;