import { Link } from "react-router-dom"
import Button from "../../../components/button/Button"
import * as Icon from "react-bootstrap-icons";
import './ResetPassword.css'
const ResetPassword = () => {
  return (
    <>
        <div className="resetPasswordPage">
            <div className="resetPasswordDetails">
                <Link to="/" className='logo'>
                    <Icon.Cart />
                    Ritchy Stores
                </Link>
                <h4>Reset your password</h4>
                <p>Type your new password</p>
                <form>
                    <input type="password" placeholder='Type new password' id="password"/>
                    <input type="password" placeholder='Confirm new password'id="confirmpassword" />
                    <Button label='Set Password'

                        style={{width:"100%",
                        padding:"10px",
                        display:"flex",
                        justifyContent:"center",
                        gap:"4px"
                        }}
                        backgroundColor='#3874ff' 
                        color='white'
                        border='none'
                        borderRadius="5px"
                        cursor="pointer"
                        fontSize="14px"


                    />
                </form>
            </div>
        </div>
    </>
  )
}

export default ResetPassword