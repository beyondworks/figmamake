import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface ServiceItem {
  num: string;
  title: string;
  subtitle: string;
  description: string;
  // 모바일용 텍스트 (선택사항 - 없으면 기본 텍스트 사용)
  mobileTitle?: string;
  mobileSubtitle?: string;
  mobileDescription?: string;
  type?: 'slider' | 'image';
  images?: string[];
  captions?: string[];
}

const services: ServiceItem[] = [
  {
    num: '01',
    title: 'AI literacy classes',
    subtitle: 'AI 활용능력 · 에이전트 구축 · 바이브코딩 교육',
    description: '프롬프트 엔지니어링의 상위 개념인 컨텍스트 엔지니어링 과정을 습득하여 전문가급 결과물을 도출합니다.',
    // 모바일용 텍스트 (여기에 원하는 내용 입력)
    mobileTitle: 'AI literacy classes',
    mobileSubtitle: 'AI 활용능력 · 에이전트 · 바이브코딩',
    mobileDescription: '프롬프트 엔지니어링의 상위 개념인 컨텍스트 엔지니어링 과정을 습득하여 전문가급 결과물을 도출합니다.',
    type: 'slider',
    images: [
      'https://res.cloudinary.com/dxzkoqvgn/video/upload/v1763098675/%E1%84%80%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%B4_1_lkggtr.mov',
      'https://res.cloudinary.com/dxzkoqvgn/video/upload/v1763006166/1113_2_fsccfy.mov'
    ],
    captions: [
      '프롬프트 엔지니어링 예제 및 실습 가이드',
      'AI 에이전트로 전문 디자이너급 웹사이트 만들기 클래스'
    ],
  },
      {
    num: '02',
    title: 'Contents',
    subtitle: '비욘드웍스의 AI 에이전트 기술을 활용한 콘텐츠',
    description: '고감도 이미지를 통해 실제와 유사한 광고 콘텐츠를 제작합니다.',
    // 모바일용 텍스트 (여기에 원하는 내용 입력)
    mobileTitle: 'Contents',
    mobileSubtitle: '비욘드웍스의 AI 에이전트 기술을 활용한 콘텐츠',
    mobileDescription: '고감도 이미지를 통해 실제와 유사한 광고 콘텐츠를 제작합니다.',
    type: 'slider',
    images: [
      'https://res.cloudinary.com/dxzkoqvgn/video/upload/v1763014478/beauty_1_lvjn2l.mov',
      'https://res.cloudinary.com/dxzkoqvgn/video/upload/v1763001969/A_short_cinematic_202511052021_2_x1dk8d.mp4',
      'https://res.cloudinary.com/dxzkoqvgn/video/upload/v1763013780/grok-video-d2ee4360-52fc-4d05-8790-9c54a133ed21_cgpiih.mp4'
    ],
    captions: [
      '스킨케어 브랜드 광고 샘플',
      '애니메이션 영상 샘플',
      '바이럴 영상 샘플'
    ],
  },
  
  {
    num: '03',
    title: 'Branding',
    subtitle: '브랜드 에셋을 구축하여 일관된 메시지와 가치를 전달합니다',
    description: '브랜드 스토리 기획 → 디자인 시스템 구축 → 브랜드 인식 개선',
    // 모바일용 텍스트 (여기에 원하는 내용 입력)
    mobileTitle: 'Branding',
    mobileSubtitle: '브랜드 에셋 구축 · 일관된 메시지와 가치를 전달',
    mobileDescription: '브랜드 스토리 기획 → 디자인 시스템 구축 → 브랜드 인식 개선',
    type: 'slider',
    images: [
      'https://cdn.imweb.me/thumbnail/20251113/6a52aa3c286f7.png',
      'https://cdn.imweb.me/thumbnail/20251113/a46968dce285c.png',
      'https://cdn.imweb.me/thumbnail/20251113/d6483811cc1e7.png',
      'https://cdn.imweb.me/thumbnail/20251113/f38e4ea6c97ac.png',
      'https://cdn.imweb.me/thumbnail/20251113/9fd4a910a96fc.png',
      'https://cdn.imweb.me/thumbnail/20251113/5cf98fb38ff11.png',
      'https://cdn.imweb.me/thumbnail/20251113/4ba06ca28f6f4.png',
      'https://cdn.imweb.me/thumbnail/20251113/23a61bfe83bd8.png',
      'https://cdn.imweb.me/thumbnail/20251113/891f08e6cd049.png',
      'https://cdn.imweb.me/thumbnail/20251113/50932aafc3539.png',
      'https://cdn.imweb.me/thumbnail/20251113/1aa2aaefa6378.png',
      'https://cdn.imweb.me/thumbnail/20251113/05e04f817fb7f.png'
    ],
    captions: [
      '미디어 엔터테인먼트 브랜딩',
      '라이프스타일 브랜드 브랜딩',
      '뷰티 브랜드 브랜딩',
      '푸드케이터링 기업 브랜딩',
      '카페 브랜딩 - 패키지',
      '카페 브랜딩 - 종이컵',
      '카페 브랜딩 - 매장용컵',
      '카패 브랜딩 - 프로모션',
      '카페 브랜딩 - 브런치',
      '프랜차이즈 브랜딩 - 인테리어 디자인',
      '프랜차이즈 브랜딩 - 싸인물',
      '프랜차이즈 브랜딩 - 싸인물'
    ],
  },
  {
    num: '04',
    title: 'Web design',
    subtitle: '기획부터 디자인 · 각 사업 구조에 최적화 된 웹사이트를 제작합니다.',
    description: '리서치 기반 IA/와이어 → UI 시스템 설계 → 반응형 퍼블리싱 → 유저 테스트 → 인터페이스 디자인.',
    // 모바일용 텍스트 (여기에 원하는 내용 입력)
    mobileTitle: 'Web design',
    mobileSubtitle: '기획 · 디자인 · 사업 구조 최적 웹사이트',
    mobileDescription: '리서치 기반 IA/와이어 → UI 시스템 설계 → 반응형 퍼블리싱 → 유저 테스트 → 인터페이스 디자인.',
    type: 'slider',
    images: [
      'https://cdn.imweb.me/thumbnail/20251113/2ea37a19512b4.png',
      'https://cdn.imweb.me/thumbnail/20251113/eea8c82e07565.png',
      'https://cdn.imweb.me/thumbnail/20251113/b8e57e217d391.png',
      'https://cdn.imweb.me/thumbnail/20251113/5aff9e19acb52.png',
      'https://cdn.imweb.me/thumbnail/20251113/fe86950525587.png'
    ],
    captions: [
      '서울시 인재개발원 UI/UX',
      '쇼핑몰 반응형 웹사이트 #1',
      '쇼핑몰 반응형 웹사이트 #2',
      '기업형 반응형 웹사이트 #1',
      '기업형 반응형 웹사이트 #2'
    ],
  },
  {
    num: '05',
    title: 'Product Page',
    subtitle: '가치 중심의 구조 설계로 구매를 유도하는 상세페이지를 제작합니다.',
    description: '전환 중심 서사, USP·사회적 증거·FAQ 구조화, 카피·아트디렉션 포함.',
    // 모바일용 텍스트 (여기에 원하는 내용 입력)
    mobileTitle: 'Product Page',
    mobileSubtitle: '가치 중심 구조 설계 · 구매 전환 상세페이지',
    mobileDescription: '전환 중심 서사, USP·사회적 증거·FAQ 구조화, 카피·아트디렉션 포함.',
    type: 'slider',
    images: [
      'https://res.cloudinary.com/dxzkoqvgn/video/upload/v1763025661/%E1%84%89%E1%85%A1%E1%86%BC%E1%84%89%E1%85%A6_%E1%84%82%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%8F%E1%85%A5%E1%86%B7%E1%84%91%E1%85%A9%E1%84%90%E1%85%B3_2k_zyl8us.mov',
      'https://res.cloudinary.com/dxzkoqvgn/video/upload/v1763025764/%E1%84%89%E1%85%A1%E1%86%BC%E1%84%89%E1%85%A6_%E1%84%87%E1%85%B3%E1%86%AF%E1%84%85%E1%85%AE%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%B5_d4w2vl.mov',
      'https://res.cloudinary.com/dxzkoqvgn/video/upload/v1763025686/%E1%84%89%E1%85%A1%E1%86%BC%E1%84%89%E1%85%A6_%E1%84%8B%E1%85%A1%E1%84%8F%E1%85%AE%E1%84%8B%E1%85%A1_oupbgg.mov',
      'https://res.cloudinary.com/dxzkoqvgn/video/upload/v1763025795/%E1%84%89%E1%85%A1%E1%86%BC%E1%84%89%E1%85%A6_%E1%84%91%E1%85%B5%E1%86%B7%E1%84%89%E1%85%B3%E1%84%91%E1%85%B3%E1%84%85%E1%85%A6_sblem3.mov',
      'https://res.cloudinary.com/dxzkoqvgn/video/upload/v1763025743/%E1%84%89%E1%85%A1%E1%86%BC%E1%84%89%E1%85%A6_%E1%84%91%E1%85%A9%E1%84%80%E1%85%B3%E1%86%AB%E1%84%8B%E1%85%A6%E1%84%8B%E1%85%A5_jpqj7r.mov',
      'https://res.cloudinary.com/dxzkoqvgn/video/upload/v1763025826/%E1%84%89%E1%85%A1%E1%86%BC%E1%84%89%E1%85%A6_%E1%84%8C%E1%85%B5%E1%84%82%E1%85%A9_rqqfbz.mov'
    ],
    captions: [
      '베개 상세페이지',
      '생활용품 상세페이지 #1',
      '여름이불 상세페이지',
      '생활용품 상세피이지 #2',
      '겨울이불 상세페이지',
      '디지털상품 상세페이지'
    ],
  },
];

