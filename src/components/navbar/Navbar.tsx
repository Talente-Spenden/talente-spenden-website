import { navigationBarConfig } from "../../config/Config";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import TSLogoWhite from "../../assets/TSLogoWhite";

export const Navbar = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState("/home");

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  return (
    <div className="mx-2 mt-2 absolute z-[100] top-0 left-0 w-screen flex justify-between items-center">
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
                    ? "text-blue"
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
  );
};
