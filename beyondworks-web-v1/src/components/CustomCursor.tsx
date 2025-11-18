import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CustomCursorProps {
  mousePosition: { x: number; y: number };
  isProjectHovered: boolean;
}

export default function CustomCursor({ mousePosition, isProjectHovered }: CustomCursorProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999] mix-blend-difference"
      animate={{
        x: mousePosition.x - 10,
        y: mousePosition.y - 10,
        scale: isProjectHovered ? 2 : 1,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 400,
        mass: 0.5
      }}
      style={{
        width: '20px',
        height: '20px',
        border: '1px solid white',
        borderRadius: '50%',
        backgroundColor: isProjectHovered ? 'transparent' : 'white',
      }}
    />
  );
}