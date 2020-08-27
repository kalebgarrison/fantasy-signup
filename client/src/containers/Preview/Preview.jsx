import React from "react";
import falconshighlight from "../../components/Video/falcons2020.mp4";
import SlimNav from "../../components/SlimNav/SlimNav";
const Preview = () => {
  return (
    <div>
      <SlimNav />
      <div>
        <video
          autoPlay
          loop
          playsInline
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }}
        >
          <source src={falconshighlight} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Preview;
