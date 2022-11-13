import styled from "styled-components";
import classNames from "classnames";

export const InputField = styled.input`
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

export const IconInput = ({
  id,
  label = "",
  prefix = false,
  suffix = false,
  icon: Icon = null,
  ...restProps
}) => {
  return (
    <div>
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
    </div>
  );
};

export const Input = ({ id, draggable = false, label = "", ...restProps }) => {
  return (
    <div style={{ marginTop: 10 }} draggable={draggable}>
      {label && (
        <label className="field-label" htmlFor={id}>
          {label}
        </label>
      )}
      <div style={{ marginTop: 10 }}>
        <InputField id={id} className="form-control" {...restProps} />
      </div>
    </div>
  );
};
