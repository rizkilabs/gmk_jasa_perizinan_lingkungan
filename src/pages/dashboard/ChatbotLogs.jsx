// src/pages/dashboard/ChatbotLogs.jsx
import React, { useState, useMemo } from "react";
import useStore from "../../hooks/useStore";

/**
 * ChatbotLogs: simple searchable log viewer.
 */
export default function ChatbotLogs() {
  const logs = useStore((s) => s.chatbotLogs);
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState("all");

  const filtered = useMemo(() => {
    return logs.filter((l) => {
      if (filter !== "all" && l.role !== filter) return false;
      if (q && !l.text.toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });
  }, [logs, q, filter]);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Chatbot Logs</h4>
        <div className="d-flex gap-2">
          <input
            className="form-control form-control-sm"
            placeholder="Search logs..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <select
            className="form-select form-select-sm"
            style={{ width: 140 }}
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="user">User</option>
            <option value="bot">Bot</option>
          </select>
        </div>
      </div>

      <div style={{ maxHeight: "60vh", overflow: "auto" }}>
        {filtered.length === 0 && (
          <div className="text-center text-muted">No logs found.</div>
        )}
        <ul className="list-group">
          {filtered.map((l) => (
            <li key={l.id} className="list-group-item">
              <div className="d-flex justify-content-between">
                <div>
                  <strong style={{ textTransform: "capitalize" }}>
                    {l.role}
                  </strong>{" "}
                  —{" "}
                  <span className="text-muted">
                    {new Date(l.ts).toLocaleString()}
                  </span>
                </div>
              </div>
              <div style={{ marginTop: 6 }}>{l.text}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
