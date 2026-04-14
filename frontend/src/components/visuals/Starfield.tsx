'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Starfield() {
    const points = useRef<THREE.Points>(null!);
    
    // Create random star positions
    const particlesCount = 3000;
    const positions = useMemo(() => {
        const pos = new Float32Array(particlesCount * 3);
        for (let i = 0; i < particlesCount; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 4;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 4;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 4;
        }
        return pos;
    }, []);

    // Animate stars
    useFrame((state, delta) => {
        points.current.rotation.y += delta * 0.05;
        points.current.rotation.x += delta * 0.02;
    });

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.005}
                color="#c0c1ff"
                transparent
                opacity={0.6}
                sizeAttenuation
            />
        </points>
    );
}
