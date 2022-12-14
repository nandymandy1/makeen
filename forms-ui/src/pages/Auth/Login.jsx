import StyledButton, { CustomButton } from "@components/Button";
import Card from "@components/Card";
import Field from "@components/Fields";
import { useToast } from "@components/Toast";
import useInput from "@hooks/useInput";
import { loginUser } from "@store/Reducers/Auth/actions";
import { AiOutlineUser } from "react-icons/ai";
import { SiLastpass } from "react-icons/si";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { showToast } = useToast();

  const [user, setUser] = useInput({
    username: "",
    password: "",
  });

  const authenticate = () => {
    const { username, password } = user;
    if (!username) {
      showToast({
        type: "error",
        message: "Username is required.",
      });
      console.log("Username should not be empty.");
      return;
    }
    if (!password) {
      console.log("Password should not be empty.");
      showToast({
        type: "error",
        message: "Password is required.",
      });
      return;
    }
    dispatch(loginUser(user, showToast));
  };

  return (
    <div className="auth-layout">
      <Card style={{ width: "500px" }}>
        <div className="card-header">
          <h3>Login</h3>
        </div>
        <div className="card-body">
          <form>
            <Field
              prefix
              id="username"
              name="username"
              label="Username"
              onChange={setUser}
              control="iconInput"
              value={user.username}
              placeholder="Username"
              icon={<AiOutlineUser />}
            />
            <Field
              prefix
              id="password"
              type="password"
              name="password"
              label="Password"
              control="iconInput"
              onChange={setUser}
              value={user.password}
              icon={<SiLastpass />}
              placeholder="Password"
            />
          </form>
        </div>
        <div className="card-footer d-flex justify-content-evenly align-items-center">
          <StyledButton onClick={authenticate} pill="pill">
            Login
          </StyledButton>
          <CustomButton
            pill="pill"
            text="#047aff"
            border="#047aff"
            primary="#F7F9F9"
            onClick={() => navigate("/auth/register")}
          >
            Regiser
          </CustomButton>
        </div>
      </Card>
    </div>
  );
};

export default Login;
