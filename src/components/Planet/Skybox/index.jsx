import { useThree } from "@react-three/fiber";
import { CubeTextureLoader } from "three";

const SkyBox = () => {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();

  const texture = loader.load([
    "/explorer/images/front.jpg",
    "/explorer/images/back.jpg",
    "/explorer/images/top.jpg",
    "/explorer/images/bottom.jpg",
    "/explorer/images/left.jpg",
    "/explorer/images/right.jpg",
  ]);

  scene.background = texture;

  return null;
};

export default SkyBox;
