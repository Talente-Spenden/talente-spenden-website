import useMeasure from "react-use-measure";
import { useMotionValue, animate, motion } from "framer-motion";
import { useEffect } from "react";

export const ScrollBandImage: React.FC<{
  images: string[];
}> = ({ images }) => {
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 4;

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 30,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width]);

  return (
    <div className="h-full">
      <motion.div
        className="flex w-max h-full gap-x-4"
        ref={ref}
        style={{ x: xTranslation }}
      >
        {[...images, ...images, ...images, ...images].map((element) => {
          return (
            <div className="w-[15vw] h-[35vh]">
              <img src={element} className="object-cover w-full h-full" />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};
