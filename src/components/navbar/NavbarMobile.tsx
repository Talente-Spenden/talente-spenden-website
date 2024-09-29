import { useEffect } from "react";
import { navigationBarConfig } from "../../config/Config";
import { Link } from "react-router-dom";
import { clearAllBodyScrollLocks } from "body-scroll-lock-upgrade";

export const NavbarMobile = (props: any): JSX.Element => {
  const { setOverlayOpen } = props;
  return (
    <div className="w-screen h-screen fixed z-[100] top-0 left-0 bg-black flex items-end">
      <div className="pb-6 pl-6">
        {navigationBarConfig.map((navLink) => {
          return (
            <div className="mb-4">
              <Link
                className="text-white hover:text-blue-mid-light text-5xl"
                to={navLink.path}
                onClick={() => {
                  setOverlayOpen(false);
                }}
              >
                {navLink.name}
              </Link>
              <div className="bg-grey-light w-[80vw] h-[2px]" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
