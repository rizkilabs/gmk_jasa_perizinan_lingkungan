// src/pages/dashboard/PermitFormModal.jsx
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useStore } from "../../hooks/useStore";
import { motion } from "framer-motion";

/**
 * Modal for creating/updating a permit.
 * - Only owners (non-admin) can create/update their permits.
 * - Admins should not be able to edit/create here (UI hides buttons).
 */
export default function PermitFormModal({
  show = false,
  onClose = () => {},
  initialData = null,
}) {
  const addPermit = useStore((s) => s.addPermit);
  const updatePermit = useStore((s) => s.updatePermit);
  const user = useStore((s) => s.user);

  const { register, handleSubmit, reset, setValue } = useForm({
    defaultValues: { title: "", company: "", status: "Draft" },
  });

  // Load existing data into the form
  useEffect(() => {
    if (initialData) {
      setValue("title", initialData.title || "");
      setValue("company", initialData.company || "");
      setValue("status", initialData.status || "Draft");
    } else {
      reset({ title: "", company: "", status: "Draft" });
    }
  }, [initialData, setValue, reset, show]);

  // If admin (or no user) somehow opens this modal, block submission
  const isAdmin = user && user.role === "admin";

  const onSubmit = (data) => {
    if (isAdmin) {
      // Safety guard: admin cannot create/update content
      alert("Admin tidak boleh membuat atau mengubah izin.");
      return;
    }

    if (initialData) {
      // Edit mode
      updatePermit(initialData.id, {
        title: data.title,
        company: data.company,
        status: data.status,
      });
    } else {
      // Create mode: always generate unique id and createdAt
      const newPermit = {
        id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
        title: data.title,
        company: data.company,
        status: data.status || "Draft",
        createdAt: Date.now(),
      };
      addPermit(newPermit);
    }
    onClose();
  };

  if (!show) return null;

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center estimator-overlay"
      style={{ zIndex: 2000 }}
    >
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        className="card p-4"
        style={{ width: 700, maxWidth: "95%" }}
      >
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="mb-0">
            {initialData ? "Edit Permit" : "Tambah Permit"}
          </h5>
          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={onClose}
          >
            Close
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              className="form-control"
              {...register("title", { required: true })}
              disabled={isAdmin}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Company</label>
            <input
              className="form-control"
              {...register("company", { required: true })}
              disabled={isAdmin}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Status</label>
            <select
              className="form-select"
              {...register("status")}
              disabled={isAdmin}
            >
              <option>Draft</option>
              <option>Submitted</option>
            </select>
          </div>

          <div className="d-flex justify-content-end gap-2">
            <button type="button" className="btn btn-light" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-toska">
              {initialData ? "Update" : "Create"}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
