// src/hooks/usePriceEstimator.js
import { priceRules } from "../lib/priceRules";

/**
 * input: { area, location, type, urgency, docsStatus }
 * returns: { breakdown, total, recommendations, timeline }
 */
export default function usePriceEstimator() {
  function calculate({
    area = 0,
    location = "jawa",
    type = "uklUpl",
    urgency = "normal",
    docsStatus = "none",
  }) {
    const base = priceRules.baseCost[type] ?? priceRules.baseCost.uklUpl;
    const locMul = priceRules.locationMultiplier[location] ?? 1.1;
    const risk = priceRules.riskFactor(Number(area) || 0);
    const urgencyFee = priceRules.urgencyFee[urgency] ?? 0;
    const docsFee = priceRules.docsMissingFee[docsStatus] ?? 0;

    // subtotal before consultant
    const subtotal = Math.round(base * locMul * risk + urgencyFee + docsFee);

    // small variability factor (simulate additional field work / survey)
    const variability = Math.round(subtotal * 0.05); // 5% buffer

    const total = subtotal + variability;

    // timeline estimate (days)
    const baseDays = type === "amdal" ? 45 : type === "uklUpl" ? 21 : 14;
    let timeline = baseDays;
    if (urgency === "cepat") timeline = Math.max(7, Math.round(baseDays * 0.7));
    if (urgency === "express")
      timeline = Math.max(3, Math.round(baseDays * 0.4));
    if (docsStatus === "major") timeline += 10;

    // scoring for recommendation
    const score = Math.round(
      (locMul +
        risk +
        (docsStatus === "none" ? 1 : docsStatus === "minor" ? 2 : 3)) *
        5
    );

    // pick package
    let packageName = "Basic";
    if (score >= 20 && score < 30) packageName = "Pro";
    if (score >= 30) packageName = "Expert";

    // recommendations
    const recommendations = [];
    if (score >= 30) {
      recommendations.push({
        key: "onsite_survey",
        title: "On-site Survey",
        price: 800000,
        note: "Direkomendasikan untuk area besar/risiko tinggi",
      });
      recommendations.push({
        key: "project_manager",
        title: "Manajemen Proyek (opsional)",
        price: Math.round(subtotal * 0.12),
      });
    } else if (score >= 20) {
      recommendations.push({
        key: "document_assist",
        title: "Bantuan Persiapan Dokumen",
        price: 450000,
      });
    } else {
      recommendations.push({
        key: "basic_consult",
        title: "Konsultasi Awal",
        price: 150000,
      });
    }

    // upsell consultant percent
    const consultantEstimate = Math.round(
      subtotal * priceRules.consultantFeePercent
    );

    return {
      breakdown: {
        base,
        locMul,
        risk,
        urgencyFee,
        docsFee,
        variability,
        subtotal,
      },
      total,
      timeline, // in days
      packageName,
      score,
      recommendations,
      consultantEstimate,
    };
  }

  return { calculate };
}
