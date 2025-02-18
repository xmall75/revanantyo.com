import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import {
  sanityApiVersion,
  sanityBasePath,
  sanityDataset,
  sanityProjectId,
  sanityTitle,
} from "@/sanity/lib/env";
import schemas from "@/sanity/schemas/index.schema";

const config = defineConfig({
  projectId: sanityProjectId as string,
  dataset: sanityDataset as string,
  title: sanityTitle,
  apiVersion: sanityApiVersion,
  basePath: sanityBasePath,
  plugins: [structureTool()],
  schema: { types: schemas },
});

export default config;
