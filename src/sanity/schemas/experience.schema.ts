const experienceSchema = {
  name: "experience",
  title: "Experiences",
  type: "document",
  fields: [
    {
      name: "company",
      title: "Company",
      type: "string",
    },
    {
      name: "order",
      title: "Order",
      type: "number",
    },
    {
      name: "role",
      title: "Role",
      type: "string",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "type",
      title: "Employment Type",
      type: "string",
      options: {
        list: [
          "Full-time",
          "Part-time",
          "Internship",
          "Freelance",
          "Contract",
          "Volunteer",
        ],
      },
    },
    {
      name: "startDate",
      title: "Start Date",
      type: "date",
    },
    {
      name: "endDate",
      title: "End Date",
      type: "date",
    },
    {
      name: "stillWorking",
      title: "Currently Working",
      type: "boolean",
    },
    {
      name: "jobdesk",
      title: "Job Responsibilities",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};

export default experienceSchema;
