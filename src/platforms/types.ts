export interface Platform {
  id: string;
  name: string;
  type: 'link' | 'audio' | 'text';
  icon: string;
  placeholder: string;
  buttonLabel: string;
  emptyState: string;
  enabled: boolean;
  comingSoon: boolean;
  supportsUpload: boolean;
  supportsPreview: boolean;
  validationRegex?: RegExp;
  fetchMetadata?: (url: string) => Promise<Metadata>;
}

export interface Metadata {
  title: string;
  author?: string;
  thumbnail?: string;
  error?: string;
}
