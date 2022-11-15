import styled from "styled-components";
import { BiMove, BiPencil, BiTrash, BiDuplicate } from "react-icons/bi";

const Dragger = styled.div`
  cursor: move;
  margin: 5px 5px;
  padding: 15px 5px;
  &[draggable="false"] {
    cursor: unset;
  }
`;

const WidgetActions = styled.div`
  width: 130px;
  height: 25px;
  padding: 5px;
  border-radius: 20px;
  align-self: flex-end;
  background: #f6f6f5;
  border: 1px solid #d5d5d4;
  display: inline-flex;
  align-items: center;
  justify-content: space-evenly;
  svg {
    &:hover {
      fill: #047aff;
      cursor: pointer;
    }
  }
`;

const ActionsButtons = [
  { icon: BiMove, action: "move" },
  { icon: BiDuplicate, action: "duplicate" },
  { icon: BiPencil, action: "edit" },
  { icon: BiTrash, action: "delete" },
];

const DragWrapper = ({
  children,
  preview = true,
  handleWidgetActionClick = () => {},
  ...restProps
}) => {
  const handleAction = (action) => handleWidgetActionClick(action);

  return (
    <div className="d-flex flex-column">
      {!preview && (
        <WidgetActions>
          {ActionsButtons.map(({ icon: Icon, action }) => (
            <Icon
              size={18}
              key={action}
              color="#000"
              onClick={() => handleAction(action)}
            />
          ))}
        </WidgetActions>
      )}
      <Dragger {...restProps}>{children}</Dragger>
    </div>
  );
};

export default DragWrapper;
