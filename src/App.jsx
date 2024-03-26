import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";

// import "./App.css";
import frag from "./assets/shaders/frag.glsl?raw";
import vert from "./assets/shaders/vert.glsl?raw";

function Scene() {
  const shader = useRef();
  const uniforms = {
    u_time: { value: 0 },
    u_resolution: { value: [innerWidth, innerHeight] },
  };
  useFrame(() => {
    uniforms.u_time.value = (Date.now() / 1000) % 1_000_000; // prevent overflow
    shader.current.uniforms = uniforms;
  });

  return (
    <>
      <mesh>
        {/* a plane with w=2 and h=2 is perfectly fullscreen with the orthographic camera */}
        <planeGeometry args={[innerWidth, innerHeight, 1, 1]} />
        <shaderMaterial
          fragmentShader={frag}
          vertexShader={vert}
          uniforms={uniforms}
          ref={shader}
        />
      </mesh>
      <OrthographicCamera
        // removed left/right/... bc of https://github.com/pmndrs/drei/issues/515
        makeDefault
        near={0}
        far={1}
      />
    </>
  );
}

function App() {
  return (
    <Canvas style={{ height: "100vh" }}>
      <Scene />
    </Canvas>
  );
}

export default App;
