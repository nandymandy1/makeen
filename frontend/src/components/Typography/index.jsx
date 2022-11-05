import styled from "styled-components";

export const Heading = ({
  type: Element = "h2",
  color = "#fff",
  children,
  style = {},
}) => {
  return <Element style={{ color, ...style }}>{children}</Element>;
};
