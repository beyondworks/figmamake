import { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

const portfolioItems = [
  {
    id: 1,
    title: 'AI literacy classes',
    category: 'AI Class',
    image: 'https://res.cloudinary.com/dxzkoqvgn/video/upload/v1763034923/01.ai_class_msgxup.mp4',
    type: 'video',
  },
  {
    id: 2,
    title: 'Video Advertising',
    category: 'Contents',
    image: 'https://res.cloudinary.com/dxzkoqvgn/video/upload/v1763034931/02.contents_akvtzm.mp4',
    type: 'video',
  },
  {
    id: 3,
    title: 'Brand Assets',
    category: 'Branding',
    image: 'https://res.cloudinary.com/dxzkoqvgn/video/upload/v1763034939/03.assets_xaawbi.mp4',
    type: 'video',
  },
  {
    id: 4,
    title: 'Brand Identity',
    category: 'Branding',
    image: 'https://res.cloudinary.com/dxzkoqvgn/video/upload/v1763034947/04.identity_fjjluw.mp4',
    type: 'video',
  },
  {
    id: 5,
    title: 'Corporate Website',
    category: 'Web Design',
    image: 'https://res.cloudinary.com/dxzkoqvgn/video/upload/v1763034954/05.webdesign_clvuzm.mp4',
    type: 'video',
  },
  {
    id: 6,
    title: 'Product Landing Page',
    category: 'Product Page',
    image: 'https://res.cloudinary.com/dxzkoqvgn/video/upload/v1763034961/06.page_rvmbco.mp4',
    type: 'video',
  },
];

const categories = ['All', 'AI Class', 'Contents', 'Branding', 'Web Design', 'Product Page'];

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const navigate = useNavigate();

  const filteredItems =
    selectedCategory === 'All' ? portfolioItems : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-black mx-[10px] my-[0px]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="mb-4 sm:mb-6 font-[Pretendard] sm:text-[40px] md:text-[48px] font-bold text-[24px]">
            <span className="text-[#00E5AC]">Selected</span> Works
          </h2>
          <p className="text-white/60 max-w-2xl font-[Pretendard] text-sm sm:text-base text-[14px]">
            우리는 브랜드의 본질을 이해하고 시각적으로 구현합니다. 각 프로젝트는 고유한 스토리를 담고 있습니다.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-2 sm:gap-3 mb-10 sm:mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-1.5 sm:px-6 sm:py-2 rounded-full transition-all text-sm sm:text-base font-[Pretendard] ${
                selectedCategory === category
                  ? 'bg-[#00E5AC] text-black'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white active:scale-95'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              data-project-item
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredId(item.id)}
              onHoverEnd={() => setHoveredId(null)}
              onClick={() => navigate(`/project/${item.id}`)}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-white/5 cursor-pointer"
            >
              {item.type === 'video' ? (
                <video
                  src={item.image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              )}

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity duration-300 ${
                  hoveredId === item.id ? 'opacity-100' : 'md:opacity-0 opacity-100'
                }`}
              >
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <span className="inline-block px-3 py-1 bg-[#00E5AC] text-black text-xs sm:text-sm rounded-full mb-2 sm:mb-3 font-[Pretendard]">{item.category}</span>
                  <h3 className="text-white text-base sm:text-lg font-[Pretendard] text-[14px]">{item.title}</h3>
                </div>
              </div>

              {/* Corner indicator */}
              <div
                className={`absolute top-3 right-3 sm:top-4 sm:right-4 w-7 h-7 sm:w-8 sm:h-8 border-2 border-white rounded-full flex items-center justify-center transition-all duration-300 ${
                  hoveredId === item.id ? 'opacity-100 scale-100' : 'md:opacity-0 md:scale-50 opacity-100 scale-100'
                }`}
              >
                <svg width="12" height="12" className="sm:w-[14px] sm:h-[14px]" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7v10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}