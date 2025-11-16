// src/pages/dashboard/PermitList.jsx
import React, { useState } from "react";
import { useStore } from "../../hooks/useStore";
import PermitFormModal from "./PermitFormModal";
import { Edit, Trash2, Check, X } from "lucide-react";
import { motion } from "framer-motion";
import "../../styles/dark.css";

/**
 * PermitList shows permits and action buttons.
 * - Users can create/edit/delete their own permits.
 * - Admins can Approve/Reject (cannot edit/delete).
 */
export default function PermitList() {
  const permits = useStore((s) => s.permits);
  const deletePermit = useStore((s) => s.deletePermit);
  const approvePermit = useStore((s) => s.approvePermit);
  const rejectPermit = useStore((s) => s.rejectPermit);
  const user = useStore((s) => s.user);

  const [selected, setSelected] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openAdd = () => {
    setSelected(null);
    setModalOpen(true);
  };
  const openEdit = (item) => {
    setSelected(item);
    setModalOpen(true);
  };

  const canEdit = (p) => {
    // owner can edit; admin cannot
    return user && user.role !== "admin" && p.ownerId === user.id;
  };

  const canDelete = (p) => {
    return user && user.role !== "admin" && p.ownerId === user.id;
  };

  const isAdmin = user && user.role === "admin";

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Permintaan Izin</h4>
        <div>
          {!isAdmin && (
            <button className="btn btn-toska me-2" onClick={openAdd}>
              Tambah Izin
            </button>
          )}
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Title</th>
                <th>Company</th>
                <th>Status</th>
                <th>Created</th>
                <th style={{ width: 220 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {permits.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center">
                    No permits yet.
                  </td>
                </tr>
              )}
              {permits.map((p) => (
                <tr key={p.id}>
                  <td>{p.title}</td>
                  <td>{p.company}</td>
                  <td>{p.status}</td>
                  <td>{new Date(p.createdAt).toLocaleString()}</td>
                  <td>
                    {/* User actions: Edit / Delete (only if owner and not admin) */}
                    {canEdit(p) && (
                      <button
                        className="btn btn-sm btn-outline-primary me-2"
                        onClick={() => openEdit(p)}
                      >
                        <Edit size={14} /> Edit
                      </button>
                    )}

                    {canDelete(p) && (
                      <button
                        className="btn btn-sm btn-outline-danger me-2"
                        onClick={() => {
                          if (window.confirm("Hapus permit ini?"))
                            deletePermit(p.id);
                        }}
                      >
                        <Trash2 size={14} /> Delete
                      </button>
                    )}

                    {/* Admin actions: Approve / Reject */}
                    {isAdmin && (
                      <>
                        <button
                          className="btn btn-sm btn-outline-success me-2"
                          onClick={() => {
                            if (window.confirm("Setujui permit ini?"))
                              approvePermit(p.id);
                          }}
                        >
                          <Check size={14} /> Approve
                        </button>
                        <button
                          className="btn btn-sm btn-outline-warning"
                          onClick={() => {
                            if (window.confirm("Tolak permit ini?"))
                              rejectPermit(p.id);
                          }}
                        >
                          <X size={14} /> Reject
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      <PermitFormModal
        show={modalOpen}
        onClose={() => setModalOpen(false)}
        initialData={selected}
      />
    </div>
  );
}
