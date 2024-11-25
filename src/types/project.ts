import { IconType } from "react-icons";
import { PortableTextBlock } from "sanity";

export interface IProject {
  _id: string;
  _createdAt: Date;
  name: string;
  role: string;
  slug: string;
  images: { url: string; alt: string }[];
  url: string;
  github: string;
  shortDescription: string;
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
