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
  children,
  pIcon: PIcon = null,
  sIcon: SIcon = null,
  ...props
}) => {
  delete props["dashed"];
  delete props["rounded"];
  delete props["variant"];

  return (
    <button {...props}>
      <ButtonContentWrapper>
        {PIcon && PIcon}
        <div style={{ flexGrow: 1 }}>{children}</div>
        {SIcon && SIcon}
      </ButtonContentWrapper>
    </button>
  );
};

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
  margin-bottom: 0px;
  border: none;
  padding: 10px;
  cursor: pointer;
  min-width: 170px;
  transition: 0.2s ease-in;

  ${({ block = false }) => (block ? { "min-width": "97%" } : "")}
  ${({ variant }) => ButtonVariants[variant] || ButtonVariants["primary"]}
  border-radius: ${({ rounded = false }) => (rounded ? "30px" : "3px")};
  ${({ dashed = false }) => ({ "border-style": dashed ? "dashed" : "solid" })}
`;

MkButton.propTypes = {
  block: PropTypes.bool,
  dashed: PropTypes.bool,
  sIcon: PropTypes.node,
  pIcon: PropTypes.node,
  variant: PropTypes.string,
  onClick: PropTypes.func,
};

export default MkButton;
