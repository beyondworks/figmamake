import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { InteractiveSphere } from './InteractiveSphere';

export default function HeroSection() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      // 히어로 섹션 높이를 기준으로 스크롤 진행도 계산 (0-1 범위)
      const progress = Math.min(scrollY / (windowHeight * 1.5), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-12 md:py-0">
      {/* Interactive Sphere Background */}
      <div className="absolute inset-0 z-0">
        <InteractiveSphere isMinimized={false} scrollProgress={scrollProgress} />
      </div>

      {/* Rolling Text Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
          style={{ lineHeight: 1.1 }}
        >
          <span className="flex flex-col items-center font-bold font-[Pretendard] leading-tight">
            {/* 고정 텍스트 */}
            <span className="block text-[#00E5AC] mb-2 font-bold font-[Pretendard] leading-tight text-[28px] sm:text-[35px] md:text-[48px] lg:text-[60px]">
              Just make the decision —
            </span>

            {/* 고정 문장 */}
            <span className="block text-white font-bold font-[Pretendard] leading-tight text-[28px] sm:text-[35px] md:text-[48px] lg:text-[60px]">
              we'll handle the rest.</span>
          </span>

          {/* 서브 텍스트 */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-4 sm:mt-8 md:mt-10 text-white/60 text-xs sm:text-sm md:text-base font-[Pretendard] leading-relaxed px-4"
          >
            대표님은 결정만 하세요 완성은 우리가 합니다.<br />
          </motion.p>
        </motion.h1>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-6 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-white/40 text-xs sm:text-sm font-[Pretendard] p-[0px]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-white/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}