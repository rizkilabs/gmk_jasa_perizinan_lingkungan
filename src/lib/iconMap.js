// src/lib/iconMap.js
import * as BsIcons from "react-icons/bs";
import { BsBuilding } from "react-icons/bs";

// fallback icon
const FallbackIcon = BsBuilding;

/**
 * Returns a React Icon Component based on string name.
 * Works with:
 *  - "BsBuilding" (exact)
 *  - "building"     → becomes BsBuilding
 *  - "Building"     → becomes BsBuilding
 *  - invalid names  → fallback icon
 */
export function getReactIcon(name) {
  try {
    if (!name || typeof name !== "string") return FallbackIcon;

    // Normalisasi basic
    let clean = name.replace(/[\s-]/g, ""); // hapus spasi & dash

    // Jika sudah valid di BsIcons
    if (BsIcons[clean]) return BsIcons[clean];

    // Jika tidak ada prefix, tambahkan "Bs"
    if (!clean.startsWith("Bs")) {
      clean = "Bs" + clean.charAt(0).toUpperCase() + clean.slice(1);
      if (BsIcons[clean]) return BsIcons[clean];
    }

    // fallback
    return FallbackIcon;
  } catch (err) {
    return FallbackIcon;
  }
}
