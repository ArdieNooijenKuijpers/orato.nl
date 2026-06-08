'use client';
import React, { useEffect, useRef, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "../../utils/utils";
import { Group } from "three";

const ParticleRing = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

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
      className="group relative h-[60vh] w-[90vw] md:h-screen md:w-screen"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsDragging(false);
      }}
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
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <SceneControls
          onDragStart={() => {
            setIsDragging(true);
            setHasInteracted(true);
          }}
          onDragEnd={() => setIsDragging(false)}
        />
        <PointCircle isVisible={isVisible} />
      </Canvas>

      <h1 className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-slate-200 font-medium text-2xl md:text-5xl pointer-events-none">
        A NEW PERSPECTIVE
      </h1>
      <div
        className={`pointer-events-none absolute left-1/2 top-[76%] w-[min(32rem,86vw)] -translate-x-1/2 transition-all duration-500 ease-out ${
          isHovered && !isDragging
            ? "translate-y-0 opacity-100"
            : "translate-y-3 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-md items-start gap-4 rounded-[1.75rem] border border-white/15 bg-white/[0.06] px-5 py-4 text-slate-100 shadow-[0_18px_60px_rgba(0,0,0,0.18)] backdrop-blur-md">
          <div className="mt-1 flex items-center gap-2">
            <span className={`h-2 w-2 rounded-full bg-white/80 transition-all duration-300 ${isDragging ? "scale-125" : "animate-pulse"}`} />
            <span className="h-px w-8 bg-white/40" />
            <span
              className={`text-lg leading-none text-white/75 transition-transform duration-500 ${
                isDragging ? "translate-x-2" : "animate-pulse"
              }`}
            >
              ↔
            </span>
          </div>

          <div className="space-y-1">
            <p className="text-[0.7rem] uppercase tracking-[0.35em] text-white/45">
              Interactie
            </p>
            <p className="text-base font-medium leading-tight md:text-xl">
Wil je nieuwe mogelijkheden ontdekken?  Klik en sleep alvast om je blik te verruimen.            </p>
            <p className="max-w-sm text-sm leading-relaxed text-white/70 md:text-base">
              {hasInteracted
                ? "Blijf klikken en slepen om nieuwe mogelijkheden te ontdekken."
                : "Klik en sleep hier alvast om je blik te verruimen."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SceneControls = ({
  onDragStart,
  onDragEnd,
}: {
  onDragStart: () => void;
  onDragEnd: () => void;
}) => {
  const controlsRef = useRef<any>(null);

  useEffect(() => {
    const controls = controlsRef.current;
    if (!controls) return;

    controls.addEventListener("start", onDragStart);
    controls.addEventListener("end", onDragEnd);

    return () => {
      controls.removeEventListener("start", onDragStart);
      controls.removeEventListener("end", onDragEnd);
    };
  }, [onDragEnd, onDragStart]);

  return (
    <OrbitControls
      ref={controlsRef}
      enablePan={false}
      enableZoom={false}
      maxDistance={20}
      minDistance={10}
    />
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
