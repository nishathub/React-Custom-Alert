import React, { createContext, useState } from "react";

export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [isToastActive, setToastActive] = useState(false);
  const [toastText, setToastText] = useState("");

  const customAlert = (alertText, duration = 1500) => {
    setToastText(alertText);
    setToastActive(true);
    setTimeout(() => {
      setToastActive(false);
    }, duration);
  };

  return (
    <ToastContext.Provider value={{ customAlert, isToastActive, toastText }}>
      {children}
    </ToastContext.Provider>
  );
};
