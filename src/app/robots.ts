import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://ai-prompt-architect-nine.vercel.app/sitemap.xml",
  };
}
