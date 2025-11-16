// src/lib/embedParser.js

// Extract TikTok ID
const getTikTokId = (url) => {
  const match = url.match(/video\/(\d{5,})/);
  return match ? match[1] : null;
};

// Extract Instagram ID
const getInstagramId = (url) => {
  const match = url.match(/\/reel\/([^\/?#]+)/);
  return match ? match[1] : null;
};

// Extract YouTube ID
const getYouTubeId = (url) => {
  const match = url.match(/(v=|embed\/|youtu\.be\/)([^&?/]+)/);
  return match ? match[2] : null;
};

export const getEmbedUrl = (url) => {
  if (!url) return "";

  if (url.includes("tiktok")) {
    const id = getTikTokId(url);
    return id ? `https://www.tiktok.com/embed/${id}` : "";
  }

  if (url.includes("instagram")) {
    const id = getInstagramId(url);
    return id ? `https://www.instagram.com/reel/${id}/embed` : "";
  }

  if (url.includes("youtu")) {
    const id = getYouTubeId(url);
    return id ? `https://www.youtube.com/embed/${id}` : "";
  }

  return url;
};
