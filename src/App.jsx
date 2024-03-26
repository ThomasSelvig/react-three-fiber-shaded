import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";

// import "./App.css";
import frag from "./assets/shaders/frag.glsl?raw";
import vert from "./assets/shaders/vert.glsl?raw";

function App() {
  // TODO use drei's shaderMaterial https://github.com/pmndrs/drei?tab=readme-ov-file#shadermaterial

  return (
    <Canvas style={{ height: "100vh" }}>
      <ambientLight intensity={Math.PI / 2} />
      <mesh position={[0, 0, -1]}>
        {/* a plane with w=2 and h=2 is perfectly fullscreen with the orthographic camera */}
        <planeGeometry args={[2, 2, 1, 1]} />
        <shaderMaterial fragmentShader={frag} vertexShader={vert} />
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
    </Canvas>
  );
}

export default App;
