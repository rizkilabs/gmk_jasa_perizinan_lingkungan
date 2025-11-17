import { useEffect, useRef, useState } from "react";
import { useMusicStore } from "../hooks/useMusicStore";
import { Volume2, VolumeX } from "lucide-react";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const { isMuted, setMuted } = useMusicStore();
  const [ready, setReady] = useState(false); // audio ready state

  // Ensure the audio is loaded and ready
  const handleCanPlay = () => {
    setReady(true);
    console.log("Audio ready to play");
  };

  // Sync mute state with audio element
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const toggleMute = async () => {
    if (!audioRef.current) return;

    // unmute
    if (isMuted) {
      setMuted(false);

      // Wait for audio to be ready
      if (ready) {
        try {
          await audioRef.current.play();
          console.log("Audio playing after unmute");
        } catch (err) {
          console.error("Play error:", err);
        }
      }
    } else {
      // mute
      setMuted(true);
      audioRef.current.pause();
      console.log("Audio muted");
    }
  };

  return (
    <div>
      <audio
        ref={audioRef}
        src="/music/background.mp3"
        autoPlay
        loop
        muted
        onCanPlay={handleCanPlay}
      />

      <button
        onClick={toggleMute}
        style={{
          position: "fixed",
          bottom: "20px",
          left: "20px",
          background: "rgba(0,0,0,0.6)",
          color: "white",
          border: "none",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 9999,
        }}
      >
        {isMuted ? <VolumeX size={28} /> : <Volume2 size={28} />}
      </button>
    </div>
  );
}
