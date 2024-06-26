import { Link } from 'react-router-dom';
import * as Icon from "react-bootstrap-icons";
import './ForgetPassword.css'
import Button from '../../../components/button/Button';

const ForgetPassword = () => {
  return (
    <>
        <div className="forgetPasswordPage">
            <div className="forgetPasswordDetails">
                <Link to="/" className='logo'>
                    <Icon.Cart />
                    Ritchy Stores
                </Link>
                <h4>Forget your Password?</h4>
                <p>Enter your email below and we will send you a reset link</p>
                <form className='forgetPassForm'>
                    <input type="email" placeholder='Email'/>
                    <Button label='Send' Icon={()=><Icon.SendFill/>}
                        style={{padding:"10px",
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

export default ForgetPassword