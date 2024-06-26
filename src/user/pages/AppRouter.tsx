import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "../components/nav/Nav";

// main site imports
import Home from "./homepage/Home";
import Shop from "./shop/Shop";
import ForgetPassword from "./auth/forgetpassword/ForgetPassword";
import Login from "./auth/login/Login";
import Register from "./auth/register/Register";
import ResetPassword from "./auth/resetpassword/ResetPassword";

// import Nav from "./User/components/nav/Nav";
// import Home from "./User/pages/homepage/Home";
// import Top from "./User/components/topnav/Top";
// import Shop from "./User/pages/shop/Shop";
// import Product from "./User/pages/singleProduct/Product";
// import CartPage from "./User/pages/cart/Cart";
// import Wishlist from "./User/pages/wishlist/Wishlist";
// import Dashboard from "./Admin/pages/dashboard/Dashboard";
// import About from "./User/pages/about/About"

// logged in userprofile imports
import Profile from "./profile/Profile";
import Inbox from "./inbox/Inbox";
import DeliveryAddress from "./deliveryAddress/DeliveryAddress";
import Order from "./orders/Order";
import UserSettings from "./userSettings/UserSettings";

// Admin dashboard imports
import Dashboard from "../../admin/pages/dashboard/Dashboard";
import Product from "./singleProduct/Product";




const AppRouter = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        
        <Route path="/">
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<Product/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/forgetpass" element={<ForgetPassword />} />
            <Route path="/resetpass" element={<ResetPassword />} />
        </Route>

        <Route path="/profile">
          <Route index element={<Profile />} />
          <Route path="orders" element={<Order />} />
          <Route path="account-settings" element={<UserSettings />} />
          <Route path="delivery-address" element={<DeliveryAddress />} />
          <Route path="inbox" element={<Inbox />} />
        </Route>

        <Route path="/admin">
          <Route index element={<Dashboard />} />
        </Route>

      </Routes>
    </Router>
  );
};

export default AppRouter;