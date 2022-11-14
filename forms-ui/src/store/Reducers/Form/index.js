import {
  DROP_DRAGGED_ELEMENT,
  SET_DRAGGED_ELEMENT,
  SET_FORM_BUILDER,
  SET_FORM_LOADING,
  SET_RECENT_FORMS,
  UPDATE_FORM,
} from "./types";

const initial_form_state = {
  currentForm: null,
  recentForms: [],
  formsLoading: false,
  formBuilder: {
    formContents: [],
    draggedElement: null,
  },
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
    case SET_RECENT_FORMS:
      return {
        ...state,
        recentForms: payload,
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
