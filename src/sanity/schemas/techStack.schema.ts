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
    },
  ],
};

export default techStackSchema;
