import { IconButton } from "@components/Button";
import { useRef } from "react";
import { HiOutlineUpload } from "react-icons/hi";

const FileUploader = ({
  id,
  label = "",
  handleFile,
  multiple = false,
  draggable = false,
  ...restProps
}) => {
  const hiddenFileInput = useRef(null);

  const handleChange = ({ target: { files, name } }) => {
    if (multiple) {
      handleFile({ [name]: files });
    } else {
      const [file] = files;
      handleFile({ [name]: file });
    }
  };

  const handleClick = () => hiddenFileInput.current.click();

  return (
    <div style={{ marginTop: 10 }} draggable={draggable}>
      {label && (
        <label onClick={handleClick} className="field-label" htmlFor={id}>
          {label}
        </label>
      )}
      <div style={{ marginTop: 10 }}>
        <IconButton
          prefix
          pill="pill"
          text="#000"
          primary="#fff"
          border="#2E4053"
          borderType="dashed"
          onClick={handleClick}
          icon={<HiOutlineUpload />}
        >
          Submit File
        </IconButton>
        <input
          id={id}
          type="file"
          multiple={multiple}
          ref={hiddenFileInput}
          onChange={handleChange}
          style={{ display: "none" }}
          {...restProps}
        />
      </div>
    </div>
  );
};

export default FileUploader;
