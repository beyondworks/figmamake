import { useState, useEffect } from 'react';
import Frame from '../imports/Frame11';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/80 backdrop-blur-lg py-3 sm:py-5' : 'bg-transparent py-6 sm:py-8'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer w-[160px] sm:w-[200px] md:w-[280px]" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ '--fill-0': '#F2F2F2' } as React.CSSProperties}
          >
            <Frame />
          </div>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <button onClick={() => scrollToSection('services')} className="text-white/70 hover:text-white transition-colors text-sm lg:text-base font-[Pretendard]">
              Works
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-white/70 hover:text-white transition-colors text-sm lg:text-base font-[Pretendard]">
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-5 py-2 lg:px-6 bg-white text-black rounded-full hover:bg-[#00E5AC] transition-colors text-sm lg:text-base font-[Pretendard] font-bold"
            >
              Let's talk
            </button>
          </div>

          <button 
            className="md:hidden text-white p-2 active:scale-95 transition-transform"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute top-20 left-0 right-0 bg-black/95 border-t border-white/10 p-6">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-white/70 hover:text-white transition-colors text-left py-3 text-lg font-[Pretendard]"
              >
                Works
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')} 
                className="text-white/70 hover:text-white transition-colors text-left py-3 text-lg font-[Pretendard]"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="mt-2 px-6 py-3 bg-white text-black rounded-full hover:bg-[#00E5AC] transition-colors text-center font-[Pretendard] font-bold"
              >
                Let's talk
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}