import { setActiveDraggedElement } from "@store/Reducers/Form/actions";
import { BiMove } from "react-icons/bi";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const WidgetContent = ({ title, type, ...props }) => {
  const dispatch = useDispatch();
  const onDrag = () => dispatch(setActiveDraggedElement(type));

  return (
    <div draggable="true" onDragStart={onDrag} {...props}>
      <div className="widget-container">
        <BiMove size={20} />
        <div className="widget-label">{title}</div>
      </div>
    </div>
  );
};

export const WidgetContainer = styled.div`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 0.5rem;
  background-color: #047aff;

  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  h3 {
    color: #fff;
    font-size: 1.5em;
    margin-left: 25px;
    font-family: "Poppins";
  }
`;

const Widget = styled(WidgetContent)`
  cursor: grab;
  color: #fff;
  padding: 8px 32px;
  border-radius: 20px;
  border: 1px dashed #fff;
  transition: 0.3s ease-in;
  margin: 10px 30px !important;

  &:hover {
    color: #047aff;
    border-color: #047aff;
    background-color: #fff;
  }

  .widget-container {
    height: 100%;
    margin: auto 7%;
    border-radius: 24px;
    align-items: center;
    display: flex;
    .widget-label {
      flex-grow: 1;
      height: 100%;
      display: flex;
      border-radius: 23px;
      align-items: center;
      justify-content: center;
      font-family: "Poppins";
    }
  }
`;

export default Widget;
