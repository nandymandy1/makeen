import { IconButton } from "@components/Button";
import DragWrapper from "@utils/DragWrapper";
import { getDragProps } from "@utils/getDragProps";
import { useRef } from "react";
import { HiOutlineUpload } from "react-icons/hi";

const FileUploader = ({
  id,
  label = "",
  handleFile,
  multiple = false,
  draggable = "false",
  ...props
}) => {
  const hiddenFileInput = useRef(null);
  const [dragProps, restProps] = getDragProps(props);

  const handleClick = () => hiddenFileInput.current.click();

  const handleChange = ({ target: { files, name } }) => {
    if (multiple) {
      handleFile({ [name]: files });
    } else {
      const [file] = files;
      handleFile({ [name]: file });
    }
  };

  return (
    <DragWrapper draggable={draggable} {...dragProps}>
      <div style={{ marginTop: 10 }}>
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
    </DragWrapper>
  );
};

export default FileUploader;
