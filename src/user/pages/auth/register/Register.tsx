import "./Register.css";
import * as Icon from "react-bootstrap-icons";
import Button from "../../../components/button/Button";
import Logo from "../../../../assets/images/logo2.png";
import RegisterImg from "../../../../assets/images/regBackground.jpg";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios, { AxiosError } from "axios";

import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BASE_URL2 } from "../../../components/constants/BASEURL";

const schema = z
  .object({
    fullName: z.string().min(4).max(25).trim(),
    email: z.string().email(),
    password: z.string().min(4).max(12),
    // rememberMe: z.boolean(),
    passwordConfirm: z.string().min(4).max(12),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords do not match",
    path: ["passwordConfirm"],
  });

type RegisterFields = z.infer<typeof schema>;

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<RegisterFields> = async (
    data: RegisterFields
  ) => {
    try {
      const response = axios.post(`${BASE_URL2}/users/register`, data);
      console.log("Registration successful:", response);

      // toast
      toast.success("Registration successful", {
        // redirect to home page
        onClose: () => navigate("/auth/login"),
        
      });
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      toast.error(err.response?.data.message);
    }
  };

  return (
    <>
      <ToastContainer />
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
            <img src={Logo} alt="" />
          </Link>
          <div className="loginHeader">
            <h3>Create Account</h3>
            <p>Get started to shop without limit</p>
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-holder">
              <label htmlFor="fullname" className="form-label">
                FullName
              </label>
              <div className="form-input-icon">
                {/* fullname input */}
                <input
                  {...register("fullName")}
                  type="text"
                  placeholder="Enter full Name"
                  id="fullname"
                />
                <Icon.PersonFill
                  style={{ color: "black" }}
                  className="form-icon"
                />
              </div>
              {errors.fullName && (
                <div className="text-red-500">{errors.fullName.message}</div>
              )}
            </div>

            <div className="input-holder">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <div className="form-input-icon">
                {/* email input */}
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Enter email address"
                  id="email"
                />
                <Icon.PersonFill
                  style={{ color: "black" }}
                  className="form-icon"
                />
              </div>
              {errors.email && (
                <div className="text-red-500">{errors.email.message}</div>
              )}
            </div>

            <div className="input-holder pass-container">
              <div>
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <div className="form-input-icon">
                  {/* password input */}
                  <input
                    {...register("password")}
                    type="password"
                    placeholder="Enter password"
                    id="passowrd"
                  />
                  <Icon.KeyFill
                    style={{ rotate: "140deg" }}
                    className="form-icon"
                  />
                </div>
                {errors.password && (
                  <div className="text-red-500">{errors.password.message}</div>
                )}
              </div>
              <div>
                <label htmlFor="confirmpassword" className="form-label">
                  Confirm Password{" "}
                </label>
                <div className="form-input-icon">
                  {/* confirmpassword input */}
                  <input
                    {...register("passwordConfirm")}
                    type="password"
                    placeholder="confirm password"
                    id="confirmpassword"
                  />
                  <Icon.KeyFill
                    style={{ rotate: "140deg" }}
                    className="form-icon"
                  />
                </div>
                {errors.passwordConfirm && (
                  <div className="text-red-500">{errors.passwordConfirm.message}</div>
                )}
              </div>
            </div>

            <Button
              disabled={isSubmitting}
              label={isSubmitting ? "Registering..." : "Register"}
              className="bg-custom-blue disabled:!bg-slate-400"
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
              to="/auth/login"
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
