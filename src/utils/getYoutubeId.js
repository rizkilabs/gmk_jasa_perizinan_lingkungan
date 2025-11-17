export function getYoutubeId(url) {
  try {
    const regExp = /(?:youtube\.com\/.*v=|youtu\.be\/)([^#\&\?]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  } catch {
    return null;
  }
}
