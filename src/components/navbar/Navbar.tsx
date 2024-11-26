import { navigationBarConfig } from "../../config/Config";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import TSLogoWhite from "../../assets/TSLogoWhite";
import { NavbarMobile } from "./NavbarMobile";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock-upgrade";
import { useViewport } from "../../contexts/ViewportContext";

export const Navbar = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState("/home");
  const [overlayOpen, setOverlayOpen] = useState(false);
  const overlayRef: any = useRef(null);

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
    console.log(position);
  };

  const handleButtonClick = () => {
    setOverlayOpen((state) => !state);
  };

  useEffect(() => {
    if (overlayOpen) {
      disableBodyScroll(overlayRef);
    } else {
      enableBodyScroll(overlayRef);
    }
  }, [overlayOpen, overlayRef]);

  const { width } = useViewport();

  useEffect(() => {
    if (width > 1405) {
      setOverlayOpen(false);
      clearAllBodyScrollLocks();
    }
  }, [width]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={`px-4 pt-4 pb-4 duration-400 fixed z-[200] top-0 left-0 w-full flex justify-between items-center transition-all ${
          scrollPosition >= (1 / 8) * window.innerHeight ? "bg-black" : ""
        }`}
      >
        <div className="navBarLogo">
          <Link
            to="/"
            onClick={() => {
              setOverlayOpen(false);
            }}
          >
            <TSLogoWhite width={width > 600 ? 200 : 150} />
          </Link>
        </div>

        {width > 1405 ? (
          <div className="text-white">
            <ul className="flex pt-2 mt-0">
              {navigationBarConfig.map((navLink, index) => (
                <li className="list-none px-14" key={index}>
                  <Link
                    className="text-xl text-white transition-all hover:text-blue-mid-light group"
                    to={navLink.path}
                    onClick={() => {
                      setOverlayOpen(false);
                    }}
                  >
                    <div className="flex items-center">
                      {currentPage.startsWith(navLink.path) && (
                        <div className="w-2 h-2 rounded-full bg-white mr-3 transition-all group-hover:bg-blue-mid-light" />
                      )}
                      <span>{navLink.name}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="absolute right-4 z-[200]">
            <div
              onClick={() => {
                handleButtonClick();
              }}
              className="mr-0 cursor-pointer p-3"
            >
              <div
                className={`w-8 h-[0.125rem] transition-all mb-2 bg-white ${
                  overlayOpen ? " rotate-45 mb-[-0.15rem]" : ""
                }`}
              />
              <div
                className={`w-8 h-[0.125rem] transition-all mb-2 bg-white ${
                  overlayOpen ? " hidden" : ""
                }`}
              />
              <div
                className={`w-8 h-[0.125rem] transition-all bg-white${
                  overlayOpen ? " rotate-[-45deg] mb-0" : ""
                }`}
              />
            </div>
          </div>
        )}
      </div>
      {overlayOpen && (
        <NavbarMobile setOverlayOpen={setOverlayOpen} innerRef={overlayRef} />
      )}
    </div>
  );
};
