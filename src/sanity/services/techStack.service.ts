import clientConfig from "../config/client";
import { techStackQuery } from "../queries/techStack.query";

import { ITechStackSchema } from "@/types/techStack.type";

export const getTechStacks = async (): Promise<ITechStackSchema[]> => {
  const query = techStackQuery();

  const techStack = await clientConfig.fetch(query, undefined, {
    cache: "no-store",
  });

  return techStack;
};
