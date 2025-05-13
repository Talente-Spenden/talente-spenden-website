import { openRolesConfig } from "../../types/Types";
import { ChevronRight, Dot } from "lucide-react";

export const OpenPositions: React.FC<{ roles: openRolesConfig }> = ({
  roles,
}) => {
  return (
    <div className="w-full">
      {roles.map((role) => {
        return (
          <>
            {" "}
            <div className="my-1 h-[2px] w-full bg-grey-light" />
            <div className="flex justify-between items-center">
              <div className="py-1 w-full">
                <div className="flex justify-between px-4">
                  <h1 className="font-bold text-white md:text-2xl text-xl">
                    {role.role}
                  </h1>
                  <h1 className="font-medium text-white md:text-2xl text-xl">
                    {role.track}
                  </h1>
                </div>
              </div>
              <a
                href={`mailto:talente-spenden@tum.de?subject=Application as ${role.role} at Talente Spenden`}
                className="font-medium text-black md:text-2xl text-xl ml-4 hover:bg-white hover:text-purple cursor-pointer flex items-center bg-white pl-2 pr-4 py-1"
              >
                <ChevronRight /> Apply
              </a>
            </div>
          </>
        );
      })}
    </div>
  );
};
