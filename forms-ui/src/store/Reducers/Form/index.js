import { v4 } from "uuid";
import {
  DROP_DRAGGED_ELEMENT,
  SET_DRAGGED_ELEMENT,
  SET_FORM_BUILDER,
  SET_FORM_LOADING,
  UPDATE_FORM,
} from "./types";

const initial_form_state = {
  currentForm: null,
  formBuilder: {
    formContents: [],
    draggedElement: null,
  },
  formsLoading: false,
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
    case SET_FORM_LOADING:
      return {
        ...state,
        formsLoading: payload,
      };
    case SET_FORM_BUILDER:
      return {
        ...state,
        formBuilder: {
          ...state.formBuilder,
          ...payload,
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
