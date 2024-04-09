"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const modalRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current.showModal();
    }
  }, []);

  const closeModal = () => {
    router.back();
  };

  return createPortal(
    <dialog
      onClose={closeModal}
      ref={modalRef}
      className="shadow-lime-800 shadow-md border border-lime-600 flex flex-col p-2 rounded-md h-3/4 w-3/4 bg-dark"
    >
      <span onClick={closeModal} className="flex justify-end cursor-pointer">
        <Image
          src="/assets/icons/close.png"
          alt="close"
          width={30}
          height={30}
          className="absolute"
        />
      </span>
      {children}
    </dialog>,
    document.getElementById("modal-root-container")
  );
};

export default Modal;
