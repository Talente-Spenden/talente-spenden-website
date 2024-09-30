import { createContext, useEffect, useContext } from "react";
// Useful Resource: https://blog.logrocket.com/developing-responsive-layouts-with-react-hooks/

const viewportContext = createContext<{ width: number; height: number }>({
  width: 0,
  height: 0,
});

const ViewportProvider = ({ children }: any): JSX.Element => {
  /** Performance optimisation:
   * Prevents unnecessary rerenders of child components
   * if ViewportProvider is forced to rerender by a parent component,
   * but neither width nor height change */

  // Registering resize event listener on mounting
  useEffect(() => {
    //window.addEventListener("resize", handleResize);

    return () => {
      //window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <viewportContext.Provider value={{ width: 0, height: 0 }}>
      {children}
    </viewportContext.Provider>
  );
};

const useViewport = (): { width: number; height: number } => {
  const context: { width: number; height: number } = useContext<{
    width: number;
    height: number;
  }>(viewportContext);
  if (!context) {
    throw new Error(`useViewport must be used inside a ViewportProvider`);
  }
  return { width: 0, height: 0 };
};

export { ViewportProvider, useViewport };
