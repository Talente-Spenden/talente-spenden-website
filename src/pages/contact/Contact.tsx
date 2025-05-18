import { DiscordIcon } from "../../assets/discord/DiscordIcon";
import { DynamicBoxes } from "../../components/dynamicBoxes/DynamicBoxes";
import { Gradient } from "../../components/gradient/Gradient";
import { OpenPositions } from "../../components/openPositions/OpenPositions";
import { ScrollBandText } from "../../components/ScrollBand/ScrollBandText";
import { ScrollIndicator } from "../../components/scrollIndicator/ScrollIndicator";
import { openRoles } from "../../config/Config";
import { useViewport } from "../../contexts/ViewportContext";

export const Contact: React.FC = () => {
  const { width } = useViewport();
  return (
    <div className="w-screen">
      <div className="min-h-screen">
        <div className="h-[65vh] flex flex-col items-center justify-center text-center">
          <h1 className="font-bold max-w-[80%] font-['Poppins'] mb-2 text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-white">
            Let's make a difference, together.
          </h1>
          <p className="text-grey md:text-xl mb-4 max-w-[80%]">
            Become part of a vibrant community of comitted students and
            contribute yourself.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center">
            <a
              href="https://discord.gg/xB7GXg2j4E"
              target="_blank"
              className="group bg-white max-w-[80vw] min-w-[250px] flex justify-evenly items-center font-bold md:text-xl text-black px-3 py-3 md:px-5 md:py-3 cursor-pointer hover:bg-blue hover:text-white transition-all duration-200"
            >
              <DiscordIcon
                width={width < 500 ? 30 : 40}
                className="mr-4 group-hover:fill-white transition-all duration-200"
              />{" "}
              <h1>
                {width > 500
                  ? "Join Talente Spenden on Discord"
                  : "Join us on Discord"}
              </h1>
            </a>
            <a
              href="#contribute"
              className="border-white max-w-[80vw] border-[2px] min-w-[250px] flex justify-evenly items-center font-bold md:text-xl text-white px-3 py-3 md:px-5 md:py-3 cursor-pointer hover:border-blue-mid-light hover:text-blue-mid-light transition-all duration-200"
            >
              {width > 500
                ? "What can I do at Talente Spenden?"
                : "What can I do at TS?"}
            </a>
          </div>
        </div>
        <div className="flex justify-end mr-4 md:mr-12 mb-12">
          <div className="flex flex-col items-end">
            <p className="text-grey font-semibold md:text-xl max-w-[80vw]">
              Any question or other ideas? Feel free to reach us via mail.
            </p>
            <a
              href="mailto:talente-spenden@tum.de"
              className="text-white hover:bg-blue bg-black px-1 py-2 md:text-2xl font-bold"
            >
              &rarr; talente-spenden@tum.de
            </a>
          </div>
        </div>
        <div className="h-[9vh] bg-black flex items-center">
          <ScrollBandText
            texts={[
              {
                type: "Instagram",
                text: "@talente.spenden",
                link: "https://www.instagram.com/talente.spenden/",
              },
              {
                type: "LinkedIn",
                text: "@talente-spenden",
                link: "https://www.linkedin.com/company/talente-spenden/",
              },
              {
                type: "Instagram",
                text: "@talente.spenden",
                link: "https://www.instagram.com/talente.spenden/",
              },
              {
                type: "LinkedIn",
                text: "@talente-spenden",
                link: "https://www.linkedin.com/company/talente-spenden/",
              },
              {
                type: "Instagram",
                text: "@talente.spenden",
                link: "https://www.instagram.com/talente.spenden/",
              },
              {
                type: "LinkedIn",
                text: "@talente-spenden",
                link: "https://www.linkedin.com/company/talente-spenden/",
              },
              {
                type: "Instagram",
                text: "@talente.spenden",
                link: "https://www.instagram.com/talente.spenden/",
              },
              {
                type: "LinkedIn",
                text: "@talente-spenden",
                link: "https://www.linkedin.com/company/talente-spenden/",
              },
            ]}
          />
        </div>{" "}
        <div
          id="contribute"
          className="pt-6 pb-10 bg-blue flex justify-center items-center"
        >
          <ScrollIndicator color="white" hideOnScroll={false} />
        </div>
        <div className="bg-blue px-2 pt-2 pb-2">
          <div className="">
            <DynamicBoxes />
          </div>
        </div>{" "}
        <div id="roles" className="bg-black py-14 px-6 lg:px-20">
          <h1 className="text-white font-bold text-xl lg:text-5xl mb-2">
            Open Roles at Talente Spenden
          </h1>
          <p className="text-grey-light md:text-xl">
            We are looking for you! All positions at Talente Spenden are
            volunteer roles - noone is getting payed.
          </p>
          <div className="mt-14">
            <OpenPositions roles={openRoles} />
          </div>
        </div>
        <div className="bg-blue  py-1 "> </div>
      </div>
      <div className="bg-black w-screen h-screen fixed top-0 left-0 z-[-1]">
        <Gradient col0="blue" col1="blue" col2="purple" col3="purple" />
      </div>
    </div>
  );
};
