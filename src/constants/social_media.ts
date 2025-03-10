import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa6";

import { AppRoute } from "./app_route";

export const SocialMedia = [
  {
    title: "Resume",
    url: AppRoute.resume,
    icon: FaNewspaper,
  },
  {
    title: "Linkedin",
    url: "https://www.linkedin.com/in/revanantyo-dwigantara",
    icon: FaLinkedinIn,
  },
  {
    title: "Github",
    url: "https://github.com/xmall75",
    icon: FaGithub,
  },
  {
    title: "Instagram",
    url: "https://instagram.com/revarepp",
    icon: FaInstagram,
  },
];
