import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import '../styles/Modal.css';

const Modal = ({
  isOpen,
  onClose,
  title,
  icon,
  children,
  size = 'md',
  color,
  showCloseButton = true,
  backdropClosable = true,
}) => {
  // Close modal saat escape key ditekan
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (backdropClosable && e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <>
      {/* Backdrop */}
      <div className="modal-backdrop" onClick={handleBackdropClick} />

      {/* Modal */}
      <div className={`modal modal-${size}`} role="dialog" aria-modal="true" aria-labelledby="modal-title">
        {/* Header */}
        <div className="modal-header">
          <div className="modal-header-title">
            {icon && (
              <span className="modal-header-icon" style={{backgroundColor: color}}>
                {typeof icon === 'string' ? (
                  <img src={icon} alt="Modal icon" />
                ) : (
                  icon
                )}
              </span>
            )}
            <h2 className="modal-title" id="modal-title">{title}</h2>
          </div>
          {showCloseButton && (
            <button
              className="modal-close-btn"
              onClick={onClose}
              aria-label="Close modal"
            >
              ✕
            </button>
          )}
        </div>

        {/* Body */}
        <div className="modal-body">{children}</div>
      </div>
    </>,
    document.body
  );
};

export default Modal;
