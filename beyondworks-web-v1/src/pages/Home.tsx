import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import PortfolioSection from '../components/PortfolioSection';
import StatsSection from '../components/StatsSection';
import ContactSection from '../components/ContactSection';
import CustomCursor from '../components/CustomCursor';
import ScrollProgress from '../components/ScrollProgress';
import ConcurrentUsersBanner from '../components/ConcurrentUsersBanner';
import Footer from '../components/Footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isProjectHovered, setIsProjectHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Loading progress animation
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    // Check if mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkMobile();

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = window.innerHeight * 0.3; // 30% of viewport height
      
      if (scrollY > threshold && !isScrolled) {
        setIsScrolled(true);
      } else if (scrollY <= threshold && isScrolled) {
        setIsScrolled(false);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Update CSS custom properties for cursor position
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    // Detect hover over project items
    const handleProjectHover = () => {
      const projectElements = document.querySelectorAll('[data-project-item]');
      let hovering = false;
      
      projectElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isHovered = 
          mousePosition.x >= rect.left &&
          mousePosition.x <= rect.right &&
          mousePosition.y >= rect.top &&
          mousePosition.y <= rect.bottom;
        
        if (isHovered) hovering = true;
      });
      
      setIsProjectHovered(hovering);
    };

    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkMobile);
    
    // Only add mouse events on non-mobile devices
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    // Initial scroll check
    handleScroll();

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
      if (!isMobile) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [isScrolled, mousePosition, isMobile]);

  if (isLoading) {
    const displayProgress = Math.min(Math.floor(loadingProgress), 100);
    
    return (
      <AnimatePresence>
        <motion.div 
          className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Main Content */}
          <div className="flex flex-col items-center gap-8">
            {/* Logo with letter animation from right - infinite loop */}
            <div className="flex overflow-hidden">
              {'BEYONDWORKS'.split('').map((letter, index) => (
                <motion.span
                  key={index}
                  className="text-sm md:text-base tracking-[0.2em] text-white inline-block"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ 
                    x: [100, 0, 0, -100],
                    opacity: [0, 1, 1, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    delay: index * 0.1,
                    repeat: Infinity,
                    repeatDelay: 0.5,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.8, 1]
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <div className={`bg-black min-h-screen text-white overflow-x-hidden ${isMobile ? 'cursor-auto' : 'cursor-none'}`}>
      <CustomCursor mousePosition={mousePosition} isProjectHovered={isProjectHovered} />
      <ScrollProgress />
      <ConcurrentUsersBanner />
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />

      {/* Background Noise Effect */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.015] z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
