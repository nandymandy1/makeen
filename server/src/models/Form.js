import { model, Schema } from "mongoose";
import paginate from "mongoose-paginate-v2";

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

FormSchema.plugin(paginate);

const Form = model("forms", FormSchema);

export default Form;
