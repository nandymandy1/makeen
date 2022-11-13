import styled from "styled-components";
import classNames from "classnames";

const InputField = styled.input`
  width: 100%;
  margin: 0em !important;
  box-sizing: border-box;
  padding: 1em !important;
  transition: 300ms ease-in;
  border: 2px solid rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  &:focus,
  &:active {
    border: 3px solid rgba(4, 122, 255, 0.7);
    ~ .input-container {
      svg {
        fill: rgba(4, 122, 255, 0.7);
      }
    }
  }
`;

const Input = ({
  id,
  label = "",
  prefix = false,
  suffix = false,
  icon: Icon = null,
  ...restProps
}) => {
  return (
    <>
      {label && (
        <label className="field-label" htmlFor={id}>
          {label}
        </label>
      )}
      <div
        className={classNames(
          {
            "left-inner-addon": prefix,
            "right-inner-addon": suffix,
          },
          "input-container d-flex align-items-center"
        )}
      >
        {Icon}
        <InputField id={id} className="form-control" {...restProps} />
      </div>
    </>
  );
};

const FieldRenderer = {
  input: (props) => <Input {...props} />,
};

const Field = ({ control = "input", ...restProps }) =>
  FieldRenderer[control](restProps);

export default Field;
