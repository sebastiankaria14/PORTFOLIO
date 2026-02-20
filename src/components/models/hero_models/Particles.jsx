import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

const Particles = React.memo(({ count = 200 }) => {
  const mesh = useRef();
  let frameCount = 0; // Throttle updates

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 10,
          Math.random() * 10 + 5, // higher starting point
          (Math.random() - 0.5) * 10,
        ],
        speed: 0.005 + Math.random() * 0.001,
      });
    }
    return temp;
  }, [count]);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    particles.forEach((p, i) => {
      pos[i * 3] = p.position[0];
      pos[i * 3 + 1] = p.position[1];
      pos[i * 3 + 2] = p.position[2];
    });
    return pos;
  }, [count, particles]);

  useFrame(() => {
    // Only update every 2 frames for better performance
    if (frameCount++ % 2 !== 0) return;
    
    const posArr = mesh.current.geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
      let y = posArr[i * 3 + 1];
      y -= particles[i].speed;
      if (y < -2) y = Math.random() * 10 + 5;
      posArr[i * 3 + 1] = y;
    }
    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#ffffff"
        size={0.05}
        transparent
        opacity={0.8}
        depthWrite={false}
        sizeAttenuation={true}
      />
    </points>
  );
});

Particles.displayName = "Particles";

export default Particles;
