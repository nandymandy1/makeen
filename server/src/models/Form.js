import { model, Schema } from "mongoose";

const FormSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    formContents: {
      type: Array,
      default: [],
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  },
  {
    timestamps: true,
  }
);

const Form = model("forms", FormSchema);

export default Form;
