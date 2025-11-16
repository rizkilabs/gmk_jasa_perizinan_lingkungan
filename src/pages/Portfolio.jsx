// src/pages/Portfolio.jsx
import React, { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import MotionWrapper from "../components/MotionWrapper";
import MediaModal from "../components/MediaModal";
import { motion, AnimatePresence } from "framer-motion";

import {
  tiktokVideos,
  instagramVideos,
  youtubeVideos,
} from "../lib/portfolioData";

// Local images
import poster1 from "../assets/portfolio/posters/doc1.jpg";
import poster2 from "../assets/portfolio/posters/doc2.jpg";
import poster3 from "../assets/portfolio/posters/doc3.jpg";
import poster4 from "../assets/portfolio/posters/doc4.jpg";
import poster5 from "../assets/portfolio/posters/doc5.jpg";
import poster6 from "../assets/portfolio/posters/doc6.jpg";
import poster7 from "../assets/portfolio/posters/doc7.jpg";

import c1 from "../assets/portfolio/portfolio_1.jpg";
import c2 from "../assets/portfolio/portfolio_2.jpg";
import c3 from "../assets/portfolio/portfolio_3.jpg";
import c4 from "../assets/portfolio/portfolio_4.jpg";
import c5 from "../assets/portfolio/portfolio_5.jpg";
import c6 from "../assets/portfolio/portfolio_6.jpg";
import c7 from "../assets/portfolio/portfolio_7.jpg";

const posters = [poster1, poster2, poster3, poster4, poster5, poster6, poster7];
const carouselImages = [c1, c2, c3, c4, c5, c6, c7];

const TabButton = ({ id, label, activeTab, setActiveTab, icon }) => (
  <div
    role="button"
    tabIndex={0}
    className={`portfolio-tab-card ${activeTab === id ? "active" : ""}`}
    onClick={() => setActiveTab(id)}
    onKeyDown={() => setActiveTab(id)}
    aria-pressed={activeTab === id}
  >
    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
      {icon}
      <span>{label}</span>
    </div>
  </div>
);

const VideoItem = ({ item, onClick, caption }) => (
  <div className="glass-media-item" onClick={onClick} role="button">
    <div className="media-placeholder">
      <img
        src={item.thumbnail || "https://via.placeholder.com/300x200?text=Video"}
        alt="video-preview"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
    {caption && <div className="media-caption px-2">{caption}</div>}
  </div>
);

const ImageItem = ({ src, onClick, caption }) => (
  <div className="glass-media-item" onClick={onClick} role="button">
    <img src={src} alt={caption || "media"} loading="lazy" />
    {caption && <div className="media-caption px-2">{caption}</div>}
  </div>
);

const Portfolio = () => {
  const [modal, setModal] = useState({ show: false, type: "", src: "" });
  const [activeTab, setActiveTab] = useState("tiktok");

  const openModal = (type, src) => setModal({ show: true, type, src });
  const closeModal = () => setModal({ show: false, type: "", src: "" });

  const counts = useMemo(
    () => ({
      tiktok: tiktokVideos.length,
      instagram: instagramVideos.length,
      posters: posters.length,
      carousel: carouselImages.length,
      youtube: youtubeVideos.length,
    }),
    []
  );

  return (
    <>
      <Navbar />
      <MotionWrapper>
        <section className="container" style={{ marginTop: "120px" }}>
          <h2 className="mb-3 fw-bold">Portfolio</h2>

          {/* Tabs */}
          <div className="portfolio-tabs mb-3">
            <TabButton
              id="tiktok"
              label={`TikTok (${counts.tiktok})`}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M10 2v12.5A4.5 4.5 0 0 1 5.5 19C5.5 21.209 7.291 23 9.5 23C11.709 23 13.5 21.209 13.5 19V9h3V6h-6z"
                  />
                </svg>
              }
            />

            <TabButton
              id="instagram"
              label={`Instagram (${counts.instagram})`}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zM12 8.2A3.8 3.8 0 1 0 12 15.8A3.8 3.8 0 0 0 12 8.2zM17.5 6.2a.9.9 0 1 0 0 1.8a.9.9 0 0 0 0-1.8z"
                  />
                </svg>
              }
            />

            <TabButton
              id="posters"
              label={`Posters (${counts.posters})`}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M4 4h16v16H4zM6 6v12h12V6z" />
                </svg>
              }
            />

            <TabButton
              id="carousel"
              label={`Carousel (${counts.carousel})`}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M3 6h18v2H3zM3 11h18v2H3zM3 16h18v2H3z"
                  />
                </svg>
              }
            />

            <TabButton
              id="youtube"
              label={`YouTube (${counts.youtube})`}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M10 15l5-3l-5-3zM21 8s-.2-1.4-.9-2c-.9-.9-1.9-.9-2.4-1C14 4 12 4 12 4s-2 0-5.7.1c-.5 0-1.5.1-2.4 1C3.2 6.6 3 8 3 8s0 1.7 0 3.5v1C3 14.3 3 16 3 16s.2 1.4.9 2c.9.9 2.1.9 2.6 1C8 20 12 20 12 20s2 0 5.7-.1c.5 0 1.5-.1 2.4-1c.7-.6.9-2 .9-2s0-1.7 0-3.5v-1C21 9.7 21 8 21 8z"
                  />
                </svg>
              }
            />
          </div>

          {/* ANIMASI SMOOTH PER TAB */}
          <div className="portfolio-card">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {activeTab === "tiktok" && (
                  <>
                    <h4 className="mb-3">TikTok Videos</h4>
                    <div className="glass-media-grid">
                      {tiktokVideos.map((item, i) => (
                        <VideoItem
                          key={i}
                          item={item}
                          onClick={() => openModal("video", item.url)}
                          caption={item.title}
                        />
                      ))}
                    </div>
                  </>
                )}

                {activeTab === "instagram" && (
                  <>
                    <h4 className="mb-3">Instagram Reels</h4>
                    <div className="glass-media-grid">
                      {instagramVideos.map((item, i) => (
                        <VideoItem
                          key={i}
                          item={item}
                          onClick={() => openModal("video", item.url)}
                          caption={item.title}
                        />
                      ))}
                    </div>
                  </>
                )}

                {activeTab === "posters" && (
                  <>
                    <h4 className="mb-3">Poster Perizinan</h4>
                    <div className="glass-media-grid">
                      {posters.map((img, i) => (
                        <ImageItem
                          key={i}
                          src={img}
                          onClick={() => openModal("image", img)}
                          caption={`Poster #${i + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}

                {activeTab === "carousel" && (
                  <>
                    <h4 className="mb-3">Carousel Images</h4>
                    <div className="glass-media-grid">
                      {carouselImages.map((img, i) => (
                        <ImageItem
                          key={i}
                          src={img}
                          onClick={() => openModal("image", img)}
                          caption={`Image #${i + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}

                {activeTab === "youtube" && (
                  <>
                    <h4 className="mb-3">YouTube Videos</h4>
                    <div className="glass-media-grid">
                      {youtubeVideos.map((item, i) => (
                        <VideoItem
                          key={i}
                          item={item}
                          onClick={() => openModal("video", item.url)}
                          caption={item.title}
                        />
                      ))}
                    </div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        <MediaModal
          show={modal.show}
          onClose={closeModal}
          type={modal.type}
          src={modal.src}
        />
      </MotionWrapper>
    </>
  );
};

export default Portfolio;
