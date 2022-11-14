export const getDragProps = ({
  onDragEnd = () => {},
  onDragOver = () => {},
  onDragStart = () => {},
  onDragEnter = () => {},
  ...restProps
}) => [
  {
    onDragEnd,
    onDragOver,
    onDragStart,
    onDragEnter,
  },
  restProps,
];
