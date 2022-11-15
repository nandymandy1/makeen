export const getDragProps = ({
  onDragEnd = () => {},
  onDragOver = () => {},
  onDragStart = () => {},
  onDragEnter = () => {},
  handleWidgetActionClick = () => {},
  ...restProps
}) => [
  {
    onDragEnd,
    onDragOver,
    onDragStart,
    onDragEnter,
    handleWidgetActionClick,
  },
  restProps,
];
