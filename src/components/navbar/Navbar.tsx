import { navigationBarConfig } from "../../config/Config";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import TSLogoWhite from "../../assets/TSLogoWhite";
import { NavbarMobile } from "./NavbarMobile";

export const Navbar = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState("/home");

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    const changeWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <div>
      {width > 1390 ? (
        <div
          className={`px-2 pt-2 pb-4 fixed z-[100] top-0 left-0 w-full flex justify-between items-center transition-all ${
            scrollPosition >= window.innerHeight ? "bg-black" : ""
          }`}
        >
          <div className="navBarLogo">
            <Link to="/">
              <TSLogoWhite width={250} />
            </Link>
          </div>
          <div className="text-white">
            <ul className="flex pt-2 mt-0">
              {navigationBarConfig.map((navLink, index) => (
                <li className=" list-none px-14" key={index}>
                  <Link
                    className={
                      (currentPage.startsWith(navLink.path)
                        ? `text-${navLink.color}-mid-light`
                        : "text-white") + " text-xl hover:text-blue-mid-light"
                    }
                    to={navLink.path}
                  >
                    {navLink.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <NavbarMobile />
      )}
    </div>
  );
};
