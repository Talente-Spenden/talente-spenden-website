import { motion } from "framer-motion";
import { useViewport } from "../../contexts/ViewportContext";
import { ProjectItem } from "../../types/Types";

export const ProjectSliderItem: React.FC<{
  current: ProjectItem;
}> = (props) => {
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
            <div>
              <h3 className="text-xl font-semibold mb-2">{current.name}</h3>
              <p>{current.descriptionShort}</p>
            </div>
            <div className="flex justify-start">
              {current.tags.map((tag) => (
                <div className="mr-4 border-[2px] rounded-full border-blue-mid-light transition-all duration-300 px-3 py-1">
                  <p className="text-m text-blue-mid-light">{tag}</p>
                </div>
              ))}
            </div>
          </div>
          {current.image != "" ? (
            <img
              src={current.image}
              className="object-cover w-full h-full pointer-events-none select-none filter grayscale transition duration-300 group-hover:grayscale-0"
            />
          ) : (
            <div className="w-full h-full bg-blue-mid-light" />
          )}
        </div>
      ) : (
        <div className="w-[70vw] h-[500px] bg-black">
          <div className="w-full h-[70%]">
            {current.image != "" ? (
              <img
                src={current.image}
                className="object-cover w-full h-full pointer-events-none select-none"
              />
            ) : (
              <div className="w-full h-full bg-blue-mid-light" />
            )}
          </div>
          <div className="p-3 h-[30%] flex flex-col justify-end">
            <h3 className="text-xl font-semibold mb-2 text-white">
              {current.name}
            </h3>
            <div className="flex justify-start">
              {current.tags.map((tag) => (
                <div className="mr-4 border-[2px] text-white border-white transition-all duration-300 px-3 py-1">
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
