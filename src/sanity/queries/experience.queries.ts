export const experiencesQuery = (limit?: number) => {
  return `*[_type == "experience"] | order(stillWorking desc, startDate desc) ${limit && `[0...${limit}]`} {
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
