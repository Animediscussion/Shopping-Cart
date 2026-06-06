import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  NavLink,
} from "react-router-dom";
import HomePage from "./HomePage";
import CartPage from "./CartPage";
import UserPage from "./UserPage";

const UserPage = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default UserPage;
