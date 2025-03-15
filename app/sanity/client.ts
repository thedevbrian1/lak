import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
  projectId: "req7czyb",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

const { projectId, dataset } = client.config();
export const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;
