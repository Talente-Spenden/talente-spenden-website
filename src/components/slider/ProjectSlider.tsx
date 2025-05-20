import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useViewport } from "../../contexts/ViewportContext";
import { ProjectSliderItem } from "./ProjectSliderItem";
import { ProjectsConfig, ProjectSpotlightConfig } from "../../types/Types";
// Main App component
export const ProjectSlider: React.FC<{
  content: ProjectsConfig;
  selectedContent: ProjectSpotlightConfig;
}> = (props) => {
  const { content } = props;
  const { width } = useViewport();
  // Array of card data (you can replace this with your actual data)

  // Ref for the carousel container to measure its width
  const carouselRef = useRef<HTMLDivElement | null>(null);
  // State to store the width of the carousel container
  const [carouselWidth, setCarouselWidth] = useState(0);

  // Motion value for the x-position of the carousel
  const x = useMotionValue(0);
  // Spring animation for the x-position

  // Effect to calculate the carousel width after the component mounts
  useEffect(() => {
    if (carouselRef.current) {
      // Calculate the width of the carousel container
      // Subtract the width of the container from the total scrollable width
      // We add a small buffer (e.g., 10px) to avoid issues with floating point calculations or borders/padding
      setCarouselWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth + 10
      );
    }
  }, [width]); // Recalculate if the number of cards changes

  // Function to handle clicking the "Next" button
  const handleNextClick = () => {
    const currentX = x.get(); // Get the current x position
    // Estimate the width of one card including margin (adjust if your styling changes)
    const cardStep = 600 + 16 * 2; // min-w-[300px] + m-4 (16px left/right) * 2
    let newX = currentX - cardStep; // Move left by one card width

    // Ensure the new position does not go beyond the left constraint
    const constraintsLeft = -carouselWidth;
    if (newX < constraintsLeft) {
      newX = constraintsLeft; // Snap to the end if we go too far
    }

    // Animate the x motion value to the new position
    animate(x, newX, {
      type: "tween",
      ease: "easeInOut",
      duration: 0.2, // Slightly increased duration for a smoother feel
    });
  };

  // Function to handle clicking the "Previous" button
  const handlePrevClick = () => {
    const currentX = x.get(); // Get the current x position
    // Estimate the width of one card including margin (adjust if your styling changes)
    const cardStep = 600 + 16 * 2; // min-w-[300px] + m-4 (16px left/right) * 2
    let newX = currentX + cardStep; // Move right by one card width

    // Ensure the new position does not go beyond the right constraint (0)
    const constraintsRight = 0;
    if (newX > constraintsRight) {
      newX = constraintsRight; // Snap to the beginning if we go too far
    }

    // Animate the x motion value to the new position
    animate(x, newX, {
      type: "tween",
      ease: "easeInOut",
      duration: 0.2, // Slightly increased duration
    });
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 pl-[5vw] pr-4">
      <div className="w-full">
        {/* Navigation Buttons */}
        {/* Draggable carousel container */}
        <motion.div
          ref={carouselRef}
          className="flex cursor-grab active:cursor-grabbing gap-x-6"
          // Enable horizontal dragging
          drag="x"
          // Set drag constraints based on the calculated carousel width
          dragConstraints={{ right: 0, left: -carouselWidth }}
          // Apply the spring animation to the x-position
          style={{ x }}
          // Prevent default touch behavior to avoid scrolling conflicts
          dragElastic={0.2} // Controls the elasticity when dragging beyond constraints
        >
          {/* Map over the cards data to render each card */}
          {content.map((s) => {
            // Find matching content
            return <ProjectSliderItem current={s} />;
          })}
        </motion.div>{" "}
        <div className="flex justify-center">
          <div className="flex space-x-2">
            <button
              onClick={handlePrevClick}
              className="px-3 py-3 bg-black text-white hover:bg-blue-mid-light hover:text-black font-semibold focus:outline-none transition duration-300"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={handleNextClick}
              className="px-3 py-3 bg-black text-white hover:bg-blue-mid-light hover:text-black font-semibold focus:outline-none focus:ring-opacity-50 transition duration-300"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
