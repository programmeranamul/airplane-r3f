import { Environment, Sphere } from "@react-three/drei";
import { Gradient, LayerMaterial } from "lamina";
import React from "react";
import * as THREE from "three";

function Background() {
  const colorA = "#0923be";
  const colorB = "#ffad30";
  const start = 0.2;
  const end = -0.5;

  return (
    <>
      <Sphere scale={[500, 500, 500]} rotation-y={Math.PI / 2}>
        <LayerMaterial color={"#fff"} side={THREE.BackSide}>
          <Gradient
            colorA={colorA}
            colorB={colorB}
            axes={"y"}
            start={start}
            end={end}
          />
        </LayerMaterial>
      </Sphere>
      <Environment preset="sunset" background />
      <Sphere scale={[100, 100, 100]}>
        <LayerMaterial color={"#ffffff"} side={THREE.BackSide}>
          <Gradient
            colorA={colorA}
            colorB={colorB}
            axes={"y"}
            start={start}
            end={end}
          />
        </LayerMaterial>
      </Sphere>
    </>
  );
}

export default Background;
