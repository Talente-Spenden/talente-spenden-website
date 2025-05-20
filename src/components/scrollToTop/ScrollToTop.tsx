import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export const ScrollToTop: React.FC = () => {
  // https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition
  const location = useLocation();
  const navigationType = useNavigationType();
  // TODO: Check if back button was presses -> if so dont scroll
  useEffect(() => {
    // Add a small delay before scrolling
    const timer = setTimeout(() => {
      if (navigationType == "PUSH" && !location.hash) {
        window.scrollTo(0, 0);
      } else if (location.hash) {
        const element = document.getElementById(location.hash.substring(1));

        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }, 100); // Adjust the delay (milliseconds) as needed

    // Cleanup the timer if the component unmounts or location changes again
    return () => clearTimeout(timer);
  }, [location, navigationType]);

  return null;
};
