// src/lib/priceRules.js
export const priceRules = {
  baseCost: {
    uklUpl: 3500000,
    amdal: 7500000,
    sppl: 1500000,
    ijinLingkunganLain: 2500000,
  },
  locationMultiplier: {
    jabodetabek: 1.25,
    jawa: 1.12,
    sumatera: 1.15,
    kalimantan: 1.25,
    sulawesi: 1.18,
    baliNtt: 1.2,
    luarPulau: 1.3,
  },
  riskFactor: (area) => {
    // area in m2
    if (area <= 500) return 1;
    if (area <= 2000) return 1.18;
    if (area <= 5000) return 1.35;
    return 1.6;
  },
  urgencyFee: {
    normal: 0,
    cepat: 350000,
    express: 700000,
  },
  docsMissingFee: {
    none: 0,
    minor: 500000,
    major: 1500000,
  },
  consultantFeePercent: 0.08, // 8% of subtotal for consultancy upsell recommendation
};
