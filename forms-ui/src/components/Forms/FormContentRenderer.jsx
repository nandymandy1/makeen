import { FieldRenderer } from "@components/Fields";
import Text from "@components/Fields/Text";
import { BuilderTableRenderer } from "@components/Table";

const FormContentRenderer = {
  table: (props) => <BuilderTableRenderer table={props} />,
  text: (props) => <Text {...props} />,
  ...FieldRenderer,
};

const ContentRenderer = ({ type = "table", ...restProps }) =>
  FormContentRenderer[type]({ ...restProps, type });

export default ContentRenderer;
