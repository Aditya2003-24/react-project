import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Example = () => {
  let [frmdata, setFrmdata] = useState({
    username: "",
    email: "",
    password: "",
  });

  let Loginnav = useNavigate();

  // function inpchange(e){
  //     console.log(e.target.value);
  //     setFrmdata(e.target.value)
  // }

  function inpchange(e) {
    const { name, value } = e.target;
    setFrmdata({ ...frmdata, [name]: value });
  }

  function finalsubmit(e) {
    e.preventDefault();
    console.log(frmdata);
    localStorage.setItem("userdaata", JSON.stringify(frmdata));
    Loginnav("/login");
  }

  return (
    <div className="input">
      {/* {frmdata}
      <input type="text" placeholder="enter your name" onChange={inpchange} /> */}
      <div className="dec">
        <form action="" onSubmit={finalsubmit} className="fom">
          <label htmlFor="" className="lab">Username</label>
          <input type="text" name="username" onChange={inpchange} className="inp"/>
          <br />

          <label htmlFor="" className="ema">Email</label>
          <input type="text" name="email" onChange={inpchange} className="put" />
          <br />

          <label htmlFor="" className="pass">Password</label>
          <input type="text" name="password" onChange={inpchange} className="word" />
          <br />

          <input type="submit" className="sub"/>
        </form>
      </div>
    </div>
  );
};

export default Example;
