"use client";

import { Canvas } from "@react-three/fiber";
import {
    OrbitControls,
    Float,
    MeshTransmissionMaterial,
    RoundedBox,
    Environment,
    ContactShadows,
    Sparkles,
    useTexture
} from "@react-three/drei";
import { Suspense } from "react";

function FloatingPhone() {
    const texturePortfolio = useTexture("/portfolio.png");
    const textureExperience = useTexture("/experience.png");

    return (
        <group>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1} position={[0, 0, 0]}>
                {/* Mobile Device glass body */}
                <RoundedBox args={[3.8, 7.5, 0.3]} radius={0.2} smoothness={4}>
                    <MeshTransmissionMaterial
                        backside
                        samples={4}
                        thickness={0.3}
                        chromaticAberration={0.05}
                        anisotropy={0.1}
                        distortion={0.1}
                        distortionScale={0.5}
                        temporalDistortion={0.0}
                        color="#ffffff"
                    />
                </RoundedBox>

                {/* Glowing Screen (Front) */}
                <mesh position={[0, 0, 0.16]}>
                    <planeGeometry args={[3.4, 7.0]} />
                    <meshBasicMaterial map={texturePortfolio} toneMapped={false} />
                </mesh>

                {/* Glowing Screen (Back) */}
                <mesh position={[0, 0, -0.16]} rotation={[0, Math.PI, 0]}>
                    <planeGeometry args={[3.4, 7.0]} />
                    <meshBasicMaterial map={textureExperience} toneMapped={false} />
                </mesh>

                {/* Abstract UI Elements on Screen */}
                <Float speed={3} rotationIntensity={0.1} floatIntensity={0.2} position={[0, 1.5, 0.2]}>
                    <mesh>
                        <planeGeometry args={[2.5, 0.8]} />
                        <meshBasicMaterial color="#3b82f6" transparent opacity={0.8} />
                    </mesh>
                </Float>
                <Float speed={4} rotationIntensity={0.1} floatIntensity={0.2} position={[0, 0, 0.2]}>
                    <mesh>
                        <planeGeometry args={[2.5, 1.2]} />
                        <meshBasicMaterial color="#ec4899" transparent opacity={0.6} />
                    </mesh>
                </Float>

            </Float>

            {/* Floating Orbs (React/Tech symbols) */}
            <Float speed={3} rotationIntensity={2} floatIntensity={2} position={[3.0, 2.5, 1]}>
                <mesh>
                    <torusGeometry args={[0.5, 0.12, 16, 32]} />
                    <meshStandardMaterial color="#61dafb" emissive="#61dafb" emissiveIntensity={0.5} />
                </mesh>
            </Float>

            <Float speed={2} rotationIntensity={1.5} floatIntensity={2} position={[-3.2, -1.5, 0.5]}>
                <mesh>
                    <octahedronGeometry args={[0.7]} />
                    <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.6} />
                </mesh>
            </Float>

            {/* Background Sparkles */}
            <Sparkles count={100} scale={10} size={2} color="#ffffff" speed={0.4} opacity={0.2} />
        </group>
    );
}

export function PhoneScene() {
    return (
        <div className="w-full h-full absolute inset-0 cursor-grab active:cursor-grabbing">
            <Canvas camera={{ position: [0, 0, 14], fov: 35 }}>
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />

                    <FloatingPhone />

                    <Environment preset="city" />

                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        autoRotate
                        autoRotateSpeed={1}
                        maxPolarAngle={Math.PI / 2 + 0.2}
                        minPolarAngle={Math.PI / 2 - 0.2}
                    />
                </Suspense>
            </Canvas>
        </div>
    );
}
