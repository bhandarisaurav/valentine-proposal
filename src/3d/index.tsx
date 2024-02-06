import { Canvas } from "@react-three/fiber";
import { Environment, Gltf, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

const Scene = () => {
    return <Gltf castShadow receiveShadow scale={0.5} position={[0, -0.55, 0]} src="elaina_heart_pose.glb" />
};

const Box = () => {
    return (
        <div className="App">
            <Canvas>
                <Suspense fallback={null}>
                    <Scene />
                    <OrbitControls />
                    <Environment preset="dawn" background />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default Box