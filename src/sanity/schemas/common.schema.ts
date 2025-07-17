const commonSchema = {
  name: "common",
  title: "Common Documents",
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
    {
      name: "url",
      title: "URL",
      type: "string",
    },
  ],
};

export default commonSchema;
