// src/pages/dashboard/PermitList.jsx
import React, { useState, useMemo } from "react";
import { useStore } from "../../hooks/useStore";
import PermitFormModal from "./PermitFormModal";
import { Edit, Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import "../../styles/dark.css";

/**
 * PermitList shows a bootstrap table of permits and action buttons.
 */
export default function PermitList() {
  const permits = useStore((s) => s.permits);
  const deletePermit = useStore((s) => s.deletePermit);
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

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Permintaan Izin</h4>
        <div>
          <button className="btn btn-toska me-2" onClick={openAdd}>
            Tambah Izin
          </button>
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
                <th style={{ width: 150 }}>Actions</th>
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
                    <button
                      className="btn btn-sm btn-outline-primary me-2"
                      onClick={() => openEdit(p)}
                    >
                      <Edit size={14} /> Edit
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => {
                        if (window.confirm("Hapus permit ini?"))
                          deletePermit(p.id);
                      }}
                    >
                      <Trash2 size={14} /> Delete
                    </button>
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
