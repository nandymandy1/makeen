import styled from "styled-components";

const PreviewTableRenderer = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  th,
  td {
    padding: 8px;
    border: 1px solid #ddd;
  }
  tr {
    &:nth-child(even) {
      background-color: #f2f2f2;
    }
    &:hover {
      background-color: #ddd;
    }
  }
  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #047aff;
    color: white;
  }
`;

export default PreviewTableRenderer;
