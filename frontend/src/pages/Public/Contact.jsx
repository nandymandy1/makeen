import MkButton from "@components/Button";
import { Heading } from "@components/Typography";
import PublicPageContainer from "@components/PublicPageContainer";
import AboutImg from "@assets/images/about.svg";

const Contact = () => {
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
        Contact Us
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
      <img
        style={{
          widht: "auto",
          height: "600px",
        }}
        src={AboutImg}
      />
    </PublicPageContainer>
  );
};

export default Contact;
