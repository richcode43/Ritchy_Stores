import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import "./ForgetPassword.css";
import Button from "../../../components/button/Button";
import Logo from "../../../../assets/images/logo2.png";
const ForgetPassword = () => {
  return (
    <>
      <div className="forgetPasswordPage">
        <Link to="/" className="logo">
          <img src={Logo} alt="" />
        </Link>
        <div className="forgetPasswordDetails">
            <div className="header flex flex-col items-center">
                <h4 className="font-bold">Forget your Password?</h4>
                <p>You will receive an email on how to reset your password</p>
            </div>
          <form className="forgetPassForm">
            <input type="email" placeholder="Enter your Email address" />
            <Button
              label="Send"
              Icon={() => <Icon.SendFill />}
              className="flex items-center justify-center p-2.5 gap-2"
              backgroundColor="#3874ff"
              color="white"
              border="none"
              borderRadius="5px"
              cursor="pointer"
              fontSize="14px"
            />
          </form>
          <p
            style={{
              fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
              marginBottom:"4px",
              float:"left"
            }}
            className="mt-3.5 text-sm flex justify-start"
          >
            Continue to
            <Link
              to="/auth/login"
              style={{ color: "rgb(56, 116, 255)", marginLeft: "5px" }}
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
