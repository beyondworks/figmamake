import { useEffect, useState } from 'react';

export default function ConcurrentUsersBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    // Calculate concurrent users based on time
    const calculateUsers = () => {
      const now = new Date();
      const hour = now.getHours();
      const isWeekend = [0, 6].includes(now.getDay());

      let min = 37;
      let max = 75;

      // Lunch time (11:00-14:00)
      if (hour >= 11 && hour < 14) {
        min = 52;
        max = 89;
      }
      // Afternoon peak (14:00-18:00)
      else if (hour >= 14 && hour < 18) {
        min = 85;
        max = 120;
        if (isWeekend) {
          min = Math.floor(min * 1.2);
          max = Math.floor(max * 1.3);
        }
      }
      // Evening peak (20:00-23:00)
      else if (hour >= 20 && hour < 23) {
        min = 85;
        max = 171;
      }

      // Get stored data
      const stored = localStorage.getItem('concurrentUsersData');
      let baseCount = min;

      if (stored) {
        try {
          const data = JSON.parse(stored);
          const timeDiff = Date.now() - data.timestamp;
          if (timeDiff < 300000) {
            // 5 minutes
            baseCount = data.baseCount;
          }
        } catch (e) {
          // Ignore parse errors
        }
      }

      if (!stored || Date.now() - JSON.parse(stored).timestamp >= 300000) {
        baseCount = Math.floor(Math.random() * (max - min + 1)) + min;
        localStorage.setItem('concurrentUsersData', JSON.stringify({ baseCount, timestamp: Date.now() }));
      }

      // Add fluctuation
      const fluctuation = Math.floor(Math.random() * 41) - 20; // ±20
      return Math.max(baseCount + fluctuation, 37);
    };

    const count = calculateUsers();
    setUserCount(count);

    // Show banner after page load
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Hide banner after 5 seconds
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 7000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div
      className={`fixed top-[100px] md:top-[120px] left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-3 rounded-lg z-[9999] shadow-lg transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}
    >
      <div className="flex items-center gap-2">
        <span className="text-sm whitespace-nowrap">
          현재 동시 접속자 수는 <span className="text-[#00E5AC]">{userCount}</span>명 입니다
        </span>
        <button onClick={handleClose} className="text-white/80 hover:text-[#00E5AC] transition-colors ml-2">
          ×
        </button>
      </div>
    </div>
  );
}