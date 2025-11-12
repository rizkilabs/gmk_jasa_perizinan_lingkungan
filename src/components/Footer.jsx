import React from "react";
import { COLORS } from "../lib/constants";

function Footer() {
  return (
    <footer
      className="text-center py-4 mt-5"
      style={{ backgroundColor: COLORS.gray, color: COLORS.dark }}
    >
      <p className="mb-0">
        © {new Date().getFullYear()} Geo Mandiri Kreasi. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
