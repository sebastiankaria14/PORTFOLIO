import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect } from "react";
import * as THREE from "three";

// Preload all models
useGLTF.preload("/models/react_logo-transformed.glb");
useGLTF.preload("/models/python-transformed.glb");
useGLTF.preload("/models/node-transformed.glb");
useGLTF.preload("/models/three.js-transformed.glb");
useGLTF.preload("/models/git-svg-transformed.glb");

// Loading fallback
const Loader = () => {
  return (
    <mesh>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#6366f1" wireframe />
    </mesh>
  );
};

const Model = React.memo(({ model }) => {
  const scene = useGLTF(model.modelPath);

  useEffect(() => {    
    if (!scene?.scene) return;
    
    if (model.name === "Interactive Developer") {
      scene.scene.traverse((child) => {
        if (child.isMesh) {
          if (child.name === "Object_5") {
            child.material = new THREE.MeshStandardMaterial({ color: "white" });
          }
        }
      });
    }
  }, [scene, model.name]);

  if (!scene?.scene) {
    return <Loader />;
  }

  return (
    <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
      <group scale={model.scale} rotation={model.rotation}>
        <primitive object={scene.scene} />
      </group>
    </Float>
  );
});

Model.displayName = "Model";

const TechIconCardExperience = React.memo(({ model }) => {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 1.5]} // Reduced for better performance
        frameloop="demand" // Only render when needed
        style={{ 
          width: '100%', 
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0
        }}
        gl={{ 
          antialias: false, // Disable for better performance
          alpha: true,
          powerPreference: "high-performance",
          stencil: false
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <spotLight
          position={[10, 15, 10]}
          angle={0.3}
          penumbra={1}
          intensity={1.5}
        />
        <Environment preset="city" />

        <Suspense fallback={<Loader />}>
          <Model model={model} />
        </Suspense>

        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
          makeDefault
        />
      </Canvas>
    </div>
  );
});

TechIconCardExperience.displayName = "TechIconCardExperience";

export default TechIconCardExperience;
