import { v4 } from "uuid";

export const UPDATE_FORM = "UPDATE_FORM";
export const SET_DRAGGED_ELEMENT = "SET_DRAGGED_ELEMENT";
export const DROP_DRAGGED_ELEMENT = "DROP_DRAGGED_ELEMENT";

export const dummyFormContent = [
  {
    id: v4(),
    type: "table",
    children: [
      {
        id: v4(),
        type: "tr",
        children: [
          {
            id: v4(),
            type: "td",
            children: {
              id: v4(),
              type: "file",
              control: "file",
              label: "Please Enter your name",
            },
          },
          {
            id: v4(),
            type: "td",
            children: {
              id: v4(),
              type: "input",
              control: "input",
              placeholder: "Your Name",
              label: "Please Enter your name",
            },
          },
          {
            id: v4(),
            type: "td",
            children: {
              id: v4(),
              type: "checkbox",
              control: "checkbox",
              label: "Please Enter your name",
              options: [
                { label: "Option One", value: "1" },
                { label: "Option Two", value: "2" },
                { label: "Option Three", value: "3" },
                { label: "Option Four", value: "4" },
              ],
            },
          },
        ],
      },
    ],
  },
  {
    id: v4(),
    type: "input",
    placeholder: "Your Name",
    label: "Please Enter your name",
  },
  {
    id: v4(),
    type: "checkbox",
    control: "checkbox",
    label: "Please Enter your name",
    options: [
      { label: "Option One", value: "1" },
      { label: "Option Two", value: "2" },
      { label: "Option Three", value: "3" },
      { label: "Option Four", value: "4" },
    ],
  },
  {
    id: v4(),
    type: "divider",
  },
  {
    id: v4(),
    type: "radio",
    control: "radio",
    label: "Please Enter your name",
    options: [
      { label: "Option One", value: "1" },
      { label: "Option Two", value: "2" },
      { label: "Option Three", value: "3" },
      { label: "Option Four", value: "4" },
    ],
  },
  {
    id: v4(),
    type: "divider",
  },
  {
    id: v4(),
    type: "text",
    content: "This is dummy paragraph text.",
  },
];
