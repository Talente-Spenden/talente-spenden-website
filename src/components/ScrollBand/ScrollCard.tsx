import { Instagram, Linkedin } from "lucide-react";

export const ScrollCard: React.FC<{
  element: {
    type: "Instagram" | "LinkedIn";
    text: string;
    link: string;
  };
}> = ({ element }) => {
  return (
    <a
      href={element.link}
      target="_blank"
      className="font-bold h-full hover:bg-blue transition-all duration-200 text-white px-4 flex gap-x-2 items-center"
    >
      {element.type == "Instagram" && <Instagram />}
      {element.type == "LinkedIn" && <Linkedin />}
      {element.text}
    </a>
  );
};
