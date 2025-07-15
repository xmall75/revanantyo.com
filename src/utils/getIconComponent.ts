import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as HiIcons from "react-icons/hi";
import * as MdIcons from "react-icons/md";
import * as SiIcons from "react-icons/si";

export const getIconComponent = (name: string, provider: string) => {
  if (provider === "fa") {
    return FaIcons[name as keyof typeof FaIcons];
  } else if (provider === "fi") {
    return FiIcons[name as keyof typeof FiIcons];
  } else if (provider === "hi") {
    return HiIcons[name as keyof typeof HiIcons];
  } else if (provider === "md") {
    return MdIcons[name as keyof typeof MdIcons];
  } else if (provider === "si") {
    return SiIcons[name as keyof typeof SiIcons];
  }
};
