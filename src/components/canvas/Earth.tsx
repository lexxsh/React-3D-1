import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../layout/Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={1.0} position={[0, 0, 0]} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 3]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 60,
        near: 0.1,
        far: 1000,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          minPolarAngle={undefined}  // 상단으로 움직일 수 있는 최소 각도 없음
          maxPolarAngle={undefined}  // 상단으로 움직일 수 있는 최대 각도 없음
          minAzimuthAngle={undefined}  // 좌우로 회전할 수 있는 최소 각도 없음
          maxAzimuthAngle={undefined}  // 좌우로 회전할 수 있는 최대 각도 없음
        />
        <Earth />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
