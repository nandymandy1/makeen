import MkButton from "@components/Button";
import { Heading } from "@components/Typography";
import PublicPageContainer from "@components/PublicPageContainer";
import LoginImg from "@assets/images/login.svg";
import styled from "styled-components";

const Card = styled.div`
  --padding: 1rem;
  overflow: hidden;
  background: white;
  border-radius: 0.25rem;
  border: 1px solid #777;

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
      img {
        display: block;
        width: 100%;
        max-height: 200px;
        aspect-ratio: 16 / 9;
        object-fit: cover;
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
    padding-top: 0px;
    margin-top: 1rem;
    padding: var(--padding);
    border-top: 1px solid #d5d8dc;
  }
`;

const ImageBackgroundDiv = styled.div`
  background-image: url(${LoginImg});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
`;

const Login = () => {
  return (
    <PublicPageContainer>
      <Card className="card-shadow" style={{ width: 480 }}>
        <div className="card-header">
          <h4>Login</h4>
        </div>
        <div className="card-body">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque ullam
          dolorem aperiam enim maxime voluptas sint facere unde corporis cumque
          nemo consequatur consequuntur, eum at reiciendis, vero nesciunt
          accusamus quaerat adipisci odit omnis commodi veritatis fugit
          obcaecati? Atque nam incidunt laudantium fugiat illum officiis quos
          distinctio quisquam aliquid nesciunt inventore at, veritatis, ducimus
          libero doloremque cumque odio. In cupiditate veniam officia illum?
          Fugiat ad reiciendis libero id vero culpa non aliquam aspernatur neque
          ipsa minus ipsum similique amet sit hic, totam voluptates nam illum
          perferendis itaque ea eaque. Numquam distinctio repellendus vero quia
          eaque ipsum a optio fuga quidem quaerat.
        </div>
        <div className="card-footer">
          <MkButton>Login</MkButton>
        </div>
      </Card>
    </PublicPageContainer>
  );
};

export default Login;
