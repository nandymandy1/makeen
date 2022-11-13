import StyledButton, { CustomButton } from "@components/Button";
import Card from "@components/Card";
import Field from "@components/Fields/Input";
import useInput from "@hooks/useInput";
import { loginUser } from "@store/Reducers/Auth/actions";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { SiLastpass } from "react-icons/si";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useInput({
    username: "",
    password: "",
    email: "",
    name: "",
  });

  const registerUser = () => {
    // const { username, password } = user;
    // if (!username) {
    //   console.log("Username should not be empty.");
    // }
    // if (!password) {
    //   console.log("Password should not be empty.");
    //   return;
    // }
    dispatch(loginUser(user));
  };

  return (
    <div className="auth-layout">
      <Card style={{ width: "500px" }}>
        <div className="card-header">
          <h3>Register</h3>
        </div>
        <div className="card-body">
          <form>
            <Field
              prefix
              id="name"
              name="name"
              label="Name"
              control="input"
              value={user.name}
              placeholder="Name"
              onChange={setUser}
              icon={<AiOutlineUser />}
            />
            <Field
              prefix
              id="username"
              name="username"
              control="input"
              label="Username"
              onChange={setUser}
              value={user.username}
              placeholder="Username"
              icon={<AiOutlineUser />}
            />
            <Field
              prefix
              id="email"
              name="email"
              label="Email"
              control="input"
              onChange={setUser}
              value={user.email}
              placeholder="Email"
              icon={<AiOutlineMail />}
            />
            <Field
              prefix
              id="password"
              type="password"
              name="password"
              control="input"
              label="Password"
              onChange={setUser}
              value={user.password}
              icon={<SiLastpass />}
              placeholder="Password"
            />
          </form>
        </div>
        <div className="card-footer d-flex justify-content-evenly align-items-center">
          <StyledButton onClick={registerUser} pill="pill">
            Register
          </StyledButton>
          <CustomButton
            pill="pill"
            text="#047aff"
            border="#047aff"
            primary="#F7F9F9"
            onClick={() => navigate("/auth/login")}
          >
            Login
          </CustomButton>
        </div>
      </Card>
    </div>
  );
};

export default Register;
