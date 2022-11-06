export const Heading = ({
  type: Element = "h2",
  color = "#fff",
  children,
  style = {},
}) => <Element style={{ color, ...style }}>{children}</Element>;
