import React from "react";
import {
  AbsoluteFill,
  interpolate,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { NikeLogo } from "./components/NikeLogo";

type Props = { text: string };

export const NikeComposition: React.FC<Props> = ({ text }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoOpacity = interpolate(frame, [0, fps], [0, 1]);
  const logoTranslateY = interpolate(frame, [0, fps], [60, 0]);
  const textScale = interpolate(frame, [fps * 2, fps * 3], [0.5, 1]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Sequence from={0} durationInFrames={fps * 2}>
        <AbsoluteFill
          style={{
            opacity: logoOpacity,
            transform: `translateY(${logoTranslateY}px)`,
            display: "flex",

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <NikeLogo />
        </AbsoluteFill>
      </Sequence>

      <Sequence
        from={fps}
        durationInFrames={fps * 1}
        style={{
          color: "#ffffff",
          fontSize: "100px",
          textTransform: "uppercase",
          transform: `scale(${textScale})`,
          display: "flex",
          top: "10%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {text}
      </Sequence>
    </AbsoluteFill>
  );
};

export default NikeComposition;
