import type { Platform, Metadata } from "./types";

export const YouTubePlatform: Platform = {
  id: "youtube",
  name: "YouTube",
  icon: "youtube",
  placeholder: "https://youtube.com/watch?v=...",
  buttonLabel: "Summarize Video",
  enabled: true,
  comingSoon: false,
  supportsUpload: false,
  supportsPreview: true,
  validationRegex: /(?:youtube\.com\/watch\?v=|youtube\.com\/embed\/|youtube\.com\/shorts\/|youtu\.be\/)([^&\n?#]+)/,
  fetchMetadata: async (url: string): Promise<Metadata> => {
    try {
      const response = await fetch(
        `https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`
      );
      if (!response.ok) throw new Error();
      const data = await response.json();
      return {
        title: data.title ?? "Untitled video",
        author: data.author_name ?? "",
        thumbnail: data.thumbnail_url,
      };
    } catch (e) {
      return {
        title: "",
        error: "Couldn't find that video. Check the link and try again.",
      };
    }
  },
};
