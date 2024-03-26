import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { OrthographicCamera } from "@react-three/drei";
import frag from "./assets/shaders/frag.glsl?raw";
import vert from "./assets/shaders/vert.glsl?raw";

export default function Scene() {
  const shader = useRef();
  const uniforms = {
    u_time: { value: 0 },
    u_resolution: { value: [innerWidth, innerHeight] },
  };
  useFrame(() => {
    uniforms.u_time.value = (Date.now() / 1000) % 100000; // prevent overflow
    shader.current.uniforms = uniforms;
  });

  return (
    <>
      <mesh>
        {/**
         * the plane fills the screen bc of pos=0x0x0 and screen sized +
         *   orthographic camera's default responsive camera.
         *   bc of camera bug: https://github.com/pmndrs/drei/issues/515,
         *   removed left/right/... props from ortho camera
         */}
        <planeGeometry args={[innerWidth, innerHeight, 1, 1]} />
        <shaderMaterial
          fragmentShader={frag}
          vertexShader={vert}
          uniforms={uniforms}
          ref={shader}
        />
      </mesh>
      <OrthographicCamera makeDefault near={0} far={1} />
    </>
  );
}
