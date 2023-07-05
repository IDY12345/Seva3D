import React from 'react'

import { Suspense, useEffect, useState } from 'react'

import { Canvas } from '@react-three/fiber'

import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from './Loader'

const Pipes = ({ isMobile }) => {
    // const pipe=useGLTF('./Seva/scene.gltf')
    // const letter=useGLTF('./S/S.gltf')
    const seva = useGLTF('./3-D/scene.gltf')
    return (
        <mesh>
            <hemisphereLight intensity={0.15} groundColor="black" />
            <pointLight intensity={1} />
            <pointLight intensity={1} angle={0.98} />
            <spotLight position={[-20, 50, 80]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
            <spotLight position={[-40, 100, -80]} angle={0.2} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
            <spotLight position={[80, 100, -80]} angle={0.2} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
            <spotLight position={[180, 100, 0]} />
            <primitive object={seva.scene} scale={30} position={[0, -2.5, 0]} rotation={[-0.01, -0.2, -0.1]} />

        </mesh>
    )
}

export const PipeCanvas = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 500px)')

        setIsMobile(mediaQuery.matches)

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches)
        }

        mediaQuery.addEventListener('change', handleMediaQueryChange)
    }, [])

    return (
        <Canvas
            frameloop='demand'
            shadows
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
                <Pipes isMobile={isMobile} />
            </Suspense>
            <Preload all />
        </Canvas>
    )
}

export default Pipes