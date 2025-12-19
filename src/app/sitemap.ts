import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mrbidar.ir";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseUrl}/Farsi-Home`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/English-Home`,
      lastModified: new Date(),
      priority: 0.7,
    }
  ];
}
