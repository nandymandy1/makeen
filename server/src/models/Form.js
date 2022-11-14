import { model, Schema } from "mongoose";

const FormSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    formContent: {
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
