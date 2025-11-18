import { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface InteractiveSphereProps {
  isMinimized: boolean;
  onAnimationComplete?: () => void;
  scrollProgress?: number;
}

export function InteractiveSphere({ isMinimized, onAnimationComplete, scrollProgress = 0 }: InteractiveSphereProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const hasInitialized = useRef(false);

  useEffect(() => {
    // Check if mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      
      // Initialize mouse position to center on first load
      if (!hasInitialized.current) {
        mouseRef.current = {
          x: rect.width / 2,
          y: rect.height / 2
        };
        hasInitialized.current = true;
      }
    };

    updateCanvasSize();
    
    // Delay loading state to allow initial positioning
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Sphere parameters - use getBoundingClientRect for accurate center
    const getCanvasCenter = () => {
      const rect = canvas.getBoundingClientRect();
      return {
        centerX: rect.width / 2,
        centerY: rect.height / 2
      };
    };

    const { centerX, centerY } = getCanvasCenter();
    const baseRadius = Math.min(canvas.offsetWidth, canvas.offsetHeight) * 0.3;
    const radius = isMinimized ? 50 : baseRadius;
    const particles: Array<{
      x: number;
      y: number;
      z: number;
      originalX: number;
      originalY: number;
      originalZ: number;
      randomAngle: number;
      randomDistance: number;
    }> = [];

    // Create sphere particles (reduce count on mobile for performance)
    const particleCount = isMobile ? (isMinimized ? 100 : 200) : (isMinimized ? 150 : 400);
    for (let i = 0; i < particleCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;
      
      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);
      
      particles.push({
        x: x + centerX,
        y: y + centerY,
        z,
        originalX: x,
        originalY: y,
        originalZ: z,
        randomAngle: Math.random() * Math.PI * 2,
        randomDistance: Math.random() * 300 + 200
      });
    }

    // Performance optimization: limit frame rate
    let lastFrameTime = 0;
    const frameDelay = 1000 / 60; // 60 FPS max

    const animate = (currentTime: number = 0) => {
      // Frame rate limiting
      if (currentTime - lastFrameTime < frameDelay) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }
      lastFrameTime = currentTime;

      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      
      // Mouse interaction
      const mouseInfluence = isMinimized ? 0.001 : 0.005;
      const rotationX = (mouseRef.current.y - centerY) * mouseInfluence;
      const rotationY = (mouseRef.current.x - centerX) * mouseInfluence;
      
      // Auto rotation when minimized
      const autoRotation = isMinimized ? Date.now() * 0.001 : 0;
      const totalRotationY = rotationY + autoRotation;

      // Pre-calculate rotation values (optimization)
      const cosRx = Math.cos(rotationX);
      const sinRx = Math.sin(rotationX);
      const cosRy = Math.cos(totalRotationY);
      const sinRy = Math.sin(totalRotationY);

      particles.forEach((particle, index) => {
        // Calculate scale based on scroll progress (0-0.5: scale up from 1 to 2)
        const scaleProgress = Math.min(scrollProgress * 2, 1);
        const scale = 1 + scaleProgress * 1.2;
        
        // Calculate disperse progress (0.5-1.0: disperse particles)
        const disperseStart = 0.5;
        const disperseProgress = scrollProgress > disperseStart 
          ? (scrollProgress - disperseStart) / (1 - disperseStart) 
          : 0;
        
        // Apply rotations with scale
        // Rotate around Y axis
        const x1 = particle.originalX * cosRy - particle.originalZ * sinRy;
        const z1 = particle.originalX * sinRy + particle.originalZ * cosRy;

        // Rotate around X axis
        const y2 = particle.originalY * cosRx - z1 * sinRx;
        const z2 = particle.originalY * sinRx + z1 * cosRx;

        // Apply scale to rotated position
        const scaledX = x1 * scale;
        const scaledY = y2 * scale;
        const scaledZ = z2 * scale;
        
        // Calculate dispersion offset
        const disperseX = Math.cos(particle.randomAngle) * particle.randomDistance * disperseProgress;
        const disperseY = Math.sin(particle.randomAngle) * particle.randomDistance * disperseProgress;
        
        particle.x = scaledX + centerX + disperseX;
        particle.y = scaledY + centerY + disperseY;
        particle.z = scaledZ;

        // Calculate opacity based on Z position and disperse progress
        const distance = Math.sqrt(particle.x * particle.x + particle.y * particle.y + particle.z * particle.z);
        const normalizedZ = (particle.z + radius * scale) / (2 * radius * scale);
        const baseOpacity = Math.max(0.08, Math.min(0.8, normalizedZ * 0.7 + 0.2));
        // Fade out as particles disperse
        const opacity = baseOpacity * (1 - disperseProgress * 0.7);

        // Draw particle
        const baseSize = isMinimized ? 1 : Math.max(0.5, 2 - (distance / (radius * scale)) * 0.5);
        const size = baseSize * (1 + disperseProgress * 0.5); // Slightly larger when dispersed
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
        
        // Color with chromatic aberration effect - slightly brighter
        const hue = (index / particles.length) * 360;
        const saturation = Math.abs(particle.z / (radius * scale)) * 30;
        ctx.fillStyle = `hsla(${hue}, ${saturation}%, 100%, ${opacity * 1.1})`;
        ctx.fill();

        // Add glow effect for larger particles - increased brightness
        if (size > 1.5 && !isMinimized) {
          ctx.shadowColor = `hsla(${hue}, ${saturation}%, 100%, ${0.7 * (1 - disperseProgress * 0.5)})`;
          ctx.shadowBlur = 8 * (1 + disperseProgress);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // Connect nearby particles with lines (optimized)
      if (!isMinimized) {
        const disperseStart = 0.5;
        const disperseProgress = scrollProgress > disperseStart 
          ? (scrollProgress - disperseStart) / (1 - disperseStart) 
          : 0;
        
        // Fade out connections as particles disperse
        const connectionOpacity = 1 - disperseProgress;
        
        if (connectionOpacity > 0.01) {
          const connectionDistance = 80;
          const maxConnections = 3; // Limit connections per particle for performance
          ctx.lineWidth = 0.5;

          for (let i = 0; i < particles.length; i++) {
            let connectionsCount = 0;
            
            for (let j = i + 1; j < particles.length && connectionsCount < maxConnections; j++) {
              const dx = particles[i].x - particles[j].x;
              const dy = particles[i].y - particles[j].y;
              
              // Early exit if distance is too far (no need for sqrt)
              const distanceSquared = dx * dx + dy * dy;
              if (distanceSquared > connectionDistance * connectionDistance) continue;
              
              const distance = Math.sqrt(distanceSquared);
              const opacity = 1 - (distance / connectionDistance);
              ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.25 * connectionOpacity})`; // Fade with scroll
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
              connectionsCount++;
            }
          }
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    // Touch move handler for mobile
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouseRef.current = {
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top
        };
      }
    };

    // Add both mouse and touch events
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('resize', updateCanvasSize);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', updateCanvasSize);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMinimized, scrollProgress]);

  return (
    <motion.div
      className={`${isMinimized ? 'fixed top-8 left-8 z-10' : 'absolute inset-0'}`}
      initial={isMinimized ? { scale: 1 } : { scale: 0.95, opacity: 0 }}
      animate={isMinimized ? 
        { 
          scale: 1,
          transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
        } : 
        { 
          scale: 1, 
          opacity: 1,
          transition: { 
            duration: 2, 
            ease: [0.16, 1, 0.3, 1],
            delay: 0.2
          }
        }
      }
      onAnimationComplete={onAnimationComplete}
      style={{
        width: isMinimized ? '100px' : '100%',
        height: isMinimized ? '100px' : '100%',
        filter: isMinimized ? 'none' : 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))'
      }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.8s ease'
        }}
      />
    </motion.div>
  );
}