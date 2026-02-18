"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { Sphere, Line, Html } from "@react-three/drei";

function ConnectedGlobe() {
    const groupRef = useRef<THREE.Group>(null);
    const linesRef = useRef<THREE.LineSegments>(null);

    // generate random points on sphere surface
    const count = 60;
    const radius = 2.8;

    const points = useMemo(() => {
        const temp = [];
        const spherical = new THREE.Spherical();

        for (let i = 0; i < count; i++) {
            spherical.set(radius, Math.acos(THREE.MathUtils.randFloatSpread(2)), THREE.MathUtils.randFloat(0, Math.PI * 2));
            const vec = new THREE.Vector3().setFromSpherical(spherical);
            temp.push(vec);
        }
        return temp;
    }, []);

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.05; // Slow rotation
        }
    });

    return (
        <group ref={groupRef}>
            {/* Base Wireframe Sphere */}
            <mesh>
                <icosahedronGeometry args={[radius - 0.1, 2]} />
                <meshBasicMaterial
                    wireframe
                    color="#1e3a8a" // Dark Blue
                    transparent
                    opacity={0.1}
                />
            </mesh>

            {/* Nodes */}
            {points.map((pos, i) => (
                <mesh key={i} position={pos}>
                    <sphereGeometry args={[0.02, 8, 8]} />
                    <meshBasicMaterial color="#3b82f6" transparent opacity={0.4} />
                </mesh>
            ))}

            {/* Connecting Lines (Simplified) */}
            <Line
                points={points} // Array of Vector3
                color="#1d4ed8" // Blue-700
                lineWidth={0.5}
                dashed={false}
                opacity={0.1}
                transparent
            />
        </group>
    );
}

export default function GlobeHero() {
    return (
        <div className="absolute inset-0 z-0 opacity-100 h-full w-full pointer-events-none">
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <ConnectedGlobe />
                <fog attach="fog" args={['#0B0F19', 5, 15]} />
            </Canvas>
        </div>
    );
}
