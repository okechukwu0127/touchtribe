import { useEffect, useState } from "react";

const HLSSource = ({ src, video }, type = "application/x-mpegURL") => {
  try {
    const constructorCheck = Object.prototype.hasOwnProperty.call(
      window,
      "Hls"
    );

    if (constructorCheck) {
      const { Hls } = window;
      const hls = new Hls();

      // eslint-disable-next-line react-hooks/rules-of-hooks
      useEffect(() => {
        if (src !== prevProps) {
          setPrevProps(src);
          if (Hls.isSupported()) {
            hls.loadSource(src);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, () => {});
          }
        }

        return () => {
          if (hls) {
            hls.destroy();
          }
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [src]);
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [prevProps, setPrevProps] = useState();


    return <source src={src} type={type} />;
  } catch (error) {
    //  console.log(error);
  }
};

export default HLSSource;
