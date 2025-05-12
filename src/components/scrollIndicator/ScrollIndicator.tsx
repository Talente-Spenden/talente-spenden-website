import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export const ScrollIndicator: React.FC<{ color: string }> = ({ color }) => {
  return (
    <div className="flex justify-center">
      <motion.div
        animate={{
          y: [0, 15, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="text-gray-400" // Tailwind class for text color
      >
        <ArrowDown className={`h-10 w-10 mr-8 text-${color}`} />
      </motion.div>
    </div>
  );
};
