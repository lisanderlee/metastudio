import "./file-canvas-three-canvas-panel.css";
import ThreeMoldeLoader from  '../../../../components/three/three-model-loader';
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls,ContactShadows } from "@react-three/drei";
import { Suspense } from "react";
import { button, useControls } from 'leva'

export default function FileThreeCanvasPanel(FilePath) {

 
  const  vierwerSettings  = useControls({ 
    lighting: { value: 0.5, min: 0, max: 4, step: 0.1 },
    color: '#ffffff',
    "foo": button,
    foo: button((get) => alert(`Number value is`)),
  })

  
  return (
    <div className="container-file-three-loader-panel">
      <Canvas style={{ background: vierwerSettings.color }}>
      
      <hemisphereLight color={vierwerSettings.color} groundColor={vierwerSettings.color} intensity={0.75} />
        <Suspense fallback={null}>
        <ambientLight intensity={vierwerSettings.lighting} />
          <ThreeMoldeLoader FilePath={FilePath.FilePath} />
          <OrbitControls autoRotate />
          <Environment  preset="sunset"  />
        </Suspense>
      </Canvas>
    </div>
  );
}


