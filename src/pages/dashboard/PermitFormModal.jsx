// src/pages/dashboard/PermitFormModal.jsx
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useStore } from "../../hooks/useStore";
import { motion } from "framer-motion";

export default function PermitFormModal({
  show = false,
  onClose = () => {},
  initialData = null,
}) {
  const addPermit = useStore((s) => s.addPermit);
  const updatePermit = useStore((s) => s.updatePermit);

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

  const onSubmit = (data) => {
    if (initialData) {
      // Edit mode
      updatePermit(initialData.id, data);
    } else {
      // Create mode: always generate unique id
      const newPermit = {
        id: crypto.randomUUID(), // unique ID
        title: data.title,
        company: data.company,
        status: data.status,
        createdAt: Date.now(), // for sorting/time display
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
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Company</label>
            <input
              className="form-control"
              {...register("company", { required: true })}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Status</label>
            <select className="form-select" {...register("status")}>
              <option>Draft</option>
              <option>Submitted</option>
              <option>In Review</option>
              <option>Approved</option>
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
