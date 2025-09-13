export const shortlinkBySlugQuery = (slug: string) => {
  return `*[_type == "shortlink" && slug.current == "${slug}"][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      url,
    }`;
};
