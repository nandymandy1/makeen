import { CustomButton, IconButtonRounded } from "@components/Button";
import { PreviewTableRenderer } from "@components/Table";
import { useToast } from "@components/Toast";
import { useDialogContext } from "@hooks/useModal";
import { deleteForm, getMyFormsList } from "@store/Reducers/Form/actions";
import { useEffect, useRef } from "react";
import { AiFillDelete, AiFillEdit, AiFillEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddForm from "@components/Forms/AddForm";
import { createForm } from "@store/Reducers/Form/actions";

const Forms = () => {
  const formRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showToast } = useToast();
  const { showDialog } = useDialogContext();

  const {
    formsData: { forms = [] },
  } = useSelector((state) => state.Form);

  const successCallback = (props) => showToast(props);
  const deleteActionCallback = (props) => showToast(props);
  const goToBuilder = ({ _id }) => navigate(`/forms/builder/${_id}`);

  const clickHandler = async (type, id) => {
    if (["preview", "builder"].includes(type)) {
      navigate(`/forms/${type}/${id}`);
    } else {
      const isConfirmed = await showDialog({
        title: "Delete Form",
        okayButtonText: "Delete",
        body: "Are your sure to delete this form?",
      });
      if (!isConfirmed) {
        return;
      } else {
        dispatch(deleteForm(id, deleteActionCallback));
      }
    }
  };

  const addForm = async () => {
    const isConfirmed = await showDialog({
      title: <h4>Add New Form</h4>,
      okayButtonText: "Create Form",
      body: <AddForm ref={formRef} />,
    });

    if (!isConfirmed) {
      return;
    }

    let data = formRef.current.getFormValues();
    dispatch(createForm(data, successCallback, goToBuilder));
  };

  useEffect(() => {
    dispatch(getMyFormsList({}));
  }, []);

  return (
    <div>
      <CustomButton
        text="#047aff"
        onClick={addForm}
        border="#047aff"
        primary="#F7F9F9"
      >
        New Form
      </CustomButton>

      <PreviewTableRenderer className="mt-3">
        <tr>
          <th>Sno</th>
          <th>Form Name</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
        {forms.map((form, i) => (
          <tr key={form._id}>
            <td>{i + 1}</td>
            <td>{form.title}</td>
            <td>{form.description}</td>
            <td>
              <div className="d-flex justify-content-center align-items-center">
                <IconButtonRounded
                  onClick={() => clickHandler("preview", form._id)}
                >
                  <AiFillEye size={18} color="#000" />
                </IconButtonRounded>
                <IconButtonRounded
                  onClick={() => clickHandler("builder", form._id)}
                >
                  <AiFillEdit size={18} color="#047aff" />
                </IconButtonRounded>
                <IconButtonRounded
                  onClick={() => clickHandler("delete", form._id)}
                >
                  <AiFillDelete size={18} color="#E74C3C" />
                </IconButtonRounded>
              </div>
            </td>
          </tr>
        ))}
      </PreviewTableRenderer>
    </div>
  );
};

export default Forms;
