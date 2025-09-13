import { redirect } from "next/navigation";

import { getShortlinkBySlug } from "@/sanity/services/shortlink.service";

const ShortlinkPage = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const shortlink = await getShortlinkBySlug(params.slug);

  if (!shortlink?.url) {
    redirect("/");
  }

  redirect(shortlink.url);
};

export default ShortlinkPage;
