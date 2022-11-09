import MkButton from "@components/Button";
import { Heading } from "@components/Typography";
import PublicPageContainer from "@components/PublicPageContainer";
import ServicesImg from "@assets/images/services.svg";

const Services = () => {
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
        Our Services
      </Heading>
      <p>We believe in making complicated things simple...</p>
      <p className="w-50 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsum
        dolore error doloremque aspernatur, maxime culpa dolor delectus atque
        natus saepe, aut autem accusamus velit esse vero quasi iure nostrum
        suscipit quo reiciendis ut! Ut dolor perferendis reiciendis placeat
        totam, numquam perspiciatis iure dolorum deleniti dolore quis laudantium
        rerum. Provident!
      </p>
      <MkButton variant="primary">Get Started</MkButton>
      <img style={{ height: "600px", widht: "auto" }} src={ServicesImg} />
    </PublicPageContainer>
  );
};

export default Services;
