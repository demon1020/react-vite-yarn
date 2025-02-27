import React, { FC, useState } from "react";

import { ConfirmModalProps } from "./ConfirmModal.props";
import { LogOut, Settings } from "lucide-react";

const ConfirmModalView: FC<ConfirmModalProps> = ({
  title,
  message,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      {/* Button to open the modal */}
      <div
        className="flex items-start space-x-2 cursor-pointer py-2 text-red-400 hover:text-red-500 ml-4"
        onClick={handleOpen}
      >
        <LogOut className="h-5 w-5" /> <span>{title}</span>
      </div>

      {/* Confirmation Modal */}
      {isOpen && (
        <dialog open className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-gray-700">{title}</h3>
            <p className="py-4 text-gray-500">{message}</p>

            <div className="modal-action">
              {/* Cancel Button */}
              <button
                className="btn btn-secondary"
                onClick={() => {
                  onCancel(); // Call the cancel function
                  handleClose();
                }}
              >
                {cancelText}
              </button>

              {/* Confirm Button */}
              <button
                className="btn btn-error"
                onClick={() => {
                  onConfirm(); // Call the confirm function
                  handleClose();
                }}
              >
                {confirmText}
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default ConfirmModalView;
