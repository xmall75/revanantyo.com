import { IconType } from "react-icons";
import { PortableTextBlock } from "sanity";

export interface IProject {
  _id: string;
  createdAt: Date;
  name: string;
  slug: string;
  image: string;
  url: string;
  content: PortableTextBlock[];
}

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
