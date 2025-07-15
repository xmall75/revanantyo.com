import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { iconPicker } from "sanity-plugin-icon-picker";
import { markdownSchema } from "sanity-plugin-markdown/next";
import { media } from "sanity-plugin-media";

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
  plugins: [structureTool(), markdownSchema(), iconPicker(), media()],
  schema: { types: schemas },
});

export default config;
