"use client";

import React, { useState, useEffect } from "react";
import { useFormStatus } from "react-dom";

interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}

const ModalComponent = ({
  isOpen: propIsOpen,
  onClose: propOnClose,
  children,
}: ModalProps) => {
  const [isOpen, setIsOpen] = useState(propIsOpen || false);
  const onClose = propOnClose || (() => setIsOpen(false));
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    setIsOpen(propIsOpen || false);
  }, [propIsOpen]);

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300); // Assuming a 300ms animation
  };

  if (!isOpen && !isClosing) {
    return null;
  }

  return (
    <div
      className={`fixed left-0 top-0 flex h-full w-full items-center justify-center transition-opacity ${
        !isClosing ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className="fixed left-0 top-0 h-full w-full cursor-pointer bg-black bg-opacity-50"
        onClick={closeModal}
      />
      <div className="relative z-10 rounded-[20px]  bg-white px-[30px] pb-[75px] pt-[52px]">
        <span
          className="absolute right-4 top-3 cursor-pointer text-3xl"
          onClick={closeModal}
        >
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

const Modal = ({
  children,
  OpenComponent,
  action,
}: {
  children: React.ReactNode;
  OpenComponent: React.ReactElement<{ onClick: () => void }>;
  action: (formData: FormData) => Promise<any>;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-center">
      {React.cloneElement(OpenComponent, { onClick: toggleModal })}

      <ModalComponent isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {children}
      </ModalComponent>
    </div>
  );
};

export default Modal;
