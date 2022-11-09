import styled from "styled-components";
import { Link } from "react-router-dom";

const AppLink = styled(Link)`
  color: #000;
  font-size: 11;
  margin-left: 5px;
  padding: 5px 15px;
  margin-right: 5px;
  transition: 300ms ease-in;
  text-decoration: none;
  border-radius: 3px;
  ${({ nav = false }) => (nav ? { fontWeight: "500" } : {})}
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
  text-decoration: none;
  justify-content: center;
  font-family: "Lobster";
  margin-left: 20px;
  h2 {
    font-size: 1.8em;
    margin-left: 10px;
  }
`;

export default AppLink;
