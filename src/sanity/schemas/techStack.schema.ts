const techStackSchema = {
  name: "techStack",
  title: "Tech Stack",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "icon",
      title: "Icon",
      type: "iconPicker",
      options: {
        outputFormat: "react",
      },
    },
  ],
};

export default techStackSchema;
