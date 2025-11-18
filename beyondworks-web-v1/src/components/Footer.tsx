import Frame from '../imports/Frame11';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 mx-[10px] my-[0px]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-8">
          {/* Left: Brand */}
          <div className="flex-1">
            <div 
              className="flex items-center gap-3 mb-4 cursor-pointer w-[180px] md:w-[220px]"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{ '--fill-0': '#F2F2F2' } as React.CSSProperties}
            >
              <Frame />
            </div>
            <p className="text-white/60 font-normal font-[Pretendard]">
              
              <br />
              
            </p>
          </div>

          {/* Right: Links and Social */}
          <div className="flex gap-16 md:gap-24">
            {/* Quick Links */}
            <div>
              <h4 className="text-[rgba(255,255,255,0.9)] mb-4 font-[Pretendard] text-[14px]">Quick Links</h4>
              <ul className="space-y-2 mx-[0px] m-[0px] px-[0px] p-[0px]">
                <li className="font-[Pretendard] text-[13px]">
                  <button
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-white/60 hover:text-[#00E5AC] transition-colors text-[14px]"
                  >
                    서비스
                  </button>
                </li>
                <li className="font-[Pretendard]">
                  <button
                    onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-white/60 hover:text-[#00E5AC] transition-colors text-[13px]"
                  >
                    포트폴리오
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-white/60 hover:text-[#00E5AC] transition-colors font-[Pretendard] text-[13px]"
                  >
                    문의하기
                  </button>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h4 className="text-[rgba(255,255,255,0.9)] mb-4 font-[Pretendard] text-[14px]">Follow Us</h4>
              <div className="flex gap-4">
                {/* Instagram */}
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#00E5AC] transition-all flex items-center justify-center"
                  aria-label="Instagram"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                {/* Threads */}
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#00E5AC] transition-all flex items-center justify-center"
                  aria-label="Threads"
                >
                  <svg width="20" height="20" viewBox="0 0 210 245" fill="currentColor" className="text-white" preserveAspectRatio="xMidYMid meet">
                    <path clipRule="evenodd" fillRule="evenodd" d="M29.5407 33.024C48.6649 10.6167 75.1437 0 103.84 0C131.234 0 155.455 6.58438 174.142 20.039C193.032 33.6365 205.371 53.5938 209.766 78.349C210.088 80.0108 210.078 81.7205 209.735 83.3783C209.393 85.0362 208.725 86.609 207.771 88.0053C206.816 89.4015 205.595 90.5932 204.177 91.5109C202.759 92.4287 201.174 93.0541 199.513 93.3508C197.851 93.6474 196.148 93.6094 194.502 93.2389C192.856 92.8684 191.299 92.1729 189.924 91.1928C188.548 90.2127 187.38 88.9677 186.489 87.5302C185.597 86.0928 185 84.4917 184.731 82.8202C181.425 64.2206 172.504 50.2556 159.331 40.7823C145.964 31.166 127.328 25.5208 103.84 25.5208C81.6642 25.5208 62.5808 33.5446 48.848 49.6227C34.9626 65.8948 25.4311 91.7627 25.4311 129.35C25.4311 165.61 37.6482 187.496 53.3035 200.573C69.3759 214.008 90.6974 219.479 110.676 219.479C150.125 219.479 174.305 196.184 175.434 170.704C175.993 158.056 170.734 147.837 160.968 140.354L160.256 139.813C158.293 148.776 155.048 156.759 150.572 163.578C141.214 177.839 126.972 186.169 110.656 187.374C95.6005 188.497 82.9663 184.863 73.7298 177.411C69.4611 173.983 65.957 169.693 63.4442 164.821C60.9315 159.948 59.4659 154.6 59.1425 149.123C58.6542 140.722 60.058 128.319 69.5997 118.059C79.1923 107.749 94.6544 102.124 116.749 102.124C123.269 102.124 129.648 102.604 135.792 103.584C133.625 92.8652 128.742 87.659 124.51 84.8415C118.783 81.0133 112.202 80.2783 108.998 80.2783C100.005 80.2783 92.0401 83.6675 84.5532 92.2833C82.3276 94.7968 79.2033 96.327 75.8595 96.5416C72.5158 96.7561 69.2228 95.6375 66.6963 93.429C64.1698 91.2204 62.6141 88.1004 62.3673 84.7472C62.1205 81.3939 63.2025 78.0783 65.3782 75.5212C77.3003 61.791 92.0706 54.7575 108.998 54.7575C114.928 54.7575 127.115 55.9315 138.589 63.5775C150.725 71.6727 160.378 85.9133 162.087 108.586L162.271 111.536C167.357 113.925 172.097 116.773 176.4 120.07C192.259 132.218 201.79 150.195 200.834 171.837C198.922 214.957 159.351 245 110.676 245C86.5979 245 58.9187 238.467 37.0276 220.194C14.7195 201.553 0 172 0 129.36C0 87.6487 10.5793 55.2169 29.5407 33.024ZM136.249 129.605C129.836 128.269 123.3 127.612 116.749 127.645C98.5403 127.645 91.1755 132.269 88.1949 135.475C85.1737 138.721 84.2684 143.06 84.5329 147.623C84.7363 151.236 86.3842 154.86 89.6903 157.525C92.9455 160.169 98.8353 162.66 108.784 161.925C117.125 161.312 124.246 157.28 129.332 149.542C132.506 144.703 135.049 138.109 136.249 129.605Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm text-[12px]">© 2025 BEYONDWORKS. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/40 hover:text-white transition-colors text-[12px]">
              Privacy Policy
            </a>
            <a href="#" className="text-white/40 hover:text-white transition-colors text-[12px]">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}