import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import Button from "../../../components/button/Button";
import * as Icon from "react-bootstrap-icons";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Logo from "../../../../assets/images/logo2.png";

interface UserLogin {
  email: string;
  password: string;
}
const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState<UserLogin>({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      //   const response = await axios.post(`${BASE_URL2}/users/login`, loginData);
      const response = await axios.post(
        "https://ecommerce-backend-cxlj.onrender.com/api/v1/users/login",
        loginData
      );
      console.log(response.data.token);
      setLoading(false);
      // save token
      localStorage.setItem("auth-token", response.data.token);
      // redirect to dashboard

      // toast
      toast.success("Used logged in successfully", {
        onClose: () => navigate("/dashboard"),
      });
    } catch (error) {
      console.log(`Error in login ${error}`);
      toast.error("Login failed, invalid email or password");
      setLoading(false);
    }
  };
  return (
    <>
      <div className="loginPage">
        <Link to="/" className="logo">
          <img src={Logo} alt="" />
        </Link>
        <div className="loginDetails">
          <div className="loginHeader">
            <h3>Sign In</h3>
            <p>Welcome back</p>
          </div>
          <Button
            Icon={() => <Icon.Google style={{ color: "red" }} />}
            className="googleLoginButton"
            label="Sign in with google"
            borderRadius={"5px"}
            border="1px solid whitesmoke"
            backgroundColor="transparent"
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 0",
              fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
              marginBottom: "30px",
              justifyContent: "center",
              width: "100%",
              gap: ".5rem",
            }}
          />

          <div className="Divider">
            <hr
              style={{
                borderTop: "1px solid whitesmoke",
                height: ".5px",
                width: "100%",
              }}
            />
            <div className="divider-content-center">or</div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="input-holder">
              <label htmlFor="email" className="form-label">
                Email Address{" "}
              </label>
              <div className="form-input-icon">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  id="email"
                  value={loginData.email}
                  onChange={handleInputChange}
                />
                <Icon.PersonFill
                  style={{ color: "black" }}
                  className="form-icon"
                />
              </div>
              <p className="login-error-message">Invalid email address</p>
            </div>
            <div className="input-holder">
              <label htmlFor="email" className="form-label">
                Password{" "}
              </label>
              <div className="form-input-icon">
                <input
                  type="password"
                  placeholder="Enter your email address"
                  id="email"
                  value={loginData.password}
                  onChange={handleInputChange}
                />
                <Icon.KeyFill
                  style={{ rotate: "140deg" }}
                  className="form-icon"
                />
              </div>
              <p className="login-error-message">Incorrect password </p>
            </div>
            <div className="forgotPass">
              <Link
                to="/auth/forgetpass"
                style={{ color: "rgb(56, 116, 255)", fontFamily: "" }}
              >
                Forgot Password?
              </Link>
            </div>
            <Button
              label={loading ? "loading..." : "Login"}
              backgroundColor="#3874ff"
              color="white"
              border="none"
              borderRadius="5px"
              disabled={loading}
              style={{ width: "100%", padding: "15px", fontSize: "15px" }}
            />
          </form>
          <p
            style={{
              fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
              marginTop: "13px",
              fontSize: "14px",
            }}
          >
            Don't have an account yet?
            <Link
              to="/auth/signup"
              style={{ color: "rgb(56, 116, 255)", marginLeft: "10px" }}
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
