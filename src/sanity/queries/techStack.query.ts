export const techStackQuery = () => {
  return `*[_type == "techStack"] {
    _id,
    _createdAt,
    name,
    icon
  }`;
};
