'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function NeuralHero() {
    const meshRef = useRef<THREE.Mesh>(null!);
    const wireframeRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        meshRef.current.rotation.y = time * 0.1;
        wireframeRef.current.rotation.y = time * 0.08;
    });

    return (
        <group>
            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
                {/* Core Sphere */}
                <mesh ref={meshRef}>
                    <sphereGeometry args={[1, 64, 64]} />
                    <MeshDistortMaterial
                        color="#3525cd"
                        speed={2}
                        distort={0.3}
                        radius={1}
                        transparent
                        opacity={0.7}
                    />
                </mesh>

                {/* Wireframe Layer */}
                <mesh ref={wireframeRef}>
                    <sphereGeometry args={[1.15, 32, 32]} />
                    <meshPhongMaterial
                        color="#4f46e5"
                        wireframe
                        transparent
                        opacity={0.1}
                    />
                </mesh>
            </Float>

            <ambientLight intensity={0.8} />
            <pointLight position={[10, 10, 10]} intensity={0.5} color="#ffffff" />
            <pointLight position={[-10, -10, -10]} intensity={0.2} color="#4f46e5" />
        </group>
    );
}
