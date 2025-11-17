// Convert any YouTube URL into a clean embed URL
export function parseYoutubeUrl(url) {
  if (!url) return null;

  try {
    const parsed = new URL(url);

    // Normal YouTube watch URL
    if (
      parsed.hostname.includes("youtube.com") &&
      parsed.searchParams.get("v")
    ) {
      const id = parsed.searchParams.get("v");
      return `https://www.youtube.com/embed/${id}`;
    }

    // YouTube short URL (youtu.be)
    if (parsed.hostname === "youtu.be") {
      const id = parsed.pathname.replace("/", "");
      return `https://www.youtube.com/embed/${id}`;
    }

    // Shorts
    if (parsed.pathname.startsWith("/shorts/")) {
      const id = parsed.pathname.replace("/shorts/", "");
      return `https://www.youtube.com/embed/${id}`;
    }

    // Already embed
    if (parsed.pathname.startsWith("/embed/")) {
      return url;
    }

    return null;
  } catch {
    return null;
  }
}
