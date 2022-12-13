import { useEffect, useState } from "react";

const HLSSource = ({ src, video }, type = "application/x-mpegURL") => {
  // try {
  const constructorCheck = Object.prototype.hasOwnProperty.call(window, "Hls");

  const [prevProps, setPrevProps] = useState();

  useEffect(() => {
    if (constructorCheck && src !== prevProps) {
      const { Hls } = window;
      const hls = new Hls();

      //   if (src !== prevProps) {
      setPrevProps(src);
      if (Hls.isSupported()) {
        hls.loadSource(src);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {});
      }
     

      return () => {
        if (hls) {
          hls.destroy();;
        }
      };
    }
  }, [constructorCheck, prevProps, src, video]);

  return <source src={src} type={type} />;;
  
};

export default HLSSource;
