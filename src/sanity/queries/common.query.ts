export const commonDataQuery = () => {
  return `*[_type == "common"] | order(_createdAt asc) {
      _id,
      _createdAt,
      name,
      icon,
      url
    }`;
};
