'use client';
import React, { useEffect, useRef, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "../../utils/utils";
import { Group } from "three";

const ParticleRing = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-[60vh] w-[90vw] md:h-screen md:w-screen"
    >
      <Canvas
        camera={{
          position: [10, -7.5, -5],
        }}
        dpr={[1, 1.5]}
        frameloop="demand"
        gl={{ antialias: false, powerPreference: "high-performance" }}
        className="h-full w-full bg-grey-900"
      >
        <OrbitControls enablePan={false} enableZoom={false} maxDistance={20} minDistance={10} />
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <PointCircle isVisible={isVisible} />
      </Canvas>

      <h1 className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-slate-200 font-medium text-2xl md:text-5xl pointer-events-none">
        A New Perspective
      </h1>
      <h1 className="absolute top-[80%] left-[80%] -translate-x-[50%] -translate-y-[50%] text-slate-200 font-small text-md md:text-2xl pointer-events-none">
      &gt; Click & Sleep &lt;
        
      </h1>
      <div className=""></div>
    </div>
  );
};

const PointCircle = ({ isVisible }: { isVisible: boolean }) => {
  const ref = useRef<Group | null>(null);
  const { invalidate } = useThree();
  const frameRef = useRef<number | null>(null);
  const lastTickRef = useRef(0);

  useEffect(() => {
    const tick = (time: number) => {
      if (isVisible && time - lastTickRef.current >= 1000 / 30) {
        if (ref.current?.rotation) {
          ref.current.rotation.z = (time / 1000) * 0.05;
        }
        invalidate();
        lastTickRef.current = time;
      }
      frameRef.current = window.requestAnimationFrame(tick);
    };

    frameRef.current = window.requestAnimationFrame(tick);
    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [invalidate, isVisible]);

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Point = ({ position, color }: { position: number[]; color: string }) => {
  return (
    // @ts-expect-error - Passing a num array as opposed to a Vector3 is acceptable
    // and the referenced method in the documentation
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
    </Sphere>
  );
};

export default ParticleRing;
