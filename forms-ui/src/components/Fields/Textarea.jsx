const Textarea = ({ label, id, name, onChange = () => {}, ...restProps }) => {
  return (
    <div style={{ marginTop: 10 }}>
      {label && (
        <label className="field-label" htmlFor={id}>
          {label}
        </label>
      )}
      <div style={{ marginTop: 10 }}>
        <textarea id={id} name={name} {...restProps}></textarea>
      </div>
    </div>
  );
};

export default Textarea;
