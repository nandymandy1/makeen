import styled from "styled-components";
import { Link } from "react-router-dom";

const NavLink = ({ children, ...props }) => {
  delete props["nav"];
  return <Link {...props}>{children}</Link>;
};

export const AppLink = styled(NavLink)`
  color: #000;
  font-size: 11;
  margin-left: 5px;
  padding: 5px 15px;
  margin-right: 5px;
  border-radius: 3px;
  text-decoration: none;
  transition: 300ms ease-in;
  ${({ nav = false }) => (nav ? { fontWeight: "500" } : {})}
  &:hover {
    color: #047aff;
    background-color: rgba(4, 122, 255, 0.08);
  }
`;

export const LinkButton = styled.button`
  color: #000;
  border: none;
  font-size: 11;
  cursor: pointer;
  font-size: 15px;
  margin-left: 5px;
  padding: 5px 15px;
  margin-right: 5px;
  border-radius: 3px;
  font-weight: bolder;
  text-decoration: none;
  background-color: #fff;
  transition: 300ms ease-in;
  ${({ nav = false }) => (nav ? { fontWeight: "bolder" } : {})}
  &:hover {
    background-color: rgba(4, 122, 255, 0.08);
    color: #047aff;
  }
`;

export const BrandLink = styled(Link)`
  display: flex;
  font-size: 50;
  color: #047aff;
  font-weight: bold;
  align-items: center;
  margin-left: 20px;
  text-decoration: none;
  justify-content: center;
  font-family: "Lobster";
  h2 {
    /* font-size: 1.8em; */
    margin-left: 10px;
  }
`;

export default AppLink;
