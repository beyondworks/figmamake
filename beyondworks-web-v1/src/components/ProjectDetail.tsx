import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectDetailProps {
  id: number;
  title: string;
  category: string;
  description: string;
  media: {
    type: 'video' | 'image';
    url: string;
    client?: string;
    year?: string;
    role?: string;
    challenge?: string;
    Scope?: string;
    solution?: string;
    results?: string[];
  }[];
}

export default function ProjectDetail({
  id,
  title,
  category,
  description,
  media,
}: ProjectDetailProps) {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // 드래그/터치 상태 관리
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isTouched, setIsTouched] = useState(false);
  const dragDistanceRef = useRef(0);

  // 폼 데이터 상태 관리
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    description: '',
  });

  const totalSlides = media.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // 마우스 드래그 핸들러
  const handleMouseDown = (e: React.MouseEvent) => {
    if (totalSlides <= 1) return;
    setIsDragging(true);
    setStartX(e.clientX);
    dragDistanceRef.current = 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || totalSlides <= 1) return;
    dragDistanceRef.current = e.clientX - startX;
  };

  const handleMouseUp = () => {
    if (!isDragging || totalSlides <= 1) return;
    setIsDragging(false);
    
    const threshold = 50; // 50px 이상 드래그 시 슬라이드 전환
    if (Math.abs(dragDistanceRef.current) > threshold) {
      if (dragDistanceRef.current > 0) {
        prevSlide(); // 오른쪽으로 드래그 -> 이전 슬라이드
      } else {
        nextSlide(); // 왼쪽으로 드래그 -> 다음 슬라이드
      }
    }
    dragDistanceRef.current = 0;
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  // 터치 드래그 핸들러
  const handleTouchStart = (e: React.TouchEvent) => {
    if (totalSlides <= 1) return;
    setIsTouched(true);
    setStartX(e.touches[0].clientX);
    dragDistanceRef.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isTouched || totalSlides <= 1) return;
    dragDistanceRef.current = e.touches[0].clientX - startX;
  };

  const handleTouchEnd = () => {
    if (!isTouched || totalSlides <= 1) return;
    setIsTouched(false);
    
    const threshold = 50; // 50px 이상 드래그 시 슬라이드 전환
    if (Math.abs(dragDistanceRef.current) > threshold) {
      if (dragDistanceRef.current > 0) {
        prevSlide(); // 오른쪽으로 드래그 -> 이전 슬라이드
      } else {
        nextSlide(); // 왼쪽으로 드래그 -> 다음 슬라이드
      }
    }
    dragDistanceRef.current = 0;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setCurrentSlide(0);
  }, [id]);

  // 폼 제출 핸들러
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 폼 데이터 처리 (콘솔에 출력)
    console.log('문의 내용:', formData);
    
    // 성공 메시지 표시
    alert('문의가 접수되었습니다. 곧 연락드리겠습니다!');
    
    // 폼 초기화
    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: '',
      description: '',
    });
    
    // 모달 닫기
    setIsModalOpen(false);
  };

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-4 md:py-6">
          <div className="flex items-center justify-between">
            {/* Previous Project Button */}
            <button
              onClick={() => {
                const prevId = id <= 1 ? 6 : id - 1;
                navigate(`/project/${prevId}`);
              }}
              className="flex items-center gap-1 sm:gap-2 text-white/70 hover:text-[#00E5AC] transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-[Pretendard] text-sm sm:text-base hidden md:inline">Previous</span>
            </button>
            
            {/* Home Button */}
            <button
              onClick={() => navigate('/')}
              className="px-4 sm:px-6 py-1.5 sm:py-2 border border-white/20 rounded-full text-white/70 hover:text-[#00E5AC] hover:border-[#00E5AC] transition-colors font-[Pretendard] text-sm sm:text-base"
            >
              Home
            </button>

            {/* Next Project Button */}
            <button
              onClick={() => {
                const nextId = id >= 6 ? 1 : id + 1;
                navigate(`/project/${nextId}`);
              }}
              className="flex items-center gap-1 sm:gap-2 text-white/70 hover:text-[#00E5AC] transition-colors group"
            >
              <span className="font-[Pretendard] text-sm sm:text-base hidden md:inline">Next</span>
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 rotate-180 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section - Fixed */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base bg-[#00E5AC] text-black rounded-full sm:mb-6 font-[Pretendard] mt-[0px] mr-[0px] mb-[16px] ml-[10px]">
              {category}
            </span>
            <h1 className="sm:mb-6 font-[Pretendard] mt-[0px] mr-[0px] mb-[16px] ml-[10px]">{title}</h1>
            <p className="text-white/60 max-w-3xl font-[Pretendard] sm:text-lg leading-relaxed text-[14px] mx-[10px] my-[0px] break-keep text-pretty sm:leading-loose">
              {description.split('|').map((line, i, arr) => (
                <span key={i} className="text-[15px]">
                  {line.trim().split('@@').map((mobileLine, j, mobileArr) => (
                    <span key={j}>
                      {mobileLine.trim()}
                      {j < mobileArr.length - 1 && ' '}
                      {j < mobileArr.length - 1 && <br className="sm:hidden" />}
                    </span>
                  ))}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Slider Section */}
      <section className="relative">
        <div className="relative max-w-7xl mx-auto">
          {/* Project Info - Changes with each slide */}
          <div className="mb-8 sm:mb-12 pb-8 sm:pb-12 border-b border-white/10 px-4 sm:px-6 md:px-12 min-h-[100px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
              >
                {media[currentSlide].client && (
                  <div>
                    <h3 className="text-white/40 mb-[8px] font-[Pretendard] text-sm sm:text-base text-[15px] mt-[0px] mr-[0px] ml-[10px]">Client</h3>
                    <p className="text-white font-[Pretendard] text-sm sm:text-base text-[15px] mx-[10px] my-[0px] break-keep">{media[currentSlide].client}</p>
                  </div>
                )}
                {media[currentSlide].year && (
                  <div>
                    <h3 className="text-white/40 mb-[8px] font-[Pretendard] text-sm sm:text-base mt-[0px] mr-[0px] ml-[10px]">Year</h3>
                    <p className="text-white font-[Pretendard] text-sm sm:text-base text-[15px] mx-[10px] my-[0px] break-keep">{media[currentSlide].year}</p>
                  </div>
                )}
                {media[currentSlide].role && (
                  <div>
                    <h3 className="text-white/40 mb-[8px] font-[Pretendard] text-sm sm:text-base mt-[0px] mr-[0px] ml-[10px]">Role</h3>
                    <p className="text-white font-[Pretendard] text-sm sm:text-base text-[15px] mx-[10px] my-[0px] break-keep">{media[currentSlide].role}</p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Media Slider Container */}
          <div className="relative px-4 sm:px-6 md:px-12">
            {/* Media Content */}
            <div className="relative w-full max-w-[1800px] mx-auto aspect-video bg-white/5 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Left Arrow - Overlay on Media */}
              {totalSlides > 1 && (
                <motion.button
                  onClick={prevSlide}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center text-white/90 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full transition-all duration-300 hover:text-[#00E5AC]"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 stroke-[2.5]" />
                </motion.button>
              )}

              {/* Right Arrow - Overlay on Media */}
              {totalSlides > 1 && (
                <motion.button
                  onClick={nextSlide}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center text-white/90 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full transition-all duration-300 hover:text-[#00E5AC]"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 stroke-[2.5]" />
                </motion.button>
              )}

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  {media[currentSlide].type === 'video' ? (
                    <video
                      src={media[currentSlide].url}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={media[currentSlide].url}
                      alt={`${title} - ${currentSlide + 1}`}
                      className="w-full h-full object-cover"
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination Dots */}
            {totalSlides > 1 && (
              <div className="flex justify-center gap-2 mt-6">
                {media.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentSlide === index ? 'bg-[#00E5AC] w-8' : 'bg-white/20 w-1.5'
                    }`}
                    whileHover={{ scale: 1.2, backgroundColor: currentSlide === index ? '#00E5AC' : 'rgba(255, 255, 255, 0.4)' }}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Project Details - Fixed Below Media */}
      {(media[currentSlide].challenge || media[currentSlide].Scope || media[currentSlide].solution || media[currentSlide].results) && (
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 bg-white/5 sm:mt-16 md:mt-20 mt-[48px] mr-[0px] mb-[0px] ml-[10px]">
          <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16 mx-[10px] my-[0px]">
            {media[currentSlide].Scope && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="mb-4 sm:mb-6 font-[Pretendard] text-[#00E5AC] text-[15px]">Scope</h2>
                <div className="text-white/80 font-[Pretendard] sm:text-lg leading-relaxed sm:leading-loose text-[14px] space-y-2 break-keep text-pretty">
                  {media[currentSlide].Scope.split('|').map((line: string, idx: number) => (
                    <p key={idx} className="text-[15px]">{line.trim()}</p>
                  ))}
                </div>
              </motion.div>
            )}

            {media[currentSlide].challenge && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="mb-4 sm:mb-6 font-[Pretendard] text-[#00E5AC] text-[15px]">The Challenge</h2>
                <div className="text-white/80 font-[Pretendard] sm:text-lg leading-relaxed sm:leading-loose text-[14px] space-y-2 break-keep text-pretty">
                  {media[currentSlide].challenge.split('|').map((line: string, idx: number) => (
                    <p key={idx} className="text-[15px]">{line.trim()}</p>
                  ))}
                </div>
              </motion.div>
            )}

            {media[currentSlide].solution && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="mb-4 sm:mb-6 font-[Pretendard] text-[#00E5AC] text-[15px]">Our Solution</h2>
                <div className="text-white/80 font-[Pretendard] sm:text-lg leading-relaxed sm:leading-loose text-[14px] space-y-2 break-keep text-pretty">
                  {media[currentSlide].solution.split('|').map((line: string, idx: number) => (
                    <p key={idx} className="text-[15px]">{line.trim()}</p>
                  ))}
                </div>
              </motion.div>
            )}

            {media[currentSlide].results && media[currentSlide].results.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="mb-4 sm:mb-6 font-[Pretendard] text-[#00E5AC] text-[15px]">Results</h2>
                <ul className="space-y-3 sm:space-y-4 text-[15px]">
                  {media[currentSlide].results.map((result, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-[#00E5AC] rounded-full mt-2 flex-shrink-0" />
                      <div className="text-white/80 font-[Pretendard] sm:text-lg leading-relaxed sm:leading-loose text-[15px] space-y-2 break-keep text-pretty">
                        {result.split('|').map((line: string, idx: number) => (
                          <p key={idx} className="text-[15px]">{line.trim()}</p>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 sm:mb-8 font-[Pretendard] text-[14px]">다음 프로젝트를 함께 시작하세요</h2>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-[#00E5AC] text-black rounded-full hover:bg-[#00E5AC]/90 transition-colors font-[Pretendard] font-bold"
            >
              Let's talk
            </button>
          </motion.div>
        </div>
      </section>

      {/* Contact Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-2xl bg-zinc-900 rounded-2xl p-8 md:p-12 border border-white/10 project-modal"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-white/60 hover:text-[#00E5AC] transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Modal Content */}
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-[Pretendard]">프로젝트 문의하기</h3>
                  <p className="text-white/60 font-[Pretendard]">
                    프로젝트에 대해 자세히 알려주시면 24시간 내에 답변드리겠습니다.
                  </p>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-white/60 mb-2 font-[Pretendard]">이름</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#00E5AC] transition-colors font-[Pretendard]"
                        placeholder="홍길동"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white/60 mb-2 font-[Pretendard]">이메일</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#00E5AC] transition-colors font-[Pretendard]"
                        placeholder="hello@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-white/60 mb-2 font-[Pretendard]">회사명</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#00E5AC] transition-colors font-[Pretendard]"
                      placeholder="회사명을 입력해주세요"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-white/60 mb-2 font-[Pretendard]">프로젝트 유형</label>
                    <select
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#00E5AC] transition-colors font-[Pretendard]"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    >
                      <option value="">선택해주세요</option>
                      <option value="branding">브랜딩</option>
                      <option value="web">웹사이트 제작</option>
                      <option value="contents">콘텐츠 제작</option>
                      <option value="ai">AI 교육</option>
                      <option value="other">기타</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-white/60 mb-2 font-[Pretendard]">프로젝트 설명</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#00E5AC] transition-colors font-[Pretendard] resize-none"
                      placeholder="프로젝트에 대해 자세히 설명해주세요"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-[#00E5AC] text-black rounded-full hover:bg-[#00E5AC]/90 transition-colors font-[Pretendard] font-bold"
                  >
                    SEND
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
