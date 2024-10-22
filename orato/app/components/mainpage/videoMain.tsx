const VideoMain = () => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      className="
        absolute 
        bottom-0
        right-14 
        transform translate-y-1/4 
        w-[370px] 
        h-[500px] 
        rounded-[170px]
        object-cover 
        z-10
      "
    >
      <source src="/Homepage/temp-vid.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoMain;
