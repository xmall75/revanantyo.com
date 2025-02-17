import clientConfig from "../config/client";
import { projectBySlugQuery, projectsQuery } from "../queries/project.query";

import { IProjectSchema } from "@/types/project";

export const getProjects = async (
  limit?: number,
): Promise<IProjectSchema[]> => {
  const query = projectsQuery(limit);

  const projects = await clientConfig.fetch(query, undefined, {
    cache: "no-store",
  });

  return projects;
};

export const getProjectBySlug = async (
  slug: string,
): Promise<IProjectSchema> => {
  const query = projectBySlugQuery(slug);

  const project = await clientConfig.fetch(
    query,
    { slug },
    { cache: "no-store" },
  );

  return project;
};
