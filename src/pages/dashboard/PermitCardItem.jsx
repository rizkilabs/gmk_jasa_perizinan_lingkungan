// src/pages/dashboard/PermitCardItem.jsx
import React from "react";
import { Edit, Trash2, Check, X } from "lucide-react";
import { motion } from "framer-motion";

/**
 * PermitCardItem - a single permit card for mobile view.
 *
 * Props:
 * - permit: object
 * - onEdit(permit)
 * - onDelete(id)
 * - onApprove(id)
 * - onReject(id)
 * - canEdit, canDelete, isAdmin: booleans
 */
export default function PermitCardItem({
  permit,
  onEdit,
  onDelete,
  onApprove,
  onReject,
  canEdit,
  canDelete,
  isAdmin,
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.25)" }}
      className="permit-card"
    >
      <div className="permit-card-header">
        <h5 className="permit-card-title">{permit.title}</h5>
        <span
          className={`permit-status permit-status-${
            permit.status?.toLowerCase() || "unknown"
          }`}
        >
          {permit.status}
        </span>
      </div>

      <div className="permit-card-body">
        <div className="permit-row">
          <small className="muted">Company</small>
          <div>{permit.company}</div>
        </div>

        <div className="permit-row">
          <small className="muted">Created</small>
          <div>{new Date(permit.createdAt).toLocaleString()}</div>
        </div>
      </div>

      <div className="permit-card-actions">
        {/* User actions */}
        {canEdit && (
          <button
            className="btn btn-sm btn-outline-primary me-2"
            onClick={() => onEdit(permit)}
          >
            <Edit size={14} /> Edit
          </button>
        )}

        {canDelete && (
          <button
            className="btn btn-sm btn-outline-danger me-2"
            onClick={() => {
              if (window.confirm("Hapus permit ini?")) onDelete(permit.id);
            }}
          >
            <Trash2 size={14} /> Delete
          </button>
        )}

        {/* Admin actions */}
        {isAdmin && (
          <>
            <button
              className="btn btn-sm btn-outline-success me-2"
              onClick={() => {
                if (window.confirm("Setujui permit ini?")) onApprove(permit.id);
              }}
            >
              <Check size={14} /> Approve
            </button>
            <button
              className="btn btn-sm btn-outline-warning"
              onClick={() => {
                if (window.confirm("Tolak permit ini?")) onReject(permit.id);
              }}
            >
              <X size={14} /> Reject
            </button>
          </>
        )}
      </div>
    </motion.div>
  );
}
