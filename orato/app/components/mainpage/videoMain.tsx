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
                z-10
                cursor-invert
                cursor-big
                absolute 
                bottom-0 
                right-14 
                transform 
                translate-y-[35%] 
                w-[190px] 
                h-[265px] 
                rounded-full 
                object-cover 

                md:w-[190px] 
                md:h-[265px] 
                md:right-14


                lg:right-14 

                lg:w-[330px] 
                lg:h-[450px]
              "
      >
        <source src="/Homepage/temp-vid-3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Scroll Indicator */}
      <div className="absolute bottom-20 left-4 flex flex-col items-center md:bottom-52 md:left-auto md:right-20 lg:bottom-80 lg:translate-y-10">
        <div className="relative flex items-center justify-center w-24 h-24">
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full animate-spin [animation-duration:10s]"
            aria-hidden="true"
          >
            <defs>
              <path
                id="scroll-circle-path"
                d="M 50,50 m -34,0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0"
              />
            </defs>
            <text fill="black" fontSize="10" letterSpacing="1.4" textAnchor="middle">
              <textPath
                href="#scroll-circle-path"
                startOffset="50%"
                textLength="211"
                lengthAdjust="spacing"
              >
                SCROLL DOWN • SCROLL DOWN •
              </textPath>
            </text>
          </svg>
          <div className="z-10 flex flex-col items-center">
            <span className="text-black text-l  animate-pulse">Scroll</span>
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
      </div>
    </div>
  );
};

export default VideoMain;
