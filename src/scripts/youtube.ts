function extractVideoId(url: string): string | null {
  const patterns = [
    /youtube\.com\/watch\?v=([^&\n?#]+)/,
    /youtube\.com\/embed\/([^&\n?#]+)/,
    /youtube\.com\/shorts\/([^&\n?#]+)/,
    /youtu\.be\/([^&\n?#]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }

  return null;
}

const input = document.getElementById("yt-url") as HTMLInputElement | null;
const errorEl = document.getElementById("yt-error") as HTMLElement | null;
const preview = document.getElementById("yt-preview") as HTMLElement | null;
const thumb = document.getElementById("yt-thumb") as HTMLImageElement | null;
const thumbSkeleton = document.getElementById("yt-thumb-skeleton") as HTMLElement | null;
const titleEl = document.getElementById("yt-title") as HTMLElement | null;
const channelEl = document.getElementById("yt-channel") as HTMLElement | null;
const submitBtn = document.getElementById("yt-submit") as HTMLButtonElement | null;

if (
  input &&
  errorEl &&
  preview &&
  thumb &&
  thumbSkeleton &&
  titleEl &&
  channelEl &&
  submitBtn
) {
  let debounceTimer: ReturnType<typeof setTimeout>;
  let currentRequestId = 0;

  function resetPreview() {
    preview.classList.add("hidden");
    errorEl.classList.add("hidden");
    submitBtn.disabled = true;
  }

  async function handleInput() {
    const url = input.value.trim();

    clearTimeout(debounceTimer);

    if (!url) {
      resetPreview();
      return;
    }

    const videoId = extractVideoId(url);

    if (!videoId) {
      preview.classList.add("hidden");
      errorEl.classList.remove("hidden");
      submitBtn.disabled = true;
      return;
    }

    errorEl.classList.add("hidden");

    debounceTimer = setTimeout(() => {
      fetchVideoInfo(url, videoId);
    }, 400);
  }

  async function fetchVideoInfo(url: string, videoId: string) {
    const requestId = ++currentRequestId;

    thumb.src = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
    thumbSkeleton.classList.remove("hidden");

    titleEl.textContent = "Fetching video...";
    channelEl.textContent = "";

    preview.classList.remove("hidden");
    submitBtn.disabled = true;

    try {
      const response = await fetch(
        `https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`
      );

      if (requestId !== currentRequestId) return;

      if (!response.ok) throw new Error();

      const data = await response.json();

      titleEl.textContent = data.title ?? "Untitled video";
      channelEl.textContent = data.author_name ?? "";

      thumb.src = data.thumbnail_url ?? thumb.src;

      submitBtn.disabled = false;
    } catch {
      if (requestId !== currentRequestId) return;

      preview.classList.add("hidden");

      errorEl.textContent =
        "Couldn't find that video. Check the link and try again.";

      errorEl.classList.remove("hidden");

      submitBtn.disabled = true;
    } finally {
      if (requestId === currentRequestId) {
        thumbSkeleton.classList.add("hidden");
      }
    }
  }

  thumb.addEventListener("load", () => {
    thumbSkeleton.classList.add("hidden");
  });

  input.addEventListener("input", handleInput);
}
