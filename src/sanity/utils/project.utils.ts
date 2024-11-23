import { createClient, groq } from "next-sanity";

import { clientConfig } from "../../../sanity.config";

import { IProject } from "@/types/project";

export const getProjects = (): Promise<IProject[]> => {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
  );
};

export const getProjectBySlug = (slug: string): Promise<IProject> => {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    { slug },
  );
};
