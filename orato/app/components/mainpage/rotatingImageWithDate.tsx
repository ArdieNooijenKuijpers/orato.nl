'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const formatTime = (date: Date) =>
  date.toLocaleTimeString('en-GB', { hour12: false });

const RotatingImageWithDate = () => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [currentSecond, setCurrentSecond] = useState<number>(0);

  useEffect(() => {
    let timeoutId: number;

    const tick = () => {
      const now = new Date();
      setCurrentTime(formatTime(now));
      setCurrentSecond(now.getSeconds());

      // Re-schedule on the next exact second boundary.
      timeoutId = window.setTimeout(tick, 1000 - now.getMilliseconds());
    };

    tick();

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <div className="absolute bottom-4 left-4 flex items-center">
      <Image
        src="/Homepage/orato-bloem-wit.png"
        alt="Orato"
        width={20}
        height={20}
        priority
        className="invert"
        style={{
          transform: `rotate(${currentSecond * 12}deg)`,
          transition: 'transform 120ms ease-out',
        }}
      />
      <div className="text-black ml-2">{currentTime}</div>
    </div>
  );
};

export default RotatingImageWithDate;
