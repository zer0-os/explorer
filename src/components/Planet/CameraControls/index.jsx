import { useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const CameraControls = () => {
  const { camera } = useThree();

  camera.position.z = 1000;
  camera.position.x = 0;
  camera.position.y = 200;

  return <OrbitControls camera={camera} enablePan={false} enableZoom={false} enableRotate={true} />;
};

export default CameraControls;
