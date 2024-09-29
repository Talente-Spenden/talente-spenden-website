import { useEffect, useState } from "react";
import { navigationBarConfig } from "../../config/Config";
import { Link, useLocation } from "react-router-dom";
import { clearAllBodyScrollLocks } from "body-scroll-lock-upgrade";

export const NavbarMobile = (props: any): JSX.Element => {
  const { setOverlayOpen } = props;
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState("/home");

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  return (
    <div className="w-screen h-screen fixed z-[100] top-0 left-0 bg-black flex items-end">
      <div className="pb-6 pl-6">
        {navigationBarConfig.map((navLink) => {
          return (
            <Link
              className="text-white text-5xl"
              to={navLink.path}
              onClick={() => {
                setOverlayOpen(false);
              }}
            >
              <div className="hover:bg-white [&_*]:hover:text-black cursor-pointer group">
                <div className="flex items-center">
                  {currentPage.startsWith(navLink.path) && (
                    <div className="w-2 h-2 rounded-full bg-white mr-4 transition-all group-hover:h-12 group-hover:rounded-none group-hover:bg-blue" />
                  )}
                  <span>{navLink.name}</span>
                </div>
                <div className="bg-grey-light w-[80vw] h-[2px] mt-2 mb-4" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
