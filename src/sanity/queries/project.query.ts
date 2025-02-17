export const projectsQuery = (limit?: number) => {
  return `*[_type == "project"] | order(_createdAt desc) ${limit != undefined ? `[0...${limit}]` : ""} {
      _id,
      _createdAt,
      name,
      role,
      "slug": slug.current,
      "thumbnail": thumbnail.asset->{
        "url": url,
        alt
      },
      "images": images[]{ 
        "url": asset->url,
        alt
      },
      url,
      github,
      shortDescription,
      content
    }`;
};

export const projectBySlugQuery = (slug: string) => {
  return `*[_type == "project" && slug.current == "${slug}"][0]{
      _id,
      _createdAt,
      name,
      role,
      "slug": slug.current,
      "thumbnail": thumbnail.asset->{
        "url": url,
        alt
      },
      "images": images[]{ 
        "url": asset->url,
        alt
      },
      url,
      github,
      shortDescription,
      content
    }`;
};
