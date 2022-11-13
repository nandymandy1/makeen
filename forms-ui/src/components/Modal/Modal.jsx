import { IconButtonRounded } from "@components/Button";
import { AiOutlineClose } from "react-icons/ai";
import {
  ModalBlock,
  ModalBody,
  ModalClose,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
} from "./styles";

const Modal = ({
  children,
  title = null,
  footer = null,
  active = false,
  hideModal = () => {},
}) => (
  <>
    {active && (
      <ModalBlock>
        <ModalOverlay onClick={() => hideModal()} />
        <ModalContainer>
          <ModalHeader>
            <ModalTitle>{title}</ModalTitle>
            <ModalClose>
              <IconButtonRounded onClick={() => hideModal()}>
                <AiOutlineClose />
              </IconButtonRounded>
            </ModalClose>
          </ModalHeader>
          <ModalBody>{children}</ModalBody>
          <ModalFooter>{footer}</ModalFooter>
        </ModalContainer>
      </ModalBlock>
    )}
  </>
);

export default Modal;
