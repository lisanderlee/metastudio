import "./file-canvas-three-canvas-panel.css";
import ThreeMoldeLoader from  '../../../../components/three/three-model-loader';
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";



export default function FileThreeCanvasPanel(FilePath) {

  return (
    <div className="container-file-three-loader-panel">
      <Canvas>
        <Suspense fallback={null}>
        <ambientLight />
          <ThreeMoldeLoader FilePath={FilePath.FilePath} />
          <OrbitControls autoRotate />
          <Environment preset="sunset"  />

        </Suspense>
      </Canvas>
    </div>
  );
}



