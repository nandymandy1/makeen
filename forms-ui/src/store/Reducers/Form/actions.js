import FormFieldGenerator from "@utils/FieldGenerator";
import {
  DROP_DRAGGED_ELEMENT,
  SET_DRAGGED_ELEMENT,
  SET_FORMS_LIST,
  SET_FORM_BUILDER,
  SET_FORM_LOADING,
  SET_RECENT_FORMS,
  UPDATE_FORM,
  SET_CURRENT_FORM,
} from "./types";
import apiClient from "@services";
import { v4 } from "uuid";

export const createForm =
  (form, notificationCallback = () => {}, callback = () => {}) =>
  async (dispatch) => {
    dispatch(setFormsLoading(true));
    try {
      const {
        data: { form: formResp },
      } = await apiClient.post("/api/forms", form);
      dispatch(setFormBuilder(null, formResp));
      notificationCallback({
        type: "success",
        message: "Form created successfully.",
      });
      callback(formResp);
    } catch (err) {
      notificationCallback({
        type: "error",
        message: "Unable to create form. Please try again",
      });
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

export const saveForm =
  (callback = () => {}) =>
  async (dispatch, getState) => {
    try {
      dispatch(setFormsLoading(true));
      const { formContents, _id } = getState().Form.formBuilder;
      const { data } = await apiClient.put(`/api/forms/${_id}`, {
        formContents,
      });
      console.log("UPDATE_FORM_DATA", data);
      callback({
        type: "success",
        position: "right",
        message: "Form saved successfully.",
      });
    } catch (err) {
      console.log("FORM_SAVE_ERR", err);
      callback({
        type: "error",
        position: "right",
        message: "Unable to save form. Please Try again.",
      });
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

export const deleteForm =
  (id, callback = () => {}) =>
  async (dispatch, getState) => {
    try {
      dispatch(setFormsLoading(true));
      const { formsData } = getState().Form;
      await apiClient.delete(`/api/forms/${id}`);
      const updatedFormsState = {
        ...formsData,
        forms: formsData.forms.filter((form) => form._id !== id),
      };
      dispatch({
        type: SET_FORMS_LIST,
        payload: updatedFormsState,
      });
      callback({
        type: "success",
        position: "right",
        message: "Form deleted successfully.",
      });
    } catch (err) {
      callback({
        type: "error",
        position: "right",
        message: "Unable to delete form.",
      });
      console.log("DELETE_FORM_ERR", err);
    } finally {
      dispatch(setFormsLoading(false));
    }
  };

export const getMyFormsList = () => async (dispatch, getState) => {
  try {
    dispatch(setFormsLoading(true));
    const { paginator = { page: 1, limit: 5 } } = getState().Form.formsData;

    const { data } = await apiClient.get("/api/forms", {
      params: paginator,
    });

    dispatch({
      payload: data,
      type: SET_FORMS_LIST,
    });
  } catch (err) {
    console.log("FETCH_FORM_LIST_ERR", err);
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

export const handleWidgetAction = (action, id) => (dispatch, getState) => {
  let { formContents } = getState().Form.formBuilder;

  switch (action) {
    case "move":
      return;
    case "duplicate":
      const originalItem = formContents.find((content) => content.id === id);
      const originalItemIndex = formContents.findIndex(
        (content) => content.id === id
      );

      formContents.splice(originalItemIndex + 1, 0, {
        ...originalItem,
        id: v4(),
      });

      dispatch({
        type: UPDATE_FORM,
        payload: formContents,
      });

      return;
    case "delete":
      formContents = formContents.filter((content) => content.id !== id);

      dispatch({
        type: UPDATE_FORM,
        payload: formContents,
      });

      return;
    default:
      return;
  }
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
  payload,
  type: UPDATE_FORM,
});

export const setActiveFormForPreview =
  (id, { builder = false, callback = () => {} }) =>
  async (dispatch, getState) => {
    console.log("HELLO");
    dispatch(setFormsLoading(true));
    try {
      if (builder) {
        const { formBuilder } = getState().Form;
        delete formBuilder["draggedElement"];
        dispatch({
          payload: formBuilder,
          type: SET_CURRENT_FORM,
        });
        callback();
        return;
      }

      const { data } = await apiClient.get(`/api/forms/${id}`);
      dispatch({
        payload: data.form,
        type: SET_CURRENT_FORM,
      });
    } catch (err) {
      console.log("FETCH_FORMS_ERR", err);
    } finally {
      dispatch(setFormsLoading(false));
    }
  };

export const setActiveDraggedElement = (payload) => ({
  payload,
  type: SET_DRAGGED_ELEMENT,
});

export const setFormsLoading = (payload) => ({
  type: SET_FORM_LOADING,
  payload,
});
