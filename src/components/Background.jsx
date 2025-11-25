import { Environment, Sphere } from "@react-three/drei";
import { Gradient, LayerMaterial } from "lamina";
import React from "react";
import * as THREE from "three";

function Background() {
 

  return (
    <>
      {/* <Environment preset="sunset" /> */}
      <Environment preset="sunset" background />
      <Sphere scale={[100, 100, 100]}>
        <LayerMaterial
          lighting="physical"
          side={THREE.BackSide}
          transmission={1}
        >
          <Gradient
            colorA={"#357ca1"}
            colorB={"white"}
            axes={"y"}
            start={0}
            end={-0.5}
          />
        </LayerMaterial>
      </Sphere>
    </>
  );
}

export default Background;
