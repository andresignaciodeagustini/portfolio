import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef, Suspense, useContext } from 'react';
import { LanguageContext } from '../../context/languagecontext';
import * as THREE from 'three';
import './menu-section.css';

// Componente de fallback para la carga
const LoadingFallback = () => {
    const { language, translations } = useContext(LanguageContext);
    const t = translations[language];
    
    return (
        <div style={{ 
            width: '100%', 
            height: '100%', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center' 
        }}>
            {t.loading}
        </div>
    );
};

const ComplexSphere = () => {
    const sphereRef = useRef();
    const materialRef = useRef();

    // Geometría más esférica y suave
    const geometry = new THREE.SphereGeometry(0.6, 128, 128);

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime();
        
        if (sphereRef.current) {
            // Rotación sobre su propio eje
            sphereRef.current.rotation.y = time * 0.2;
            sphereRef.current.rotation.x = Math.sin(time * 0.2) * 0.1;

            // Deformación orgánica más sutil y contenida
            const vertices = sphereRef.current.geometry.attributes.position.array;
            for (let i = 0; i < vertices.length; i += 3) {
                const x = vertices[i];
                const y = vertices[i + 1];
                const z = vertices[i + 2];
                
                const noise = Math.sin(x * 2 + time) * 0.001 +
                            Math.sin(y * 2 + time) * 0.001 +
                            Math.sin(z * 2 + time) * 0.001;
                
                vertices[i] = x + noise;
                vertices[i + 1] = y + noise;
                vertices[i + 2] = z + noise;
            }
            sphereRef.current.geometry.attributes.position.needsUpdate = true;

            // Pulsación más sutil
            const pulseFactor = Math.sin(time * 0.5) * 0.001;
            sphereRef.current.scale.set(
                1 + pulseFactor,
                1 + pulseFactor,
                1 + pulseFactor
            );

            // Movimiento más contenido sobre su propio eje
            sphereRef.current.position.x = 0;
            sphereRef.current.position.y = 0;
            sphereRef.current.position.z = 0;

            // Actualización del material para reflejo dinámico
            if (materialRef.current) {
                materialRef.current.roughness = 0.1 + Math.sin(time) * 0.05;
            }
        }
    });

    return (
        <group>
            <mesh ref={sphereRef} geometry={geometry}>
                <meshPhysicalMaterial
                    ref={materialRef}
                    color="#000000"
                    args={[{
                        metalness: 1,
                        roughness: 0.1,
                        clearcoat: 1,
                        clearcoatRoughness: 0.1,
                        reflectivity: 1,
                        envMapIntensity: 2
                    }]}
                />
            </mesh>
            {/* Sistema de iluminación mejorado */}
            <ambientLight intensity={0.5} />
            <directionalLight 
                position={[5, 5, 5]} 
                intensity={1.5}
            />
            <pointLight 
                position={[-5, -5, -5]} 
                intensity={1}
                color="#ffffff"
            />
            <pointLight 
                position={[5, -5, 5]} 
                intensity={1}
                color="#ffffff"
            />
            {/* Luces adicionales para reflejos */}
            <pointLight
                position={[10, 10, 10]}
                intensity={1}
                color="#ffffff"
            />
            <pointLight
                position={[-10, -10, -10]}
                intensity={1}
                color="#ffffff"
            />
        </group>
    );
};

const MenuSection = () => {
    const { language, translations } = useContext(LanguageContext);
    const t = translations[language];

    return (
        <section id="menu" className="menu-section">
            <div className="animation-container">
                <Suspense fallback={<LoadingFallback />}>
                    <Canvas
                        camera={{ 
                            position: [0, 0, 4.5],
                            fov: 40,
                            near: 0.1,
                            far: 1000
                        }}
                        style={{ 
                            background: 'transparent',
                            width: '100%',
                            height: '100%'
                        }}
                        gl={{ 
                            antialias: true,
                            alpha: true,
                            powerPreference: "default",
                            toneMapping: THREE.ACESFilmicToneMapping,
                            toneMappingExposure: 1.5
                        }}
                        dpr={window.devicePixelRatio}
                    >
                        <OrbitControls 
                            enableZoom={false}
                            autoRotate
                            autoRotateSpeed={0.3}
                            enablePan={false}
                            minPolarAngle={Math.PI / 2.5}
                            maxPolarAngle={Math.PI / 1.5}
                        />
                        <ComplexSphere />
                    </Canvas>
                </Suspense>
            </div>

            <div className="sliding-text-container">
                <div className="sliding-text">
                    {t.slidingText}
                </div>
            </div>

            <div className="description-container">
                <h2 className="title">{t.developer}</h2>
                <p className="subtitle">
                    {t.menuDescription}
                </p>
            </div>

            <button className="know-more-btn">
                {t.knowMoreBtn}
            </button>
        </section>
    );
};

export default MenuSection;