export default function ServicesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const toggleService = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="services" ref={sectionRef} className="max-w-[1248px] mx-auto py-20 md:py-25 relative px-[0px] py-[20px]">
      {/* Services List */}
      <div className="px-6 md:px-12 space-y-0 mx-[10px] my-[0px] m-[0px]">
        {services.map((service, index) => (
          <ServiceItem
            key={service.num}
            service={service}
            isOpen={openIndex === index}
            onToggle={() => toggleService(index)}
            index={index}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
          />
        ))}
      </div>
    </section>
  );
}

function ServiceItem({
  service,
  isOpen,
  onToggle,
  index,
  hoveredIndex,
  setHoveredIndex,
}: {
  service: ServiceItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}) {
  const itemRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isTouched, setIsTouched] = useState(false);
  const [touchStartScrollLeft, setTouchStartScrollLeft] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  
  // 관성 스크롤을 위한 추가 state
  const velocityRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);
  
  // 비디오 ref 관리 (메모리 최적화)
  const videoRefsMap = useRef<Map<number, HTMLVideoElement>>(new Map());
  const [isMobile, setIsMobile] = useState(false);

  // 모바일 감지
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Intersection Observer로 뷰포트 내 비디오만 재생
  useEffect(() => {
    if (!service.images || service.type !== 'slider' || !isOpen) return;

    // 아코디언이 열린 후 DOM이 렌더링될 시간을 줌
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const videoElement = entry.target as HTMLVideoElement;
            
            if (entry.isIntersecting) {
              // 뷰포트에 들어오면 재생
              if (videoElement.paused) {
                videoElement.play().catch(() => {
                  // 자동재생 실패 시 무시
                });
              }
            } else {
              // 뷰포트를 벗어나면 일시정지 및 메모리 해제
              if (!videoElement.paused) {
                videoElement.pause();
              }
              // 모바일에서는 메모리 해제를 위해 currentTime 리셋
              if (isMobile) {
                videoElement.currentTime = 0;
              }
            }
          });
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
        }
      );

      // 모든 비디오 요소 관찰
      videoRefsMap.current.forEach((video) => {
        if (video) {
          observer.observe(video);
          // 초기 재생 시도
          if (video.paused) {
            video.play().catch(() => {
              // 자동재생 실패 시 무시
            });
          }
        }
      });

      return () => {
        observer.disconnect();
      };
    }, 350); // 아코디언 애니메이션 완료 후

    return () => {
      clearTimeout(timer);
      // 아코디언이 닫힐 때 모든 비디오 일시정지
      if (!isOpen) {
        videoRefsMap.current.forEach((video) => {
          if (video && !video.paused) {
            video.pause();
          }
        });
      }
    };
  }, [service.images, service.type, isOpen, isMobile]);

  // 아코디언이 열릴 때 해당 섹션으로 스크롤
  useEffect(() => {
    if (isOpen && itemRef.current) {
      // 애니메이션이 완료될 때까지 약간 대기
      setTimeout(() => {
        if (!itemRef.current) return;
        
        const headerOffset = 100; // 상단 네비게이션 높이 + 여유 공간
        const elementPosition = itemRef.current.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 350); // 아코디언 애니메이션 시간(300ms)보다 약간 길게
    }
  }, [isOpen]);

  // 스크롤 이벤트 감지하여 프로그레스 바 업데이트
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer || !service.images) return;

    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      const scrollWidth = scrollContainer.scrollWidth;
      const containerWidth = scrollContainer.offsetWidth;
      
      // 스크롤 진행률 계산 (0-100%)
      const maxScroll = scrollWidth - containerWidth;
      const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
      
      setScrollProgress(progress);
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, [service.images]);

  // 프로그레스 바 클릭 시 해당 위치로 스크롤
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    
    const scrollWidth = scrollContainer.scrollWidth;
    const containerWidth = scrollContainer.offsetWidth;
    const maxScroll = scrollWidth - containerWidth;
    
    scrollContainer.scrollTo({
      left: maxScroll * percentage,
      behavior: 'smooth'
    });
  };

  // 마우스 드래그로 스크롤
  const handleMouseDown = (e: React.MouseEvent) => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    
    // 관성 애니메이션 중지
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    
    setIsDragging(true);
    setStartX(e.pageX - scrollContainer.offsetLeft);
    setScrollLeft(scrollContainer.scrollLeft);
    lastXRef.current = e.pageX;
    lastTimeRef.current = Date.now();
    velocityRef.current = 0;
    scrollContainer.style.scrollBehavior = 'auto';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    
    const currentTime = Date.now();
    const currentX = e.pageX;
    const timeDelta = currentTime - lastTimeRef.current;
    
    if (timeDelta > 0) {
      // 속도 계산
      velocityRef.current = (currentX - lastXRef.current) / timeDelta;
    }
    
    const x = currentX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 2.8; // 속도 1.5 → 2.8배로 증가
    scrollContainer.scrollLeft = scrollLeft - walk;
    
    lastXRef.current = currentX;
    lastTimeRef.current = currentTime;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    
    scrollContainer.style.scrollBehavior = 'auto';
    
    // 관성 스크롤 시작
    const startMomentumScroll = () => {
      if (!scrollContainer) return;
      
      let currentVelocity = velocityRef.current * 15; // 초기 관성 속도
      const friction = 0.92; // 마찰 계수 (높을수록 오래 감)
      const minVelocity = 0.5; // 최소 속도 임계값
      
      const animate = () => {
        if (Math.abs(currentVelocity) < minVelocity) {
          animationFrameRef.current = null;
          return;
        }
        
        scrollContainer.scrollLeft -= currentVelocity;
        currentVelocity *= friction;
        
        animationFrameRef.current = requestAnimationFrame(animate);
      };
      
      if (Math.abs(currentVelocity) > minVelocity) {
        animate();
      }
    };
    
    startMomentumScroll();
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp(); // 관성 스크롤 포함
    }
  };

  // 터치 드래그로 스크롤 - 수동 스크롤만 가능
  const handleTouchStart = (e: React.TouchEvent) => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    
    // 관성 애니메이션 중지
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    
    setIsTouched(true);
    setStartX(e.touches[0].pageX);
    setScrollLeft(scrollContainer.scrollLeft);
    lastXRef.current = e.touches[0].pageX;
    lastTimeRef.current = Date.now();
    velocityRef.current = 0;
    scrollContainer.style.scrollBehavior = 'auto';
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isTouched) return;
    
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    
    const currentTime = Date.now();
    const currentX = e.touches[0].pageX;
    const timeDelta = currentTime - lastTimeRef.current;
    
    if (timeDelta > 0) {
      // 속도 계산
      velocityRef.current = (lastXRef.current - currentX) / timeDelta;
    }
    
    const x = currentX;
    const walk = (startX - x) * 1.8; // 터치 속도 증가 (1 → 1.8배)
    scrollContainer.scrollLeft = scrollLeft + walk;
    
    lastXRef.current = currentX;
    lastTimeRef.current = currentTime;
  };

  const handleTouchEnd = () => {
    setIsTouched(false);
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    
    // 관성 스크롤 시작
    const startMomentumScroll = () => {
      if (!scrollContainer) return;
      
      let currentVelocity = velocityRef.current * 15; // 초기 관성 속도
      const friction = 0.92; // 마찰 계수
      const minVelocity = 0.5; // 최소 속도 임계값
      
      const animate = () => {
        if (Math.abs(currentVelocity) < minVelocity) {
          animationFrameRef.current = null;
          return;
        }
        
        scrollContainer.scrollLeft += currentVelocity;
        currentVelocity *= friction;
        
        animationFrameRef.current = requestAnimationFrame(animate);
      };
      
      if (Math.abs(currentVelocity) > minVelocity) {
        animate();
      }
    };
    
    startMomentumScroll();
  };

  const handleTouchCancel = () => {
    handleTouchEnd(); // 관성 스크롤 포함
  };

  // 아코디언 토글 (드래그 중이 아닐 때만)
  const handleAccordionClick = (e: React.MouseEvent) => {
    // 캐러셀 영역 클릭이면 무시
    if ((e.target as HTMLElement).closest('.carousel-container')) {
      return;
    }
    onToggle();
  };

  // 호버 상태에 따른 opacity 계산
  const isHovered = hoveredIndex === index;
  const isDimmed = hoveredIndex !== null && hoveredIndex !== index;
  const itemOpacity = isDimmed ? 0.3 : 1;

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: itemOpacity, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      animate={{ opacity: itemOpacity }}
      className="border-b border-white/10 py-8 md:py-12 cursor-pointer transition-all duration-300 hover:translate-x-2 group"
      onClick={handleAccordionClick}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {/* 모바일 레이아웃 */}
      <div className="md:hidden px-6">
        {/* Number - 모바일에서 인라인 */}
        <span className="font-mono text-white/50 group-hover:text-white/70 transition-all text-[18px] block mb-2">
          {service.num}
        </span>

        {/* Content */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className={`transition-colors duration-300 font-[Pretendard] text-[24px] font-bold mb-2 ${
              isOpen ? 'text-white/90' : 'text-white/90 group-hover:text-[#00E9A8]'
            }`}>
              {service.mobileTitle || service.title}
            </h3>
            
            <p className={`transition-all duration-300 max-w-xl font-[Pretendard] text-[13px] ${
              isOpen 
                ? 'text-[#00E9A8]' 
                : 'text-white/50 group-hover:text-white/70'
            }`}>
              {service.mobileSubtitle || service.subtitle}
            </p>
          </div>

          {/* Arrow */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            className={`flex-shrink-0 text-white/50 group-hover:text-white transition-all duration-300 ${
              isOpen ? 'rotate-90' : ''
            }`}
          >
            <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* 데스크톱 레이아웃 - 기존 그대로 */}
      <div className="hidden md:flex items-center justify-between gap-6 md:gap-8 relative pl-16 md:pl-20 pr-8 md:pr-12">
        {/* Number */}
        <span className="absolute left-0 top-1/2 -translate-y-1/2 font-mono text-white/30 group-hover:text-white/60 transition-all text-[18px] md:text-[24px]">
          {service.num}
        </span>

        {/* Content */}
        <div className="flex-1 mx-[-10px] mx-[-5px] my-[0px]">
          <h3 className={`transition-colors duration-300 mb-3 font-[Pretendard] text-[40px] font-bold p-[0px] ${
            isOpen ? 'text-white/90' : 'text-white/90 group-hover:text-[#00E9A8]'
          }`}>
            {service.title}
          </h3>
          
          <p className={`transition-all duration-300 max-w-xl font-[Pretendard] text-base ${
            isOpen 
              ? 'text-[#00E9A8]' 
              : 'text-white/30 group-hover:text-white/60'
          }`}>
            {service.subtitle}
          </p>
        </div>

        {/* Arrow */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          className={`flex-shrink-0 text-white/30 group-hover:text-white transition-all duration-300 ${
            isOpen ? 'rotate-90' : ''
          }`}
        >
          <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Expandable Content */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="pt-8 px-6 md:pl-20 md:pr-12">
          {/* 모바일: mobileDescription 또는 기본 description */}
          <p className="md:hidden text-white/70 mb-8 max-w-2xl text-[13px] font-[Pretendard]">
            {service.mobileDescription || service.description}
          </p>
          {/* 데스크톱: 기본 description */}
          <p className="hidden md:block text-white/70 mb-8 max-w-2xl text-base font-[Pretendard]">
            {service.description}
          </p>

          {/* Image Slider - Full Width Carousel */}
          {service.type === 'slider' && service.images && (
            <div className="relative w-full overflow-hidden -mx-6 md:mx-0 carousel-container">
              {/* Horizontal Scroll Container */}
              <div
                ref={scrollContainerRef}
                className="flex gap-8 md:gap-8 overflow-x-auto scrollbar-hide w-full justify-start md:justify-start md:pl-0"
                style={{ cursor: isDragging || isTouched ? 'grabbing' : 'grab', touchAction: 'pan-x' }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onTouchCancel={handleTouchCancel}
              >
                {service.images.map((img, idx) => {
                  const isVideo = img.endsWith('.mp4') || img.endsWith('.webm') || img.endsWith('.mov');
                  const caption = service.captions?.[idx] || `${service.title} — ${idx + 1}`;
                  
                  return (
                    <div
                      key={idx}
                      className="flex-none w-[70vw] md:w-[850px] snap-center slide-item first:ml-6 md:first:ml-0"
                    >
                      <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-white/5">
                        {isVideo ? (
                          <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload={isMobile ? "metadata" : "auto"}
                            className="w-full h-full object-cover pointer-events-none"
                            draggable={false}
                            ref={(el) => {
                              if (el) {
                                videoRefsMap.current.set(idx, el);
                              }
                            }}
                          >
                            <source src={img} type="video/mp4" />
                          </video>
                        ) : (
                          <img
                            src={img}
                            alt={caption}
                            loading="lazy"
                            className="w-full h-full object-cover pointer-events-none"
                            draggable={false}
                          />
                        )}
                      </div>
                      <div className="w-full px-2 py-3">
                        <p className="text-white/50 text-sm font-[Pretendard] mx-[10px] my-[0px]">
                          {caption}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Progress Indicators */}
              {service.images.length > 1 && (
                <div
                  className="relative w-[20%] mt-6 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleProgressClick(e);
                  }}
                >
                  {/* Background Bar */}
                  <div className="h-1 bg-white/20 rounded-full overflow-hidden mx-[10px] my-[0px] p-[0px]">
                    {/* Active Progress */}
                    <div
                      className="h-full bg-white transition-all duration-100 ease-out rounded-full"
                      style={{ width: `${scrollProgress}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Single Image - Full Width */}
          {service.type === 'image' && service.images && (
            <div className="w-full">
              <div className="aspect-video rounded-2xl overflow-hidden bg-white/5">
                <img src={service.images[0]} alt={service.title} className="w-full h-full object-cover" />
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}