import { IExperienceSchema } from "@/types/experience";
import clientConfig from "../config/client";
import { experiencesQuery } from "../queries/experience.queries";

export const getExperiences = async (
  limit?: number,
): Promise<IExperienceSchema[]> => {
  const query = experiencesQuery(limit);

  const experiences = await clientConfig.fetch(query, undefined, {
    cache: "no-store",
  });

  return experiences;
};
