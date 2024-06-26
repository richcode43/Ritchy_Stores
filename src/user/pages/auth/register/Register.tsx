import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import "./Register.css";
import Button from "../../../components/button/Button";
import RegisterImg from "../../../../assets/images/regBackground.jpg";
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

interface UserRegister {
  fullName: string;
  password: string;
  email: string;
}
const Register = () => {
  const [registerdata, setRegisterData] = useState<UserRegister>({
    fullName: "",
    password: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);

  const onInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    console.log(registerdata);
    setRegisterData((prevRegisterData) => ({
      ...prevRegisterData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // console.log(registerdata);
    try {
      const response = await axios.post(
        // `${BASE_URL2}/users/register`,
        "https://ecommerce-backend-cxlj.onrender.com/api/v1/users/register/",
        registerdata
      );
      console.log("response", response.data);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1000,
      });
    } catch (error) {
      console.log();
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Try again later",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="registerPage">
        <div
          className="register-img"
          style={{
            backgroundImage: `url(${RegisterImg})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="registerDetails">
          <Link to="/" className="logo">
            <Icon.Cart />
            Ritchy Stores
          </Link>
          <div className="loginHeader">
            <h3>Sign In</h3>
            <p>Get access to your account</p>
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

          {/* register form */}
          <form onSubmit={handleSubmit}>
            <div className="input-holder">
              <label htmlFor="fullname" className="form-label">
                FullName
              </label>
              <div className="form-input-icon">
                <input
                  type="text"
                  placeholder="Enter full name"
                  id="fullname"
                  value={registerdata.fullName}
                  onChange={onInputChange}
                />
                <Icon.PersonFill
                  style={{ color: "black" }}
                  className="form-icon"
                />
              </div>
              <p className="reg-error-message">Invalid email address</p>
            </div>
            <div className="input-holder">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <div className="form-input-icon">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  id="email"
                  value={registerdata.email}
                  onChange={onInputChange}
                />
                <Icon.PersonFill
                  style={{ color: "black" }}
                  className="form-icon"
                />
              </div>
              <p className="reg-error-message">Invalid email address</p>
            </div>
            <div className="input-holder pass-container">
              <div>
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <div className="form-input-icon">
                  <input
                    type="password"
                    placeholder="Enter password"
                    id="passowrd"
                    value={registerdata.password}
                    onChange={onInputChange}
                  />
                  <Icon.KeyFill
                    style={{ rotate: "140deg" }}
                    className="form-icon"
                  />
                </div>
                <p className="reg-error-message">Incorrect password </p>
              </div>
              <div>
                <label htmlFor="confirmpassword" className="form-label">
                  Confirm Password{" "}
                </label>
                <div className="form-input-icon">
                  <input
                    type="password"
                    placeholder="confirm password"
                    id="confirmpassword"
                  />
                  <Icon.KeyFill
                    style={{ rotate: "140deg" }}
                    className="form-icon"
                  />
                </div>
                <p className="reg-error-message">Incorrect password </p>
              </div>
            </div>

            <Button
              disabled={loading}
              label={loading ? "Registering..." : "Register"}
              backgroundColor="#3874ff"
              color="white"
              type="submit"
              border="none"
              borderRadius="5px"
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
            <Link
              to="/login"
              style={{ color: "rgb(56, 116, 255)", marginRight: "5px" }}
            >
              Login
            </Link>
            to an existing account
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;