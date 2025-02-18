export const experiencesQuery = (limit?: number) => {
  return `*[_type == "experience"] | order(stillWorking asc, startDate desc, endDate desc) ${limit != undefined ? `[0...${limit}]` : ""} {
    _id,
    _createdAt,
    company,
    role,
    type,
    startDate,
    endDate,
    stillWorking,
    jobdesk
  }`;
};
