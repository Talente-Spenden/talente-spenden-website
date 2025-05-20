import { Canvas } from "@react-three/fiber";
import { useErrorBoundary } from "use-error-boundary";
import { InteractiveGradient } from "./InteractiveGradient";
import { TimeGradient } from "./TimeGradient";
import { useState, useEffect } from "react";

export const Gradient: React.FC<{
  col0?: string;
  col1?: string;
  col2?: string;
  col3?: string;
}> = (props) => {
  const { ErrorBoundary, didCatch } = useErrorBoundary();

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  useEffect(() => {}, [width]);

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
        {width > 600 ? (
          <InteractiveGradient {...props} />
        ) : (
          <TimeGradient {...props} />
        )}
      </Canvas>
    </ErrorBoundary>
  );
};
