import React from "react";
import Lottie from "react-lottie";
import animationData from "./95100-contact-us.json";

export default function Anims() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      className: "lottie-svg-class",
      id: "lottie-svg-id",
    },
  };

  return <Lottie options={defaultOptions} height={200} width={200} />;
}
