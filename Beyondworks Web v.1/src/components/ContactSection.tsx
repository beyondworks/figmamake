import { useState } from 'react';
import { motion } from 'motion/react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('문의가 접수되었습니다. 곧 연락드리겠습니다!');
    
    // 폼 초기화
    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-[#00E5AC]/10 via-transparent to-transparent opacity-30 my-[0px] m-[0px] p-[0px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 mx-[10px] my-[0px]">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="sm:mb-6 font-[Pretendard] sm:text-[30px] md:text-[36px] font-bold mt-[0px] mr-[0px] mb-[16px] ml-[10px] text-[24px]">
              <span className="text-[#00E5AC] font-bold">프로젝트</span>를<br />시작할 준비가 되셨나요?
            </h2>
            <p className="text-white/60 sm:mb-12 font-[Pretendard] text-sm sm:text-base mt-[0px] mr-[0px] mb-[32px] ml-[10px]">
              고민하는 동안 경쟁자는 우리를 고용하고 있습니다.
            </p>

            <div className="space-y-5 sm:space-y-6 mx-[10px] my-[0px] m-[0px]">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#00E5AC]/10 flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      stroke="#00E5AC"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white mb-1 font-[Pretendard] text-sm sm:text-base">Email</h4>
                  <a href="mailto:beyondworks.br@gmail.com" className="text-white/60 hover:text-[#00E5AC] transition-colors font-[Pretendard] text-xs sm:text-sm break-all">
                    beyondworks.br@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#00E5AC]/10 flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      stroke="#00E5AC"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white mb-1 font-[Pretendard] text-sm sm:text-base">Phone</h4>
                  <a href="tel:+821077996255" className="text-white/60 hover:text-[#00E5AC] transition-colors font-[Pretendard] text-xs sm:text-sm">
                    +82 10-7799-6255
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#00E5AC]/10 flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      stroke="#00E5AC"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      stroke="#00E5AC"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white mb-1 font-[Pretendard] text-sm sm:text-base">Office</h4>
                  <p className="text-white/60 font-[Pretendard] text-xs sm:text-sm">서울특별시 강남구 테헤란로</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-[8px] font-[Pretendard] text-sm sm:text-base mt-[0px] mr-[0px] ml-[10px]">
                  이름 *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#00E5AC] transition-colors text-sm sm:text-base my-[0px] m-[0px]"
                  placeholder="홍길동"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-[8px] font-[Pretendard] text-sm sm:text-base mt-[0px] mr-[0px] ml-[10px]">
                  이메일 *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#00E5AC] transition-colors text-sm sm:text-base"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-white mb-[8px] font-[Pretendard] text-sm sm:text-base mt-[0px] mr-[0px] ml-[10px]">
                  회사명
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#00E5AC] transition-colors text-sm sm:text-base"
                  placeholder="회사명 (선택)"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-[8px] font-[Pretendard] text-sm sm:text-base mt-[0px] mr-[0px] ml-[10px]">
                  프로젝트 설명 *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#00E5AC] transition-colors resize-none text-sm sm:text-base"
                  placeholder="프로젝트에 대해 자세히 알려주세요"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 sm:px-8 sm:py-4 bg-[#00E5AC] text-black rounded-lg hover:bg-[#00B386] transition-all hover:scale-[1.02] active:scale-[0.98] group font-bold text-sm sm:text-base my-[0px] m-[0px]"
              >
                Let's talk
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}