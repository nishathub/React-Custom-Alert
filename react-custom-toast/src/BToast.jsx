import React, { useContext } from "react";
import { ToastContext } from "./ToastProvider";

const BToast = () => {
  const { isToastActive, toastText } = useContext(ToastContext);

  return (
    <div className={`${isToastActive ? 'scale-100 opacity-100' : 'scale-0 opacity-0'} duration-500 fixed z-50 inset-0 flex items-center justify-center`}>
      <div className="bg-red-900 text-white w-72 m-4 p-4 text-center rounded-lg break-words">
        <p>{toastText}</p>
      </div>
    </div>
  );
};

export default BToast;
