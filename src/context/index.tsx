import { ReactNode, createContext, useState } from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal";

type Props = {
  children: ReactNode;
};
type contextProps = {
  showModal: boolean;
  closeModal: () => void;
  setModal: (element: JSX.Element) => void;
};
export const ModalContext = createContext<contextProps>({
  showModal: false,
  closeModal: () => {},
  setModal: (element: JSX.Element) => {},
});

export default function ModalContextNode({ children }: any) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [contentModal, setContentModal] = useState<JSX.Element>(<></>);

  const id =
    typeof window === "object" && document.getElementById("modal-root");
  const setModal = (element: JSX.Element) => {
    setShowModal(true);
    setContentModal(element);
  };
  const closeModal = () => {
    setShowModal(false);
    setContentModal(<></>);
  };
  return (
    <ModalContext.Provider
      value={{
        showModal,
        closeModal,
        setModal,
      }}
    >
      {children}
      {showModal &&
        id &&
        createPortal(<Modal onClose={closeModal}>{contentModal}</Modal>, id!)}
    </ModalContext.Provider>
  );
}
