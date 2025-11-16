// src/components/MediaModal.jsx
import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { getEmbedUrl } from "../lib/embedParser";
import ReactPlayer from "react-player";

const modalRootId = "media-modal-root";

// ensure modal root exists
function ensureModalRoot() {
  if (typeof document === "undefined") return null;
  let root = document.getElementById(modalRootId);
  if (!root) {
    root = document.createElement("div");
    root.setAttribute("id", modalRootId);
    document.body.appendChild(root);
  }
  return root;
}

const MediaModalContent = ({ onClose, type, src }) => {
  const embed = getEmbedUrl(src || "");
  const isTikTok = embed.includes("tiktok");
  const isInstagram = embed.includes("instagram");
  const isYouTube = embed.includes("youtube");

  // handle ESC to close
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="media-modal-wrapper"
      role="dialog"
      aria-modal="true"
      aria-label="Media preview"
    >
      <div className="media-modal-header">
        <button
          className="close-btn"
          aria-label="Close modal"
          onClick={onClose}
          type="button"
        >
          ×
        </button>
      </div>

      <div className="media-modal-body">
        {type === "image" && (
          <img src={src} alt="media" className="modal-media-img" />
        )}

        {type === "video" && (
          <>
            {(isTikTok || isInstagram) && embed && (
              <div className="iframe-ratio">
                <iframe
                  src={embed}
                  title="Embedded media"
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                  sandbox="allow-same-origin allow-scripts allow-popups"
                  loading="lazy"
                  frameBorder="0"
                />
              </div>
            )}

            {isYouTube && (
              <div className="iframe-ratio">
                <ReactPlayer url={embed} width="100%" height="100%" controls />
              </div>
            )}

            {/* fallback: display link if embed fails */}
            {!embed && (
              <div style={{ padding: 20 }}>
                <p>
                  Unable to preview this media. You can open it in a new tab:
                </p>
                <a href={src} target="_blank" rel="noopener noreferrer">
                  Open media
                </a>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

const backdropVariants = {
  hidden: { opacity: 0, backdropFilter: "blur(0px)" },
  visible: { opacity: 1, backdropFilter: "blur(6px)" },
  exit: { opacity: 0, backdropFilter: "blur(0px)" },
};

// Modal panel variants: slide up on mobile, scale/fade on desktop (we'll use CSS media queries for sizing)
const panelVariants = {
  hidden: { y: "100%", opacity: 0, scale: 0.98 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  exit: {
    y: "100%",
    opacity: 0,
    transition: { ease: "easeInOut", duration: 0.22 },
  },
};

const MediaModal = ({ show, onClose, type, src }) => {
  const root = ensureModalRoot();

  // lock body scroll when modal open
  useEffect(() => {
    if (typeof document === "undefined") return;
    const original = document.body.style.overflow;
    if (show) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [show]);

  if (!root) return null;

  return createPortal(
    <AnimatePresence>
      {show && (
        <motion.div
          className="media-modal-backdrop"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={backdropVariants}
          onClick={onClose}
        >
          <motion.div
            className="media-modal-panel"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            role="document"
          >
            <MediaModalContent onClose={onClose} type={type} src={src} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    root
  );
};

export default MediaModal;
