import React from "react";
import Lottie from "react-lottie";
import animationData from "./71619-coding.json";

export default function Anim() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      className: "lottie-svg-class",
      id: "lottie-svg-id"
    }
  };

  return <Lottie options={defaultOptions}     height={400}
  width={400}/>;
}