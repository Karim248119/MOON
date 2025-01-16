"use client";
import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { fade } from "@/lib/Animations";
import { motion } from "framer-motion";

const generatePointsInSphere = (numPoints: number, radius: number) => {
  const points = new Float32Array(numPoints * 3);
  for (let i = 0; i < numPoints; i++) {
    let x, y, z, lengthSquared;
    do {
      x = Math.random() * 2 - 1;
      y = Math.random() * 2 - 1;
      z = Math.random() * 2 - 1;
      lengthSquared = x * x + y * y + z * z;
    } while (lengthSquared > 1);
    const scale = radius * Math.cbrt(Math.random());
    points[i * 3] = x * scale;
    points[i * 3 + 1] = y * scale;
    points[i * 3 + 2] = z * scale;
  }
  return points;
};

const Stars = (props: any) => {
  const ref = useRef<any>(null);
  const [sphere] = useState(() => generatePointsInSphere(400, 2));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 15;
    ref.current.rotation.y -= delta / 20;
  });

  return (
    <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.002}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
};

const StarsCanvas = ({ showContent }: { showContent: boolean }) => {
  return (
    <motion.div
      {...fade}
      animate={showContent && fade.animate}
      className="w-full h-auto absolute inset-0 -z-10"
    >
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </motion.div>
  );
};

export default StarsCanvas;
