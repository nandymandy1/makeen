import { BiMove } from "react-icons/bi";
import styled from "styled-components";

const WidgetContent = ({ title, ...props }) => {
  return (
    <div draggable="true" {...props}>
      <div className="widget-container">
        <BiMove color="#fff" size={20} />
        <div className="widget-label">{title}</div>
      </div>
    </div>
  );
};

export const WidgetContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  padding-top: 20px;
  padding-bottom: 1rem;
  background-color: #047aff;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Widget = styled(WidgetContent)`
  width: 65%;
  margin: 15px;
  height: 45px;
  cursor: grab;
  color: #fff;
  border-radius: 25px;
  border: 1px dashed #fff;
  .widget-container {
    width: 80%;
    height: 100%;
    display: flex;
    margin: auto 7%;
    border-radius: 24px;
    align-items: center;
    .widget-label {
      flex-grow: 1;
      height: 100%;
      display: flex;
      border-radius: 23px;
      align-items: center;
      justify-content: center;
    }
  }
`;

export default Widget;
