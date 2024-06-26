
import './UserSettings.css'
import Button from "../../components/button/Button"
import Footer from "../../components/footer/Footer"
import UserSideBar from "../../components/userSidebar/UserSidebar"

const UserSettings = () => {
  return (
    <>
        <div className="accountSettings">
            <UserSideBar/>
            <div className="settings-detail">
                <div className="heading">
                    <h2>Account Setting</h2>
                </div>
                <div className="editUserDetails">
                    <h5>Account details</h5>
                    <form>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input type="text" placeholder="John Doe" id="name" />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="text" placeholder="johndoe@gmail.com" id="email"/>
                        </div>
                        <div>
                            <label htmlFor="phone">Phone</label>
                            <input type="text" placeholder="Phone number" id="phone"/>
                        </div>
                        <div className="submmitForm">
                            <Button label="Save Details" borderRadius="5px"
                            style={{
                                padding:"14px",
                                backgroundColor:"#3874ff",
                                border:"none",
                                color:"white",
                                fontWeight:"600",
                                width:"30%",
                                fontSize:"16px"
                            }}/>
                        </div>
                    </form>
                    <hr />
                    <div className="password-reset">
                        <h5>Password Reset</h5>
                        <form className="passwordReset">
                            <div>
                                <label htmlFor="currentPassword">Current Password</label>
                                <input type="text" placeholder="Current Password" id="currentPassword"/>
                            </div>
                            <div>
                                <label htmlFor="newPassword">New Password</label>
                                <input type="text" placeholder="New Password" id="newPassword"/>
                            </div>
                            <div>
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input type="text" placeholder="Confirm Password" id="confirmPassword"/>
                            </div>
                            <div className="submmitForm">
                                <Button label="Save Password" borderRadius="5px"
                                style={{
                                    padding:"14px",
                                    backgroundColor:"#3874ff",
                                    border:"none",
                                    color:"white",
                                    fontWeight:"600",
                                    width:"30%",
                                    fontSize:"16px"
                                }}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default UserSettings