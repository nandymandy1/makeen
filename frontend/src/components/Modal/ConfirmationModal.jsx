import MkButton from "@components/Button";
import { Heading } from "@components/Typography";
import { createContext, useContext, useRef, useState } from "react";
import Modal, { ModalContent, ModalFooter, ModalHeader } from "./index";

const ConfirmationModalContext = createContext();

export const useModalShow = () => {
  const [show, setShow] = useState(false);
  const handleOnHide = () => setShow(false);

  return {
    show,
    setShow,
    onHide: handleOnHide,
  };
};

const ConfirmationModalContextProvider = (props) => {
  const resolver = useRef();
  const [content, setContent] = useState();
  const { setShow, show, onHide } = useModalShow();

  const handleShow = (title, message) => {
    setContent({
      title,
      message,
    });

    setShow(true);
    return new Promise((resolve) => {
      resolver.current = resolve;
    });
  };

  const modalContext = {
    showConfirmation: handleShow,
  };

  const handleOk = () => {
    resolver.current && resolver.current(true);
    onHide();
  };

  const handleCancel = () => {
    resolver.current && resolver.current(false);
    onHide();
  };

  return (
    <ConfirmationModalContext.Provider value={modalContext}>
      {props.children}
      {content && (
        <Modal show={show}>
          <ModalHeader>
            <Heading
              type="h1"
              style={{ marginTop: -10, color: "#D8D8D8", fontSize: "2.5em" }}
            >
              {content.title}
            </Heading>
          </ModalHeader>
          <ModalContent>{content.message}</ModalContent>
          <ModalFooter>
            <MkButton rounded variant="light" onClick={handleCancel}>
              Cancel
            </MkButton>
            <MkButton rounded variant="primary" onClick={handleOk}>
              Ok
            </MkButton>
          </ModalFooter>
        </Modal>
      )}
    </ConfirmationModalContext.Provider>
  );
};

export const useConfirmationModalContext = () =>
  useContext(ConfirmationModalContext);

export default ConfirmationModalContextProvider;
