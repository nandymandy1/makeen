import { PreviewTableRenderer } from "@components/Table";
import { deleteForm, getMyFormsList } from "@store/Reducers/Form/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { IconButtonRounded } from "@components/Button";
import { AiFillDelete, AiFillEye, AiFillEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDialogContext } from "@hooks/useModal";
import { useToast } from "@components/Toast";

const Forms = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showDialog } = useDialogContext();
  const { showToast } = useToast();

  const {
    formsData: { forms = [] },
  } = useSelector((state) => state.Form);

  useEffect(() => {
    dispatch(getMyFormsList({}));
  }, []);

  const deleteActionCallback = (props) => showToast(props);

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

  return (
    <div>
      <PreviewTableRenderer>
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
