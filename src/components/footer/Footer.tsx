export const Footer = () => {
  return (
    <div className="bg-black w-screen flex justify-center [&_h1]:text-white py-10">
      <div className="h-full w-[90vw]">
        <div className="mb-4 mt-2">
          <h1 className=" text-white italic text-5xl font-medium">
            WE CAN'T WAIT
          </h1>
          <h1 className=" text-white text-5xl font-medium mb-2">
            TO HEAR FROM YOU
          </h1>
          <p className="text-grey max-w-[80vw]">
            Don't hesitate to reach out to us, we'd love to hear about your
            ideas.
          </p>
        </div>
        <div className="flex flex-wrap justify-between max-w-[95vw] [&_li]:text-grey [&_p]:text-white">
          <div className="mb-4">
            <a
              className="text-xl md:text-3xl text-white hover:bg-white hover:text-black transition-all"
              href="mailto:talente-spenden@tum.de"
            >
              &rarr; talente-spenden@tum.de
            </a>
          </div>
          <div className="flex gap-x-10 [&_ul]:mr-24 [&_ul]:mb-7 flex-wrap">
            <div>
              <p className="font-bold">Follow us</p>
              <ul>
                <li>Instagram</li>
                <li>LinkedIn</li>
                <li>GitHub</li>
                <li>TUM Deutschlandstipendium</li>
              </ul>
            </div>
            <div>
              <p className="font-bold">Topics</p>
              <ul>
                <li>News</li>
                <li>Projects</li>
                <li>Our Mission</li>
                <li>Our Story</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <p className="font-bold">Legal</p>
              <ul>
                <li>Imprint</li>
                <li>Data protection</li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" mt-4">
          {" "}
          <div className="flex justify-center">
            <div className=" h-[0.10rem] w-full bg-grey" />
          </div>
          <p className="w-full mt-1 text-grey-light">
            Talente Spenden e.V. - Technical University of Munich - Fundraising
            HR5 - Arcisstr. 21 - 80333 Munich - Germany
          </p>
        </div>
      </div>
    </div>
  );
};
