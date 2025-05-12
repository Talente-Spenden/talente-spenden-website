import { DiscordIcon } from "../../assets/discord/DiscordIcon";
import { Gradient } from "../../components/gradient/Gradient";
import { ScrollBandImage } from "../../components/ScrollBand/ScrollBandImage";
import { ScrollBandText } from "../../components/ScrollBand/ScrollBandText";

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
          <div>
            <a
              href="https://discord.gg/xB7GXg2j4E"
              target="_blank"
              className="group bg-white flex items-center font-bold text-xl sm:text-xl text-black px-5 py-3 cursor-pointer hover:bg-blue hover:text-white transition-all duration-200"
            >
              <DiscordIcon
                width={40}
                className="mr-4 group-hover:fill-white transition-all duration-200"
              />{" "}
              <h1>Join Talente Spenden on Discord</h1>
            </a>
          </div>
        </div>
        <div className="flex justify-end mr-12 mb-12">
          <div className="flex flex-col items-end">
            <p className="text-grey font-semibold text-xl">
              Any question or other ideas? You can also reach us via mail
            </p>
            <a
              href="mailto:talente-spenden@tum.de"
              className="text-white bg-black px-1 py-2 text-2xl font-bold"
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
        </div>

        <div className="bg-white min-h-[80vh]"></div>
      </div>
      <div className="bg-black w-screen h-screen fixed top-0 left-0 z-[-1]">
        <Gradient col0="blue" col1="blue" col2="purple" col3="purple" />
      </div>
    </div>
  );
};
