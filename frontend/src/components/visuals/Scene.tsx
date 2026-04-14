'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Starfield from './Starfield';

export default function Scene() {
    return (
        <div className="fixed inset-0 -z-10 pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 1] }}
                gl={{ antialias: true, alpha: true }}
            >
                <Suspense fallback={null}>
                    <Starfield />
                </Suspense>
            </Canvas>
        </div>
    );
}
