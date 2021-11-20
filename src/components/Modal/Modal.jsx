import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Style from './Modal.module.css';
import ReactModal from "react-modal";

export default function Modal({ onClose, children }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <ReactModal
      isOpen={onClose}
      onRequestClose={onClose}
      className={Style.Modal}
      overlayClassName={Style.Overlay}
      ariaHideApp={false}
    >
      <div  onClick={handleBackdropClick}>
        <div >{children}</div>
      </div>
    </ReactModal>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};