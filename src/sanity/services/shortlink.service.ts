import clientConfig from "../config/client";
import { shortlinkBySlugQuery } from "../queries/shortlink.query";

import { IShortlinkSchema } from "@/types/shortlink.type";

export const getShortlinkBySlug = async (
  slug: string,
): Promise<IShortlinkSchema> => {
  const query = shortlinkBySlugQuery(slug);

  const shortlink = await clientConfig.fetch(
    query,
    { slug },
    { cache: "no-store" },
  );

  return shortlink;
};
