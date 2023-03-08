import React from 'react';

interface DialogProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: any;
}

const Dialog: React.FC<DialogProps> = ({ title, isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className="dialog-overlay">
          <div className="dialog">
            <div className="dialog-header">
              <h2>{title}</h2>
              <button onClick={onClose}>Close</button>
            </div>
            <div className="dialog-content">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dialog;
