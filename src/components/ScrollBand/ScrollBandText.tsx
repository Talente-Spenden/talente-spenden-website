import useMeasure from "react-use-measure";
import { ScrollCard } from "./ScrollCard";
import { useMotionValue, animate, motion } from "framer-motion";
import { useEffect } from "react";

export const ScrollBandText: React.FC<{
  texts: { type: "Instagram" | "LinkedIn"; text: string; link: string }[];
}> = ({ texts }) => {
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
    <div className="h-full">
      <motion.div
        className="flex w-max h-full"
        ref={ref}
        style={{ x: xTranslation }}
      >
        {[...texts, ...texts, ...texts, ...texts].map((element) => {
          return <ScrollCard element={element} />;
        })}
      </motion.div>
    </div>
  );
};
