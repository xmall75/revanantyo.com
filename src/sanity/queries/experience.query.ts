export const experiencesQuery = (limit?: number) => {
  return `*[_type == "experience"] | order(order asc) ${limit != undefined ? `[0...${limit}]` : ""} {
    _id,
    _createdAt,
    company,
    role,
    location,
    type,
    startDate,
    endDate,
    stillWorking,
    jobdesk
  }`;
};
