import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export const ScrollIndicator: React.FC<{
  color: string;
  hideOnScroll: boolean;
}> = ({ color, hideOnScroll }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-10 min-w-10">
      {(!hideOnScroll || scrollPosition <= 100) && (
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
      )}
    </div>
  );
};
