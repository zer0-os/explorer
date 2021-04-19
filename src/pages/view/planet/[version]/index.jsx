import Head from "next/head";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import { Canvas } from "@react-three/fiber";

const CameraControls = dynamic(() => import("components/Planet/CameraControls"), { ssr: false });
const Sun = dynamic(() => import("components/Planet/Sun"), { ssr: false });
const Skybox = dynamic(() => import("components/Planet/Skybox"), { ssr: false });
const Sphere = dynamic(() => import("components/Planet/Sphere"), { ssr: false });
const Effects = dynamic(() => import("components/Planet/Effects"), { ssr: false });
const Rings = dynamic(() => import("components/Planet/Rings"), { ssr: false });

export default function Explorer() {
  const router = useRouter();

  return (
    <div className="h-full overflow-hidden">
      <Head>
        <title>Explorer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative block w-full h-full">
        <Canvas className="canvas min-h-screen">
          <CameraControls />
          <Sun />
          <Suspense fallback="loading">
            <Sphere version={router.query.version} />
            {/* <Rings /> */}
          </Suspense>
          <Skybox />
          {/* <Effects /> */}
        </Canvas>
      </div>
    </div>
  );
}
