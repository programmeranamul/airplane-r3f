import { OrbitControls } from "@react-three/drei";
import Background from "./Background";
import { Suspense } from "react";

export const Experience = () => {
  return (
    <>
      {/* <Suspense>
        <Background />
      </Suspense> */}
      <Background />

      <OrbitControls />
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
};
