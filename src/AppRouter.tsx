import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./user/components/nav/Nav";

// main site imports
import Home from "./user/pages/homepage/Home";
import Shop from "./user/pages/shop/Shop";
import ForgetPassword from "./user/pages/auth/forgetpassword/ForgetPassword";
import Login from "./user/pages/auth/login/Login";
import Register from "./user/pages/auth/register/Register";

// logged in userprofile imports
import Profile from "./user/pages/profile/Profile";
import Inbox from "./user/pages/inbox/Inbox";
import DeliveryAddress from "./user/pages/deliveryAddress/DeliveryAddress";
import Order from "./user/pages/orders/Order";
import UserSettings from "./user/pages/userSettings/UserSettings";

// Admin dashboard imports
import Dashboard from "./admin/pages/dashboard/Dashboard";
import Product from "./user/pages/singleProduct/Product";

const AppRouter = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/">
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<Register />} />
          <Route path="/auth/forgetpass" element={<ForgetPassword />} />
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
