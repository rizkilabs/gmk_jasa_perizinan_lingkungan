import { useState } from "react";

// Simple toast hook for global UI feedback
export const useToast = () => {
  const [toast, setToast] = useState({ show: false, message: "" });

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => {
      setToast({ show: false, message: "" });
    }, 2500);
  };

  return { toast, showToast };
};
