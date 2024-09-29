import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config.js";
import { useErrorBoundary } from "use-error-boundary";

// The shaders used in this component are adapted from: https://codepen.io/bclarke/pen/MWEGRga
// which was created by user Chuck_Loads in https://www.reddit.com/r/Frontend/comments/rvudot/who_can_replicate_this_background_effect/

// Film grain shader is from: https://maximmcnair.com/p/webgl-film-grain
function hexToRgb(hex: string) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16) / 255,
        g: parseInt(result[2], 16) / 255,
        b: parseInt(result[3], 16) / 255,
      }
    : null;
}

const GradientObject = (props: {
  col0?: string;
  col1?: string;
  col2?: string;
  col3?: string;
}): JSX.Element => {
  let { col0, col1, col2, col3 } = props;
  if (col0 == undefined) {
    col0 = "blue";
  }
  if (col1 == undefined) {
    col1 = "purple";
  }
  if (col2 == undefined) {
    col2 = "orange";
  }
  if (col3 == undefined) {
    col3 = "yellow";
  }
  const fullConfig: any = resolveConfig(tailwindConfig);
  const colorsHex = fullConfig.theme.colors;
  let [mouseTracked, setMouseTracked] = useState(false);
  let mouseTrackedRef = useRef(mouseTracked);
  let [mouseTrackedStart, setMouseTrackedStart] = useState(0.0);

  let colorsShader: any = {};
  for (let key in colorsHex) {
    let colorRGB = hexToRgb(colorsHex[key]);
    if (colorRGB == null) {
      colorRGB = { r: 0.0, g: 0.0, b: 0.0 };
    }
    colorsShader[key] = `vec3(${colorRGB.r},${colorRGB.g},${colorRGB.b})`;
  }

  const mouse = new THREE.Vector2();
  const gradientRef: any = useRef();
  window.addEventListener("mousemove", (e) => {
    mouse.set(
      e.clientX / window.innerWidth - 0.5,
      1 - e.clientY / window.innerHeight - 0.5
    );
    if (mouseTrackedRef.current == false) {
      // Start timer for uTime

      setMouseTracked(true);
      setMouseTrackedStart(performance.now());
      mouseTrackedRef.current = true;
    }
  });

  useFrame(() => {
    if (mouseTracked && mouseTrackedStart) {
      gradientRef.current.material.uniforms.uTime.value =
        performance.now() - mouseTrackedStart;
      gradientRef.current.material.uniforms.windowWidth.value =
        window.innerWidth;
      gradientRef.current.material.uniforms.windowHeight.value =
        window.innerHeight;
    }
  });

  const vertexShader: string = `

    varying vec2 vUv;

    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }
  
  `;
  const fragmentShader: string = `
    
    uniform float uTime;
    uniform vec2 uMouse;
    uniform float windowWidth;
    uniform float windowHeight;

    varying vec2 vUv;

    // Noise functions taken from
    // https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
    //	Simplex 4D Noise 
    //	by Ian McEwan, Ashima Arts
    //
    vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
    float permute(float x){return floor(mod(((x*34.0)+1.0)*x, 289.0));}
    vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
    float taylorInvSqrt(float r){return 1.79284291400159 - 0.85373472095314 * r;}

    vec4 grad4(float j, vec4 ip){
    const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);
    vec4 p,s;

    p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;
    p.w = 1.5 - dot(abs(p.xyz), ones.xyz);
    s = vec4(lessThan(p, vec4(0.0)));
    p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www; 

    return p;
    }

    float snoise(vec4 v){
    const vec2  C = vec2( 0.138196601125010504,  // (5 - sqrt(5))/20  G4
                            0.309016994374947451); // (sqrt(5) - 1)/4   F4
    // First corner
    vec4 i  = floor(v + dot(v, C.yyyy) );
    vec4 x0 = v -   i + dot(i, C.xxxx);

    // Other corners

    // Rank sorting originally contributed by Bill Licea-Kane, AMD (formerly ATI)
    vec4 i0;

    vec3 isX = step( x0.yzw, x0.xxx );
    vec3 isYZ = step( x0.zww, x0.yyz );
    //  i0.x = dot( isX, vec3( 1.0 ) );
    i0.x = isX.x + isX.y + isX.z;
    i0.yzw = 1.0 - isX;

    //  i0.y += dot( isYZ.xy, vec2( 1.0 ) );
    i0.y += isYZ.x + isYZ.y;
    i0.zw += 1.0 - isYZ.xy;

    i0.z += isYZ.z;
    i0.w += 1.0 - isYZ.z;

    // i0 now contains the unique values 0,1,2,3 in each channel
    vec4 i3 = clamp( i0, 0.0, 1.0 );
    vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );
    vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );

    //  x0 = x0 - 0.0 + 0.0 * C 
    vec4 x1 = x0 - i1 + 1.0 * C.xxxx;
    vec4 x2 = x0 - i2 + 2.0 * C.xxxx;
    vec4 x3 = x0 - i3 + 3.0 * C.xxxx;
    vec4 x4 = x0 - 1.0 + 4.0 * C.xxxx;

    // Permutations
    i = mod(i, 289.0); 
    float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);
    vec4 j1 = permute( permute( permute( permute (
                i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))
            + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))
            + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))
            + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));
    // Gradients
    // ( 7*7*6 points uniformly over a cube, mapped onto a 4-octahedron.)
    // 7*7*6 = 294, which is close to the ring size 17*17 = 289.

    vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;

    vec4 p0 = grad4(j0,   ip);
    vec4 p1 = grad4(j1.x, ip);
    vec4 p2 = grad4(j1.y, ip);
    vec4 p3 = grad4(j1.z, ip);
    vec4 p4 = grad4(j1.w, ip);

    // Normalise gradients
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;
    p4 *= taylorInvSqrt(dot(p4,p4));

    // Mix contributions from the five corners
    vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);
    vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);
    m0 = m0 * m0;
    m1 = m1 * m1;
    return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))
                + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;

    }

    float rand(vec2 co){
      return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
    }

    void main() {
    float noise = snoise(vec4(vUv, uMouse + uTime * 0.0001));
    vec3 blue_col = mix(${colorsShader[col0]}, ${colorsShader[col1]}, clamp(cos(uTime * 0.001),0.0,1.0));
    vec3 yellow_col = mix(${colorsShader[col2]}, ${colorsShader[col3]}, clamp(sin(uTime * 0.001),0.0,1.0));
    //vec3 third_col = mix(${colorsShader[col3]}, second_col, clamp(sin(uTime * 0.0001),0.0,1.0));

    float f0 = smoothstep(0.0,windowWidth/2.0,gl_FragCoord.x);
    vec3 c0 = noise*blue_col + (1.0-noise)*(${colorsShader[col0]} * (1.0 - f0) + ${colorsShader[col1]} * f0);
    float f1 = smoothstep(windowWidth/2.0, windowWidth, gl_FragCoord.x);
    vec3 c1 = noise*yellow_col + (1.0 - noise)*(${colorsShader[col2]} * (1.0 - f1) + ${colorsShader[col3]} * f1);
    float f2 = smoothstep(0.0, windowWidth, gl_FragCoord.x);
    vec3 c2 = (1.0-f2) * c0 + f2*c1;

    //vec3 col = first_col*smoothstep(0.0,1.0,vec3(noise)) + second_col*(1.0-noise);
    float fade = smoothstep(0.0, 1.0, uTime*0.001);
    gl_FragColor = vec4((1.0 - fade)*vec3(0.0,0.0,0.0) + (fade)*(vec3(rand(vUv))*0.12 + clamp(noise * 1.2,0.0,1.0)*c2),noise);
    }
  
    `;
  return (
    <>
      {mouseTracked && (
        <mesh ref={gradientRef}>
          <planeGeometry args={[1, 1]} />
          <shaderMaterial
            depthTest={false}
            uniforms={{
              uTime: { value: performance.now() - mouseTrackedStart },
              uMouse: { value: mouse },
              windowWidth: { value: window.innerWidth },
              windowHeight: { value: window.innerHeight },
            }}
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
          />
        </mesh>
      )}
    </>
  );
};

export const Gradient = (props: {
  col0?: string;
  col1?: string;
  col2?: string;
  col3?: string;
}): JSX.Element => {
  const { ErrorBoundary, didCatch, error } = useErrorBoundary();

  return didCatch ? (
    <div className="bg-blue-dark w-screen h-screen fixed top-0 left-0" />
  ) : (
    <ErrorBoundary>
      <Canvas
        orthographic={true}
        camera={{
          left: -0.5,
          right: 0.5,
          top: 0.5,
          bottom: -0.5,
          near: 1e-5,
          far: 100,
          position: [0, 0, 1],
        }}
        fallback={
          <div className="bg-blue-dark w-screen h-screen fixed top-0 left-0" />
        }
      >
        <GradientObject {...props} />
      </Canvas>
    </ErrorBoundary>
  );
};
