import { IconType } from "react-icons";

export interface IListProject {
  title: string;
  role: string;
  date: string;
  description: string;
  links: {
    title: string;
    url: string;
    icon: IconType;
  }[];
  images: string[];
}
