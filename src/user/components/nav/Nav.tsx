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
// import { useEffect, useState } from "react";
import { useAuth } from "../../../context/authContext";
import { useLogout } from "../../../utils/logout";

const Nav = () => {
  const { user } = useAuth();
  const handleLogout = useLogout();
  const location = useLocation();
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [fullname,setFullname] = useState('')

  // useEffect(() => {
  //   const token = localStorage.getItem('auth-token');

  //   const checkLogin = async () => {
  //     if (token) {
  //       // setIsLoggedIn(true);
  //       setFullname(localStorage.getItem('fullName')!);
  //     } else {
  //       // setIsLoggedIn(false);
  //     }
  //   };

  //   checkLogin();
  // }, []); // Run useEffect only on component mount

  const hiddenNav = [
    "/auth/login",
    "/auth/signup",
    "/auth/forgetpass",
    "/admin",
  ];

  if (hiddenNav.includes(location.pathname)) {
    return null;
  }

  return (
    <>
      {user ? (
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
                    fontSize: "17px",
                  }}
                >
                  <Icon.Grid />
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
                  <div className="adverts category-Details"></div>
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
                  <span className="wishIndicator">0</span>
                </Link>
              </div>
              <div className="cart">
                <Link to="/cart">
                  <Icon.BagPlus className="cartIcon" />
                  <span className="cartIndicator">0</span>
                </Link>
              </div>

              <div className="userProfile">
                <Link to="#" className="user-holder">
                  <Icon.Person className="user-icon" />
                  {/* <p>Hi {fullname.split(" ")[0]}</p>  */}
                  <p>{user.fullName?.split(" ")[0]}</p>
                  <ul className="profileDetails">
                    <li>
                      <Link to="/auth/login">
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
                        <button onClick={handleLogout}>logout</button>
                      </Link>
                    </li>
                  </ul>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="navigation">
          {/* ... navigation for non-logged-in users */}
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
                    fontSize: "17px",
                  }}
                >
                  <Icon.Grid />
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
                  <div className="adverts category-Details"></div>
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
            </div>
            <Link to="auth/login">Login</Link>
          </div>
        </nav>
      )}
    </>
  );
};

export default Nav;
