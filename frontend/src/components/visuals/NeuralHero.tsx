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
        meshRef.current.rotation.y = time * 0.2;
        wireframeRef.current.rotation.y = time * 0.15;
        wireframeRef.current.rotation.z = time * 0.1;
    });

    return (
        <group>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                {/* Core Sphere */}
                <mesh ref={meshRef}>
                    <sphereGeometry args={[1, 64, 64]} />
                    <MeshDistortMaterial
                        color="#6366F1"
                        speed={3}
                        distort={0.4}
                        radius={1}
                        emissive="#4338ca"
                        emissiveIntensity={0.5}
                        transparent
                        opacity={0.8}
                    />
                </mesh>

                {/* Wireframe Layer */}
                <mesh ref={wireframeRef}>
                    <sphereGeometry args={[1.2, 32, 32]} />
                    <meshPhongMaterial
                        color="#5de6ff"
                        wireframe
                        transparent
                        opacity={0.2}
                    />
                </mesh>
            </Float>

            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#c0c1ff" />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#5de6ff" />
        </group>
    );
}
