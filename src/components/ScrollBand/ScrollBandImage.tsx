import useMeasure from "react-use-measure";
import { useMotionValue, animate, motion } from "framer-motion";
import { useEffect } from "react";

export const ScrollBandImage: React.FC<{
  images: string[];
}> = ({ images }) => {
  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    const finalPosition = -width / 4;

    const controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 50,
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
            <>
              {element != "" && (
                <div className="min-w-[220px] w-[15vw] h-[35vh]">
                  <img
                    src={element}
                    className="object-cover w-full h-full"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
            </>
          );
        })}
      </motion.div>
    </div>
  );
};
