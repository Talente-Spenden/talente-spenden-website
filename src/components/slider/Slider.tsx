import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
// Main App component
export function Slider(props: any) {
  const { content, selectedContent } = props;
  // Array of card data (you can replace this with your actual data)
  const cards = [
    { id: 1, title: "Card 1", content: "This is the content for card 1." },
    { id: 2, title: "Card 2", content: "This is the content for card 2." },
    { id: 3, title: "Card 3", content: "This is the content for card 3." },
    { id: 4, title: "Card 4", content: "This is the content for card 4." },
    { id: 5, title: "Card 5", content: "This is the content for card 5." },
    { id: 6, title: "Card 6", content: "This is the content for card 6." },
    { id: 7, title: "Card 7", content: "This is the content for card 7." },
    { id: 8, title: "Card 8", content: "This is the content for card 8." },
  ];

  // Ref for the carousel container to measure its width
  const carouselRef = useRef(null);
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
  }, [cards]); // Recalculate if the number of cards changes

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
    <div className="flex flex-col items-center justify-center bg-gray-100 pr-[5vw]">
      <div className="w-full">
        {/* Navigation Buttons */}
        <div className="flex justify-end">
          <div className="flex space-x-2">
            <button
              onClick={handlePrevClick}
              className="px-3 py-3 bg-grey text-black hover:bg-black hover:text-white font-semibold rounded-full focus:outline-none transition duration-300"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={handleNextClick}
              className="px-3 py-3 bg-grey text-black hover:bg-black hover:text-white font-semibold rounded-full focus:outline-none focus:ring-opacity-50 transition duration-300"
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
          {selectedContent.map((s) => {
            // Find matching content
            let current = content.find((e) => e.name === s.id);
            return (
              <motion.div
                className="mr-4 my-4"
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
                <div className="bg-grey-dark h-[2px] w-full mb-2" />
                <div className="group relative flex justify-between min-w-[600px] h-[400px] bg-black">
                  <motion.div className=" text-white p-6 flex flex-col justify-between">
                    <h3 className="text-xl font-semibold mb-2">
                      {current.name}
                    </h3>
                    <div className="flex justify-start">
                      {current.tags.map((tag) => (
                        <div className="mr-4 border-2 border-white px-3 py-1">
                          <p className="text-m">{tag}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>{" "}
                  <img
                    src={`src/assets/img/${current.image}`}
                    className=" object-cover w-[40%] h-full pointer-events-none select-none filter grayscale transition duration-300 group-hover:grayscale-0"
                  ></img>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
