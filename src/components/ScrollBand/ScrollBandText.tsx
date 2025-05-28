import useMeasure from "react-use-measure";
import { ScrollCard } from "./ScrollCard";
import { useMotionValue, animate, motion } from "framer-motion";
import { useEffect, useState } from "react";

export const ScrollBandText: React.FC<{
  // Component adapted from tutorial:"https://www.youtube.com/watch?v=Ot4nZ6UjJLE"
  texts: { type: "Instagram" | "LinkedIn"; text: string; link: string }[];
}> = ({ texts }) => {
  const FAST_DURATION = 20;
  const SLOW_DURATION = 40;

  const [duration, setDuration] = useState(SLOW_DURATION);
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 4;
    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [xTranslation, width, duration, rerender]);

  return (
    <div className="h-full">
      <motion.div
        className="flex w-max h-full"
        ref={ref}
        style={{ x: xTranslation }}
        onHoverStart={() => {
          setMustFinish(true);
          setDuration(SLOW_DURATION);
        }}
        onHoverEnd={() => {
          setMustFinish(true);
          setDuration(FAST_DURATION);
        }}
      >
        {[...texts, ...texts, ...texts, ...texts].map((element) => {
          return <ScrollCard element={element} />;
        })}
      </motion.div>
    </div>
  );
};
