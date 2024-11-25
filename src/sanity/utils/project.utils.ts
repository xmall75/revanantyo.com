import clientConfig from "../config/client";

import { IProject } from "@/types/project";

export const getProjects = async (): Promise<IProject[]> => {
  const projects = await clientConfig.fetch(
    `*[_type == "project"] | order(_createdAt desc) {
      _id,
      _createdAt,
      name,
      role,
      "slug": slug.current,
      "images": images[]{ 
        "url": asset->url,
        alt
      },
      url,
      github,
      shortDescription,
      content
    }`,
    undefined,
    { cache: "no-store" },
  );

  return projects;
};

export const getProjectBySlug = async (slug: string): Promise<IProject> => {
  const project = await clientConfig.fetch(
    `*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      role,
      "slug": slug.current,
      "images": images[]{ 
        "url": asset->url,
        alt
      },
      url,
      github,
      shortDescription,
      content
    }`,
    { slug },
    { cache: "no-store" },
  );

  return project;
};
