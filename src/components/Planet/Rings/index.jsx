import React, { useRef, useMemo } from "react";
import * as THREE from "three";

const textureLoader = new THREE.TextureLoader();

const Rings = () => {
  const planet = useRef();

  const ringTexture = useMemo(() => textureLoader.load("/explorer/textures/saturn-rings-top.png"), []);

  const geom = useMemo(() => {
    const g = new THREE.RingBufferGeometry(5, 6, 64);
    // const pos = g.attributes.position;
    // const v3 = new THREE.Vector3();
    // console.log(pos);
    // for (let i = 0; i < pos.count; i++) {
    //   v3.fromBufferAttribute(pos, i);
    //   g.attributes.uv.setXY(i, v3.length() < 4 ? 0 : 1, 1);
    // }
    return g;
  }, []);

  return (
    <mesh ref={planet} rotation={[Math.PI / 2, Math.PI / 4, 0]} scale={[100, 100, 100]} geometry={geom}>
      {/* <ringBufferGeometry args={[3, 5, 64]} attach="geometry" /> */}
      <meshBasicMaterial
        attach="material"
        side={THREE.DoubleSide}
        color={0xffffff}
        transparent={true}
        map={ringTexture}
      />
    </mesh>
  );
};

export default Rings;
