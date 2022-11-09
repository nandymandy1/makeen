import MkButton from "@components/Button";
import { Heading } from "@components/Typography";
import PublicPageContainer from "@components/PublicPageContainer";
import AboutImg from "@assets/images/about.svg";

const Register = () => {
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
        Register
      </Heading>
      <p>Get started with your product login now.</p>
      <p className="w-50 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsum
        dolore error doloremque aspernatur, maxime culpa dolor delectus atque
        natus saepe, aut autem accusamus velit esse vero quasi iure nostrum
        suscipit quo reiciendis ut! Ut dolor perferendis reiciendis placeat
        totam, numquam perspiciatis iure dolorum deleniti dolore quis laudantium
        rerum. Provident!
      </p>
    </PublicPageContainer>
  );
};

export default Register;
