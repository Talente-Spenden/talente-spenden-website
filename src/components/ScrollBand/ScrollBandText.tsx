import { useRef } from "react";
import { motion } from "framer-motion";
import { useViewport } from "../../contexts/ViewportContext";

// Define the text content you want to scroll
const textItems = [
  "Your Awesome Community",
  "Join Us on Discord!",
  "Follow us on Socials",
  "Get the Latest Updates",
  "Connect and Collaborate",
  "Learn More Here",
  // Add more text items as needed
];

// We still need the duplicated items conceptually for the loop,
// but we'll render them in two separate blocks for easier measurement.
// const duplicatedTextItems = [...textItems, ...textItems]; // No longer needed directly for mapping

export const ScrollBandText: React.FC<any> = (props) => {
  // Ref to measure the width of the original content block
  const contentRef = useRef(null);
  // State to store the measured width
  const { width } = useViewport();

  // Define the animation properties
  // Animate from 0 to the negative width of the original content block
  // This makes the second set of text slide into the position of the first set
  const scrollingAnimation = {
    x: width ? [0, -width] : 0, // Animate x-position from 0 to -contentWidth
    transition: {
      x: {
        repeat: Infinity, // Repeat the animation infinitely
        repeatType: "loop", // Start the animation over from the beginning each time
        // Adjust the divisor for speed. A larger divisor = faster animation.
        duration: width / 150, // Duration based on content width for consistent speed (adjust divisor for speed)
        ease: "linear", // Linear easing for a constant scroll speed
      },
    },
  };

  return (
    // Outer container with overflow hidden to hide content outside
    <div className="w-full overflow-hidden py-4 bg-blue-600 text-white">
      {/* Motion div that will be animated */}
      {/* flex to display items horizontally, w-max to ensure it's wide enough */}
      {/* Apply the animation using the 'animate' prop */}
      {/* We render the text items twice inside this motion div */}
      <motion.div
        className="flex w-max" // w-max makes the div as wide as its content
        animate={scrollingAnimation}
      >
        {/*
                    Wrap the first set of items in a div and apply the ref here.
                    This helps ensure we measure the exact combined width of the
                    first visual block of text items.
                */}
        <div ref={contentRef} className="flex">
          {" "}
          {/* Add flex here to keep items inline */}
          {textItems.map((item, index) => (
            <div
              key={index} // Use index for key within this map
              className="px-8 text-2xl font-bold whitespace-nowrap" // px-8 for spacing, text styles, prevent wrapping
            >
              {item}
            </div>
          ))}
        </div>

        {/*
                    Render the second set of items immediately after the first.
                    This creates the content that will slide into view as the
                    first set scrolls out.
                */}
        {textItems.map((item, index) => (
          <div
            key={index + textItems.length} // Ensure unique keys for the second set
            className="px-8 text-2xl font-bold whitespace-nowrap"
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
