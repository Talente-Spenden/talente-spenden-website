import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useViewport } from "../../contexts/ViewportContext";
import { ProjectSliderItem } from "./ProjectSliderItem";
import { ProjectsConfig, ProjectSpotlightConfig } from "../../types/Types";
// Main App component
export const ProjectSlider: React.FC<{
  content: ProjectsConfig;
  selectedContent: ProjectSpotlightConfig;
}> = (props) => {
  const { content, selectedContent } = props;
  const { width } = useViewport();
  // Array of card data (you can replace this with your actual data)

  // Ref for the carousel container to measure its width
  const carouselRef = useRef<HTMLDivElement | null>(null);
  // State to store the width of the carousel container
  const [carouselWidth, setCarouselWidth] = useState(0);

  // Motion value for the x-position of the carousel
  const x = useMotionValue(0);
  // Spring animation for the x-position
  const springX = useSpring(x, { stiffness: 300, damping: 30 });

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
    const cardStep = 300 + 16 * 2; // min-w-[300px] + m-4 (16px left/right) * 2
    let newX = currentX - cardStep; // Move left by one card width

    // Ensure the new position does not go beyond the left constraint
    const constraintsLeft = -carouselWidth;
    if (newX < constraintsLeft) {
      newX = constraintsLeft; // Snap to the end if we go too far
    }

    x.set(newX); // Animate to the new position
  };

  // Function to handle clicking the "Previous" button
  const handlePrevClick = () => {
    const currentX = x.get(); // Get the current x position
    // Estimate the width of one card including margin (adjust if your styling changes)
    const cardStep = 300 + 16 * 2; // min-w-[300px] + m-4 (16px left/right) * 2
    let newX = currentX + cardStep; // Move right by one card width

    // Ensure the new position does not go beyond the right constraint (0)
    const constraintsRight = 0;
    if (newX > constraintsRight) {
      newX = constraintsRight; // Snap to the beginning if we go too far
    }

    x.set(newX); // Animate to the new position
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 pl-[5vw] pr-4">
      <div className="w-full">
        {/* Navigation Buttons */}
        <div className="flex justify-end">
          <div className="flex space-x-2">
            <button
              onClick={handlePrevClick}
              className="px-3 py-3 bg-grey-light text-black hover:bg-black hover:text-white font-semibold rounded-full focus:outline-none transition duration-300"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={handleNextClick}
              className="px-3 py-3 bg-grey-light text-black hover:bg-black hover:text-white font-semibold rounded-full focus:outline-none focus:ring-opacity-50 transition duration-300"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
        {/* Draggable carousel container */}
        <motion.div
          ref={carouselRef}
          className="flex cursor-grab active:cursor-grabbing"
          // Enable horizontal dragging
          drag="x"
          // Set drag constraints based on the calculated carousel width
          dragConstraints={{ right: 0, left: -carouselWidth }}
          // Apply the spring animation to the x-position
          style={{ x: springX }}
          // Prevent default touch behavior to avoid scrolling conflicts
          dragElastic={0.2} // Controls the elasticity when dragging beyond constraints
        >
          {/* Map over the cards data to render each card */}
          {content.map((s) => {
            // Find matching content
            return <>{<ProjectSliderItem current={s} />}</>;
          })}
        </motion.div>
      </div>
    </div>
  );
};
