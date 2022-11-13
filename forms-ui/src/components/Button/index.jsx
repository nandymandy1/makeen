import styled, { keyframes } from "styled-components";

const StyledButton = styled.button`
  border: 2px solid #047aff;
  background-color: ${(props) =>
    props.variant === "outline" ? "#FFF" : "#047aff"};
  color: ${(props) => (props.variant === "outline" ? "#047aff" : "#FFF")};
  padding: 8px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s all ease-out;
  ${(props) => (props.pill === "pill" ? { borderRadius: 20 } : {})}
  &:hover {
    background-color: ${(props) =>
      props.variant !== "outline" ? "#FFF" : "#047aff"};
    color: ${(props) => (props.variant !== "outline" ? "#047aff" : "#FFF")};
  }
`;

export const FancyButton = styled(StyledButton)`
  border: none;
  padding: 10px 32px;
  background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
`;

export const SubmitButton = styled(StyledButton).attrs({
  type: "submit",
})`
  box-shadow: 0 9px #999;
  &:active {
    background-color: ${(props) =>
      props.variant !== "outline" ? "#FFF" : "#047aff"};
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const AnimatedLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${rotate} infinite 20s linear;
`;

export const DarkButton = styled(StyledButton)`
  border: 2px solid ${(props) => props.theme.dark.primary};
  background-color: ${(props) => props.theme.dark.primary};
  color: ${(props) => props.theme.dark.text};
`;

export const CustomButton = styled(StyledButton)`
  color: ${(props) => props.text};
  border: 2px solid ${(props) => props.border};
  background-color: ${(props) => props.primary};

  &:hover {
    background-color: ${(props) => props.border};
    color: ${(props) => props.primary};
  }
`;

export const ButtonIconContent = styled(StyledButton)`
  min-width: 150px;
  padding: 8px 15px;
  align-items: center;
  display: inline-flex;
  justify-content: space-between;
`;

export const IconButton = ({
  children,
  prefix = false,
  suffix = false,
  icon: Icon = null,
  ...restProps
}) => (
  <ButtonIconContent {...restProps}>
    {prefix && Icon}
    <div style={{ flexGrow: 1 }}>{children}</div>
    {suffix && Icon}
  </ButtonIconContent>
);

export const IconButtonRounded = styled.button`
  width: 30px;
  height: 30px;
  cursor: pointer;
  border-radius: 5px;
  align-items: center;
  display: inline-flex;
  justify-content: center;
  transition: 0.2s ease-in;
  border: 1px solid rgba(0, 0, 0, 0.05);
  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

export default StyledButton;
