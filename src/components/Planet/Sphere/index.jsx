import React, { useRef, useMemo } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const textureLoader = new THREE.TextureLoader();

const Sphere = ({ version }) => {
  const planet = useRef();

  const baseTexture = useMemo(
    () => textureLoader.load(`/explorer/textures/planets/${version}/${version}_basecolor.jpg`),
    []
  );
  const emissiveMap = useMemo(
    () => textureLoader.load(`/explorer/textures/planets/${version}/${version}_emissive.jpg`),
    []
  );
  const normalMap = useMemo(
    () => textureLoader.load(`/explorer/textures/planets/${version}/${version}_normal.jpg`),
    []
  );
  const roughnessMap = useMemo(
    () => textureLoader.load(`/explorer/textures/planets/${version}/${version}_roughness.jpg`),
    []
  );
  const aoMap = useMemo(
    () => textureLoader.load(`/explorer/textures/planets/${version}/${version}_ambientocclusion.jpg`),
    []
  );

  useFrame(() => (planet.current.rotation.y += 0.001));

  return (
    <mesh ref={planet} visible position={[0, 0, 0]} scale={[200, 200, 200]}>
      <sphereGeometry attach="geometry" args={[2, 128, 128]} />
      <meshPhongMaterial
        attach="material"
        map={baseTexture}
        emissiveMap={emissiveMap}
        emissive={0xffffff}
        emissiveIntensity={0.025}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        // aoMap={aoMap}
        // transparent={true}
      />
    </mesh>
  );
};

export default Sphere;
