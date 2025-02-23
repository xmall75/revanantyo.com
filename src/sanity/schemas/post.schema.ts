const postSchema = {
  name: "post",
  title: "Posts",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "tag" }],
        },
      ],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "content",
      title: "Content",
      type: "markdown",
    },
    {
      name: "metaKeywords",
      title: "Meta Keywords",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "metaDescription",
      title: "Meta Description",
      type: "string",
    },
  ],
};

export default postSchema;
