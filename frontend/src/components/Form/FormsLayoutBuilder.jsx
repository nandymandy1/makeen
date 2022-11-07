import styled from "styled-components";

const FormsLayoutBuilder = styled.div`
  width: 99%;
  padding: 5px;
  padding-bottom: 3rem;
  max-height: 82%;
  min-height: 82%;
  overflow-y: scroll;
  border-radius: 3px;
  border: 1px dashed rgba(0, 0, 0, 0.3);
`;

export const FormsLayoutBuilderFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default FormsLayoutBuilder;
