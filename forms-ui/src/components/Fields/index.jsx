import DragWrapper from "@utils/DragWrapper";
import Checkbox from "./Checkbox";
import Divider from "./Divider";
import FileUploader from "./FileUploader";
import { IconInput, Input } from "./Input";
import Radio from "./Radio";
import Textarea from "./Textarea";

export const FieldRenderer = {
  radio: (props) => <Radio {...props} />,
  input: (props) => <Input {...props} />,
  divider: (props) => <Divider {...props} />,
  checkbox: (props) => <Checkbox {...props} />,
  file: (props) => <FileUploader {...props} />,
  textarea: (props) => <Textarea {...props} />,
  iconInput: (props) => <IconInput {...props} />,
};

const Field = ({ control = "input", draggable = "false", ...restProps }) =>
  FieldRenderer[control](restProps);

export default Field;
