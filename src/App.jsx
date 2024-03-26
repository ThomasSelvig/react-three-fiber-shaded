import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// import "./App.css";
import frag from "./assets/shaders/frag.glsl?raw";
import vert from "./assets/shaders/vert.glsl?raw";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Canvas style={{ height: "100vh" }}>
      <ambientLight intensity={Math.PI / 2} />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        {/* <meshBasicMaterial color="hotpink" /> */}
        <shaderMaterial fragmentShader={frag} vertexShader={vert} />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
}

export default App;
