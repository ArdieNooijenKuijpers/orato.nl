import ScrollDownIndicator from "./ScrollDownIndicator";

const VideoMain = () => {
  return (
    <div className="relative flex flex-col items-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="home-hero-video
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
      <ScrollDownIndicator
        pathId="landing-scroll-circle-path"
        className="home-hero-scroll absolute bottom-28 left-5 md:bottom-52 md:left-auto md:right-20 lg:bottom-80 lg:translate-y-10"
      />
    </div>
  );
};

export default VideoMain;
