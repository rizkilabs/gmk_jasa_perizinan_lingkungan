// Extract TikTok Video ID from any format URL
export function getTikTokEmbedUrl(originalUrl) {
  if (!originalUrl) return null;

  // Regex untuk ambil video ID di semua format URL TikTok
  const regex = /video\/(\d{5,})/;
  const match = originalUrl.match(regex);

  if (!match) return null;

  const videoId = match[1];
  return `https://www.tiktok.com/embed/${videoId}`;
}
