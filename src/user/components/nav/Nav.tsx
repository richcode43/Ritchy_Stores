
import { IoIosHeartEmpty } from "react-icons/io";
import "./Nav.css";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { CiLogout, CiUser } from "react-icons/ci";
// import Sneaker from "../../../assets/images/sneaker.jpeg";
import Logo from "../../../assets/images/logo2.png";
import * as Icon from "react-bootstrap-icons";
import Button from "../button/Button";


const Nav = () => {
  const location = useLocation();

  const hiddenNav = [
    "/login",
    "/signup",
    "/forgetpass",
    "/resetpass",
    "/admin",
  ];

  if (hiddenNav.includes(location.pathname)) {
    return null;
  }

  return (
    <>
      <nav className="navigation">
        <div className="nav-left flex">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="" className="logoImg" />
            </Link>
          </div>
        </div>

        {/* middle-nav */}
        <div className="nav-middle gap-20 flex">
          <div className="nav-links">

            <Link
              to=""
              style={{ display: "flex", alignItems: "center" }}
              className="category"
            >
              <span
                style={{
                  marginRight: "10px",
                  display: "flex",
                  padding: "5px",
                  fontSize:"17px"
                }}
              >
                <Icon.Grid/>
              </span>
              Categories
              {/* category dropdown */}
              <div className="category-menu">
                <div className="category-Details">
                  <ul className="category-list">
                    <li>
                      <Link to="">Computer and Accessories</Link>
                    </li>
                    <li>
                      <Link to="">Phones and Tablets</Link>
                    </li>
                    <li>
                      <Link to="">Electronics</Link>
                    </li>
                    <li>
                      <Link to="">Fashion</Link>
                    </li>
                    <li>
                      <Link to="">Jewelery</Link>
                    </li>
                  </ul>
                </div>
                {/* <div className="list-Details category-Details">
                </div> */}
                <div className="adverts category-Details">
                  {/* <img
                    src={Sneaker}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      verticalAlign: "middle",
                    }}
                  /> */}
                </div>
              </div>
              {/* category dropdown end */}
            </Link>

            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
            <Link to="#" className="help-icon">
              <FaRegQuestionCircle />
              <span>Help</span>
              <ul className="helpLinks">
                <li>
                  <Link to="">FAQS</Link>
                </li>
                <li>
                  <Link to="">Returns & Refunds</Link>
                </li>
                <li>
                  <Link to="">Track My Order</Link>
                </li>
              </ul>
            </Link>
          </div>
          <form action="#">
            <div className="search-div">
              <input
                type="search"
                placeholder="Search products and categories"
                id="searchInput"
              />
              <Button
                Icon={() => <Icon.Search />}
                label={""}
                className="searchBtn"
                backgroundColor="transparent"
                fontSize="15px"
                style={{ width: "50px" }}
              />
            </div>
          </form>
        </div>


        {/* right nav */}
        <div className="nav-right">

          <div className="site-info">
            <div className="wishlist">
              <Link to="/">
                <Icon.Heart className="wishIcon" />
                <span className="wishIndicator">3</span>
              </Link>
            </div>
            <div className="cart">
              <Link to="/cart">
                <Icon.BagPlus className="cartIcon" />
                <span className="cartIndicator">3</span>
              </Link>
            </div>

            <div className="userProfile">
              <Link to="#" className="user-holder">
                <Icon.Person className="user-icon" />
                <ul className="profileDetails">
                  <li>
                    <Link to="/login">
                      <CiUser />
                      <span>Login</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/profile">
                      <CiUser />
                      <span>My Profile</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <Icon.PersonFillGear />
                      <span>My Account</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <IoBagCheckOutline />
                      <span>My Order</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <IoIosHeartEmpty />
                      <span>Wishlist</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <CiLogout />
                      <span>Logout</span>
                    </Link>
                  </li>
                </ul>
              </Link>
              {/* <Button label="Login/signup" /> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
 