import { useState } from "react";
import { Composition } from "remotion";
import { EAComposition } from "./EAComposition";
import { NikeComposition } from "./NikeComposition";
import TextInput from "./components/ui/TextInput";

export const RemotionRoot: React.FC = () => {
  const [text, setText] = useState<string>("Just Do It");
  console.log(text);
  return (
    <>
      <TextInput onChange={setText} defaultValue={text} />

      <Composition
        id="EASports"
        component={EAComposition}
        durationInFrames={120}
        fps={30}
        width={1280}
        height={720}
      />
      <Composition
        id="Nike"
        component={NikeComposition}
        durationInFrames={60}
        fps={30}
        width={1280}
        height={720}
        defaultProps={{ text }}
      />
    </>
  );
};
