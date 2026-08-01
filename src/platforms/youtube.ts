import type { Platform, Metadata } from "./types";

export const YouTubePlatform: Platform = {
  id: "youtube",
  name: "YouTube",
  type: "link",
  icon: "youtube",
  placeholder: "https://youtube.com/watch?v=...",
  buttonLabel: "Summarize Video",
  emptyState: "Paste a YouTube link to begin.",
  enabled: true,
  comingSoon: false,
  supportsUpload: false,
  supportsPreview: true,
  validationRegex: /(?:youtube\.com\/watch\?v=|youtube\.com\/embed\/|youtube\.com\/shorts\/|youtu\.be\/)([^&\n?#]+)/,
  fetchMetadata: async (url: string): Promise<Metadata> => {
    try {
      const response = await fetch('/api/metadata', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      });
      const data = await response.json();
      if (!response.ok) {
        return { title: "", error: data.error || "Failed to fetch metadata" };
      }
      return data;
    } catch (e) {
      return {
        title: "",
        error: "Couldn't find that video. Check the link and try again.",
      };
    }
  },
};
