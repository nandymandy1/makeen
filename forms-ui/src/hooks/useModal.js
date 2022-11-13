import { DialogContext } from "@components/Modal/Dialog";
import { useContext, useState } from "react";

const useModalShow = () => {
  const [show, setShow] = useState(false);
  const handleOnHide = () => setShow(false);

  return {
    show,
    setShow,
    onHide: handleOnHide,
  };
};

const useDialogContext = () => useContext(DialogContext);

export { useModalShow, useDialogContext };
