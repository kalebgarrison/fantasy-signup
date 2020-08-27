import React from "react";
// import superbowl from "/Images/superbowl.jpg";
import "./style.css";
import SlimNav from "../../components/SlimNav/SlimNav"

const SadDay = () => {
  return (
      <div>
          <SlimNav />
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/saWfIKscpsQ?autoplay=1"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/XGjObBHLr1o?autoplay=1"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Prgnrg17fGs?autoplay=1"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/99CitdgQo6I?autoplay=1"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SadDay;
