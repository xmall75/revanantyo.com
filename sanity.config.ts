import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import schemas from "@/sanity/schemas/index.schema";

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
  title: process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  basePath: process.env.NEXT_PUBLIC_SANITY_STUDIO_PATH,
  plugins: [structureTool()],
  schema: { types: schemas },
});

export default config;
