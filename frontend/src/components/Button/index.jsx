import styled from "styled-components";
import Colors from "@constants/Theme";
import PropTypes from "prop-types";

const {
  black,
  darkColor,
  lightColor,
  darkLighten,
  lightDarken,
  primaryColor,
  primaryLighten,
  primaryLightOut,
} = Colors;

const ButtonContentWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = ({
  dashed,
  rounded,
  variant,
  children,
  pIcon: PIcon = null,
  sIcon: SIcon = null,
  ...props
}) => (
  <button {...props}>
    <ButtonContentWrapper>
      {PIcon && PIcon}
      <div style={{ flexGrow: 1 }}>{children}</div>
      {SIcon && SIcon}
    </ButtonContentWrapper>
  </button>
);

const ButtonVariants = {
  primary: () => ({
    color: lightColor,
    "border-color": primaryColor,
    "background-color": primaryColor,
    "&:hover": {
      "border-color": primaryLighten,
      "background-color": primaryLighten,
    },
  }),

  light: () => ({
    color: black,
    border: `1px solid ${darkColor}`,
    "background-color": lightColor,
    "&:hover": {
      "background-color": lightDarken,
    },
  }),

  secondary: () => ({
    color: black,
    border: `1px solid ${darkColor}`,
    "background-color": darkColor,
    "&:hover": {
      color: lightColor,
      "border-color": darkLighten,
      "background-color": darkLighten,
    },
  }),

  "light-outline": () => ({
    "background-color": lightColor,
    border: `1px solid ${darkColor}`,
    "&:hover": {
      "background-color": lightDarken,
    },
  }),

  "primary-outline": () => ({
    color: primaryColor,
    border: `1px solid ${primaryColor}`,
    "background-color": lightColor,
    "&:hover": {
      "background-color": primaryLightOut,
    },
  }),

  "secondary-outline": () => ({
    color: black,
    border: `1px solid ${darkColor}`,
    "background-color": lightColor,
  }),
};

const MkButton = styled(Button)`
  margin: 15px;
  border: none;
  padding: 10px;
  cursor: pointer;
  min-width: 170px;
  margin-bottom: 0px;
  transition: 0.2s ease-in;

  ${({ block = false }) => (block ? { "min-width": "97%" } : "")}
  border-radius: ${({ rounded = false }) => (rounded ? "30px" : "3px")};
  ${({ variant }) => ButtonVariants[variant] || ButtonVariants["primary"]}
  ${({ dashed = false }) => ({ "border-style": dashed ? "dashed" : "solid" })}
`;

MkButton.propTypes = {
  sIcon: PropTypes.node,
  pIcon: PropTypes.node,
  block: PropTypes.bool,
  dashed: PropTypes.bool,
  onClick: PropTypes.func,
  variant: PropTypes.string,
};

export default MkButton;
