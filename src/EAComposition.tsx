import {
  AbsoluteFill,
  interpolate,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  staticFile,
  Audio,
} from "remotion";
import EAlogo from "./components/EALogo";

type Props = {};

export const EAComposition: React.FC<Props> = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const eaOpacity = interpolate(frame, [0, fps], [0, 1]);
  const eaScale = interpolate(frame, [0, fps], [0.8, 1]);
  const sportsOpacity = interpolate(frame, [fps, fps * 2], [0, 1]);
  const sportsScale = interpolate(frame, [fps, fps * 2], [0.8, 1]);
  const taglineOpacity = interpolate(frame, [fps * 2, fps * 3], [0, 1]);
  const taglineScale = interpolate(frame, [fps * 2, fps * 3], [0.8, 1]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "white",
      }}
    >
      <Sequence from={0} durationInFrames={fps * 10}>
        <AbsoluteFill style={{ alignItems: "center", top: "20%" }}>
          <EAlogo opacity={eaOpacity} scale={eaScale} />
        </AbsoluteFill>
      </Sequence>

      <Sequence from={fps} durationInFrames={fps * 10}>
        <AbsoluteFill
          style={{
            fontSize: 100,
            fontWeight: "bold",
            justifyContent: "center",
            alignItems: "center",
            opacity: sportsOpacity,
            transform: `scale(${sportsScale})`,
            transition: "opacity 0.5s, transform 1s",
          }}
        >
          SPORTS
        </AbsoluteFill>
      </Sequence>

      <Sequence from={fps * 2} durationInFrames={fps * 10}>
        <AbsoluteFill
          style={{
            fontSize: 50,
            fontWeight: "bold",
            textAlign: "center",
            top: "70%",
            opacity: taglineOpacity,
            transform: `scale(${taglineScale})`,
            transition: "opacity 0.5s, transform 1s",
          }}
        >
          It's in the game
        </AbsoluteFill>
      </Sequence>

      <Audio src={staticFile("EA_Sound.mp3")} />
    </AbsoluteFill>
  );
};
