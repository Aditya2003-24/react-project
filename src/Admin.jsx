import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavScrollExample from "./Navbar";
import Footer from "./Footer";
import { PiUserCircleCheckThin } from "react-icons/pi";

const AdminLogin = () => {
  const [adminData, setAdminData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminData({ ...adminData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const correctUsername = "admin";
    const correctPassword = "admin123";

    if (
      adminData.username === correctUsername &&
      adminData.password === correctPassword
    ) {
      alert("Admin login successful!");
      navigate("/adm"); // Redirect to homepage or admin dashboard
    } else {
      alert("Invalid admin credentials!");
    }
  };

  return (
    <div style={{ backgroundColor: "#dadada" }}>
      <NavScrollExample />

      <div className="main">
        <div className="fo">
          <form onSubmit={handleSubmit} className="orm">
            <PiUserCircleCheckThin
              style={{ fontSize: "144px", marginLeft: "62px" }}
            />

            <label className="use">Admin Username</label>
            <input
              type="text"
              name="username"
              value={adminData.username}
              onChange={handleChange}
              className="rnam"
              autoFocus
              required
            />

            <label className="leb">Admin Password</label>
            <input
              type="password"
              name="password"
              value={adminData.password}
              onChange={handleChange}
              className="egna"
              required
            />

            <input type="submit" className="tim" value="Login as Admin" />
          </form>
        </div>

        <div
          className="come"
          style={{ backgroundImage: "url('src/IMAGES/car-171422_1280.jpg')" }}
        >
          <h1 className="wel">Admin Panel</h1>
          <p className="per">
            Please enter your credentials <br /> to access the admin portal.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AdminLogin;
