import "./Login.css";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/button/Button";
import * as Icon from "react-bootstrap-icons";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios, { AxiosError } from "axios";
import Logo from "../../../../assets/images/logo2.png";
import { BASE_URL2 } from "../../../components/constants/BASEURL";
import { User, useAuth } from "../../../../context/authContext";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(4).max(12),
});

type FormFields = z.infer<typeof schema>;

const Login = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data: FormFields) => {
    try {
      const response = await axios.post(`${BASE_URL2}/users/login`, data, {});
      console.log(response);
      console.log("login succesfull");

      // save token
      // localStorage.setItem("auth-token", (response).data.token);
      // localStorage.setItem("fullName", (response).data.userFound.fullName);
      const user_data: User = {
        fullName: response.data.userFound.fullName,
        email: response.data.userFound.email,
        isLoggedIn: true,
        token: response.data.token,
      };
      setUser(user_data);
      localStorage.setItem("auth_state", JSON.stringify(user_data));
      // toast
      toast.success("User logged in successfully", {
        // redirect to home page
        onClose: () => navigate("/"),
      });
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      toast.error(err.response?.data.message);
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

          <ToastContainer />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-holder">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <div className="form-input-icon">
                {/* email input */}
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Enter your email address"
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

            <div className="input-holder">
              <label htmlFor="email" className="form-label">
                Password
              </label>
              <div className="form-input-icon">
                {/* password input */}
                <input
                  {...register("password")}
                  type="password"
                  placeholder="Enter your password"
                  id="email"
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

            <div className="forgotPass">
              <Link
                to="/auth/forgetpass"
                style={{ color: "rgb(56, 116, 255)", fontFamily: "" }}
              >
                Forgot Password?
              </Link>
            </div>

            <Button
              disabled={isSubmitting}
              className="bg-custom-blue disabled:!bg-slate-400"
              label={isSubmitting ? "loading..." : "login"}
              color="white"
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
