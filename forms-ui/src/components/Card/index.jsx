import styled from "styled-components";

const Card = styled.div`
  --padding: 1rem;

  overflow: hidden;
  background: white;
  border-radius: 0.25rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 5px 5px 12px 5px rgba(0, 0, 0, 0.1);

  &.card-shadow {
    border: none;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  }

  .card-header {
    font-size: 1.5rem;
    padding-bottom: 0;
    margin-bottom: 0.5rem;
    padding: var(--padding);
    border-bottom: 1px solid #d5d8dc;
    &.card-image {
      padding: 0;
      overflow: hidden;
      border-bottom: none;
      img {
        width: 100%;
        display: block;
        max-height: 200px;
        object-fit: cover;
        aspect-ratio: 16 / 9;
        object-position: center;
        transition: 200ms transform ease-in-out;
      }
    }
  }

  &:hover > .card-header.card-image {
    img {
      transform: scale(1.025);
    }
  }

  .card-body {
    font-size: 0.9rem;
    padding: 20px var(--padding);
  }

  .card-footer {
    display: flex;
    padding-top: 0px;
    margin-top: 1rem;
    padding: var(--padding);
    border-top: 1px solid #d5d8dc;
  }
`;

export default Card;
