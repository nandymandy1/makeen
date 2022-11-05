import styled from "styled-components";

const primaryColor = "#047aff";
const lightColor = "#fff";

const Button = ({
  children,
  suffix = false,
  prefix = false,
  icon: Icon = null,
  ...props
}) => {
  return <button {...props}>{children}</button>;
};

const ButtonVariants = {
  primary: () => ({
    color: lightColor,
    "border-color": primaryColor,
    "background-color": primaryColor,
  }),

  light: () => ({
    color: primaryColor,
    "background-color": lightColor,
  }),

  secondary: () => ({}),

  "light-outline": () => ({}),
  "primary-outline": () => ({}),
  "secondary-outline": () => ({}),
};

const MkButton = styled(Button)`
  margin: 15px;
  border: none;
  min-width: 150px;
  padding: 10px 20px;
  box-shadow: 5px 5px 12px 5px rgba(0, 0, 0, 0.1);
  border-radius: ${({ rounded = true }) => (rounded ? "30px" : "3px")};
  ${({ variant }) => ButtonVariants[variant]}
`;

export default MkButton;
