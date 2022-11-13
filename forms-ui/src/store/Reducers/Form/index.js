import { v4 } from "uuid";

const initial_form_state = {
  currentForm: null,
  formBuilder: {
    id: null,
    currentDraggedElement: null,
  },
  forms: [
    { title: "Form One", id: v4() },
    { title: "Form Two", id: v4() },
    { title: "Form Three", id: v4() },
    { title: "Form Four", id: v4() },
  ],
};

const FormReducer = (state = initial_form_state, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

export default FormReducer;
