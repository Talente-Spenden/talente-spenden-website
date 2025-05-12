import useMeasure from "react-use-measure";
import { ScrollCard } from "./ScrollCard";
import { useMotionValue, animate, motion } from "framer-motion";
import { useEffect } from "react";

export const ScrollBandImage: React.FC<{ images: string[] }> = (props) => {
  const pictures = ["1", "2", "3", "4"];

  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 4;

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 15,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width]);

  return (
    <div>
      <motion.div className="flex w-max" ref={ref} style={{ x: xTranslation }}>
        {[...pictures, ...pictures, ...pictures, ...pictures].map(
          (element, index) => {
            return <></>;
          }
        )}
      </motion.div>
    </div>
  );
};
