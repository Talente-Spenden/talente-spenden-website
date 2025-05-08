import { motion } from "framer-motion";
import { useViewport } from "../../contexts/ViewportContext";

export const SliderItem = (props: any) => {
  const { current } = props;
  const { width } = useViewport();

  return (
    <motion.div
      className="mr-8 my-4"
      key={current.name}
      // Initial animation state
      initial={{ opacity: 0, scale: 0.9 }}
      // Animation state while in view (using whileInView)
      whileInView={{ opacity: 1, scale: 1 }}
      // Animation state while dragging (using whileDrag)
      whileDrag={{ scale: 1.05 }}
      // Transition properties for the animations
      transition={{ duration: 0.3 }}
    >
      <div className="bg-grey-light h-[2px] w-full mb-2" />
      {width > 800 ? (
        <div className="group relative flex justify-between min-w-[600px] h-[400px] bg-black">
          <div className=" text-white p-6 flex flex-col justify-between">
            <h3 className="text-xl font-semibold mb-2">{current.name}</h3>
            <div className="flex justify-start">
              {current.tags.map((tag) => (
                <div className="mr-4 border-[2px] border-white group-hover:border-blue transition-all duration-300 rounded-full px-3 py-1">
                  <p className="text-m">{tag}</p>
                </div>
              ))}
            </div>
          </div>{" "}
          <img
            src={`src/assets/img/${current.image}`}
            className="object-cover w-[40%] h-full pointer-events-none select-none filter grayscale transition duration-300 group-hover:grayscale-0"
          ></img>
        </div>
      ) : (
        <div className="w-[70vw] h-[500px] bg-black flex flex-col justify-start">
          <div className="w-full h-[400px]">
            <img
              src={`src/assets/img/${current.image}`}
              className="object-cover min-h-full pointer-events-none select-none"
            />
          </div>
          <div className="p-3 h-full flex flex-col justify-end">
            <h3 className="text-xl font-semibold mb-2 text-white">
              {current.name}
            </h3>
            <div className="flex justify-start">
              {current.tags.map((tag) => (
                <div className="mr-4 border-[2px] text-white border-white group-hover:border-blue transition-all duration-300 rounded-full px-3 py-1">
                  <p className="text-m">{tag}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};
