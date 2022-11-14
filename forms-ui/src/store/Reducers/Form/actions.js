import FormFieldGenerator from "@utils/FieldGenerator";
import {
  DROP_DRAGGED_ELEMENT,
  SET_DRAGGED_ELEMENT,
  SET_FORM_BUILDER,
  SET_FORM_LOADING,
  SET_RECENT_FORMS,
  UPDATE_FORM,
} from "./types";

import apiClient from "@services";

export const createForm =
  (form, callback = () => {}) =>
  async (dispatch) => {
    dispatch(setFormsLoading(true));
    try {
      const {
        data: { form: formResp },
      } = await apiClient.post("/api/forms", form);
      dispatch(setFormBuilder(null, formResp));
      callback(formResp);
    } catch (err) {
      console.log("FORM_CREATE_ERR", err);
    } finally {
      dispatch(setFormsLoading(false));
    }
  };

export const setFormBuilder =
  (id, formData = null) =>
  async (dispatch) => {
    dispatch(setFormsLoading(true));
    try {
      if (formData) {
        dispatch({
          payload: formData,
          type: SET_FORM_BUILDER,
        });
        return;
      } else {
        const { data } = await apiClient.get(`/api/forms/${id}`);
        dispatch({
          payload: data.form,
          type: SET_FORM_BUILDER,
        });
      }
    } catch (err) {
      console.log("FORM_BUILDER_SET_ERR", err);
    } finally {
      dispatch(setFormsLoading(false));
    }
  };

export const saveForm = () => async (dispatch, getState) => {
  try {
    dispatch(setFormsLoading(true));
    const { formContents, _id } = getState().Form.formBuilder;
    const { data } = await apiClient.put(`/api/forms/${_id}`, { formContents });
    console.log("UPDATE_FORM_DATA", data);
  } catch (err) {
    console.log("FORM_SAVE_ERR", err);
  } finally {
    dispatch(setFormsLoading(true));
  }
};

export const fetchRecentForms = () => async (dispatch) => {
  try {
    dispatch(setFormsLoading(true));
    const { data } = await apiClient.get("/api/forms/recent-forms");
    dispatch({
      payload: data,
      type: SET_RECENT_FORMS,
    });
  } catch (err) {
    console.log("RECENT_FORMS_API_ERR", err);
  } finally {
    dispatch(setFormsLoading(false));
  }
};

export const addTableRow = (id) => (dispatch, getState) => {
  const { formContents } = getState().Form.formBuilder;
  const updatedFormContents = formContents.map((content) => {
    if (content.type !== "table") {
      return content;
    }

    const numberOfCols = content.children[0].children.length || 1;

    if (content.id === id) {
      content.children = [
        ...content.children,
        FormFieldGenerator["row"]({ numberOfCols }),
      ];
    }
    return content;
  });

  dispatch({
    type: UPDATE_FORM,
    payload: updatedFormContents,
  });
};

export const removeTableRow = (id) => (dispatch, getState) => {
  const { formContents } = getState().Form.formBuilder;
  const updatedFormContents = formContents.map((content) => {
    if (content.type !== "table") {
      return content;
    }
    if (content.id === id) {
      content.children = [...content.children.slice(0, -1)];
    }
    return content;
  });

  dispatch({
    type: UPDATE_FORM,
    payload: updatedFormContents,
  });
};

export const addTableCol = (id) => (dispatch, getState) => {
  const { formContents } = getState().Form.formBuilder;
  const updatedFormContents = formContents.map((content) => {
    if (content.type !== "table") {
      return content;
    }
    if (content.id === id) {
      content.children = content.children.map((child) => ({
        ...child,
        children: [...child.children, FormFieldGenerator["column"]()],
      }));
    }
    return content;
  });

  dispatch({
    type: UPDATE_FORM,
    payload: updatedFormContents,
  });
};

export const removeTableCol = (id) => (dispatch, getState) => {
  const { formContents } = getState().Form.formBuilder;
  const updatedFormContents = formContents.map((content) => {
    if (content.type !== "table") {
      return content;
    }
    if (content.id === id) {
      content.children = content.children.map((child) => ({
        ...child,
        children: [...child.children.slice(0, -1)],
      }));
    }
    return content;
  });

  dispatch({
    type: UPDATE_FORM,
    payload: updatedFormContents,
  });
};

export const addTableContent =
  ({ table, row, col }) =>
  (dispatch, getState) => {};

export const addFormContent =
  (props = {}) =>
  (dispatch, getState) => {
    const { formContents, draggedElement } = getState().Form.formBuilder;
    const updatedFormContents = [
      ...formContents,
      FormFieldGenerator[draggedElement](props),
    ];

    dispatch({
      type: DROP_DRAGGED_ELEMENT,
      payload: updatedFormContents,
    });
  };

export const deleteFormContent = (id) => (dispatch, getState) => {};

export const reOrderFormContents = (payload) => ({
  type: UPDATE_FORM,
  payload,
});

export const setActiveDraggedElement = (payload) => ({
  payload,
  type: SET_DRAGGED_ELEMENT,
});

export const setFormsLoading = (payload) => ({
  type: SET_FORM_LOADING,
  payload,
});
