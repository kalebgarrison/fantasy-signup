import React from 'react';
import falconshighlight from "../Video/falcons2020.mp4"

const Highlight = () => {

    return (
        <div>
            <video
            autoPlay="autoplay"
            loop="loop"
            muted
            style={{
                position: "absolute",
                width: "100%",
                left: "50%",
                top: "50%",
                height: "100%",
                objectFit: "cover",
                transform: "translate(-50%, -50%)",
                zIndex: "-1"
            }}
            >
                <source src={falconshighlight} type="video/mp4" />
            </video>
        </div>
    );
};

export default Highlight;