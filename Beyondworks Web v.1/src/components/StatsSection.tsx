import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';

const stats = [
  { value: 150, suffix: '+', label: '완료된 프로젝트' },
  { value: 98, suffix: '%', label: '고객 만족도' },
  { value: 50, suffix: '+', label: '파트너 기업' },
  { value: 12, suffix: '년', label: '업계 경험' },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 });

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-gradient-to-b from-black via-[#00E5AC]/5 to-black">
      <div className="max-w-6x1 mx-auto px-5 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({ stat, index, isInView }: { stat: any; index: number; isInView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = stat.value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, stat.value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="mb-4">
        <span className="text-[#00E5AC] block text-3xl md:text-4xl" style={{ lineHeight: 1 }}>
          {count}
          {stat.suffix}
        </span>
      </div>
      <p className="text-white/60 leading-tight text-base md:text-lg font-[Pretendard] mx-[0px] my-[5px] text-[14px]">{stat.label}</p>
    </motion.div>
  );
}
