import styled from "styled-components";

export const Grid = styled.div`
  /* border: 1px solid black; */
`;

export const Row = styled.div`
  display: flex;
`;

const media = {
  xs: (styles) => `
    @media only screenand (max-width: 480px){
      ${styles}
    }
  `,
};

export const Col = styled.div`
  flex: ${({ size }) => size};
  min-height: 40px;
  border: 1px dashed rgba(0, 0, 0, 0.4);
  ${({ collapse }) =>
    collapse &&
    media[collapse](`
  display: none;
  `)}
`;
