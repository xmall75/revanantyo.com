import clientConfig from "../config/client";
import { commonDataQuery } from "../queries/common.query";

import { ICommonDataSchema } from "@/types/common.type";

export const getCommonData = async (): Promise<ICommonDataSchema[]> => {
  const query = commonDataQuery();

  const commonData = await clientConfig.fetch(query, undefined, {
    cache: "no-store",
  });

  return commonData;
};
