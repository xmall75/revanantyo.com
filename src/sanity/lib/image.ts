import createImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import clientConfig from "../config/client";

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder(clientConfig);

export const imageBuilder = (source: SanityImageSource) => {
  return builder.image(source);
};
