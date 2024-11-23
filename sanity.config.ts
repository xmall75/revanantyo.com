import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import schemas from "@/sanity/schemas/index.schema";

const configInit = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
  title: process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  basePath: process.env.NEXT_PUBLIC_SANITY_STUDIO_PATH,
  plugins: [structureTool()],
  schema: { types: schemas },
};

export const config = defineConfig(configInit);

export const clientConfig = {
  projectId: configInit.projectId,
  dataset: configInit.dataset,
  apiVersion: configInit.apiVersion,
};
