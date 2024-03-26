import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";

// import "./App.css";
import frag from "./assets/shaders/frag.glsl?raw";
import vert from "./assets/shaders/vert.glsl?raw";
import { useEffect } from "react";

function Scene() {
  const shader = useRef();
  const uniforms = {
    u_time: { value: 0 },
  };
  useFrame(() => {
    uniforms.u_time.value = (Date.now() / 1000) % 1;
    shader.current.uniforms = uniforms;
  });

  return (
    <>
      <ambientLight intensity={Math.PI / 2} />
      <mesh position={[0, 0, -1]}>
        {/* a plane with w=2 and h=2 is perfectly fullscreen with the orthographic camera */}
        <planeGeometry args={[2, 2, 1, 1]} />
        <shaderMaterial
          fragmentShader={frag}
          vertexShader={vert}
          uniforms={uniforms}
          ref={shader}
        />
      </mesh>
      <OrthographicCamera
        makeDefault
        position={[0, 0, 0]}
        zoom={1}
        // zoom={0.5}
        left={-1}
        right={1}
        top={1}
        bottom={-1}
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
