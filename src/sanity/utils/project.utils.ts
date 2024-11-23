import clientConfig from "../config/client";

import { IProject } from "@/types/project";

export const getProjects = async (): Promise<IProject[]> => {
  const projects = await clientConfig.fetch(
    `*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      github,
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
      "slug": slug.current,
      "image": image.asset->url,
      url,
      github
      content
    }`,
    { slug },
  );

  return project;
};
