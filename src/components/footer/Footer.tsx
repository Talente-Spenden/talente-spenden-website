import { Link } from "react-router-dom";

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
                <li>
                  <a
                    className="hover:text-blue-mid-light transition-all"
                    target="_blank"
                    href="https://www.instagram.com/talente.spenden/"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-blue-mid-light transition-all"
                    target="_blank"
                    href="https://www.linkedin.com/company/talente-spenden/"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-blue-mid-light transition-all"
                    target="_blank"
                    href="https://github.com/Talente-Spenden"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-blue-mid-light transition-all"
                    target="_blank"
                    href="https://www.tum.de/en/studies/fees-and-financial-aid/scholarships/tum-scholarships/deutschlandstipendium/initiatives"
                  >
                    TUM Deutschlandstipendium
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold">Topics</p>
              <ul>
                <li>
                  <Link
                    to="/"
                    className="hover:text-blue-mid-light transition-all"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/charity"
                    className="hover:text-blue-mid-light transition-all"
                  >
                    Charity Track
                  </Link>
                </li>
                <li>
                  <Link
                    to="/entrepreneurship"
                    className="hover:text-blue-mid-light transition-all"
                  >
                    Entrepreneurship Track
                  </Link>
                </li>
                <li>
                  <Link
                    to="/team"
                    className="hover:text-blue-mid-light transition-all"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    to="/join"
                    className="hover:text-blue-mid-light transition-all"
                  >
                    Join
                  </Link>
                </li>
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
