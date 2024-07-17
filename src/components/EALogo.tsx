import React from "react";
import { Img, staticFile } from "remotion";

type EAlogoProps = {
  opacity: number;
  scale: number;
};

const EAlogo: React.FC<EAlogoProps> = ({ opacity, scale }) => {
  return (
    <Img
      src={staticFile("EALogo.png")}
      style={{
        width: "150px",
        height: "auto",
        opacity: opacity,
        transform: `scale(${scale})`,
        transition: "opacity 0.5s, transform 1s",
      }}
    />
  );
};

export default EAlogo;
