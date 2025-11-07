import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Object3D } from "three";
import usePrefersReducedData from "../../hooks/usePrefersReducedData";

// Lightweight bubbles using a single InstancedMesh; only mounted when visible.
function Bubbles({ count = 12, speed = 0.15 }) {
  const mesh = useRef();
  const dummy = useMemo(() => new Object3D(), []);
  const seeds = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        x: (Math.random() - 0.5) * 1.2, // slightly wider than view
        y: Math.random() * 1.6 - 0.8, // start between -0.8..0.8
        z: (Math.random() - 0.5) * 0.2, // shallow depth
        r: 0.015 + Math.random() * 0.025, // smaller bubble radius
        v: 0.25 + Math.random() * 0.5, // vertical speed multiplier
        d: Math.random() * Math.PI * 2, // phase for lateral drift
      })),
    [count]
  );

  useFrame((state, dt) => {
    if (!mesh.current) return;
    const t = state.clock.getElapsedTime();
    for (let i = 0; i < count; i++) {
      const s = seeds[i];
      s.y += speed * s.v * dt; // rise
      if (s.y > 0.9) {
        s.y = -0.9; // wrap
        s.x = (Math.random() - 0.5) * 1.2;
        s.r = 0.015 + Math.random() * 0.025;
        s.d = Math.random() * Math.PI * 2;
      }
      const drift = Math.sin(t * (0.5 + s.v * 0.2) + s.d) * 0.08;
      dummy.position.set(s.x + drift, s.y, s.z);
      const scale = 0.8 + Math.sin(t * 1.5 + i) * 0.2;
      dummy.scale.setScalar(s.r * (0.9 + scale * 0.2));
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    }
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshPhysicalMaterial
        transparent
        opacity={0.18}
        roughness={0.2}
        metalness={0}
        color={"#8BD3E6"}
        transmission={0.7}
        thickness={0.2}
      />
    </instancedMesh>
  );
}

function ClearAlpha() {
  // Ensure canvas is fully transparent to show CSS card background
  const { gl } = useThree();
  useEffect(() => {
    const prev = gl.getClearAlpha();
    gl.setClearAlpha(0);
    return () => gl.setClearAlpha(prev);
  }, [gl]);
  return null;
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[1, 1, 1]} intensity={0.25} />
      <Bubbles />
      <ClearAlpha />
    </>
  );
}

export default function CardWaterBubbles({ className = "" }) {
  const reduced = usePrefersReducedData();
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reduced) return; // respect reduced motion
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          setVisible(e.isIntersecting);
        }
      },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [reduced]);

  // If reduced motion, render nothing.
  if (reduced) return <div ref={containerRef} className={className} />;

  return (
    <div ref={containerRef} className={className}>
      {visible ? (
        <Suspense fallback={null}>
          <Canvas
            dpr={[1, 1.5]}
            gl={{ antialias: false, powerPreference: "low-power" }}
            camera={{ position: [0, 0, 1.2], fov: 30, near: 0.1, far: 5 }}
          >
            <Scene />
          </Canvas>
        </Suspense>
      ) : null}
    </div>
  );
}
