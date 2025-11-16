import React from "react";
import ReactPlayer from "react-player";
import doc1 from "../assets/dokumentasi/doc1.jpg";
import doc2 from "../assets/dokumentasi/doc2.jpg";
import Navbar from "../components/Navbar";
import MotionWrapper from "../components/MotionWrapper";

const Dokumentasi = () => {
  return (
    <>
      <Navbar />
      <MotionWrapper>
        <section className="container" style={{ marginTop: "120px" }}>
          <h2>Dokumentasi</h2>

          {/* 1 Video */}
          <div className="my-4">
            <ReactPlayer url="/videos/dokumentasi.mp4" width="100%" controls />
          </div>

          {/* Photo Grid */}
          <div className="row mt-4">
            {[doc1, doc2].map((img, idx) => (
              <div key={idx} className="col-md-4 mb-3">
                <img
                  src={img}
                  alt={"doc-" + idx}
                  className="img-fluid rounded shadow"
                />
              </div>
            ))}
          </div>
        </section>
      </MotionWrapper>
    </>
  );
};

export default Dokumentasi;
