import Checkbox from "./Checkbox";
import FileUploader from "./FileUploader";
import { IconInput, Input } from "./Input";
import Radio from "./Radio";
import Textarea from "./Textarea";

export const FieldRenderer = {
  radio: (props) => <Radio {...props} />,
  input: (props) => <Input {...props} />,
  checkbox: (props) => <Checkbox {...props} />,
  file: (props) => <FileUploader {...props} />,
  textarea: (props) => <Textarea {...props} />,
  iconInput: (props) => <IconInput {...props} />,
};

const Field = ({ control = "input", ...restProps }) =>
  FieldRenderer[control](restProps);

export default Field;
