import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavScrollExample from "./Navbar";
import Footer from "./Footer";
import { CiUser } from "react-icons/ci";

const Signup = () => {
  const [frmdata, setFrmdata] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const inpchange = (e) => {
    const { name, value } = e.target;
    setFrmdata({ ...frmdata, [name]: value });
  };

  const finalsubmit = (e) => {
    e.preventDefault();
    console.log(frmdata);
    localStorage.setItem("userdata", JSON.stringify(frmdata));
    navigate("/login");
  };

  return (
    <div style={{ backgroundColor: "#dadada" }}>
      <NavScrollExample />
      <div className="sig">
        <div className="our">
          <CiUser
            style={{
              fontSize: "100px",
              marginLeft: "236px",
              marginTop: "20px",
              color: "#7f7fb1",
            }}
          />
          <h1 className="hed">
            Welcome to our <br /> signup page
          </h1>
          <p className="pero">
            Lorem ipsum dolor sit, amet consectetur <br />
            adipisicing elit. Repellat, maxime?
          </p>
        </div>

        <div className="dec">
          <form onSubmit={finalsubmit} className="fom">
            <label className="lab">Username</label>
            <input
              type="text"
              name="username"
              onChange={inpchange}
              className="inp"
              autoFocus
              required
            />
            <br />

            <label className="ema">Email</label>
            <input
              type="email"
              name="email"
              onChange={inpchange}
              className="put"
              required
            />
            <br />

            <label className="pass">Password</label>
            <input
              type="password"
              name="password"
              onChange={inpchange}
              className="word"
              required
            />
            <br />

            <input type="submit" className="sub" value="Sign Up" />
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
