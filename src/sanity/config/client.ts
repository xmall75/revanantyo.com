import { createClient } from "next-sanity";

import config from "../../../sanity.config";

const clientConfig = createClient({
  projectId: config.projectId,
  dataset: config.dataset,
  apiVersion: config.apiVersion,
  useCdn: false,
});

export default clientConfig;
