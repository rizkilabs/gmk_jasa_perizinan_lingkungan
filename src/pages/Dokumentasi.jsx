import { useState } from "react";
import { dokumentasiImages } from "../lib/dokumentasiData";
import MediaModal from "../components/MediaModal";
import videoBg from "../assets/dokumentasi/doc-video.mp4";
import "../styles/dokumentasi.css";
import Navbar from "../components/Navbar";
import ChatbotWidget from "./LandingPage/ChatbotWidget";

const Dokumentasi = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const handleOpen = (img) => {
    setSelectedMedia({ type: "image", src: img });
  };

  const handleClose = () => setSelectedMedia(null);

  const displayedImages = showAll
    ? dokumentasiImages
    : dokumentasiImages.slice(0, 6);

  return (
    <>
      <Navbar />

      {/* extra spacing below navbar */}
      <div className="dok-top-space">
        <div className="dok-wrapper">
          {/* Video */}
          <div className="video-box">
            <video src={videoBg} autoPlay muted loop playsInline />
          </div>

          {/* Foto Grid */}
          <div className="gallery-grid">
            {displayedImages.map((img, index) => (
              <div
                key={`${showAll}-${index}`} // force remount for animation
                className="gallery-card stagger-item"
                style={{ "--i": index }}
                onClick={() => handleOpen(img)}
              >
                <img src={img} alt={`doc-${index}`} />
              </div>
            ))}
          </div>

          {/* Toggle Button */}
          {dokumentasiImages.length > 6 && (
            <button
              className="gallery-toggle-btn"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Lihat Lebih Sedikit" : "Lihat Lebih Banyak"}
            </button>
          )}

          {/* Modal */}
          <MediaModal
            show={selectedMedia !== null}
            onClose={handleClose}
            type={selectedMedia?.type}
            src={selectedMedia?.src}
          />
        </div>
      </div>
      <ChatbotWidget />
    </>
  );
};

export default Dokumentasi;
