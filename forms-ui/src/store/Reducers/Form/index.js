import { v4 } from "uuid";
import {
  UPDATE_FORM,
  SET_DRAGGED_ELEMENT,
  DROP_DRAGGED_ELEMENT,
  dummyFormContent,
} from "./types";

const initial_form_state = {
  currentForm: null,
  formBuilder: {
    draggedElement: null,
    formContents: [...dummyFormContent],
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
    case UPDATE_FORM:
      return {
        ...state,
        formBuilder: {
          ...state.formBuilder,
          formContents: payload,
        },
      };
    case SET_DRAGGED_ELEMENT:
      return {
        ...state,
        formBuilder: {
          ...state.formBuilder,
          draggedElement: payload,
        },
      };
    case DROP_DRAGGED_ELEMENT:
      return {
        ...state,
        formBuilder: {
          ...state.formBuilder,
          formContents: payload,
          draggedElement: null,
        },
      };
    default:
      return state;
  }
};

export default FormReducer;
