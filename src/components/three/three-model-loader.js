import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


export default function ThreeMoldeLoader(FilePath){
  
  const gltf = useLoader(GLTFLoader, FilePath.FilePath);
  return (
    <>
      <primitive object={gltf.scene}  />
    </>
  );
}
