import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


export default function ThreeMoldeLoader(){
  const gltf = useLoader(GLTFLoader, "/assets/flamingo.glb");
  return (
    <>
      <primitive object={gltf.scene}  />
    </>
  );
}
