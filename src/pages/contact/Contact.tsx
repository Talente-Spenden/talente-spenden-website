import { DiscordIcon } from "../../assets/discord/DiscordIcon";
import { DynamicBoxes } from "../../components/dynamicBoxes/DynamicBoxes";
import { Gradient } from "../../components/gradient/Gradient";
import { OpenPositions } from "../../components/openPositions/OpenPositions";
import { ScrollBandText } from "../../components/ScrollBand/ScrollBandText";
import { ScrollIndicator } from "../../components/scrollIndicator/ScrollIndicator";
import { openRoles } from "../../config/Config";

export const Contact: React.FC = () => {
  return (
    <div className="w-screen">
      <div className="min-h-screen">
        <div className="h-[35vh] mt-[35vh] flex flex-col items-center text-center">
          <h1 className="font-bold font-['Poppins'] mb-2 text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-white">
            Let's make a difference, together.
          </h1>
          <p className="text-grey text-xl mb-4">
            Become part of a vibrant community of comitted students and
            contribute yourself.
          </p>
          <div className="flex gap-4">
            <a
              href="https://discord.gg/xB7GXg2j4E"
              target="_blank"
              className="group bg-white flex items-center font-bold text-xl sm:text-xl text-black px-5 py-3 cursor-pointer hover:bg-purple hover:text-white transition-all duration-200"
            >
              <DiscordIcon
                width={40}
                className="mr-4 group-hover:fill-white transition-all duration-200"
              />{" "}
              <h1>Join Talente Spenden on Discord</h1>
            </a>
            <a
              href="#contribute"
              className="border-white border-[2px] flex items-center font-bold text-xl sm:text-xl text-white px-5 py-3 cursor-pointer hover:border-purple hover:text-purple transition-all duration-200"
            >
              What can I do at Talente Spenden?
            </a>
          </div>
        </div>
        <div className="flex justify-end mr-12 mb-12">
          <div className="flex flex-col items-end">
            <p className="text-grey font-semibold text-xl">
              Any question or other ideas? Feel free to reach us via mail.
            </p>
            <a
              href="mailto:talente-spenden@tum.de"
              className="text-white hover:bg-blue bg-black px-1 py-2 text-2xl font-bold"
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
                link: "instgram.com",
              },
              {
                type: "LinkedIn",
                text: "@talente-spenden",
                link: "linkedin.com",
              },
              {
                type: "Instagram",
                text: "@talente.spenden",
                link: "instgram.com",
              },
              {
                type: "LinkedIn",
                text: "@talente-spenden",
                link: "linkedin.com",
              },
              {
                type: "Instagram",
                text: "@talente.spenden",
                link: "instgram.com",
              },
              {
                type: "LinkedIn",
                text: "@talente-spenden",
                link: "linkedin.com",
              },
            ]}
          />
        </div>{" "}
        <div
          id="contribute"
          className="pt-6 pb-10 bg-purple/70 flex justify-center items-center"
        >
          <ScrollIndicator color="white" hideOnScroll={false} />
        </div>
        <div className="bg-purple/70 px-2 pt-2 pb-2">
          <div className="">
            <DynamicBoxes />
          </div>
        </div>{" "}
        <div className="bg-black py-14 px-24">
          <h1 className="text-white font-bold text-xl lg:text-5xl mb-2">
            Open Roles at Talente Spenden
          </h1>
          <p className="text-grey-light text-xl">
            We are looking for you! All positions at Talente Spenden are
            volunteer roles - noone is getting payed.
          </p>
          <div className="mt-14">
            <OpenPositions roles={openRoles} />
          </div>
        </div>
        <div className="bg-purple py-1 "> </div>
      </div>
      <div className="bg-black w-screen h-screen fixed top-0 left-0 z-[-1]">
        <Gradient col0="blue" col1="blue" col2="purple" col3="purple" />
      </div>
    </div>
  );
};
