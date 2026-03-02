'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';


const RotatingImageWithDate = () => {
    const [currentTime, setCurrentTime] = useState<string>('');
  
    useEffect(() => {
      // Set the current time after component mounts (client-side only)
      setCurrentTime(new Date().toLocaleTimeString());
  
      const interval = setInterval(() => {
        setCurrentTime(new Date().toLocaleTimeString());
      }, 1000);
  
      // Cleanup interval on component unmount
      return () => clearInterval(interval);
    }, []);
  
    return (
        <div className="absolute bottom-4 left-4 flex items-center">
        <Image
          src="/Homepage/orato-bloem-wit.png"
          alt="Orato"
          width={20}
          height={20}
          priority
          className="invert animate-spin-tick"
        />
        <div className="text-black ml-2">{currentTime}</div>
      </div>
    );
  };
  
  export default RotatingImageWithDate;
