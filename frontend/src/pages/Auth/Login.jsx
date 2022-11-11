import { BrandLink } from "@components/AppLink/AppLink";
import MkButton from "@components/Button";
import Card from "@components/Card";
import PublicPageContainer from "@components/PublicPageContainer";
import { useState } from "react";
import { SiFormstack } from "react-icons/si";
import CheckboxGroup from "@components/Inputs/Checkbox";
import Input from "@components/Inputs/Input";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  return (
    <PublicPageContainer>
      <Card className="card-shadow" style={{ width: 480 }}>
        <div className="card-header">
          <h4>Login</h4>
        </div>
        <div className="card-header card-image">
          <BrandLink to="/auth/login" style={{ marginLeft: 0 }}>
            <SiFormstack size={35} color="#047aff" /> <h2>Formly.</h2>
          </BrandLink>
        </div>
        <div className="card-body">
          <div className="form">
            <div className="form-group">
              <Input
                id="username"
                name="username"
                label="Username"
                placeholder="Username"
                value={user.username}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <Input
                id="password"
                type="password"
                name="password"
                label="Password"
                value={user.password}
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="card-footer">
          <MkButton>Login</MkButton>
          <MkButton variant="light">Register</MkButton>
        </div>
      </Card>
    </PublicPageContainer>
  );
};

export default Login;
