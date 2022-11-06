import styled from "styled-components";

export const Grid = styled.div``;

export const Row = styled.div`
  display: flex;
`;

const media = {
  xs: (styles) => `
    @media only screen and (max-width: 480px) {
      ${styles}
    }
  `,
};

export const Col = styled.div`
  flex: ${({ size }) => size};
  min-height: 100px;
  border: 1px dashed rgba(0, 0, 0, 0.4);

  ${({ collapse }) =>
    collapse &&
    media[collapse](`
      display: none;
  `)}
`;
