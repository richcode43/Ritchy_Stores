import "./UserSidebar.css"
import { Link } from "react-router-dom"
import * as Icon from "react-bootstrap-icons";

const UserSideBar = () => {
  return (
    <>
    <div className="userSideBar">
        <ul className="sidebar-list">
            <li className="sidebar-list-item">
                <Link to="/profile">
                <Icon.Speedometer/>
                Dashboard
                </Link>
            </li>
            <li className="sidebar-list-item">
                <Link to="/profile/orders">
                    <Icon.BagCheck/>
                    Orders
                </Link>
            </li>
            <li className="sidebar-list-item">
                <Link to="/profile/inbox">
                    <Icon.ChatSquareText/>
                    Inbox
                </Link>
            </li>
            <li className="sidebar-list-item">
                <Link to="/profile/account-settings">
                    <Icon.Gear/>
                    Setting
                </Link>
            </li>
            <li className="sidebar-list-item">
                <Link to="/profile/delivery-address">
                    <Icon.GeoAlt/>
                    Delivery Address
                </Link> 
            </li>
            <li className="sidebar-list-item">
                <Link to="/profile">
                    <Icon.Bell/>
                    Notification</Link> 
            </li>
            <li className="sidebar-list-item">
                <hr />
            </li>
            <li className="sidebar-list-item">
                <Link to="#">
                    <Icon.BoxArrowRight/>
                    Logout
                </Link> 
            </li>
        </ul>
    </div>
    </>
  )
}

export default UserSideBar
