import React from "react";
import { getTikTokEmbedUrl } from "../utils/getTiktokEmbedUrl";

// Render TikTok iframe
export default function TikTokEmbed({ url, title }) {
  const embedUrl = getTikTokEmbedUrl(url);

  if (!embedUrl) {
    return <p>Invalid TikTok URL</p>;
  }

  return (
    <iframe
      src={embedUrl}
      title={title}
      allow="encrypted-media; fullscreen"
      style={{
        width: "100%",
        height: "550px",
        border: "none",
        borderRadius: "12px",
      }}
    ></iframe>
  );
}
