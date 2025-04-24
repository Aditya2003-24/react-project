import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PiUserCircleCheckThin } from "react-icons/pi";
import NavScrollExample from "./Navbar";
import Footer from "./Footer";
import { AuthContext } from "./AuthContext";


const Login = () => {
  const [frmdata, setFrmdata] = useState({
    username: "",
    password: "",
  });
  const [signdata, setSign] = useState(null);

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const inpchange = (e) => {
    const { name, value } = e.target;
    setFrmdata({ ...frmdata, [name]: value });
  };

  const loginfinal = (e) => {
    e.preventDefault();
    if (
      !signdata ||
      signdata.username !== frmdata.username ||
      signdata.password !== frmdata.password
    ) {
      alert("User not found");
    } else {
      alert("Login successful");
      login();
      navigate("/");
    }
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userdata"));
    setSign(storedData);
  }, []);

  return (
    <div style={{ backgroundColor: "#dadada" }}>
      <NavScrollExample />
      <div className="main">
        <div className="fo">
          <form onSubmit={loginfinal} className="orm">
            <PiUserCircleCheckThin
              style={{ fontSize: "144px", marginLeft: "62px" }}
            />

            <label className="use">Username</label>
            <input
              type="text"
              name="username"
              onChange={inpchange}
              className="rnam"
              autoFocus
              required
            />

            <label className="leb">Password</label>
            <input
              type="password"
              name="password"
              onChange={inpchange}
              className="egna"
              required
            />

            <input type="submit" className="tim" value="Login" />
          </form>
        </div>
        <div className="come">
          <h1 className="wel">Welcome.</h1>
          <p className="per">
            Lorem ipsum dolor sit amet, consectetur <br />
            adipisicing elit. Dignissimos, veniam?
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
