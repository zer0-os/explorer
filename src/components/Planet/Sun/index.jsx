const Sun = () => {
  return (
    <group position={[0, 0, 0]}>
      <hemisphereLight args={["white", 1]} />
      {/* <pointLight intensity={1} position={[0, 200, 200]} castShadow /> */}
      <directionalLight intensity={1} position={[200, 200, 200]} />
      <ambientLight intensity={1} />
    </group>
  );
};

export default Sun;
