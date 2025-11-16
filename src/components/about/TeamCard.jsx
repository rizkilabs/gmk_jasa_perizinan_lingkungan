import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const TeamCard = ({ photo, name, role }) => {
  const cardRef = useRef(null);
  const tiltRef = useRef(null);

  // 3D Tilt effect
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    function move(e) {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - (rect.left + rect.width / 2)) / 20;
      const y = (e.clientY - (rect.top + rect.height / 2)) / 20;

      // Apply 3D tilt
      tiltRef.current.style.transform = `rotateX(${y}deg) rotateY(${-x}deg)`;
    }

    function reset() {
      tiltRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
    }

    card.addEventListener("mousemove", move);
    card.addEventListener("mouseleave", reset);

    return () => {
      card.removeEventListener("mousemove", move);
      card.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes spinAqua {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes pulseAqua {
            0% { filter: drop-shadow(0 0 8px rgba(0,255,220,0.8)); }
            50% { filter: drop-shadow(0 0 25px rgba(0,255,220,1)); }
            100% { filter: drop-shadow(0 0 8px rgba(0,255,220,0.8)); }
          }
        `}
      </style>

      <motion.div
        ref={cardRef}
        whileHover={{ scale: 1.06 }}
        transition={{ type: "spring", stiffness: 160, damping: 18 }}
        className="text-center p-3 rounded-4 shadow-sm"
        style={{
          width: 240,
          margin: "0 auto",
          cursor: "pointer",
          perspective: 1200,
        }}
      >
        <div
          ref={tiltRef}
          style={{
            transformStyle: "preserve-3d",
            transition: "0.15s ease-out",
          }}
        >
          {/* FOTO + BORDER AQUA THICK SPIN */}
          <div
            style={{
              width: 170,
              height: 170,
              borderRadius: "50%",
              margin: "0 auto",
              position: "relative",
            }}
          >
            {/* BORDER MUTER TEBEL & CLEAR */}
            <div
              style={{
                position: "absolute",
                inset: -8,
                borderRadius: "50%",
                padding: 10,
                background:
                  "conic-gradient(#00ffe7, #00cfc7, #00ffe7, #00bfa6, #00ffe7)",
                animation:
                  "spinAqua 3s linear infinite, pulseAqua 2s ease-in-out infinite",
                zIndex: 1,
                // WebkitMask:
                //   "radial-gradient(farthest-side, transparent calc(100% - 10px), black calc(100% - 9px))",
                // mask: "radial-gradient(farthest-side, transparent calc(100% - 10px), black calc(100% - 9px))",
              }}
            />

            {/* FOTO */}
            <img
              src={photo}
              alt={name}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                objectFit: "cover",
                objectPosition: "center",
                position: "relative",
                zIndex: 2,
                // border: "5px solid white",
              }}
            />
          </div>

          {/* Text */}
          <h6 className="fw-bold mt-4">{name}</h6>
          <p className="small mb-0">{role}</p>
        </div>
      </motion.div>
    </>
  );
};

export default TeamCard;
