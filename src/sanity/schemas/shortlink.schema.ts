const shortlinkSchema = {
  name: "shortlink",
  title: "Shortlink",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "url",
      title: "URL",
      type: "string",
    },
  ],
};

export default shortlinkSchema;
