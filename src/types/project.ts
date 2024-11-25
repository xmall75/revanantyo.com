import { PortableTextBlock } from "sanity";

export interface IProjectSchema {
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
