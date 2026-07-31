import type { Platform } from "./types";
import { YouTubePlatform } from "./youtube";

export const PLATFORMS: Platform[] = [
  YouTubePlatform,
  {
    id: "instagram",
    name: "Instagram",
    icon: "instagram",
    placeholder: "Paste Instagram Reel link...",
    buttonLabel: "Summarize Reel",
    enabled: false,
    comingSoon: true,
    supportsUpload: false,
    supportsPreview: false,
  },
  {
    id: "tiktok",
    name: "TikTok",
    icon: "tiktok",
    placeholder: "Paste TikTok link...",
    buttonLabel: "Summarize TikTok",
    enabled: false,
    comingSoon: true,
    supportsUpload: false,
    supportsPreview: false,
  },
  {
    id: "x",
    name: "X (Twitter)",
    icon: "x",
    placeholder: "Paste X video link...",
    buttonLabel: "Summarize X Video",
    enabled: false,
    comingSoon: true,
    supportsUpload: false,
    supportsPreview: false,
  },
  {
      id: "audio",
      name: "Audio",
      icon: "audio",
      placeholder: "Upload audio file...",
      buttonLabel: "Summarize Audio",
      enabled: false,
      comingSoon: true,
      supportsUpload: true,
      supportsPreview: false,
  },
  {
      id: "pdf",
      name: "PDF",
      icon: "pdf",
      placeholder: "Upload PDF document...",
      buttonLabel: "Summarize PDF",
      enabled: false,
      comingSoon: true,
      supportsUpload: true,
      supportsPreview: false,
  }
];

export const getPlatform = (id: string) => PLATFORMS.find(p => p.id === id) || PLATFORMS[0];
