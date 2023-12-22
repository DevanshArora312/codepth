import React,{useMemo, useRef} from "react";
import vertexShader from "./vertexShader"
import fragmentShader from "./fragmentShader"
const Blob = () => {
    const mesh = useRef();
    const uniforms = useMemo(()=>{
        return {
            u_time : {value : 0},
            u_intensity : {value : 0.3} 
        };
    })
    return (  
        <mesh ref={mesh} scale={1.5} position={[0,0,0]}>
            <icosahedronBufferGeometry args={[2,20]} />
            <shaderMaterial 
                vertexShader={vertexShader} 
                fragmentShader={fragmentShader}
                uniforms={uniforms}
            />
        </mesh>
    );
}
 
export default Blob;