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
  const [isScrolling, setIsScrolling] = useState(false);

  // Handle scroll optimization for mobile
  useEffect(() => {
    let scrollTimeout;
    
    const handleScroll = () => {
      setIsScrolling(true);
      
      // Clear existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      
      // Set scrolling to false after scroll ends
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    // Add passive scroll listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, []);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      let vantaInstance;
      
      try {
        if (effect === 'FOG') {
          vantaInstance = FOG({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls,
            touchControls,
            gyroControls,
            minHeight: 200,
            minWidth: 200,
            backgroundAlpha: backgroundAlpha || 1,
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
      } catch (error) {
        console.warn('Vanta effect failed to initialize:', error);
      }
    }
    
    return () => {
      if (vantaEffect) {
        try {
          vantaEffect.destroy();
        } catch (error) {
          console.warn('Error destroying Vanta effect:', error);
        }
      }
    };
  }, [
    vantaEffect, effect, mouseControls, touchControls, gyroControls,
    backgroundAlpha, baseColor, blurFactor, highlightColor, lowlightColor, midtoneColor,
    scale, scaleMobile, speed, zoom, haloBaseColor, amplitudeFactor, xOffset, yOffset, size,
    color, points, maxDistance, spacing, showDots, backgroundColor
  ]);

  // Optimize resize handling
  useEffect(() => {
    let resizeTimeout;
    
    const handleResize = () => {
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }
      
      resizeTimeout = setTimeout(() => {
        if (vantaEffect) {
          try {
            vantaEffect.resize();
          } catch (error) {
            console.warn('Error resizing Vanta effect:', error);
          }
        }
      }, 100);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }
    };
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
        zIndex: -1,
        // Add these CSS properties to prevent black box issues
        backfaceVisibility: 'hidden',
        transform: 'translateZ(0)',
        WebkitTransform: 'translateZ(0)',
        // Prevent flickering during scroll
        WebkitBackfaceVisibility: 'hidden',
        WebkitPerspective: 1000,
        WebkitTransformStyle: 'preserve-3d',
        // Improve rendering performance
        willChange: 'transform',
        // No fallback background - pure Vanta effect
        // Keep full opacity at all times
        opacity: 1
      }}
    >
      {children}
    </div>
  );
};

export default VantaBackground;