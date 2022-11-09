import BuilderImg from "@assets/images/builder.svg";
import MkButton from "@components/Button";
import PublicPageContainer from "@components/PublicPageContainer";
import { Heading } from "@components/Typography";

const Home = () => {
  return (
    <PublicPageContainer>
      <Heading
        type="h1"
        style={{
          width: "35%",
          color: "#000",
          marginBottom: 30,
          textAlign: "center",
        }}
      >
        Why to code a form when you can just drag and drop.
      </Heading>
      <MkButton variant="primary">Get Started</MkButton>
      <img style={{ height: "600px", widht: "auto" }} src={BuilderImg} />
    </PublicPageContainer>
  );
};

export default Home;
