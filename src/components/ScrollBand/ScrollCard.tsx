import { Instagram, Linkedin } from "lucide-react";

export const ScrollCard: React.FC<{
  element: {
    type: "Instagram" | "LinkedIn";
    text: string;
    link: string;
  };
}> = ({ element }) => {
  return (
    <div className="font-bold text-white px-4 flex gap-x-2 items-center">
      {element.type == "Instagram" && <Instagram />}
      {element.type == "LinkedIn" && <Linkedin />}
      {element.text}
    </div>
  );
};
