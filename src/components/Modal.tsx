import React, { ReactNode } from 'react';
import {FaTimes} from 'react-icons/fa'

interface ModalProps {
  onClose: Function;
  children: ReactNode[] | ReactNode
}
const Modal = ({onClose, children} : ModalProps) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="modal-close" onClick={() => onClose()}>
          <FaTimes/>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
