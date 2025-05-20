import { useViewport } from "../../contexts/ViewportContext";
import { openRolesConfig } from "../../types/Types";

export const OpenPositions: React.FC<{ roles: openRolesConfig }> = ({
  roles,
}) => {
  const { width } = useViewport();
  return (
    <div className="w-full">
      {roles.map((role) => {
        return (
          <div>
            <div className="my-1 h-[2px] w-full bg-grey-light" />
            <div className="flex justify-between items-start">
              <div className="py-1 w-full">
                <div className="flex justify-between px-2 gap-x-6">
                  <h1 className="font-bold text-white md:text-xl">
                    {role.role}
                  </h1>
                  <h1 className="font-medium text-white md:text-xl">
                    {role.track}
                  </h1>
                </div>
              </div>
              {width > 700 && (
                <a
                  href={`mailto:talente-spenden@tum.de?subject=Application as ${role.role} at Talente Spenden`}
                  className="font-medium min-w-[9%] text-black md:text-xl ml-4 hover:bg-blue-mid-light cursor-pointer bg-white py-1 text-center"
                >
                  &rarr; Apply
                </a>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
