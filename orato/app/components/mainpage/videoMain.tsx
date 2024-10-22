const VideoMain = () => {
  return (
    <div className="relative flex flex-col items-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="
                cursor-invert
                cursor-big
                absolute 
                bottom-0 
                right-14 
                transform 
                translate-y-1/4 
                w-[215px] 
                h-[300px] 
                rounded-full 
                object-cover 

                md:w-[215px] 
                md:h-[300px] 
                md:right-14


                lg:right-14 

                lg:w-[370px] 
                lg:h-[500px]
              "
      >
        <source src="/Homepage/temp-vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Scroll Indicator */}
      <div className="absolute lg:bottom-96 lg:translate-y-6 right-20 md:bottom-60 bottom-56 flex flex-col items-center">
        <span className="text-black text-sm mb-2  animate-pulse">Scroll</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
};

export default VideoMain;
