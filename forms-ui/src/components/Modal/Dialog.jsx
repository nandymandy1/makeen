import StyledButton, { CustomButton } from "@components/Button";
import { useModalShow } from "@hooks/useModal";
import { createContext, useRef, useState } from "react";
import Modal from "./Modal";

export const DialogContext = createContext();

const DialogProvider = (props) => {
  const resolver = useRef();

  const [content, setContent] = useState({
    body: null,
    title: null,
    okayButtonText: null,
    cancelButtonText: null,
  });

  const { setShow, show, onHide } = useModalShow();

  const handleShow = ({
    body = <></>,
    title = <></>,
    okayButtonText = "Okay",
    cancelButtonText = "Cancel",
  }) => {
    setContent({
      body,
      title,
      okayButtonText,
      cancelButtonText,
    });

    setShow(true);

    return new Promise(function (resolve) {
      resolver.current = resolve;
    });
  };

  const modalContext = {
    showDialog: handleShow,
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
    <DialogContext.Provider value={modalContext}>
      {props.children}
      {show && (
        <Modal
          active={show}
          title={content.title}
          hideModal={handleCancel}
          footer={
            <>
              <StyledButton pill="pill" onClick={handleOk}>
                {content.okayButtonText}
              </StyledButton>
              <CustomButton
                pill="pill"
                text="#047aff"
                border="#047aff"
                primary="#F7F9F9"
                onClick={handleCancel}
              >
                {content.cancelButtonText}
              </CustomButton>
            </>
          }
        >
          {content.body}
        </Modal>
      )}
    </DialogContext.Provider>
  );
};

export default DialogProvider;
