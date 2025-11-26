import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { ScrollControls } from "@react-three/drei";
import { EffectComposer, Noise } from "@react-three/postprocessing";

function App() {
  return (
    <>
      <Canvas>
        <color attach="background" args={["#ececec"]} />
        <ScrollControls pages={100} damping={1}>
          <Experience />
        </ScrollControls>
        {/* <EffectComposer>
          <Noise opacity={0.3}/>
        </EffectComposer> */}
      </Canvas>
    </>
  );
}

export default App;
