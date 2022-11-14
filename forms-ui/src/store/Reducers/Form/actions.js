import FormFieldGenerator from "@utils/FieldGenerator";
import {
  SET_DRAGGED_ELEMENT,
  UPDATE_FORM,
  DROP_DRAGGED_ELEMENT,
} from "./types";

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
