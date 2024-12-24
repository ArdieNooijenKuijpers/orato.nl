'use client';
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "../../utils/utils";
import { Group } from "three";

const ParticleRing = () => {
  return (
    <div className="relative">
      <Canvas
        camera={{
          position: [10, -7.5, -5],
        }}
        style={{ height: "80vh", justifyContent: "center" }}
        className="bg-grey-900"
        onCreated={({ gl, camera }) => {
          gl.domElement.style.pointerEvents = "none";
          window.addEventListener("mousemove", (event) => {
            const { clientX, clientY } = event;
            const aspectRatio = window.innerWidth / window.innerHeight;
            camera.position.x = -(clientX / window.innerWidth - 0.5) * aspectRatio * 25;
            camera.position.y = (clientY / window.innerHeight - 0.5) * 10;
            camera.lookAt(0, 0, 0);
          });
        }}
      >
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <PointCircle />
      </Canvas>

      <h1 className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-slate-200 font-medium text-2xl md:text-5xl pointer-events-none">
        A New Perspective
      </h1>
    </div>
  );
};

const PointCircle = () => {
  const ref = useRef<Group | null>(null);

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position as [number, number, number]} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position as [number, number, number]} color={point.color} />
      ))}
    </group>
  );
};

const Point = ({ position, color }: { position: [number, number, number]; color: string }) => {
  return (
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
