import IconButton from "@components/Button/IconButton";
import Modal, { ModalContent, ModalHeader } from "@components/Modal";
import { Heading } from "@components/Typography";
import { MdOutlineClose } from "react-icons/md";

const PreviewForm = ({ isOpen, toggleModal, form = [] }) => (
  <Modal show={isOpen}>
    <ModalHeader>
      <Heading
        type="h1"
        style={{ marginTop: -10, color: "#D8D8D8", fontSize: "2.5em" }}
      >
        Preview
      </Heading>
      <IconButton size={30} rounded={false} onClick={toggleModal}>
        <MdOutlineClose color="#000" />
      </IconButton>
    </ModalHeader>
    <ModalContent>
      <pre>{JSON.stringify(form, null, 2)}</pre>
    </ModalContent>
  </Modal>
);

export default PreviewForm;
