import { BiMove } from "react-icons/bi";
import styled from "styled-components";
import PropTypes from "prop-types";

const WidgetContent = ({ title, onDrag = () => {}, ...props }) => {
  return (
    <div
      draggable="true"
      onDragEnd={(e) => onDrag({ e, props, eventType: "END" })}
      onDragStart={(e) => onDrag({ e, props, eventType: "START" })}
      {...props}
    >
      <div className="widget-container">
        <BiMove size={20} />
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
  transition: 0.3s ease-in;
  &:hover {
    color: #047aff;
    background-color: #fff;
    border-color: #047aff;
  }
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

Widget.propTypes = {
  title: PropTypes.string.isRequired,
  onDrag: PropTypes.func.isRequired,
};

export default Widget;
