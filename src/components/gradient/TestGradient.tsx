import { useState, useEffect } from "react";
import { Gradient } from "./Gradient";
export const TestGradient = () => {
  const [showInteractive, setShowInteractive] = useState(true);

  useEffect(() => {
    const changeWidth = () => {
      setShowInteractive(false);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return <Gradient />;
};
