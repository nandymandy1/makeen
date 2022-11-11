const Input = ({ label = "", id, type = "text", ...restProps }) => (
  <div className="form-group">
    {label && <label htmlFor={id}>{label}</label>}
    <input className="input" id={id} type={type} {...restProps} />
  </div>
);

export default Input;
